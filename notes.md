### Reducers

- Specify how the state changes in response to actions sent to store
- Only describe what happened, not how state changes
- Update state according to the action's details

### Actions

- Payloads of information that send data to the store
- Only source of info for the store

### Store

- Holds state
- Only 1 in Redux
- Allows state to be updated

### Data Flow

- Unidirectional data flow

1. Call `store.dispatch(action)`
