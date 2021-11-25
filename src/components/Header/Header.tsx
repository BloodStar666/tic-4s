import React from 'react';

import logoImg from '../../assets/logo_claro.png';
import profileImg from '../../assets/user.png';
import history from '../../util/history';

import './styles.css'

export const Header : React.FC = () =>{
    function redirectHome(){
        history.push('/home')
    }

    function redirectProfile(){
        history.push('/cadastro')
    }
    return(
        <div className='container-header'>
            <img 
                src={logoImg} 
                alt="logo" 
                className='img-abelha'
                onClick={()=> redirectHome()}/>
            <h1
                onClick={()=> redirectHome()}
            >
                Bee Life
            </h1>
            <img 
                src={profileImg} 
                alt="profile" 
                className='img-profile'
                onClick={()=> redirectProfile()}/>
        </div>
    )
}