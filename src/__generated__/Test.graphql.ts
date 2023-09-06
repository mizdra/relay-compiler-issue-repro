/**
 * @generated SignedSource<<be98f87859ea9cf98028693fb6a106f5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Test$data = {
  readonly __typename: "TypeWithFieldB";
  readonly fieldA: string;
  readonly fieldB: string;
  readonly " $fragmentType": "Test";
} | {
  readonly __typename: "TypeWithFieldC";
  readonly fieldA: string;
  readonly fieldC: string;
  readonly " $fragmentType": "Test";
} | {
  // This will never be '%other', but we need some
  // value in case none of the concrete values match.
  readonly __typename: "%other";
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
  "metadata": null,
  "name": "Test",
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
    }
  ],
  "type": "TestInterface",
  "abstractKey": "__isTestInterface"
};
})();

(node as any).hash = "b31a2114a9dc21d5fc3667ef313bb202";

export default node;
