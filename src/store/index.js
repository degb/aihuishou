import { createStore } from 'redux'


// 操作全局状态的函数
// createStore创建时，就会调用一次reducer
// 根据action修改state
// 返回新的全局状态
function reducer(state, action){
    console.log('调用了');
    console.log(action);
    if(action.type === 'change-name'){
        // 对全局状态进行修改，需要返回一个新的state值
        return {...state, username: action.val};
    }

    //其他情况，返回原来的state值 
    return state;

}

// 初始化全局状态
const state = {
    username: 'zhangsan',
    id: 'dadfa769a'
}


export default createStore(reducer, state);