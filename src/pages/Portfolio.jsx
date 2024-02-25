import mmlogo1 from '../assets/mmlogo1.png';
import { BrowserRouter, Route, Link } from 'react-router-dom';

export default function Portfolio(){
    return(
        <>
        <h2>This is my Portfolio:</h2>
        <a  href="https://munchmonitor-641029a8a248.herokuapp.com/">
        <img className="munchmonitor" src={mmlogo1}/>
        </a>
        <a href="https://www.github.com/rtocastro">
            <br></br>
        <button>
           MM Github Repostitory
        </button>
        </a>
       </>
       
 
    )
}