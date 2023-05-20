import React from "react";
import Navbar from "../Navbar/Navbar";
import "./About.css";
import Abhiram from "../../image/Abhiram.jpeg"
import Avishkar from "../../image/Avishkar.jpeg"
import Prof from "../../image/Prof.jpg"
import Prasad from "../../image/Prasad.jpeg"
import Rutuja from "../../image/Rutuja.jpeg"
const About = () => {
  return (
    <>
      <Navbar />
      <div className="about">
        <h1>About Us</h1>
        <div className="person">
          <img src={Prof} alt="Person 3" />
          <div className="person-info">
            <h2>R. S. Mawale</h2>
            <p>Project Guide</p>
            <p>
            Our project guide for the final year project Prof R.S. Mawale. Guided us from the start from helping us choosing the domain and selecting problem statement till guiding us with the Deep Learning Models aand everything in between 
            </p>
          </div>
        </div>



        <div className="person">
          <img src={Rutuja} alt="Person 1" />
          <div className="person-info">
            <h2>Rutuja Kadam</h2>
            <p>Data Scientist</p>
            <p>
            Rutuja is a data scientist who has been working on our Deblurring of X-ray Image project for the past few months. She has expertise in machine learning and previously handaled all the machine learning side of Crop-Predictor in the Minor Projecta along with that she exstensively contributed with  algorithms that power our image processing tool.
            </p>
          </div>
        </div>
        <div className="person">
          <img src={Abhiram} alt="Person 2" />
          <div className="person-info">
            <h2>Abhiram Deshpande</h2>
            <p>Backend Developer</p>
            <p>
            Abhiram is the backend developer of our Deblurring of X-ray Image project. He has a deep understanding of backend technologies and frameworks especially Django.He has previously made Django based projects providing RESTFULL sevices and also part of the College Website Team
            </p>
          </div>
        </div>
        <div className="person">
          <img src={Avishkar} alt="Person 3" />
          <div className="person-info">
            <h2>Avishkar Ghadge</h2>
            <p>Frontend Developer</p>
            <p>
            Avishkar is responsible for designing the user interface and user experience of our Deblurring of X-ray Image project. He has toyed a bit with  with React and Javascript and has previously collabrated with Rutuja to create a Crop-Predictor
            </p>
          </div>
        </div>
        <div className="person">
          <img src= {Prasad} alt="Person 4" />
          <div className="person-info">
            <h2>Prasad Suryavanshi</h2>
            <p>Frontend and Backend Devloper</p>
            <p>
            Prasad has worked on both backend and the frontend side of  Deblurring  X-ray Image project. He has extensive experience in HTML CSS projects and has helped us deliver our tool on time and within budget.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
