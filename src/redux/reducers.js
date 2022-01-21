import { combineReducers } from "redux";

//초기상태로 들어갈 값
const initMember = {
    members:[
        {name: 'David', position: 'CEO'},
        {name: 'Emma', position: 'Designer'},
        {name: 'Michael', position: 'Developer'}
    ]
}

//initMember를 초기값으로 지정해서 객체정보값을 반환하는 reducer함수 정의
//이때 두번째 인수인 action객체로부터는 type(액션이름)과 payload(자식 컴포넌트에서 전달받을 값)을 전달받음
const memberReducer = (state=initMember, action)=>{
    switch (action.type) {
        //추후 자식에서 호출한 action.type에 따라 해당 reducer의 값을 변경 가능
        case 'SET_MEMBERS' :
            return {...state, members: action.payload}

            default:
                return state;
    }
}

//여러개의 reducer들을 하나로 합쳐서 반환
const reducers = combineReducers({
    memberReducer
})

export default reducers;