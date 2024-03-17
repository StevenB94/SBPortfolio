import React from "react";
import "../styles/Home.css"

function Home(){
    return(
        <div className="home">
            <div className="about"> 
            <h2> Hi, My Name is Steven</h2>
            <div className="prompt">
                <p>
                    A Software Developer with a passion to learn and create.
                </p>
                
            </div>
            </div>
            <div className="skills">
                <h1> Skills </h1>
                <ol className="list">
                    <li className="item">
                        <h2>Front-End</h2>
                        <span>ReactJS, HTML, Flutter, Bootstrap, Yarn, TailwindCSS</span>
                    </li>
                    <li className="item">
                        <h2>Back-End</h2>
                        <span>NodeJS, MySQL, MongoDB, Express</span>
                    </li>
                    <li className="item">
                        <h2>Languages</h2>
                        <span>JavaScript, Python, TypeScript</span>
                    </li>
                </ol>
            </div>
        </div>
    );
}

export default Home;