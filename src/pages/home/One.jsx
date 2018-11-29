import React, {Component} from 'react'

import './One.scss'


export default class One extends Component{
    render(){
        return (
            <div id="one" className="page">
                <div className="home-header">
               <a className="location" href="#/choosecity">深圳市</a>
               <a className="cart" href="#/cart"></a>
               <a className="search" href="https://m.aihuishou.com/m/index.html#/product"></a>
                </div>
            </div>
        )
    }
}

