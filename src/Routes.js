import React from 'react'
import {Route,Switch} from 'react-router-dom'
import ListContainer from './components/ListContainer'
import ListApiContainer from './components/ListApiContainer'

const Routes = () => {
    return(
        <Switch>
            <Route path="/list" component={ListContainer}/>
            <Route path="/apiList" component={ListApiContainer}/>
        </Switch>
    )
}

export default Routes