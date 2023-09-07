/**
 * @generated SignedSource<<25f9e480fae88ccb8cb638029967801a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TestQuery$variables = {
  id: string;
};
export type TestQuery$data = {
  readonly node: {
    readonly " $fragmentSpreads": FragmentRefs<"TestQuery_node">;
  };
};
export type TestQuery$rawResponse = {
  readonly node: {
    readonly __typename: "Author";
    readonly __isNode: "Author";
    readonly id: string;
    readonly name: string;
  } | {
    readonly __typename: "Book";
    readonly __isNode: "Book";
    readonly id: string;
    readonly title: string;
  } | {
    readonly __typename: string;
    readonly __isNode: string;
    readonly id: string;
  };
};
export type TestQuery = {
  rawResponse: TestQuery$rawResponse;
  response: TestQuery$data;
  variables: TestQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TestQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "TestQuery_node"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TestQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          {
            "kind": "TypeDiscriminator",
            "abstractKey": "__isNode"
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "title",
                "storageKey": null
              }
            ],
            "type": "Book",
            "abstractKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              }
            ],
            "type": "Author",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "afc6c2ebd788245c4482af0194879a40",
    "id": null,
    "metadata": {},
    "name": "TestQuery",
    "operationKind": "query",
    "text": "query TestQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...TestQuery_node\n    id\n  }\n}\n\nfragment TestQuery_node on Node {\n  __isNode: __typename\n  id\n  __typename\n  ... on Book {\n    title\n  }\n  ... on Author {\n    name\n  }\n}\n"
  }
};
})();

(node as any).hash = "39891541b60bd120f46aa88ac9909d31";

export default node;
