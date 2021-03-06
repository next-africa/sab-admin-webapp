import React, { Component } from "react";
import "../node_modules/spectre.css/dist/spectre.min.css";
import "./App.css";
import { Grid } from "react-bootstrap";
import UniversityForm from "./containers/UniversityForm";
import NavBarItem from "./components/NavBarItem";
import ContentHeader from "./containers/ContentHeader";
import SidebarContent from "./containers/SidebarContent";
import NewUniversity from "./Pages/NewUniversity";
import ViewUniversity from "./Pages/ViewUniversity";
import Universities from "./containers/Universities";
import Sidebar from "react-sidebar";
import { createFragmentContainer, graphql } from "react-relay";
import Countries from "./containers/Countries";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      docked: true,
      open: false,
      transitions: true,
      touch: true,
      shadow: true,
      pullRight: false,
      touchHandleWidth: 20,
      dragToggleDistance: 30,
      currentPage: "universities",
      currentPageProps: null,
      currentPageId: 0,
      universitiesList: []
    };
    this.currentPage = this.currentPage.bind(this);
    this.setCurrentPage = this.setCurrentPage.bind(this);
    this.onSetDocked = this.onSetDocked.bind(this);
    this.toggleOpen = this.toggleOpen.bind(this);
    this.toggleDocked = this.toggleDocked.bind(this);
    this.generateItem = this.generateItem.bind(this);
  }
  setCurrentPage(event, { page, props, id }) {
    if (event) event.preventDefault();
    this.setState({
      currentPage: page,
      currentPageProps: props,
      currentPageId: id
    });
  }
  currentPage() {
    return {
      universities: (
        <Universities universitiesList={this.state.universitiesList} />
      ),
      universityForm: (
        <UniversityForm universitiesList={this.state.universitiesList} />
      ),
      newUniversity: (
        <NewUniversity universitiesList={this.state.universitiesList} />
      ),
      viewUniversity: (
        <ViewUniversity
          universitiesList={this.state.universitiesList}
          currentPageId={this.state.currentPageId}
        />
      )
    }[this.state.currentPage];
  }
  componentWillMount() {
    const mql = window.matchMedia(`(min-width: 800px)`);
    mql.addListener(this.mediaQueryChanged);
    this.setState({ mql: mql, docked: mql.matches });
  }
  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged);
  }
  onSetOpen(open) {
    this.setState({ open: open });
  }
  onSetDocked(docked) {
    this.setState({ docked: !docked });
  }
  mediaQueryChanged() {
    this.setState({ docked: this.state.mql.matches });
  }
  toggleOpen(e) {
    e.preventDefault();
    this.setState({ open: !this.state.open });
  }
  toggleDocked(e) {
    e.preventDefault();
    this.setState({ docked: !this.state.docked });
  }
  generateItem(item) {
    return (
      <NavBarItem
        controlFunc={this.toggleDocked}
        style={item.style}
        key={item.key}
        text={item.text}
        url={item.url}
      />
    );
  }
  generateUserInfos(infos) {
    return (
      <NavBarItem
        style={infos.style}
        key={infos.key}
        text={infos.text}
        url={infos.url}
      />
    );
  }

  render() {
    console.log(this.props.data);
    const data = [
      {
        key: "3",
        text: "",
        url: "#",
        style: "glyphicon glyphicon-align-justify"
      }
    ];
    const userInfos = [
      {
        key: "Admin",
        text: "Admin",
        url: "#",
        style: "glyphicon glyphicon-user"
      },
      {
        key: "login",
        text: "Login",
        url: "#",
        style: "glyphicon glyphicon-log-in"
      }
    ];
    var items = data.map(this.generateItem);
    var user = userInfos.map(this.generateUserInfos);

    const sidebar = <SidebarContent setCurrentPage={this.setCurrentPage} />;

    const contentHeader = (
      <div className="sidebar-toggle">
        <ul className="nav navbar-nav navbar-left">
          {items}
        </ul>
        <ul className="nav navbar-nav navbar-right">

          {user}
        </ul>
        <ul className="nav navbar-nav navbar-right" />

      </div>
    );

    const sidebarProps = {
      sidebar: sidebar,
      docked: this.state.docked,
      open: this.state.open,
      onSetOpen: this.onSetOpen
    };
    return (
      <Sidebar {...sidebarProps}>
        <ContentHeader title={contentHeader}>
          <div className="App">
            <div className="App-header" />
            <div className="container">
              <div className="columns">
                <div className="col-md-9 centered">
                  <Grid>
                    {React.cloneElement(this.currentPage(), {
                      setCurrentPage: this.setCurrentPage,
                      currentPage: this.state.currentPage,
                      ...this.state.currentPageProps
                    })}
                  </Grid>

                </div>
              </div>
              <footer>
                <div className="copyRight">
                  <span className="glyphicon glyphicon-copyright-mark" />
                  <span> {new Date().getFullYear()}</span>
                  -Next Africa Inc.  all rights reserved
                </div>
              </footer>
            </div>
          </div>
        </ContentHeader>
      </Sidebar>
    );
  }
}
//App.propTypes = {
//children: React.propTypes.node,
//}

export default createFragmentContainer(App, {
  item: graphql`
      fragment App_item on Country {
        properties {
          code
          name
        }
      }
    `
});
