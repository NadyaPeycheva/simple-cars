import { useState,createContext,useEffect } from "react";

const UserContext=createContext({
    user:'',
    logIn:()=>{}
});

export const UserContextProvider=(props)=>{
    const [hasUser,setHasUser]=useState('');

    useEffect(()=>{
        const browserUser=localStorage.getItem('currentUser');
        if(browserUser){
            setHasUser(browserUser)
        }
    },[]);

    const logIn=(data)=>{
        setHasUser(data);
        localStorage.setItem('currentUser',data);
    }

    const contextValue={
        user:hasUser,
        logIn:logIn
    };

    return (
        <UserContext.Provider value={contextValue}>{props.children}</UserContext.Provider>
    )
}
export default UserContext;