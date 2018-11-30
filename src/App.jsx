import React, {Component} from 'react'
import { BrowserRouter, Route, NavLink as Link, Redirect, Switch  } from 'react-router-dom'

import Home from './pages/home/One'
import New from './pages/new/Two'
import Mine from './pages/mine/Three'
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

                        <Route path="/home" component={Home}/>
                        <Route path="/new" component={New}/>
                        <Route path="/mine" component={Mine}/>
                        <Route render={()=>{
                            //对'/'重定向
                            return <Redirect to="/home"/>
                        }}/>
                    </Switch>

                    


                    <nav className="tabs">
                        <Link className="tab" to="/home">
                           <img src={require('./assets/home.png')} alt="首页"/>
                        </Link>
                        <Link className="tab" to="/new">
                           <img src={require('./assets/new.png')} alt="换新机"/>
                        </Link>
                        <Link className="tab" to="/mine">
                           <img src={require('./assets/mine.png')} alt="我的"/>
                        </Link>
                    </nav>
                   

                </div>
            </BrowserRouter>
        )
    }
}