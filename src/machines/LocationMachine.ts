import { assign, createMachine } from "xstate";

const updateLocationMachine = (context: any, event: any) => event.data;
export const LocationMachine = createMachine<any>({
    id: 'locationMachine',
    initial: 'locationMachine',
    context: {
        data: null
    },
    states: {
        locationMachine: {
            on: {
                load: {
                    actions: assign({ data: updateLocationMachine })
                },
                update: {
                    actions: assign({ data: updateLocationMachine })
                },
                clear: {
                    actions: assign({ data: updateLocationMachine })
                }
            }
        },
    }
});