import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPublicGists, getGistForUser } from '../../services/gistService';

export const fetchGists = createAsyncThunk("gist/fetchGists", async() => {
    try{
        const data = await getPublicGists();
        return data;
    }
    catch(error){
        return error;
    }
})

export const searchGists = createAsyncThunk("gist/searchGists", async(username) => {
    try{
        const data = await getGistForUser(username);
        return data;
    }
    catch(error){
        return error;
    }
})