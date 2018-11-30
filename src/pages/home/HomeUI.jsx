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
                </div>

                {/* 搜索、购物车 */}
                <div className="top-icon">
                    <span className="search">搜索</span>
                    <span className="shopCar">购物车</span>
                </div>

            </header>
        </div>
    )
}


