import {graphql, useFragment, useRefetchableFragment,} from "react-relay";


// Example 1 (working fine)
useFragment(graphql`fragment Test on TestInterface {
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

}`, null)

// Example 2 (type is generally fine, but __typename should probably be of type "string" instead of type "TypeWithFieldB")
useFragment(graphql`fragment Test2 on TestInterface {
    fieldA

    ... on TypeWithFieldB {
        __typename
        fieldB
    }
    ... on TypeWithFieldC {
        __typename
        fieldC
    }

}`, null)

// Example 3 (type is generally fine, but __typename should probably be of type "string" instead of type "TypeWithFieldB")
// NOTE: Querry structure is the same as in Example 1, but with @refetchable
useRefetchableFragment(graphql`fragment Test3 on TestInterface @refetchable(queryName: "Test3RefetchQuery")  {
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

}`, null)

