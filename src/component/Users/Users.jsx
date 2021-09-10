import React from 'react'
import styles from "./Users.module.css"
import userPhoto from '../../assets/imeges/user.jpeg'
import { NavLink } from 'react-router-dom'
import * as axios from 'axios'

let Users = (props) => {


    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        <div className={styles.page}>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage} onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
            })}

        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/Profile/' + u.id}>
                            <img className={styles.userPhoto} src={u.photos.small != null ? u.photos.small : userPhoto} />
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '2ddf1be0-0317-4cc5-9130-a9872a84a75e',
                                    }
                                }).then(response => {
                                    if (response.data.resultCode == 0) {
                                        props.follow(u.id)
                                    }

                                })
                                props.unfollow(u.id)

                            }}>Unfollow</button>
                            : <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '2ddf1be0-0317-4cc5-9130-a9872a84a75e',
                                    }
                                }).then(response => {
                                    if (response.data.resultCode == 0) {
                                        props.follow(u.id)
                                    }

                                })


                            }}>Follow</button>}
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

export default Users