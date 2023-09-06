/**
 * @generated SignedSource<<9d42b3ae4182af339d593b1334bb9dbc>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Test2$data = {
  readonly __typename: "TypeWithFieldB";
  readonly fieldA: string;
  readonly fieldB?: string;
  readonly fieldC?: string;
  readonly " $fragmentType": "Test2";
};
export type Test2$key = {
  readonly " $data"?: Test2$data;
  readonly " $fragmentSpreads": FragmentRefs<"Test2">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Test2",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "fieldA",
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

(node as any).hash = "45877f37f148f64f11a711bc1814cc83";

export default node;
