import {graphql, useFragment, useRefetchableFragment,} from "react-relay";

graphql`
    query TestQuery($id: ID!) @raw_response_type {
        node(id: $id) {
            ...Test
        }
    }
`

graphql`
    fragment Test on TestInterface {
        id
        __typename
        ... on TypeWithFieldB {
            __typename
            fieldA
            fieldB
        }
        ... on TypeWithFieldC {
            __typename
            fieldA
            fieldC
        }
    }
`
