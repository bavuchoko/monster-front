import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const user ={
        username:'',
        password:'',
        grant_type: 'password'
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
        console.log(user);
        axios.get('/api/hello');


        // axios.post('/api/oauth/token', user, {
        //
        // })
        //     .then(res => console.log(res))
        //     .catch()
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
        </div>
    )
}

export default Login;