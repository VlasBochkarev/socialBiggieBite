import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import DialogItem from './Dialogitem/Dialogitem';
import Dialogs from './Dialogs';

import Message from './Message/Message';



const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }
    return (
        <Dialogs
            updateNewMessageBody={onNewMessageChange}
            dialogsPage={state}
            sendMessage={onSendMessageClick} />
    )
}
export default DialogsContainer