import {graphql} from 'react-relay';

export default graphql`
query countryQuery($code: String!) { 
  country(code: $code) {
      id
      properties{
        code
        name
      }
  }
}
`;
