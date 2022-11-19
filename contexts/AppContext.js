import React, { createContext, useEffect, useMemo, useReducer } from "react";
import { LOCAL_STORAGE_ITEMS } from "../constants";

const reducer = (prevState, action) => {
    switch(action.type) {
        case 'SET_LOGIN_DETAILS':
            return { ...prevState, ...action.data }
        case 'INITIALISE': 
            return {...prevState, ...action.data}
    }
    return prevState;
}

const initialState = {
    accessToken: '',
    loading: true,
    login: false,
    refreshToken: '',
    setLoginData: () => {}
}

export const AppContext = createContext(initialState)



const AppContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const setLoginData = (data) => {
        localStorage.setItem(LOCAL_STORAGE_ITEMS.AT, data.accessToken);
        localStorage.setItem(LOCAL_STORAGE_ITEMS.RT, data.refreshToken);
        dispatch({
            type: 'SET_LOGIN_DETAILS',
            data: {
                accessToken: data.accessToken,
                refreshToken: data.refreshToken,
            }
        })
    }
    const initialiseState = (data) => {
        dispatch({
            type: 'INITIALISE',
            data: data
        })
    }
    const value = useMemo(() => {
        // @TODO: validate access token and refresh token
        return {
            accessToken: state.accessToken,
            refreshToken: state.refreshToken,
            loading: false,
            login: state.accessToken && state.refreshToken,
            setLoginData: setLoginData
        }
    }, [state.accessToken, state.refreshToken]);
    useEffect(() => {
        initialiseState({
            accessToken: localStorage.getItem(LOCAL_STORAGE_ITEMS.AT),
            refreshToken: localStorage.getItem(LOCAL_STORAGE_ITEMS.RT),
            loading: false
        })
    },[])
    
    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
}

export default AppContextProvider;