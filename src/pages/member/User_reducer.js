import { LOGIN_USER } from './User';


export default function(state={}, action){  //state 는 이전 상태

    switch(action.type){        //Action에는 여러 타입 존재함. 이 타입에 따라 다르게 반응하도록 작성
        case LOGIN_USER:
            return {...state, loginSuccess: action.payload}       //... : spread operator은 파라미터 state를 그대로 가져온 것으로 빈 상태를 의미
            break;

        default:
            return state;

    }

}