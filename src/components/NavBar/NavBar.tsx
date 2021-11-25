import homeImg from '../../assets/home.png'
import appleImg from '../../assets/apple.png'
import cronogramaImg from '../../assets/barbel.png'
import exercicioImg from '../../assets/exercicio.png'

import './styles.css'
import history from '../../util/history'

export const NavBar: React.FC = () => {
    function redirect(path: string){
        history.push(path)
    }
    return(
        <div className="container-nav">
            <button
                onClick={()=> redirect('/home')}>
                <img src={homeImg} alt="home" />
            </button>
            <button
                 onClick={()=> redirect('/cronogramaAlimentar')}>
                <img src={appleImg} alt="cronogramaAlimentar" />
            </button>
            <button
                 onClick={()=> redirect('/cronogramaExercicio')}>
                <img src={cronogramaImg} alt="cronogramaExercicio" />
            </button>
            <button
             onClick={()=> redirect('/exercicios')}>
                <img src={exercicioImg} alt="exercicios" />
            </button>
        </div>
    )
}