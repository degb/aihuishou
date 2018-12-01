import React from 'react'
// import { BrowserRouter, Link, Route } from 'react-router-dom'

// 无状态组件，UI组件（）
export default function(props){
    return (
        <div id="location">
            {/* 头部 */}
            <header>
                {/* 返回 */}
                <div className="locationBack iconfont icon-zuo" onClick={props.click.bind(this)}></div>
                <span className="title">选择城市</span>
            </header>
            {/* 搜索 */}
            <div className="hideShow">   {/* 遮罩层 */}
                <div className="searchBox">
                    <span className="iconfont icon-sousuo searchICON "></span>
                    <input type="text" placeholder="请输入城市名称查询" className="searchInp"/>
                    <span className="iconfont cancelICON">×</span>
                    <span className="cancelBtn">取消</span>
                </div>
            </div>
        </div>
    )
}
