import React, {Component} from 'react'

import './One.scss'
import API from '../../api/index'
// 使用插件
import 'whatwg-fetch'



let Swiper = window.Swiper
export default class One extends Component{
    constructor(){
        super();
        this.state = {
            sliderData:[],
             imgList:[]
        }
    }


    componentDidMount() {
      
        var mySwiper = new Swiper('.swiper-container', {

          loop:true,
          delay:2000,
          loopAdditionalSlides : 2,
          observer:true,
          observeParents:true,
          
        })
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
        })
        .catch((ex)=> {
          console.log('parsing failed', ex)
        })
      }


    render(){
        // let {sliderData} = this.state;
        

    return (
        <div id="one" className="page">
            <div className="home-header">
            <a className="location" href="#/choosecity"><span>深圳市</span><i></i></a>
            <a className="cart" href="#/cart"></a>
            <a className="search" href="https://m.aihuishou.com/m/index.html#/product"></a>
            </div>
            <div className="swiper-container" ref="lun">
                <div className="swiper-wrapper">
                         {/* {sliderData.map((item,index)=>{
                        return(
                            <div className="swiper-slide" key={index}>
                                    {imgList[i]}
                              <img src={item.items.imageUrl} alt=""/>  
                            </div>
                        )    
                    })} */}
                     {
                         this.state.imgList.map((item,index)=>{
                            return (
                                <div className="swiper-slide" key={index}>
                                        {/* {this.state.imgList} */}
                                        <img src={item} alt=""/>
                                </div>
                            )    
                        })
                    }


                
                </div>
               
         
            </div>

        </div>
    )
    }
}
// export default About;
