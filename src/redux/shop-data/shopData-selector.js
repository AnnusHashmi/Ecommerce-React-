import {createSelector} from 'reselect';

const selectShopData = state => state.shopData;

const selectShopDataFunction = createSelector(
    [selectShopData],
    shopData => shopData.collections

)

export default selectShopDataFunction;