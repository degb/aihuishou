import React from 'react'
import { BrowserRouter, Route, NavLink as Link } from 'react-router-dom'
import Location from "../../common/location/Location"
// 使用插件
import 'whatwg-fetch'
// 无状态组件，UI组件（）
export default function(props){
    
    return (
        <BrowserRouter>
            <div id="home" className="page">
                <header>
                    {/* 定位 */}
                    <Link className="location" to="/location">
                        <span>深圳市</span>
                        <b className="iconfont icon-xia"></b>
                    </Link>

                    {/* 搜索、购物车 */}
                    <div className="top-icon">
                        <span className="search iconfont icon-sousuo"></span>
                        <span className="shopCar iconfont icon-gouwuchekong"></span>
                    </div>
                </header>
                <Route path="/location" component={Location} />
            
                {/* 轮播图 */}
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {
                            props.data.map((item,index)=>{
                                return (
                                    <div className="swiper-slide" key={index}>
                                            <img src={item} alt=""/>
                                    </div>
                                )    
                            })
                        }
                    </div>
                </div>
                        
                    {/*回收流程*/}
                <div className="step">
                <img alt="" src={require('../../assets/step.png')} />
                </div>
            </div>
        </BrowserRouter>
    )
}


