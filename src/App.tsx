import React from 'react';
import Header from "./components/Header";
import {Switch, Route} from 'react-router-dom'
import Main from "./forms/Main";
import Contacts from "./forms/Contacts";
import Prices from "./forms/Prices";


function App() {
    return (
        <div className="App">
            <Header/>
                <Switch key="content">
                    <Route path={`/prices`} component={Prices}/>
                    <Route path={`/contacts`} component={Contacts}/>
                    <Route path={`/`} component={Main}/>
                </Switch>
        </div>
    );
}

export default App;
