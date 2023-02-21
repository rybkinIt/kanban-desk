import React, {useContext} from "react";
import {Context} from "../../context";

const Footer = () =>{

    const {input} = useContext(Context)
    
    return(
        <div className='footer'>
            <div className='tasks-container'>
                <p className='footer-title title1'>Active tasks {input.filter(item => item.status === 1).length}</p>
                <p className='footer-title title2'>Finished tasks {input.filter(item => item.status === 4).length}</p>
            </div>
                <div className='info-container'>
                    <p className='footer-title title3'>Kanban board by &lt;NAME&gt;, &lt;Поля пипка&gt;</p>
                </div>
        </div>
    )
}
export default Footer
