import mmlogo1 from '../assets/mmlogo1.png';

import { BrowserRouter, Route, Link } from 'react-router-dom';
export default function Portfolio(){
    return(
        <>
        <h1>this is the portfolio page</h1>
        <a href="https://munchmonitor-641029a8a248.herokuapp.com/">
        <img src={mmlogo1}/>
        </a>
       </>
       
 
    )
}