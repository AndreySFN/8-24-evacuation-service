import React from 'react';
import Header from "./components/Header";
import {Switch, Route} from 'react-router-dom'
import Main from "./forms/Main";
import Prices from "./forms/Prices";
import Contacts from "./forms/Contacts";
import UnderConstruction from "./forms/UnderConstruction";


function App() {
    return (
        <div className="App">
            <Header/>
                <Switch key="content">
                    <Route path={`/prices`} component={UnderConstruction}/>
                    <Route path={`/contacts`} component={Contacts}/>
                    <Route path={`/`} component={Main}/>
                </Switch>
        </div>
    );
}

export default App;
