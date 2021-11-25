import React, { useState } from "react"

import profileImg from '../../assets/user.png'
import history from "../../util/history"

import './styles.css'

export const Cadastro : React.FC = () =>{

    interface ICadastro{
        nome: string,
        sobrenome: string,
        litrosAgua ?: string,
        dataNascimento ?: string,
        altura ?: string,
        peso ?:string,
        email : string,
        senha : string
    }

    const [cadastro, setCadastro] = useState({
        nome: '',
        sobrenome: '',
        litrosAgua : '',
        dataNascimento : '',
        altura : '',
        peso :'',
        email : '',
        senha : ''
    } as ICadastro)

    function handleChange(field: string, value: string){
        setCadastro({...cadastro, [field]: value})
    }
    
    function handleConfirmar(){
        if(cadastro.nome === ''){
            return(
                alert('Nome não pode estar em branco')
            )
        }
        if(cadastro.sobrenome === ''){
            return(
                alert('Sobrenome não pode ficar em branco')
            )
        }
        if(cadastro.email === ''){
            return(
                alert('Email não pode estar em branco')
            )
        }
        if(cadastro.senha === ''){
            return(
                alert('Senha não pode estar em branco')
            )
        }

        history.push('/home')
    }
    return(
       <div className='container-cadastro'>
           <img src={profileImg} alt="profileImage" />
           <div style={{display:'flex', marginBottom: '20px'}}>
               <div style={{marginRight:'10px'}}>
                    <label htmlFor="nome">Nome <span>*</span></label>
                    <input 
                        type="text" 
                        id='nome'
                        value={cadastro.nome}
                        onChange={(e)=> handleChange('nome', e.target.value)}
                    />
               </div>
               <div>
                    <label htmlFor="nome">Sobrenome <span>*</span></label>
                    <input 
                        type="text" 
                        id='sobrenome'
                        value={cadastro.sobrenome}
                        onChange={(e)=> handleChange('sobrenome', e.target.value)}
                    />
               </div>
           </div>
           <div style={{display:'flex', marginBottom: '20px'}}>
               <div style={{marginRight:'10px'}}>
                    <label htmlFor="litros">Litros de água /dia</label>
                    <input 
                        type="text" 
                        id='litros'
                        value={cadastro.litrosAgua}
                        onChange={(e)=> handleChange('litrosAgua', e.target.value)}/>
               </div>
               <div>
                    <label htmlFor="data">Data de nascimento</label>
                    <input 
                    type="date" 
                    id='data'
                    value={cadastro.dataNascimento}
                    onChange={(e)=> handleChange('dataNascimento', e.target.value)}/>
               </div>
           </div>
           <div style={{display:'flex', marginBottom: '20px'}}>
               <div style={{marginRight:'10px'}}>
                    <label htmlFor="altura">Altura</label>
                    <input 
                    type="text" 
                    id='altura'
                    value={cadastro.altura}
                    onChange={(e)=> handleChange('altura', e.target.value)}/>
               </div>
               <div>
                    <label htmlFor="peso">Peso</label>
                    <input 
                    type="text" 
                    id='peso'
                    value={cadastro.peso}
                    onChange={(e)=> handleChange('peso', e.target.value)}/>
               </div>
           </div>
           <div style={{marginBottom: '20px'}}>
            <label htmlFor="email">E-mail <span>*</span></label>
            <input 
            type="text" 
            id='email' 
            style={{width: '100%'}}
            value={cadastro.email}
            onChange={(e)=> handleChange('email', e.target.value)}/>
           </div>
           <div style={{marginBottom: '20px'}}>
            <label htmlFor="senha">Senha <span>*</span></label>
            <input 
            type="text" 
            id='senha' 
            style={{width: '100%'}}
            value={cadastro.senha}
            onChange={(e)=> handleChange('senha', e.target.value)}/>
           </div>

           <div>
               <button 
               style={{background:'var(--color-verde-button)',color: 'white', marginLeft: '75%'}}
               onClick={()=> handleConfirmar()}> 
                   Confirmar 
                </button>
           </div>
       </div>
    )
}