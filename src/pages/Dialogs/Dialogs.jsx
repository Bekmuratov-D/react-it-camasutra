import React from 'react';
import d from './Dialogs.module.css';
import {Route, Routes} from "react-router-dom";
import DialogItem from "./components/DialogIteam";
import Message from "./components/Message";

const Dialogs = (props) => {

    // let dialogsData = [
    //     {id: 1, name: 'Dimych'},
    //     {id: 2, name: 'Egor'},
    //     {id: 3, name: 'Anton'},
    //     {id: 4, name: 'Lisa'},
    //     {id: 5, name: 'Antosha'},
    // ]
    //
    // let dialogsElements = dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>);
    //
    //
    //
    let messagesElement = props.mes.map(m => <Message message={m.message}/> )

    return (
        <div className={d.dialogs}>
            <div className={d.dialogs_items}>
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
            </div>
        </div>
    )
}

export default Dialogs