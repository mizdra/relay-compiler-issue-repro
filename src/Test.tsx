import {graphql} from "react-relay";
import {TestQuery$rawResponse} from './__generated__/TestQuery.graphql';

graphql`
  query TestQuery($id: ID!) @raw_response_type {
    node(id: $id) {
      ...TestQuery_node
    }
  }
`

graphql`
  fragment TestQuery_node on Node {
    id
    __typename
    ... on Book {
      title
    }
    ... on Author {
      name
    }
  }
`

// ok
const mockResponse1: TestQuery$rawResponse = {
  node: {
    __typename: 'Book',
    __isNode: 'Book',
    id: 'Book-1',
    title: 'Yuyushiki',
  },
}

// ok
const mockResponse2: TestQuery$rawResponse = {
  node: {
    __typename: 'Author',
    __isNode: 'Author',
    id: 'Author-1',
    name: 'Bob',
  },
}

// NOT OK
const mockResponse3: TestQuery$rawResponse = {
  node: {
    __typename: 'Book',
    __isNode: 'Book',
    id: 'Book-1',
    // title: 'Yuyushiki', // missing
  },
}
