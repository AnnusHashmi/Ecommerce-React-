import {createSelector} from 'reselect';

const selectDirectoy = state => state.directory;

export const selectDirectorySection = createSelector(
    [selectDirectoy], 
    directory  => directory.sections
)