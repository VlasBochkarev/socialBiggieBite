import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, my name is Vlas', likesCount: 120 },
                { id: 2, message: 'Yo', likesCount: 23 },
                { id: 3, message: 'Hi, how are you?', likesCount: 46 },
                { id: 4, message: 'Yo yo yo', likesCount: 88 },],
            newPostText: 'Vlas Bochkarev'
        },

        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Vlas Bochkarev' },
                { id: 2, name: 'Gleb Cherkasky' },
                { id: 3, name: 'Evgeniy Chernyatin' },
                { id: 4, name: 'Vitaliy Kurat' },
                { id: 5, name: 'Sasha Nikitenko' },],
            messages: [
                { id: 1, message: 'Hi, how are you' },
                { id: 2, message: 'Hello I am learn React' },
                { id: 3, message: 'Respect' },
                { id: 4, message: 'Yop' },
                { id: 5, message: 'Yo' },],
            newMessageBody: ''
        },
        sidebar: {

        },


    },
    _callSubscriber() {
        console.log('state is change')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        
        this._state.profilePage = profileReducer(this._state.profilePage,action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action)
        this._state.sidebar = sidebarReducer(this._state.sidebar,action)
        
        this._callSubscriber(this._state)
     
    }
}

export default store;