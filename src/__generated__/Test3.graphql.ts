/**
 * @generated SignedSource<<d004422a040af047ef566e9ae370714f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Test3$data = {
  readonly __typename: "TypeWithFieldB";
  readonly fieldA?: string;
  readonly fieldB?: string;
  readonly fieldC?: string;
  readonly id: string;
  readonly " $fragmentType": "Test3";
};
export type Test3$key = {
  readonly " $data"?: Test3$data;
  readonly " $fragmentSpreads": FragmentRefs<"Test3">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "fieldA",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [
        "node"
      ],
      "operation": require('./Test3RefetchQuery.graphql'),
      "identifierField": "id"
    }
  },
  "name": "Test3",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": [
        (v0/*: any*/),
        (v1/*: any*/),
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
        (v0/*: any*/),
        (v1/*: any*/),
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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "TestInterface",
  "abstractKey": "__isTestInterface"
};
})();

(node as any).hash = "df33d38c94f7e577822706c0924c3da6";

export default node;
