import React, { createContext, useState } from "react";

export const Context = createContext();

export const AppContext = (props) => {
    const [imageSearch, setImageSearch] = useState(false);

    return (
        <Context.Provider
            value={{
                imageSearch,
                setImageSearch,
            }}
        >
            {props.children}
        </Context.Provider>
    );
};
