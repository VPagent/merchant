import { InitialState } from "../types/types"

export const addDisabledToPrev = (
    email:InitialState['email'], 
    shopResponse:InitialState['shopResponse'], 
    step:InitialState['step']):boolean => {
    if(step === 2 && email){
        return false
    }
    if(step === 3 && shopResponse){
        return false
    }
    return true
}

export const addDisabledToNext = (
    email:InitialState['email'], 
    shopResponse:InitialState['shopResponse'], 
    step:InitialState['step']):boolean => {
    if(step === 1 && email){
        return false
    }
    if(step === 2 && shopResponse){
        return false
    }
    return true
}