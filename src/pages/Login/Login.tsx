import { useState } from 'react'

import history from '../../util/history'
import logoImage from '../../assets/logo_escuro.png'

import './auth.css'
export function Login(){
    const [user, setUser] = useState('')
    const [password, setPassWord] = useState('')

    function handleConfirmar(){
        if(user !== '' && password !== ''){
            history.push('/home')
        }else{
            alert('Informe o usuario e a senha')
        }
    }
    function handleLimpar(){
        setUser('')
        setPassWord('')
    }
    function handleCadastro(){
        history.push('/cadastro')
    }
    return(
        <div className="container-login">
            <div className="container-imagem">
                <img src={logoImage} alt="logo" />
            </div>
            <div className="container-form">
                <input
                 type="text" 
                 placeholder='Usuário@usuario.com.br'
                 value={user} 
                 onChange={(e)=> setUser(e.target.value)}/>
                <input 
                type="password" 
                placeholder='********'
                value={password} 
                onChange={(e)=> setPassWord(e.target.value)}/>
                <div style={{display: 'flex', marginTop: '20px'}}>
                    <button 
                    className='button-limpar'
                    onClick={()=>handleLimpar()}>
                        Limpar
                    </button>
                    <button 
                        className='button-confirmar'
                        onClick={()=> handleConfirmar()}>
                        Confirmar
                    </button>
                </div>
            </div>
            <div className='container-links'>
            <button 
                className='link'>
                Esqueci minha senha
            </button>
            <button 
            className='link'
            onClick={()=> handleCadastro()}>
                Cadastrar uma nova conta
            </button>
            </div>
        </div>
    )
}