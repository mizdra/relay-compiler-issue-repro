/**
 * @generated SignedSource<<9c2b31789e650b57301b843a377ae979>>
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
    readonly " $fragmentSpreads": FragmentRefs<"Test">;
  };
};
export type TestQuery$rawResponse = {
  readonly node: {
    readonly __typename: "TypeWithFieldB";
    readonly __isTestInterface: "TypeWithFieldB";
    readonly fieldA: string;
    readonly fieldB: string;
    readonly id: string;
  } | {
    readonly __typename: "TypeWithFieldC";
    readonly __isTestInterface: "TypeWithFieldC";
    readonly fieldA: string;
    readonly fieldC: string;
    readonly id: string;
  } | {
    readonly __typename: string;
    readonly __isTestInterface: string;
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
            "name": "Test"
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
    "cacheID": "1e1cbe7b2373fcf45f04d328a5733afc",
    "id": null,
    "metadata": {},
    "name": "TestQuery",
    "operationKind": "query",
    "text": "query TestQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...Test\n    id\n  }\n}\n\nfragment Test on TestInterface {\n  __isTestInterface: __typename\n  id\n  __typename\n  ... on TypeWithFieldB {\n    __typename\n    fieldA\n    fieldB\n  }\n  ... on TypeWithFieldC {\n    __typename\n    fieldA\n    fieldC\n  }\n}\n"
  }
};
})();

(node as any).hash = "0c1e6a7938eb702bbf7c044aa3bead56";

export default node;
