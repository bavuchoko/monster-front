import React, { useState, useEffect } from 'react';
import axios from 'axios';
import qs from "qs"
function Login() {
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
            .then(res => console.log(res))
            .then(res => {
                if(res.ACCESS_TOKEN){
                    localStorage.setItem(
                        'login-token',res.ACCESS_TOKEN
                    )
                }
                console.log(res.ACCESS_TOKEN)
            })
            .catch()
    }


    // // 페이지 렌더링 후 가장 처음 호출되는 함수
    // useEffect(() => {
    //         axios.get('/user_inform/login')
    //             .then(res => console.log(res))
    //             .catch()
    //     },
    //     // 페이지 호출 후 처음 한번만 호출될 수 있도록 [] 추가
    //     [])

    return(
        <div>
            <h2>Login</h2>
            <form>
            <div>
                <label htmlFor='username'>ID : </label>
                <input type='text' name='Username' value={username} onChange={handleInputId} />
            </div>
            <div>
                <label htmlFor='password'>PW : </label>
                <input type='password' name='password' value={password} onChange={handleInputPw} />
            </div>
            <div>
                <button type='button' onClick={onClickLogin}>Login</button>
            </div>
            </form>
        </div>
    )
}

export default Login;