const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    users: [
    //     { id: 1, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5gXpk8DoJb5JdZn8qGVenl6LMZOzmIEvsgA&usqp=CAU', followed: true, fullName: 'Vlas Bochkrev', status: 'I am a developer', location: { city: 'Cherkassy', country: 'Ukraine' } },
    //     { id: 2, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmu47Tzi-9snKDIgESxyXseGsGpnzPnssk5g&usqp=CAU', followed: false, fullName: 'Gleb Cherkassky', status: 'Hi', location: { city: 'Cherkassy', country: 'Ukraine' } },
    //     { id: 3, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUkmCM0QWEmAJcHuGCPoWRhJ0ECFw3uPJ4Fg&usqp=CAU', followed: false, fullName: 'Jenya Chernyatin', status: 'Hello', location: { city: 'Cherkassy', country: 'Ukraine' } },
    //     { id: 4, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRs_XM1Ya-9GWV032wRWLzxuabjhzGAd3NoQ&usqp=CAU', followed: true, fullName: 'Vitaliy Curat', status: 'Yo yo yo', location: { city: 'Kiev', country: 'Ukraine' } },
    //     { id: 5, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVyr_N6Xv39TECWVH2udHpCZxJulqtRwsxbQ&usqp=CAU', followed: true, fullName: 'Sasha Nikitenko', status: 'I am a Boss', location: { city: 'Cherkassy', country: 'Ukraine' } },
     ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }

        default:
            return state;
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default usersReducer