import mmlogo1 from '../assets/mmlogo1.png';
import { BrowserRouter, Route, Link } from 'react-router-dom';

export default function Portfolio(){
    return(
        <>
        <h2>This is my Portfolio:</h2>
        <a  href="https://munchmonitor-641029a8a248.herokuapp.com/">
        <img className="munchmonitor" src={mmlogo1}/>
        </a>
        <a href="https://github.com/Vigneshwarie/munchMonitor">
            <br></br>
        <button className="mmbutton">
           MM Github Repostitory
        </button>
        </a>
       </>
       
 
    )
}