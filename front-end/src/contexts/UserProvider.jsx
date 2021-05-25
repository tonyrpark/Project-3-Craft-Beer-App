// UserProvider.jsx is new to react, it acts as a mini-store and is similar to Redux; a place where we can host all the data from our application
import React, { createContext, useState, useEffect } from "react"; 
const context = createContext( defaultValue: null); 

const UserProvider = ({ children }) => {
    const [user, setUser] = useState( initialState: {}); 

    useEffect( effect: () => {
        fetch( input: "/user")
            .then( onfulfilled: res => res.json())
            .then( onfulfilled: res => setUser(res))
            .catch( onrejected: err=> {
                console.log(err); 
            }); 
    }, deps: []); 

    return(
        <context.Provider value={user}>
            {children}
        </context.Provider>
    );
}; 

UserProvider.context = context; 

export default UserProvider; 