import { useState,createContext,useEffect } from "react";

const UserContext=createContext({
    user:'',
    logIn:()=>{}
});

export const UserContextProvider=(props)=>{
    const [hasUser,setHasUser]=useState('');

    useEffect(()=>{
        const browserUser=JSON.parse(localStorage.getItem('user'));
        if(browserUser){
            setHasUser(browserUser)
        }
    },[]);

    const logIn=(token,userData)=>{
        const user={token,id:userData.id,firstName:userData.firstName,lastName:userData.lastName,username:userData.username,password:userData.password}
        setHasUser(user);
        localStorage.setItem('user',JSON.stringify(user));
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



