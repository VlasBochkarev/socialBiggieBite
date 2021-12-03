import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";


let state = {
    posts: [
        {id: 1, message: 'Hi, my name is Vlas', likesCount: 120},
        {id: 2, message: 'Yo', likesCount: 23},
        {id: 3, message: 'Hi, how are you?', likesCount: 46},
        {id: 4, message: 'Yo yo yo', likesCount: 88},
    ]
};


test('length of post should be incremented', () => {
    //1 test data
    let action = addPostActionCreator('Test Text')

    //2 action
    let newState = profileReducer(state,action)
    //expectation
    expect(newState.posts.length).toBe(5)
});

test('message of new post should be: Test Text', () => {
    //1 test data
    let action = addPostActionCreator('Test Text')

    //2 action
    let newState = profileReducer(state,action)
    //expectation
    expect(newState.posts[4].message).toBe('Test Text')
});

test('after deleting should be decrement', () => {
    //1 test data
    let action = deletePost(1)

    //2 action
    let newState = profileReducer(state,action)
    //expectation
    expect(newState.posts.length).toBe(3)
});

test(`after deleting length shouldn't be decrement if id is incorrect`, () => {
    //1 test data
    let action = deletePost(1000)

    //2 action
    let newState = profileReducer(state,action)
    //expectation
    expect(newState.posts.length).toBe(4)
});
