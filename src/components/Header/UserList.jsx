import ArrowHeaderUp from "./ArrowHeaderUp";
import React from "react";

const UserList = () =>{
    return(
        <div>
            <ArrowHeaderUp/>
            <div className='user-list'>
                <div className='rhomb'></div>
                <p className='user-list_title profile'>Profile</p>
                <p className='user-list_title log-out'>Log Out</p>
            </div>
        </div>)
}

export default UserList