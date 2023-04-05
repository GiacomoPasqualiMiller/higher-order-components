import React, { useState, useEffect, Component } from "react";
import axios from "axios";

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export const withEditableResource = (Component, resourcePath, resourceName) => {
  return (props) => {
    const [originalData, setOriginalData] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
      (async () => {
        const response = await axios.get(resourcePath);
        setOriginalData(response.data);
        setData(response.data);
      })(); //le parentesi rotonde esattamente dopo la funzione asincrona sono per eseguirla subito
    }, []);

    const onChange = (changes) => {
      console.log(changes);
      setData({ ...data, ...changes });
    };
    const onDelete = () => {
      setData({ ...data, name: "", age: 0, hairColor: "" });
    };

    const onSave = async () => {
      console.log(data);
      const response = await axios.post(resourcePath, { [resourceName]: data });
      setOriginalData(response.data);
      setData(response.data);
    };
    const onReset = async () => {
      setData(originalData);
    };

    const resourceProps = {
      [resourceName]: data,
      [`onChange${capitalize(resourceName)}`]: onChange,
      [`onSave${capitalize(resourceName)}`]: onSave,
      [`onReset${capitalize(resourceName)}`]: onReset,
    };

    return <Component {...props} {...resourceProps} />;
  };
};

//withEditableResource(withEditableResource(HomePage, 'products'), 'users')
