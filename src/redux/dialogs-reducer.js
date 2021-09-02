const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
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
    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {
    

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({ id: 6, message: body })
            return state
        default:
            return state
    }
}
export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })


export default dialogsReducer