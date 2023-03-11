import React from 'react';
import d from './Dialogs.module.css';
import {Route, Routes} from "react-router-dom";
import DialogItem from "./components/DialogIteam";
import Message from "./components/Message";
import { addMessageActionCreater, updateNewMessageActionCreater } from '../../redax/state';

const Dialogs = (props) => {
    let newMessageElement = React.createRef();
    let sendPost = () => {
        props.dispatch(addMessageActionCreater())
    }

    let onMessageText = () => {
        let text = newMessageElement.current.value;
        props.dispatch(updateNewMessageActionCreater(text))
    }
   

    let dialogsElements = props.data.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElement = props.data.messages.map(m => <Message message={m.message}/> )
    return (
        <div className={d.dialogs}>
            <div className={d.dialogs_items}>
                {dialogsElements}
                <DialogItem name="Dimychs" id="1"/>
                <DialogItem name="Egor" id="2"/>
                <DialogItem name="Anton" id="3"/>
                <DialogItem name="Lisa" id="4"/>
                <DialogItem name="Antosha" id="5"/>
            </div>
            <div>
                {messagesElement}
                <Routes>
                    <Route path="1" element={<p>Chat Dimychs</p>}/>
                    <Route path="2" element={<p>Chat Egor</p>}/>
                    <Route path="3" element={<p>Chat Anton</p>}/>
                    <Route path="4" element={<p>Chat Lisa</p>}/>
                    <Route path="5" element={<p>Chat Antosha</p>}/>
                </Routes>
                <div className={d.dialogs_send}>
                    <input onChange={onMessageText} ref={newMessageElement} className={d.send_input} value={props.data.newMessageText} type="text" />
                    <button onClick={sendPost}  className={d.send_button}>Отправит</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs