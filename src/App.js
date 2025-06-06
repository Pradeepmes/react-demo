import logo from './logo.svg';
import './App.css';
import Names from './components/data.json'
import { useState } from "react"
//import {Greet} from './components/Greet';
//import {Message} from './components/Message'
//import { ClickHandler } from './components/Clickhandler';
import {Form} from './components/Forms'
//import {PostList} from './components/Postlist'
//import {PostForm} from './components/Postform'
//import Counter from './components/Counter';
//import Timer from './components/Timer';
//import Simple from './components/Simple';
//import Buttonclorchange from './components/Buttonclorchange';
//import Ascendingdescendingorder from './components/Ascendingdescendingorder';
//import Propsexample from './components/Propsexample';
//import Todolist from './components/Todolist';
//import Debouncing from './components/Debouncing';
//import Search from './components/Search';
//import Charts from './components/Charts';
//import Autosave from './components/Autosave';

function App() {

 /* const [query,setQuery] =useState('')

    const changeHandler =(event)=>{
        setQuery(event.target.value)
        console.log(event.target.value)
    }

    const filteredName = Names.filter((item)=>{
        return item.title.includes(query) 

    })*/


  return (
    <div className="App">
          {/*<div>
            <input type="text" value={query} onChange={changeHandler} />
          </div>
         
          {
            filteredName.map((item)=>(
              <p key={item.id}>{item.id}{item.Name}</p>
            ))
          }*/}

          <Form/>

    </div>
  );
}

export default App;
