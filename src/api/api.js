import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'b9139617-20f9-4519-bf71-76b1a071ad4c',
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(userId) {
        return instance.delete(`follow/${userId}`)       
    },
    unfollow(userId) {
        return instance.post(`follow/${userId}`) 
    },
  
    getProfile(userId){
        return instance.get(`profile/${userId}`)
        
    },


}
export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}



