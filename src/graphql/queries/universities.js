/**
 * Created by pdiouf on 2017-06-04.
 */
import {graphql} from 'react-relay'

export default graphql `
    query universitiesQuery($countryCode: String!){
        universities(countryCode: $countryCode){
            id
            properties {
              id
              name
              address {
                line
                city
                state
                postalCode
              }
              languages
              tuition{
                link
                amount
              }
              programListLink
            }
          }

    }

`
