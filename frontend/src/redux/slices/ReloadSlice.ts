import {
    createSlice
    } from '@reduxjs/toolkit';

interface ReloadState {
    reload: boolean;
}

const initialState: ReloadState = {
    reload: false,
};

const reloadSlice = createSlice({
    name: 'reload',
    initialState,
    reducers: {
        pageReload: (state) => {
            state.reload = !state.reload;
        },
    },
});

export const { pageReload } = reloadSlice.actions;

export default reloadSlice.reducer;
