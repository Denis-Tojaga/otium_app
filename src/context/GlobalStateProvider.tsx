import { createContext, useEffect } from 'react';
import { useActor, useInterpret } from '@xstate/react';
import { ActorRefFrom } from 'xstate';
import { AuthenticationMachine } from '../machines/AuthenticationMachine';
import { LocationMachine } from '../machines/LocationMachine';

interface GlobalStateContextType {
    locationService: ActorRefFrom<typeof LocationMachine>;
    authenticationService: ActorRefFrom<typeof AuthenticationMachine>;
}


export const GlobalStateContext = createContext({} as GlobalStateContextType);

export const GlobalStateProvider = (props: any) => {

    const globalStateServices: GlobalStateContextType = {
        locationService: useInterpret(LocationMachine),
        authenticationService: useInterpret(AuthenticationMachine),
    };

    return (
        <GlobalStateContext.Provider value={globalStateServices}>
            {props.children}
        </GlobalStateContext.Provider>
    );
};
