import { configureStore } from '@reduxjs/toolkit';
import gistSlice from './slices/gistSlice';

const store = configureStore({
    reducer: {
        gist: gistSlice
    }
});

export default store;