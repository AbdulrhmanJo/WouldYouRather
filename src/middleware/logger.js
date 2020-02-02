const logger = (store) => (next) => (action) => {
    console.group(action.type)
    console.log('the action: ', action)
    const value = next(action)
    console.log('state after dispatch: ', store.getState());
    console.groupEnd()
    return value
}

export default logger