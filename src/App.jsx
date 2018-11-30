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
                    <header>
                        {/* 定位 */}
                        <div className="location">
                            <span>深圳市</span>
                        </div>

                        {/* 搜索、购物车 */}
                        <div className="top-icon">
                            <span className="search">搜索</span>
                            <span className="shopCar">购物车</span>
                        </div>

                    </header>

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
                            首页
                        </Link>
                        <Link className="tab" to="/new">
                            换新机
                        </Link>
                        <Link className="tab" to="/mine">
                            我的
                        </Link>
                    </nav>
                   

                </div>
            </BrowserRouter>
        )
    }
}