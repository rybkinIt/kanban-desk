import {useContext} from "react";
import {Context} from "../../../context";
import {Link} from "react-router-dom";
import PageSvg from "../Main-components/PageSvg";

const Page = (props) =>{
    const {onTitleChange, onItemChange}=useContext(Context)

    return(
        <div className='page-container'>
            <header className='page-header'>
                <h1 className='page-title'>
                    <textarea
                        className='textarea item-textarea'
                        defaultValue={props.item.item}
                        onChange={(e)=>onItemChange(e, props.item.id)}
                    />
                </h1>
                <Link className='link' to='/'><PageSvg/></Link>
            </header>
            <main>
                <textarea
                    className='textarea'
                    placeholder={props.item.title}
                    defaultValue={props.item.subtitle}
                    onChange={(e)=>onTitleChange(e, props.item.id)}/>
            </main>
        </div>
    )
}
export  {Page}