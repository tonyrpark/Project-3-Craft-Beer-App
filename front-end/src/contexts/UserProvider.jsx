// UserProvider.jsx is new to react, it acts as a mini-store and is similar to Redux; a place where we can host all the data from our application
import React, { createContext, useState, useEffect } from "react";
const context = createContext(null);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
      fetch("/user")
          .then(res => res.json())
          .then(res => setUser(res))
          .catch(err => {
              console.log(err);
          });
  }, []);

  return (
      <context.Provider value={user}>
          {children}
      </context.Provider>
  );
};

UserProvider.context = context;

export default UserProvider;