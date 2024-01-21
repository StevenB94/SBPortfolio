import logo from './logo.svg';
import './App.css'; 

function Nav() {
    return (
        <nav className='App'>
            <a href='/' className='title'>
            <img src={logo} className="App-logo" alt="logo" />
            </a>
             <ul>
                <li className='about'>
                <a href="/about">About</a>
                </li>
                <li className='projects'>
                <a href="/projects">Projects</a>
                </li>
                <li className='contact'>
                <a href="/contact">Contact</a>
                </li>
            </ul>       
        </nav>
    );
}

export default Nav;