import * as React from 'react';

const useLogged = () => {
    const [isLogged, setIsLogged] = React.useState<boolean>(false);

    return {
        isLogged,
        setIsLogged
    }
};

export default useLogged;