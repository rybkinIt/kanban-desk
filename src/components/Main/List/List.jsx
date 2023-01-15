import React, {useContext} from "react";
import Menu from "./Menu";
import {Context} from "../../../context";
import SimpleBar from "simplebar-react";
import {Link} from "react-router-dom";


const List = (props) =>{
    const {input, sliderMaxHeight}=useContext(Context)


    return(

        <div className='list-container'>
            <h1 className='list-title'>{props.title}</h1>
            <SimpleBar style={{ maxHeight: sliderMaxHeight() }}>
                <div>
                    {input.filter(item => item.status === props.currentStatus ).map(filteredItem => (
                        <div className='list-card' key={filteredItem.id}>
                            <p className='title'><Link className='link' to={`tasks/${filteredItem.id}`}>{filteredItem.item}</Link></p>
                        </div>
                    ))}
                </div>
            </SimpleBar>
            <Menu menuStatus={props.currentStatus-1}/>
        </div>

    )
}

export default List