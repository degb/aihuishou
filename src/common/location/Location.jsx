import React, {Component} from 'react'
import LocationUI from './LocationUI.jsx'
import './Location.scss'


export default class Home extends Component{
    render(){
        return <LocationUI click={this.locationAction.bind(this)}/>
    }
    locationAction(){
        this.props.history.goBack()
    }
}
