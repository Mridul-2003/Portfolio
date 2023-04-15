import'./index.scss';

import image from '/Users/useradmin/Desktop/React-Portfolio/Portfolio/src/assets/images/kisspng-web-development-3d-computer-graphics-web-design-ma-3d-dental-treatment-for-toothache-5ae321b6e996a3.9721291115248347429568.png';

const About = ()=>{
    return(
    <>
        <div className="about-container">
            <div className="content">
                <h1>Hello</h1>
                <span>I am Full Stack Developer and </span>
                <span>Python Developer.</span>
                <br/>
                <p>
                    My name is Mridul and I am currently
                    a B.tech second year student
                    at GGSIPU and i am pursuing B.tech in Artificial intelligence
                    and Data Science.
                    I am outgoing, dedicated, and open-minded. 
                    I get across to people and adjust to changes 
                    with ease. I believe that a person should work
                     on developing their professional skills and 
                     learning new things all the time.
                </p>
                <a href="/">
                    <button>Read More</button>
                </a>
            </div>
            <div className="img">
                <img src={image} alt="" />
            </div>
            
        </div>
        
    </>   

    )
}
export default About;