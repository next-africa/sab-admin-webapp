/**
 * Created by pdiouf on 2017-08-10.
 */
import {graphql} from 'react-relay';
export default  graphql`
    query countriesQuery{
        countries{
            id
            properties{
                name
                code
            } 
        }
    }
    `
