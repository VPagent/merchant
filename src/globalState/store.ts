
import { createGlobalState } from 'react-hooks-global-state';
import { InitialState } from '../types/types';


const initialState:InitialState = {
    name: '',
    email: '',
    password: '',
    shopResponse: null,
    googleToken: '',
    welcome: null,
    step: 1,
    isLogIn: false
} 

export const {useGlobalState} = createGlobalState(initialState)

