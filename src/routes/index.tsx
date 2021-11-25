import React from 'react';
import { Route } from 'react-router-dom';

import { Login } from '../pages/Login/Login';
import { Cadastro } from '../pages/Cadastro/Cadastro';
import { CronogramaAlimentar } from '../pages/CronogramaAlimentar/CronAlimentar';
import { CronogramaExercicio } from '../pages/CronogramaExercicio/CronExercicio';
import { Exercicio } from '../pages/Exercicio/Exercicio';
import { Home } from '../pages/Home/Home';

export const Routes: React.FC = () => {

    return (
        <>
            <Route component={Login} path="/" exact/>
            <Route component={Cadastro} path="/cadastro" exact/>
            <Route component={Home} path="/home" exact/>
            <Route component={CronogramaAlimentar} path="/cronogramaAlimentar" />
            <Route component={CronogramaExercicio} path="/cronogramaExercicio" />
            <Route component={Exercicio} path="/exercicios" />
        </>
    )
}