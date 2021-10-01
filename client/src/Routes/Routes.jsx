import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Home } from './Home'
import { Navbar } from './Navbar'

export const Routes = () => {
   

    return (
        <div>
            <Navbar/>
            <Switch>
                <Route exact path="/">
                    <Home/>    
                </Route>
                <Route>
                    <h3>
                        error
                    </h3>
                </Route>
            </Switch>
        </div>
    )
}
