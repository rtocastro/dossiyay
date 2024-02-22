import linkedinlogo from '../assets/linkedinlogo.png';
import githublogo from '../assets/githublogo.png';
import '../App.css';

export default function Footer(){
    return(
        <>

        <h3>Footer Links</h3>
        <a href="https://www.linkedin.com/in/rick-torres-a0b43267/">
        <img class="icon" src={linkedinlogo}/>
        </a>
        <block></block>
        <a href="https://github.com/rtocastro">
        <img  class="icon" src={githublogo}/>
        </a>
        </>
    )
}