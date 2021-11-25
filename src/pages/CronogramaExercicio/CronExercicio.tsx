import React from "react"
import { Header } from "../../components/Header/Header"
import { NavBar } from "../../components/NavBar/NavBar"

export const CronogramaExercicio : React.FC = () =>{
    return(
        <div>
            <Header/>
            <div className='container-alimentar'>
                <h1>Cadastro de cronograma de Exercicio</h1>
                <div style={{width: '50%', margin: '5% 0 0 5%'}}>
                    <label htmlFor='periodo'>Periodo <span>*</span></label>
                    <input type="text" className='input-escuro'/>
                    <label htmlFor='objetivo'>Objetivo <span>*</span></label>
                    <input type="text" className='input-escuro'/>
                </div>
            </div>
            <NavBar/>
        </div>
    )
}