import React from "react";

function Home(){
    return(
        <body>
            <center>
<button type="button" class="btn">
  <strong>MY RESUME</strong>
  <div id="container-stars">
    <div id="stars"></div>
  </div>

  <div id="glow">
    <div class="circle"></div>
    <div class="circle"></div>
  </div>
</button>
    </center><br/>
    <center>
    <div class="container">
  <div class="box">
  <img src="https://velmuurgan-resume.netlify.app/assert/M.velmurugan2.jpg" alt="no image" className="image"/>
  <h1>M.VELMURUGAN IAF</h1>
    <div>
    </div>
  </div>
</div>
</center>
<br/><br/><br/>
<button><h1>Home</h1></button><br/><br/> 
 <div class="card">
      <p class="card-title">MY SELF</p>
      <p class="small-desc">
      It is a great pleasure to introduce my self iam m.velmurugan iam from kottaiplayam,iam currently purseuing my bsc.computer science at kg college of arts and science,i had completed my schooling at vidyaa vikas matric hr sec school -karamadai
      </p>
      <div class="go-corner">
        <div class="go-arrow">→</div>
      </div>
    </div><br/><br/><br/>
    <button><h1>EDUCATION</h1></button><br/><br/><br/><br/> 
    <center>
<div class="cards1">
    <div class="card1 red">
        <p class="tip">SSLC</p>
        <p class="second-text">80%</p>
    </div>
    <div class="card1 blue">
        <p class="tip">HRSC</p>
        <p class="second-text">60%</p>
    </div>
    <div class="card1 green">
        <p class="tip">LAST SEMESTER</p>
        <p class="second-text">80%</p>
    </div>
</div>
</center><br/><br/><br/>
<button><h1>SKILLS</h1></button><br/><br/><br/>
<table>
    <tr>
        <th>
 <div class="myCard">
        <div class="innerCard">
            <div class="frontSide">
                <p class="title">SOFT SKILLS</p>
            </div>
            <div class="backSide">
                <p class="title">1.TIME MANAGEMENT</p>
                <p class="title">2.TEAM WORK</p>
                <p class="title">3.ORGANIZATION</p>
                <p class="title">4.COMMUNICATION</p>
                <p class="title">5.OPEN MINDED</p>
                <p class="title">6.ADAPTABILITY</p>
            </div>
        </div>
    </div>
    </th>
    <th className="table1">
    <div class="myCard">
        <div class="innerCard">
            <div class="frontSide">
                <p class="title">TECHNICAL SKILLS</p>
            </div>
            <div class="backSide">
            <p class="title">1.WEB DEVELOPER</p>
                <p class="title">2.JAVA DEVELOPER</p>
                <p class="title">3.PYTHON</p>
                <p class="title">4.MS WORD</p>
                <p class="title">5.MS DOCUMENT</p>
                <p class="title">6.MS EXCEL</p>
            </div>
        </div>
    </div>
    </th>
    </tr>
</table><br/><br/><br/>
<button><h1>CERTIFICATION'S</h1></button><br/><br/><br/>
<table>
    <tr>
        <th className="table2">
        <div class="myCard">
        <div class="innerCard">
            <div class="frontSide">
                <p class="title">CSS & BOOTSTRAP </p>
            </div>
            <div class="backSide">
           <img src="https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~CNPYT9CHPT69/CERTIFICATE_LANDING_PAGE~CNPYT9CHPT69.jpeg" 
           className="image2"/>
           </div>
           </div>
           </div> 
        </th>
        <th className="table2">
        <div class="myCard">
        <div class="innerCard">
            <div class="frontSide">
                <p class="title">PYTHON DEVELOPING</p>
            </div>
            <div class="backSide">
           <img src="https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~F5W84H5DKQU4/CERTIFICATE_LANDING_PAGE~F5W84H5DKQU4.jpeg" 
           className="image2"/>
           </div>
           </div>
           </div> 
        </th>
        <th className="table2">
        <div class="myCard">
        <div class="innerCard">
            <div class="frontSide">
                <p class="title">COMMAND LINE IN LINUX</p>
            </div>
            <div class="backSide">
           <img src="https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~244W9YAG5925/CERTIFICATE_LANDING_PAGE~244W9YAG5925.jpeg" 
           className="image2"/>
           </div>
           </div>
           </div> 
        </th>
    </tr>
</table>
     </body>
    );
    
};


export default Home;
