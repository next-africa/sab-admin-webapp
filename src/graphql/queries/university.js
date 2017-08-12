/**
 * Created by pdiouf on 2017-06-04.
 */
import {graphql} from 'react-relay'

export default graphql `
    query universityQuery($countryCode: String!,$universityId: String!){
        university(countryCode: $countryCode,universityId:$universityId){
            id
            properties{
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
