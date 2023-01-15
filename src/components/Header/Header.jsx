import React, {useState} from "react";
import UserAvatar from "./UserAvatar";
import ArrowHeaderDown from "./ArrowsHeaderDown";
import UserList from "./UserList";


const Header = () =>{

    const [show, setShow]=useState(true)

    return(
        <div className="header">
                <div className="header-title">
                    <h1 className='header-title-text'>Awesome Kanban Board</h1>
                </div>
                <div className='user-menu'>
                    <div className='user-avatar'><UserAvatar /></div>
                    <div className='header-show' onClick={()=>setShow(!show)}>{show?<div><ArrowHeaderDown/></div>:<UserList/>}</div>
                </div>
        </div>
    )
}


export default Header