import React, {Component} from 'react'
import OneUI from './OneUI'
import './One.scss'


//复杂组件，容器组件
export default class One extends Component{
    constructor(){
        super();
        this.state = {
            list: ['a', 'b', 'c', 'd', 'e']
        }
    }
    render(){
        let {list} = this.state;

        return <OneUI data={list} click={this.liAction.bind(this)}/>
    }

    liAction(index){
        console.log('点击了');
        console.log(this);
        console.log(index);
    }



}
