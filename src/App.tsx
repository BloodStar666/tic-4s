import { Router, Switch, Route } from "react-router-dom";

import { Login } from './pages/Login/Login';
import { Cadastro } from './pages/Cadastro/Cadastro';
import { CronogramaAlimentar } from './pages/CronogramaAlimentar/CronAlimentar';
import { CronogramaExercicio } from './pages/CronogramaExercicio/CronExercicio';
import { Exercicio } from './pages/Exercicio/Exercicio';
import { Home } from './pages/Home/Home';

import history from "./util/history";

import './styles/global.css'
function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
            <Route component={Login} path="/" exact/>
            <Route component={Cadastro} path="/cadastro" exact/>
            <Route component={Home} path="/home" exact/>
            <Route component={CronogramaAlimentar} path="/cronogramaAlimentar" />
            <Route component={CronogramaExercicio} path="/cronogramaExercicio" />
            <Route component={Exercicio} path="/exercicios" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
