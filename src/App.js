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
//import ConditionalRendering from './components/ConditionalRendering';
//import LoginForm from './components/LoginForm';
//import CompLifeCycleMethod from './components/CompLifeCycleMethod';

//import Samplewindow from './components/Samplewindow';
//import DebounceWithAPISearch from './components/DebounceWithAPISearch';
//import Todolistone from './components/Todolistone';
//import UseId from './components/UseId';
//import UseDeferedValue from './components/UseDeferedValue';
//import UseTransition from './components/UseTransition';
//import Mainapp from './components/Mainapp';
//import useWindowSize from './components/useWindowSize';

//import { ErrorBoundary } from 'react-error-boundary';
//import NextJs from './components/NextJs';
//import Reactmemoparent from './components/Reactmemoparent';
import Todolistnew from './components/Todolistnew';
//import Callback from './components/Callback';
//import Userfetch from './components/Userfetch';

//import SendUserdata from './components/SendUserdata';
//import { Productprovider } from './components/ProductContext';
//import ProductDisplay from './components/ProductDisplay';
//import Accordion from './components/Accordion';
import Modalparent from './components/Modalparent';

import Modalportal from './components/Modalportal';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert" style={{ color: "red", marginTop: "1rem" }}>
      <p>🚨 Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>🔁 Reset Counter</button>
    </div>
  );
}
 
function App() {
 

  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <h1>Hello React Portals</h1>
      <button onClick={() => setShowModal(true)}>Open Modal</button>

      {showModal && (
        <Modalportal onClose={() => setShowModal(false)}>
          <h2>This is a modal using a portal!</h2>
        </Modalportal>
      )}

      <Modalparent/>
    </div>

  );
}

export default App;
