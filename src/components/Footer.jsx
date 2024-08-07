import linkedinlogo from '../assets/linkedinlogo.png';
import githublogo from '../assets/githublogo.png';
import '../App.css';

export default function Footer(){
    return(
        <>

        <h3>My Links</h3>
        <a href="https://www.linkedin.com/in/ricardo-torres-a0b43267">
        <img className="icon" title="Linked-In" src={linkedinlogo}/>
        </a>

        <a href="https://github.com/rtocastro">
        <img  className="icon" title="GitHub" src={githublogo}/>
        </a>
        </>
    )
}