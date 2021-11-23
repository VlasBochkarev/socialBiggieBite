const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    dialogs: [
        { id: 1, name: 'Vlas Bochkarev' },
        { id: 2, name: 'Gleb Cherkasky' },
        { id: 3, name: 'Evgeniy Chernyatin' },
        { id: 4, name: 'Vitaliy Kurat' },
        { id: 5, name: 'Alex Nikitenko' },],
    messages: [
        { id: 1, message: 'Hi, how are you' },
        { id: 2, message: 'Hello I am learn React' },
        { id: 3, message: 'Respect' },
        { id: 4, message: 'Yop' },
        { id: 5, message: 'Yo' },],

}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {

        case SEND_MESSAGE:
            let body = action.newMessageBody
            return {
                ...state,
                messages: [...state.messages, { id: 6, message: body }]
            }
        default:
            return state
    }
}
export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE,newMessageBody })

export default dialogsReducer