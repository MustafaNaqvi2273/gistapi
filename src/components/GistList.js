import React, { useEffect, useState } from 'react';
import { fetchGists, searchGists } from '../store/actions/gists';
import { useSelector, useDispatch } from 'react-redux';
import Gist from './Gist';
import { Container, Message } from './styles';
import Header from './Header';
import { CircularProgress, Backdrop } from '@mui/material';
import { setLoadingValue } from '../store/slices/gistSlice';
import useDebounce from './hooks/useDebounce';

const GistList = () => {
    const dispatch = useDispatch();
    const gists = useSelector((state) => state.gist.gists);
    const usernameToSearch = useSelector((state) => state.gist.usernameToSearch);
    const loading = useSelector((state) => state.gist.loading);

    const debouncedSearchValue = useDebounce(usernameToSearch, 2000)

    useEffect(() => {
        /** Calling the Fetch Action */
        dispatch(fetchGists())
    },[])

    useEffect(() => {
        if(!loading){
            if(debouncedSearchValue){
                dispatch(searchGists(debouncedSearchValue))
            }
            if(debouncedSearchValue === ''){
                dispatch(fetchGists())
            }
        }
    }, [debouncedSearchValue, dispatch])

    const handleClose = () => {
        dispatch(setLoadingValue())
    }

    return (
        <>
            <Header />
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}
                onClick={handleClose}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <Container>
                {(!gists?.length && !loading) && <Message>No Gists Found!</Message>}
                {(gists?.length > 0 && !loading) ? gists.map((gist) => (
                    <Gist gist={gist} />
                ))
                :
                <></>
                }
            </Container>
        </>
    )
}

export default GistList;
