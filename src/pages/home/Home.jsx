import React, {Component} from 'react'
import HomeUI from './HomeUI.jsx'
import API from '../../api/index'
import './Home.scss'

let Swiper = window.Swiper
export default class Home extends Component{
    constructor(){
        super();
        this.state = {
            sliderData:[],
             imgList:[]
        }
    }

    componentDidMount() {
      
        //请求的url
        fetch(API.PROTAL_API)
        // 获得请求的响应对象
        .then((response)=> {
        // 以json的形式解析请求得到的json数据
          return response.json()
        })
        // 请求得到结果，解析完成
        .then((json)=>{
            // console.log(json.data);
        for(var i = 0; i < json.data[0].items.length; i++){
            this.state.imgList.push(json.data[0].items[i].imageUrl);
        }
            this.setState({sliderData:json.data});
            
        var mySwiper = new Swiper('.swiper-container', {

            loop:true,
            delay:2000,
            loopAdditionalSlides : 2,
            observer:true,
            observeParents:true,
            
          })
        })
        .catch((ex)=> {
          console.log('parsing failed', ex)
        })
      }

    render(){
        return <HomeUI data={this.state.imgList}/>
    }
}

