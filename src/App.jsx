import React, {Component} from 'react'
import { BrowserRouter, Route, NavLink as Link, Redirect, Switch  } from 'react-router-dom'

import One from './pages/one/One'
import Two from './pages/two/Two'
import Three from './pages/three/Three'
import Four from './pages/four/Four'

import './App.css'

export default class App extends Component{
    render(){
        return (
            <BrowserRouter>
                <div className="app">

                    <Switch>
                        <Route path="/" exact render={()=>{
                            //对'/'重定向
                            return <Redirect to="/one"/>
                        }}/>

                        <Route path="/one" component={One}/>
                        <Route path="/two" component={Two}/>
                        <Route path="/three" component={Three}/>
                        <Route path="/four" component={Four}/>
                        <Route render={()=>{
                            //对'/'重定向
                            return <Redirect to="/one"/>
                        }}/>
                    </Switch>

                    


                    <nav className="tabs">
                        <Link className="tab" to="/one">one</Link>
                        <Link className="tab" to="/two">two</Link>
                        <Link className="tab" to="/three">three</Link>
                        <Link className="tab" to="/four">four</Link>
                    </nav>
                    

                </div>
            </BrowserRouter>
        )
    }
}