import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={'/dialogs/' + props.id} activeClassName={s.active} > {props.name} </NavLink>
        </div>
    )
}

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}


const Dialogs = (props) => {

    let dialogs = [
        { id: 1, name: 'Vlas Bochkarev' },
        { id: 2, name: 'Gleb Cherkasky' },
        { id: 3, name: 'Evgeniy Chernyatin' },
        { id: 4, name: 'Vitaliy Kurat' },
    ]
    
    let messages = [
        { id: 1, message: 'Hi, how are you' },
        { id: 2, message: 'Hello I am learn React' },
        { id: 3, message: 'Respect' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Yo' },
    ]
    
    let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id} /> )
    
    let messagesElements = messages.map( m => <Message message={m.message} id={m.id} /> )

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}
export default Dialogs