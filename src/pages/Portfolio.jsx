import mmlogo1 from '../assets/mmlogo1.png';
import lalogo from '../assets/lalogo.png';

import { BrowserRouter, Route, Link } from 'react-router-dom';

export default function Portfolio() {
    return (
        <>
            <h2>This is my Portfolio:</h2>
            <div>
                <a href="https://munchmonitorpro.onrender.com/">
                    <img className="portpicture" src={mmlogo1} />
                </a>
                <a href="https://github.com/Vigneshwarie/munchMonitorPro">
                    <br></br>
                    <button className="ghbutton">
                        MM Github Repostitory
                    </button>
                </a>
            </div>
            <div>

                <a href="https://helpyhelperton.onrender.com/">
                    <img className="portpicture" src={lalogo} />
                </a>
                <a href="https://github.com/rtocastro/helpyhelperton">
                    <br></br>
                    <button className="ghbutton">
                        LA Github Repostitory
                    </button>
                </a>
            </div>
        </>


    )
}