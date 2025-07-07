import logo from './logo.svg';
import './App.css';
import React from 'react';
import Names from './components/data.json'
import { useState } from "react"
//import {Greet} from './components/Greet';
//import {Message} from './components/Message'
//import { ClickHandler } from './components/Clickhandler';
//import {Form} from './components/Forms'
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
//import SearchwithAPI from './components/Searchwithapi';
//import Parentone from './components/Parentone';
//import Login from './components/Login';
//import Memo from './components/Memo';
//import Togglebutton from './components/Togglebutton';
//import Shareprops from './components/Shareprops';
//import Error from './components/Error';
//import Apifetch from './components/Apifetch';
//import UserContext from './components/UserContext';
//import Contextapi from './components/Contextapi';
//import Ref from './components/Ref';
//import Useeffect from './components/Useeffect';
//import { Message } from './components/Message';
//import UseMemo from './components/UseMemo';
//import CustomHooks from './components/CustomHooks';
//import Newcounter from './components/Newcounter';
//import Reusablebtncomponent from './components/Reusablebtncomponent';

import Allinone from './components/Allinone';




 
function App() {

 /* const [query,setQuery] =useState('')

    const changeHandler =(event)=>{
        setQuery(event.target.value)
        console.log(event.target.value)
    }

    const filteredName = Names.filter((item)=>{
        return item.title.includes(query) 

    })*/
//const [newdata, setNewdata] = React.useState(0);

/*const handleDataFromPostList = (data) => {
    setNewdata(data);
  };*/
 

  return (
    <div className="App">
       
        
        
        <Allinone/>
          

 
    </div>
  );
}

export default App;
