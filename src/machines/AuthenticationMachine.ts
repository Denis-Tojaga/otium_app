import { assign, createMachine } from "xstate";

const updateAuthenticationData = (context: any, event: any) => event.data;
export const AuthenticationMachine = createMachine<any>({
    id: 'authenticationMachine',
    initial: 'authenticationMachine',
    context: {
        data: null
    },
    states: {
        authenticationMachine: {
            on: {
                authenticate: {
                    actions: assign({ data: updateAuthenticationData })
                },
                update: {
                    actions: assign({ data: updateAuthenticationData })
                },
                logout: {
                    actions: assign({ data: updateAuthenticationData })
                }
            }
        },
    }
});