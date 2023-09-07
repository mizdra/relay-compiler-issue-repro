/**
 * @generated SignedSource<<00b380d34f0a5a82684a74882da12168>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Test$data = {
  readonly __typename: string;
  readonly fieldA?: string;
  readonly fieldB?: string;
  readonly fieldC?: string;
  readonly id: string;
  readonly " $fragmentType": "Test";
};
export type Test$key = {
  readonly " $data"?: Test$data;
  readonly " $fragmentSpreads": FragmentRefs<"Test">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "fieldA",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Test",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "__typename",
      "storageKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        (v0/*: any*/),
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
};
})();

(node as any).hash = "87f556b2dc475025c852b1a02298acb8";

export default node;
