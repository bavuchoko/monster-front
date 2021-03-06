import React, { useState, useEffect } from 'react';
import axios from 'axios';
import qs from "qs"
import man from '../../assets/image/man.png';
import MemberlSideMenu from "../../components/SideMenu/MemberlSideMenu";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";

function Login() {
const [ setCookie ] = useState()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const headers = {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization' : 'Basic bXlBcHA6cGFzcw=='
    }
    const user ={
        username:'',
        password:'',
        grantType: 'password'
    };
    // input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
    const handleInputId = (e) => {
        setUsername(e.target.value)
    }

    const handleInputPw = (e) => {
        setPassword(e.target.value)
    }

    const onClickLogin = () => {
        user.username = username;
        user.password = password;

        // axios.get('/api/hello').then(r => console.log(r))

        axios.post('/api/oauth/token',  qs.stringify({
            grant_type: "password",
            username,
            password
        }), {
            headers
        })
            .then(res => {
                console.log(res.data['access_token'])
                localStorage.setItem('refresh-token', res.data['refresh-token']);
                setCookie('access-token', res.data['access_token']);
                console.log(res.data['access_token'])
            })
            .catch()
    }

    //
    // // 페이지 렌더링 후 가장 처음 호출되는 함수
    // useEffect(() => {
    //         axios.get('/user_inform/login')
    //             .then(res => console.log(res))
    //             .catch()
    //     },
    //     // 페이지 호출 후 처음 한번만 호출될 수 있도록 [] 추가
    //     [])

    return(

        <div  className="width-70per mar-auto-0 disp-flex">

            <div className="width-200p">
                <MemberlSideMenu />
            </div>

            <div className="width-100per-200p mar-auto-0">
               <div className="padding-rl-80p-t-40p">

                   <h2 className="login-h2 h2-head">로그인</h2>
                        <div className="disp-flex login-from pad-t85p ">
                                <div className="profile-div">
                                    <img  className="" src={man} />
                                </div>
                                <form className="form-tag">
                                    <div className="width-100per pad-t68p">
                                        <div>
                                            <label htmlFor='username'></label>
                                            <input type='text' name='Username' value={username} onChange={handleInputId} placeholder="username@email.com"/>
                                        </div>
                                        <div>
                                            <label htmlFor='password'></label>
                                            <input type='password' name='password' value={password} onChange={handleInputPw} placeholder="password"/>
                                        </div>
                                        <div>
                                            <button type='button' className="hover-btn" onClick={onClickLogin}>
                                                <FontAwesomeIcon icon={faPowerOff} />로그인</button>
                                        </div>
                                    </div>
                                </form>
                        </div>
               </div>
            </div>
        </div>
    )
}

export default Login;