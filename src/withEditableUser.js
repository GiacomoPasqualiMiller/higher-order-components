import React, { useState, useEffect, Component } from "react";
import axios from "axios";

export const withEditableUser = (Component, userId) => {
  return (props) => {
    const [originalUser, setOriginalUser] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
      (async () => {
        const response = await axios.get(`/users/${userId}`);
        setOriginalUser(response.data);
        setUser(response.data);
      })(); //le parentesi rotonde esattamente dopo la funzione asincrona sono per eseguirla subito
    }, []);

    const onChangeUser = (changes) => {
      console.log(changes);
      setUser({ ...user, ...changes });
    };
    const onDeleteUser = () => {
      setUser({ ...user, name: "", age: 0, hairColor: "" });
    };

    const onSaveUser = async () => {
      console.log(user);
      const response = await axios.post(`/users/${userId}`, { user });
      setOriginalUser(response.data);
      setUser(response.data);
    };
    const onResetUser = async () => {
      setUser(originalUser);
    };

    return (
      <Component
        {...props}
        user={user}
        onChangeUser={onChangeUser}
        onSaveUser={onSaveUser}
        onResetUser={onResetUser}
        onDeleteUser={onDeleteUser}
      />
    );
  };
};
