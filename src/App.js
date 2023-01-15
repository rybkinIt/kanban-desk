import {nanoid} from "nanoid";
import React, {useState, useEffect} from "react";
import './App.css';
import {Context} from "./context";
import {Route, Routes} from "react-router-dom";
import {Page} from "./components/Main/Main-selection/Page";
import {MainSelection} from "./components/Main/Main-selection/Main-selection";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import 'simplebar-react/dist/simplebar.min.css';

function App() {
        const [input, setInput] = useState(JSON.parse(localStorage.getItem('index')) || []) ;
        const [inputItem, setInputItem] = useState("");

        useEffect(()=>{
            localStorage.setItem('index',JSON.stringify(input))
        }, [input])

        const addTodo = () => {
            if (inputItem !== "") {
                const newItem = {
                    id: nanoid(),
                    item: inputItem,
                    status: 1,
                    title: "This task has no description",
                    subtitle: ""
                }
                setInput([...input, newItem]);
                setInputItem("");
            }
        };

        const onStatusChange = (id, statuses) =>{
            statuses= statuses+1
            setInput(input.map((task)=>task.id ===id?{...task, status: statuses}:task))
        }

        const Input = (e)=> {
            setInputItem(e.target.value)
        }

        const onTitleChange = (e,id) =>{
           setInput(input.map((task)=>task.id === id?{...task, subtitle: e.target.value}:task))
        }

    const Foo = (heightBar) =>{
        const height=window.innerHeight
        if(window.innerWidth>1024){
            heightBar = height - 300
        }else{
            heightBar = height - 600
        } if(window.innerWidth<800){
            heightBar = null
        }
        return heightBar
    }
        return (
            <Context.Provider value={{
                input,
                inputItem,
                addTodo,
                Input,
                onStatusChange,
                onTitleChange,
                Foo
            }}>
                <div className='_wrapper'>
                    <Header/>
                    <Routes>
                        <Route path='/' element={<MainSelection/>}/>
                        {input.map(item=>
                            <Route  key={item.id} path={`tasks/${item.id}`} element={<Page item={item}/>}
                        />)}
                    </Routes>
                    <Footer/>
                </div>
            </Context.Provider>
        )
    }

export default App;
