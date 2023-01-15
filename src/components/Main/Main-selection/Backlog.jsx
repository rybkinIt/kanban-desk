import ActiveSubmit from "../Main-components/ActiveSubmit";
import Button from "../Main-components/Button";
import React, {useContext, useState} from "react";
import {Context} from "../../../context";
import SimpleBar from "simplebar-react";
import {Link} from "react-router-dom";


const Backlog = () => {

    const [show, setShow]=useState(false)
    const {input, inputItem, Input, addTodo, Foo}=useContext(Context)


    return(
        <div className='list-container'>
            <h1 className='list-title'>Backlog</h1>
            <SimpleBar style={{ maxHeight: Foo() }}>
                {input.filter(item => item.status === 1 ).map(filteredItem => (
                    <div className='list-card' key={filteredItem.id}>
                        <p className='title'><Link className='link' to={`tasks/${filteredItem.id}`}>{filteredItem.item}</Link></p>
                    </div>
                ))}
            </SimpleBar>
            <div className="input-container">
                {show && <input
                    className='input'
                    type="text"
                    name="todo"
                    value={inputItem}
                    onChange={(e)=>Input(e)}
                />}
                <div className="list-button-box" onClick={addTodo}>
                    <div onClick={()=> setShow(!show)}>
                        {show ? <ActiveSubmit />:<Button />}
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Backlog