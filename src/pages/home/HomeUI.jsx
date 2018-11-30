import React from 'react'

// 无状态组件，UI组件（）
export default function(props){
    console.log(props);
    return (
        <div id="home" className="page">
             <header>
                {/* 定位 */}
                <div className="location">
                    <span>深圳市</span>
                    <b className="iconfont icon-xia"></b>
                </div>

                {/* 搜索、购物车 */}
                <div className="top-icon">
                    <span className="search iconfont icon-sousuo"></span>
                    <span className="shopCar iconfont icon-gouwuchekong"></span>
                </div>

            </header>
        </div>
    )
}


