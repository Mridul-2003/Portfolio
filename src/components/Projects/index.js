import './project.scss'
import image1 from '/Users/useradmin/Desktop/React-Portfolio/Portfolio/src/assets/images/p1.png'
import image2 from '/Users/useradmin/Desktop/React-Portfolio/Portfolio/src/assets/images/p2.png'
import image3 from '/Users/useradmin/Desktop/React-Portfolio/Portfolio/src/assets/images/p3.png'
import image4 from '/Users/useradmin/Desktop/React-Portfolio/Portfolio/src/assets/images/p4.png'
const Projects = ()=>{
 return(
    <>
    <div className="project-container">
        <h1 className="title">Latest Projects</h1>
        <hr/>
        <br/>
        <br/>
        <div className="projects">
        <div className="text1">
                <h1>1) Ai Disease Predictor</h1>
                <a href="https://github.com/Mridul-2003/Multiple-Disease-Prediction/tree/main/Multiple-Disease-Predictor">Source Code</a>
                <p className="ss">Screenshot: <i class="arrow right"></i></p>
        </div>
        
            <img src={image1} alt="" className="image" />
            
            <div className="text1">
                <h1>2)Automate Analysis</h1>
                
                <a href="https://github.com/Mridul-2003/Automate_Analysis">Source Code</a>
                <p className="ss">Screenshot: <i class="arrow right"></i></p>
            </div>
            <img src={image2} alt="" className="image" />
            
            <div className="text1">
                <h1>3)Spotify Clone</h1>
                <a href="https://github.com/Mridul-2003/spotify_clone">Source Code</a>
                <p className="ss">Screenshot: <i class="arrow right"></i></p>
            </div>
            <img src={image3} alt="" className="image" />
            

            <div className="text1">
                <h1>4)Image Galery</h1>
                <a href="https://github.com/Mridul-2003/Image-gallery">Source Code</a>
                <p className="ss">Screenshot: <i class="arrow right"></i></p>
            </div>
            <img src={image4} alt="" className="image" />
            
        
            
    </div>
    </div>
    </>
 )
};
export default Projects;