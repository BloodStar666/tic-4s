import React, { useEffect, useState } from "react"

import { Header } from "../../components/Header/Header"
import { NavBar } from "../../components/NavBar/NavBar"

import './styles.css'

export const Exercicio : React.FC = () =>{
    interface IObj{
        id?: number,
        descricao: string,
        gasto: string
    }
    interface IArray{
        array: IObj[]
    }
    const [tab, setTab] = useState(1)
    const [getOnly, setGetOnly] = useState({
        descricao: '',
        gasto: ''
    } as IObj)
    const [data, setData] = useState({array: []} as IArray)
    useEffect(()=>{
        setData(
            {array: [
                {id: 1, descricao: 'exercicio 1', gasto: '100kcal'},
                {id: 2, descricao: 'exercicio 2', gasto: '100kcal'},
                {id: 3, descricao: 'exercicio 3', gasto: '100kcal'},
                {id: 4, descricao: 'exercicio 4', gasto: '100kcal'},
                {id: 5, descricao: 'exercicio 5', gasto: '100kcal'},
                
            ]}
        )
    },[])

    function handleExcluir(index: number){
        data.array.splice(index,1)
        setData({array: data.array})
    }

    function handleConfirmar(){
        setGetOnly({
            descricao: '',
            gasto:''
        })
        setTab(1)
    }
    return(
        <div style={{display: 'grid'}}>
            <Header/>
            <div className='container-exercicio'>
                {tab === 1 ?
                    (
                        <div style={{width: '100%'}}>
                            <div style={{width: '45%', margin: '30px 0 50px 20px'}}>
                                <label htmlFor="pesquisar">Pesquisar</label>
                                <input type="text" className='input-escuro'/>
                            </div>
                            <table style={{marginLeft: '20px', width: '90%', border: '2px solid var(--color-verde-quase-branco)', borderRadius: '5px'}}>
                                <thead>
                                    <td style={{fontWeight: '700', borderRight: '2px solid var(--color-verde-quase-branco)', height: '23px'}}>Descrição</td>
                                    <td style={{fontWeight: '700', borderRight: '2px solid var(--color-verde-quase-branco)', height: '23px'}}>Gasto calórico</td>
                                    <td style={{fontWeight: '700', height: '23px'}}>Ações</td>
                                </thead>
                                <tbody>
                                    {data.array.map((e, i)=>{
                                    return(
                                        <tr style={{textAlign: 'center'}}>
                                            <td style={{fontWeight: '700', borderRight: '2px solid var(--color-verde-quase-branco)', borderTop: '2px solid var(--color-verde-quase-branco)', height: '30px'}}>{e.descricao}</td>
                                            <td style={{fontWeight: '700', borderRight: '2px solid var(--color-verde-quase-branco)', borderTop: '2px solid var(--color-verde-quase-branco)', height: '30px'}}>{e.gasto}</td>
                                            <div style={{fontWeight: '700', borderTop: '2px solid var(--color-verde-quase-branco)', height: '30px', display: 'flex'}}>
                                                <div onClick={()=>{setTab(2); setGetOnly(e)}}>
                                                        Editar
                                                    </div>
                                                    <div>/</div>
                                                    <div onClick={()=> handleExcluir(i)}>
                                                        Excluir
                                                    </div>
                                            </div>
                                        </tr>
                                    )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    )
                :
                    (
                        <div>
                            <h1>Cadastro de Exercícios</h1>
                            <div style={{width: '60%', margin: '20% 0 0 20%'}}>
                                <label htmlFor='desrcicao'>Descrição <span>*</span></label>
                                <input type="text" value={getOnly.descricao} className='input-escuro'/>

                                <label htmlFor='gasto'>Gasto calórico <span>*</span></label>
                                <input type="text" value={getOnly.gasto} className='input-escuro'/>
                            </div>
                            <button style={{margin: '30% 0 0 60%', background: 'var(--color-verde-button)', color: 'white'}}
                                onClick={()=>{
                                    handleConfirmar()
                                }}> 
                                Concluir
                            </button>
                        </div>
                    )
                }
            </div>
            <NavBar/>
        </div>
    )
}
