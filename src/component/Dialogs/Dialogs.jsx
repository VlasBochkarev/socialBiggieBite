import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={'/dialogs/' + props.id}> {props.name} </NavLink>
        </div>
    )
}

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Vlas' id='1'/>
                <DialogItem name='Gleb' id='2'/>
                <DialogItem name='Jeka' id='3'/>
                <DialogItem name='Vitaliy' id='4'/>

            </div>
            <div className={s.messages}>
                <Message message='Hi, how are you'/>
                <Message message='Hello I am learn React'/>
                <Message message='Respect'/>
                <Message message='Yo'/>
            </div>
        </div>
    )
}
export default Dialogs