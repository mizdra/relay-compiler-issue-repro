/**
 * @generated SignedSource<<0cc46d0d72ff25ce267d784d851bb04a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Test3RefetchQuery$variables = {
  id: string;
};
export type Test3RefetchQuery$data = {
  readonly node: {
    readonly " $fragmentSpreads": FragmentRefs<"Test3">;
  };
};
export type Test3RefetchQuery = {
  response: Test3RefetchQuery$data;
  variables: Test3RefetchQuery$variables;
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
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "fieldA",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "Test3RefetchQuery",
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
            "name": "Test3"
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
    "name": "Test3RefetchQuery",
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
                "kind": "InlineFragment",
                "selections": [
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "fieldB",
                    "storageKey": null
                  }
                ],
                "type": "TypeWithFieldB",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "fieldC",
                    "storageKey": null
                  }
                ],
                "type": "TypeWithFieldC",
                "abstractKey": null
              }
            ],
            "type": "TestInterface",
            "abstractKey": "__isTestInterface"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "7d58444b89b9238c8139192a8595df00",
    "id": null,
    "metadata": {},
    "name": "Test3RefetchQuery",
    "operationKind": "query",
    "text": "query Test3RefetchQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...Test3\n    id\n  }\n}\n\nfragment Test3 on TestInterface {\n  __isTestInterface: __typename\n  ... on TypeWithFieldB {\n    __typename\n    fieldA\n    fieldB\n  }\n  ... on TypeWithFieldC {\n    __typename\n    fieldA\n    fieldC\n  }\n  id\n}\n"
  }
};
})();

(node as any).hash = "df33d38c94f7e577822706c0924c3da6";

export default node;
