import React, {Component} from 'react'
import { BrowserRouter, Route, NavLink as Link, Redirect, Switch  } from 'react-router-dom'

import Home from './pages/home/Home'
import New from './pages/new/New'
import Mine from './pages/mine/Mine'
import './App.scss'
export default class App extends Component{
    render(){
        return (
            <BrowserRouter>
                <div className="app">
                    <Switch>
                        <Route path="/" exact render={()=>{
                            //对'/'重定向
                            return <Redirect to="/home"/>
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
                             <i className="iconfont icon-shouye"></i> 
                             <b>首页</b> 
                        </Link>
                        <Link className="tab" to="/new">
                             <i className="iconfont icon-shouji"></i> 
                             <b>换新机</b> 
                        </Link>
                        <Link className="tab" to="/mine">
                             <i className="iconfont icon-wode"></i>
                             <b>我的</b> 
                        </Link>
                    </nav>
                   

                </div>
            </BrowserRouter>
        )
    }
}