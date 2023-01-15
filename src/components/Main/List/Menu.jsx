import React, {useState, useContext} from "react";
import Button from "../Main-components/Button";
import Arrow from "../Main-components/Arrow";
import {Context} from "../../../context";
import ButtonDisabled from "../Main-components/ButtonDisabled";
import SimpleBar from "simplebar-react";

const Menu = (props)=>{
    const [show, setShow]=useState(false)
    const {onStatusChange, input}=useContext(Context)

    const Fii = (heightBarMenu) =>{
        const height=window.innerHeight
        if(window.innerWidth>1024){
            heightBarMenu = 170
        }else{
            heightBarMenu = 80
        }
        return heightBarMenu
    }

    const ActiveSelection = ()=>{
        if(input.filter(task=>(task.status=== props.menuStatus)).length !== 0){
            return(
                <div onClick={()=> setShow(!show)}>
                    {show?<div className='menu'>
                        <div className='select'><Arrow/></div>
                        <div className='select-item-container'>
                            <SimpleBar style={{ maxHeight: Fii() }}>
                                {input.filter(task=>(task.status=== props.menuStatus)).map((filteredItem) => (
                                    <div
                                        className='select-item title'
                                        key={filteredItem.id}
                                        onClick={()=>onStatusChange(filteredItem.id,
                                            filteredItem.status)}>{filteredItem.item}</div>
                                ))}
                            </SimpleBar>
                        </div>
                    </div>:<Button/>}
                </div>
            )
        }else{
            return(
                <ButtonDisabled/>
            )
        }
    }

    return (
        <ActiveSelection/>
    )
}
export default Menu