import { createSlice } from '@reduxjs/toolkit';
import { fetchGists, searchGists } from '../actions/gists';

const initialState = {
    gists: [],
    loading: false,
    usernameToSearch: ''
}

const gistSlice = createSlice({
    name: 'gist',
    initialState,
    reducers: {
        setGists: (state, action) => {
            state.gists = action.payload;
        },
        setSearchValue: (state, action) => {
            state.usernameToSearch = action.payload;
        },
        setLoadingValue: (state, action) => {
            state.loading = false;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchGists.pending, (state) => {
            state.loading = true
        });
        builder.addCase(fetchGists.fulfilled, (state, action) => {
            state.loading = false;
            state.gists = action.payload.data
        });
        builder.addCase(fetchGists.rejected, (state) => {
            state.loading = false;
        })
        builder.addCase(searchGists.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(searchGists.fulfilled, (state, action) => {
            state.gists = action.payload.data;
            state.loading = false;
        });
        builder.addCase(searchGists.rejected, (state) => {
            state.loading = false;
        });
    }
});

export const { setGists, setSearchValue, setLoadingValue } = gistSlice.actions;

export default gistSlice.reducer;