import React from "react"
import { Header } from "../../components/Header/Header"
import { NavBar } from "../../components/NavBar/NavBar"

import './styles.css'

export const Home : React.FC = () =>{
    return(
        <div style={{display: 'grid'}}>
            <Header/>
            <div className='container-home'>
                <div />
                <div/>
            </div>
            <NavBar/>
        </div>
    )
}