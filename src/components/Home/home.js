import './home.scss'
import React from 'react';
import TypeWriterEffect from 'react-typewriter-effect';
import AnimatedCursor from "react-animated-cursor"
import Logo from "./Logo"
import Resume from "/Users/useradmin/Desktop/React-Portfolio/Portfolio/src/assets/resume.pdf"
const Home = ()=>{
    return(
        <div className="container home-page">
          <AnimatedCursor
                color="255,255,255"
                innerSize={8}
                outerSize={35}
                innerScale={1}
                outerScale={1.7}
                outerAlpha={0}
                outerStyle={{
                    border: '3px solid #fff'
                }}
                />
        <div className="text">
        
            <h1>Hello,it's me</h1>
            <span>Mridul</span>
            <h2>
            <TypeWriterEffect
               
                
                cursorColor="#3F3D56"
                multiText={[
                'I am Full Stack Developer',
                'I am a Python Developer',
                ]}
                loop={true} 
                nextTextDelay={1000}
                typeSpeed={10}
      />
            </h2>
            <a href={Resume}>
                <button>Download Resume</button>
            </a>
        </div>
        <Logo/>
        
    </div>
    )
}

    


export default Home