const exec = require('child_process').exec;
const fs = require('fs-extra');

const HOOKS_SOURCE = 'hooks/pre-commit';
const HOOKS_DESTINATION = '.git/hooks/pre-commit';

const installWatchMan = () => {
    console.log('Installing watchman');
    exec('brew update && brew install watchman', (error, stdout, stderr) => {
        if (error) {
            console.error(`The installation of watchman failed because of error: ${error}`);
            console.error(stderr);
        } else {
            console.log(stdout);
        }
    });
};

const copyPrecommitHook = () => {
    fs.copy(HOOKS_SOURCE, HOOKS_DESTINATION)
        .then(() => console.log('Pre-commit hook installed'))
        .catch((err) => console.log(`The pre-commit hook installation failed because of error: ${err}`));
};

const backUpPrecommitHookBeforeCopy = () => {
    console.warn('This repository already contains a pre-commit hook. It will be move to pre-commit.old');
    fs.copy(HOOKS_DESTINATION, `${HOOKS_DESTINATION}.old`)
        .then(() => copyPrecommitHook())
        .catch((err) => console.error(`Failed to back up existing pre-commit hook because of error: ${err}`));
};

const installPrecommitHook = () => {
    console.log(`Installing the pre-commit hook from ${HOOKS_SOURCE}`);
    fs.pathExists(HOOKS_DESTINATION)
        .then(exists => {
            if(exists) {
                backUpPrecommitHookBeforeCopy();
            } else {
                copyPrecommitHook();
            }
        });
};

installWatchMan();
installPrecommitHook();
