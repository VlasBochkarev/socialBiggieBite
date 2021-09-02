const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: 1, message: 'Hi, my name is Vlas', likesCount: 120 },
        { id: 2, message: 'Yo', likesCount: 23 },
        { id: 3, message: 'Hi, how are you?', likesCount: 46 },
        { id: 4, message: 'Yo yo yo', likesCount: 88 },
    ],
    newPostText: 'Vlas Bochkarev'
};


const profileReducer = (state = initialState, action) => {
debugger;
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state;
        default:
            return state;
    }
}
export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer