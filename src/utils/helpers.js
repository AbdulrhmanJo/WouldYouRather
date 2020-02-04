export function convertTime(timestamp){
    const date = new Date(timestamp)
    // const time = date.toLocaleTimeString('en-US')
    return date.toUTCString().substr(4,13)
}