const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNTs'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
    users: [
        //     { id: 1, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5gXpk8DoJb5JdZn8qGVenl6LMZOzmIEvsgA&usqp=CAU', followed: true, fullName: 'Vlas Bochkrev', status: 'I am a developer', location: { city: 'Cherkassy', country: 'Ukraine' } },
        //     { id: 2, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmu47Tzi-9snKDIgESxyXseGsGpnzPnssk5g&usqp=CAU', followed: false, fullName: 'Gleb Cherkassky', status: 'Hi', location: { city: 'Cherkassy', country: 'Ukraine' } },
        //     { id: 3, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUkmCM0QWEmAJcHuGCPoWRhJ0ECFw3uPJ4Fg&usqp=CAU', followed: false, fullName: 'Jenya Chernyatin', status: 'Hello', location: { city: 'Cherkassy', country: 'Ukraine' } },
        //     { id: 4, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRs_XM1Ya-9GWV032wRWLzxuabjhzGAd3NoQ&usqp=CAU', followed: true, fullName: 'Vitaliy Curat', status: 'Yo yo yo', location: { city: 'Kiev', country: 'Ukraine' } },
        //     { id: 5, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVyr_N6Xv39TECWVH2udHpCZxJulqtRwsxbQ&usqp=CAU', followed: true, fullName: 'Sasha Nikitenko', status: 'I am a Boss', location: { city: 'Cherkassy', country: 'Ukraine' } },
    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,

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
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }

        default:
            return state;
    }
}

export const follow = (userId) => ({ type: FOLLOW, userId })
export const unfollow = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setUsersTotalCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching})

export default usersReducer