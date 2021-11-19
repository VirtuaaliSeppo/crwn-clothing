import { createSelector } from "reselect";
import { memoize } from "lodash";

const collections = (state) => state.shop.collections;

export const selectCollectionsForPreview = createSelector(
  [collections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    [collections],
    (collections) => collections[collectionUrlParam]
  )
);
