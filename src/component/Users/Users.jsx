import React from "react"
import styles from "./Users.module.css"
import * as axios from 'axios'
import userPhoto from '../../assets/imeges/user.jpeg'

const Users = (props) => {
    if (props.users.length === 0) {

            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                debugger
                props.setUsers(response.data.items)
            })
        }

    //         [
    //             { id: 1, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5gXpk8DoJb5JdZn8qGVenl6LMZOzmIEvsgA&usqp=CAU', followed: true, fullName: 'Vlas Bochkrev', status: 'I am a developer', location: { city: 'Cherkassy', country: 'Ukraine' } },
    //             { id: 2, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmu47Tzi-9snKDIgESxyXseGsGpnzPnssk5g&usqp=CAU', followed: false, fullName: 'Gleb Cherkassky', status: 'Hi', location: { city: 'Cherkassy', country: 'Ukraine' } },
    //             { id: 3, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUkmCM0QWEmAJcHuGCPoWRhJ0ECFw3uPJ4Fg&usqp=CAU', followed: false, fullName: 'Jenya Chernyatin', status: 'Hello', location: { city: 'Cherkassy', country: 'Ukraine' } },
    //             { id: 4, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRs_XM1Ya-9GWV032wRWLzxuabjhzGAd3NoQ&usqp=CAU', followed: true, fullName: 'Vitaliy Curat', status: 'Yo yo yo', location: { city: 'Kiev', country: 'Ukraine' } },
    //             { id: 5, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVyr_N6Xv39TECWVH2udHpCZxJulqtRwsxbQ&usqp=CAU', followed: true, fullName: 'Sasha Nikitenko', status: 'I am a Boss', location: { city: 'Cherkassy', country: 'Ukraine' } },
    //         ]
    //     )
    // }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={styles.userPhoto} src={u.photos.small != null ? u.photos.small : userPhoto} />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>Follow</button>}

                    </div>
                </span>
                <span className={styles.header}>
                    <span >
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                        <div></div>
                    </span>
                </span>
            </div>)
        }
    </div>

}

export default Users;