import React from 'react';

export default function Login() {
    return (
        <div className='login'>
            <img class="loginSideBar" src='https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png'/>
            <div class="loginComponents">
                <h3 className='LoginInput'>Login or Signin </h3>
                <input className='LoginInput' type="text" name="username" placeholder="Username" required />
                <input className='LoginInput' type="password" name="password" placeholder="Password" required />
                <div>
                <input className='LoginBtn' type="submit" value="Login" />
                <input className='LoginBtn' type="submit" value="Register" />
                </div>
            </div>
        </div>
    )
}