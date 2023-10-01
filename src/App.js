import React from 'react';
import Typewriter from 'typewriter-effect'; // Import the Typewriter component

import './App.css';

// img imports
import nikeImg from "./Nike-img.png";
import weatherImg from "./Weather-img.png";
import agencyimg from "./agencyimg.png";
import quizImg from "./quizImg.png";
import expensemanagerImg from "./expensemanagerImg.png";


// Define your typewriter options here
const typewriterOptions = {
  strings: ["Huzaifa Khan", "Student", "Full-Stack-Developer", "Mern-Stack-Developer", "React-Developer", "Frontend Developer", "Backend Developer"],
  autoStart: true,
  loop: true,
  // Other options here...
};


const myskillsarray = [
  {
    name: 'Html',
    number: "100%"
  }, {
    name: 'Css',
    number: "100%"
  }, {
    name: 'Bootstrap',
    number: "100%"
  }, {
    name: 'Java Script',
    number: "85%"
  }, {
    name: 'Firebase',
    number: "90%"
  }, {
    name: 'Node Js',
    number: "70%"
  }, {
    name: 'Express Js',
    number: "90%"
  }, {
    name: 'Mongo DB',
    number: "90%"
  }, {
    name: 'React Js',
    number: "70%"
  }
]

const data = [
  {
    name: 'Weather Application',
    link: 'https://weather-app-react-beta.vercel.app/',
    imgsrc: weatherImg,
    tools: 'React Js'
  },
  {
    name: 'Nike Website',
    link: 'https://nike-website-five.vercel.app/',
    imgsrc: nikeImg,
    tools: 'React Js'
  },
  {
    name: 'Web Agency Template',
    link: 'https://agency-templete1.netlify.app/',
    imgsrc: agencyimg,
    tools: 'HTML, CSS, Bootstrap, JavaScript'
  },
  {
    name: 'Expense Manager',
    link: 'https://shorturl.at/gmNW3',
    imgsrc: expensemanagerImg,
    tools: 'HTML, CSS, Bootstrap, JavaScript'
  },
  {
    name: 'JavaScript Quiz App',
    link: 'https://shorturl.at/hwzDQ',
    imgsrc: quizImg,
    tools: 'HTML, CSS, Bootstrap, JavaScript'
  }
]


function App() {
  return (
    <div className="body">
      <Navbar />
      <Home />
      <Aboutme />
      <Myprojects />
      <Myskills />
      <Contactme />
      <Footer />
    </div>
  );
}


// navbar
function Navbar() {
  return (
    <nav className='d-flex flex-wrap navbarzk align-items-center justify-content-around shadow ' id='home'>
      <h3 className='my-3'>Huzaifa Khan</h3>
      <h5 className='navbarothername flex-wrap justify-content-center d-flex flex-reverse-row text-center'>
        <a className='text-decoration-none my-3' href="#home"><span className='mx-2 btn btnofnav'>HOME</span></a>
        <a className='text-decoration-none my-3' href="#about-me"><span className='mx-2 btn btnofnav'>ABOUT ME</span></a>
        <a className='text-decoration-none my-3' href="#myprojects"><span className='mx-2 btn btnofnav'>MY PROJECTS</span></a>
        <a className='text-decoration-none my-3' href="#myskills"><span className='mx-2 btn btnofnav'>MY SKILLS</span></a>
        <a className='text-decoration-none my-3' href="#cotactme"><span className='mx-2 btn btnofnav'>CONTACT ME</span></a>
      </h5>
    </nav>
  );
}

// Home
function Home() {
  return (
    <div data-aos="fade-in" className='d-flex flex-wrap justify-content-around align-items-center px-2' id='homearea'>
      <div className='d-flex px-1 justify-content-center align-items-start flex-column'>
        <div className='fs-1 mx-auto welcometxt ms-2'>
          Hello Everyone, I am
        </div>
        <div className='d-flex ms-2 autotypingtxt'>

          <span className='text-wrap autotypespan'>
            <Typewriter
              options={typewriterOptions} // Pass the options object here
            /></span>
        </div>
      </div>
      <div style={{ minWidth: "40%", maxWidth: '100%' }}>
        <img className='animationimg mt-1' src={'https://avatars.githubusercontent.com/u/122217933?v=4'} alt="" />

      </div>
    </div>
  );
}


// About me
function Aboutme() {
  return (
    <div data-aos-offset="250" data-aos-duration="1500" data-aos="fade-right" className='container pt-5' id='about-me'>
      <h1 className='headingwithbluecolor'>About Me</h1>

      <p className='mt-4'>
        <div>
          Hi, my name is Huzaifa Khan. I am currently learning web development course from Saylani Mass IT Training "SMIT" and As a student currently enrolled in the Mern stack development course at Saylani Mass IT Training, I have a unique opportunity to showcase my growing expertise and knowledge in web development through my portfolio. With a deep understanding of HTML, CSS, Bootstrap, JavaScript, Firebase, Node JS,Mongo Db, Express Js, React Js. I am well-equipped to create visually stunning and responsive websites that are optimized for a variety of devices.
          In addition to my proficiency in front-end web development, I also possess a basic knowledge of JavaScript, which is a crucial component of the MERN stack. With this foundational understanding, I am poised to delve deeper into the complexities of back-end development using Node.js and Express.js.
        </div>

        <div className='mt-2'>
          As I continue to progress through the Mern stack development course, my portfolio will serve as a living record of my growth and development. By including projects that demonstrate my ability to integrate various technologies and solve complex problems, I can showcase my unique strengths and abilities to potential employers.
          Overall, my portfolio is an essential tool for showcasing my skills and expertise in web development, and as I continue to learn and grow, it will serve as a powerful testament to my commitment to the craft. With a deep understanding of HTML, CSS, Bootstrap, and a growing knowledge of JavaScript, I am well on my way to becoming a skilled and successful Mern stack developer.
        </div>
      </p>
    </div>
  )
}


// My Projects
function Myprojects() {


  return (
    <div data-aos-offset="200" data-aos-duration="1000" data-aos="fade-left" className='container pt-2 myprojectsdiv' id='myprojects'>
      <h1 className='headingwithbluecolor'>My Projects</h1>
      <div className='d-flex justify-content-around flex-wrap mt-3'>
        {data.map((x, i) => <SingleCardofMyProject key={i} arraydata={x} />)}
      </div>
    </div>
  )
}
// signle card of my project
function SingleCardofMyProject({ arraydata }) {
  return (
    <div className="card my-2" style={{ width: '18rem' }}>
      <img src={arraydata.imgsrc} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{arraydata.name}</h5>
        <p className="card-text">This project is made with "{arraydata.tools}"</p>
        <a target='blank' href={arraydata.link} className="btn btnofmyproject">Want to See Project</a>
      </div>
    </div>
  )
}


// my skills
function Myskills() {
  return (
    <div data-aos-offset="250" data-aos-duration="1500" data-aos="fade-right" className='container pt-5 myprojectsdiv mb-5' id='myskills'>
      <div>
        <h1 className='headingwithbluecolor mb-5'>My Skills</h1>
        <div>
          {myskillsarray.map((single, i) => <Singleskillline myskillsarray={single} key={i} />)}
        </div>
      </div>
    </div>
  )
}

function Singleskillline({ myskillsarray }) {
  return (
    <div style={{ backgroundColor: 'rgba(255,255,255,5%)' }} className='d-flex container justify-content-between flex-wrap ps-3 my-2 text-start align-items-center rounded backgroundhover py-2'>
      <span>{myskillsarray.name}</span>
      <div className="progress fs-6" role="progressbar" aria-label="Example 20px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ height: "30px", width: "500px" }}>
        <div className="progress-bar" style={{ width: myskillsarray.number, backgroundColor: 'rgba(91 180 255, 90%)' }}>{myskillsarray.number}</div>
      </div>

    </div>
  )
}

// contact me 
function Contactme() {
  return (
    <div data-aos-offset="500" data-aos-duration="2000" data-aos="fade-left" className='container pt-5 myprojectsdiv w-100 mb-5 w-100' id='cotactme'>
      <h1 className='headingwithbluecolor mb-5'>Contact Me</h1>
      <div className='mt-2 cotactmediv'>
        <div className='rounded d-flex align-items-center my-2 px-3'>
          <h6 className='d-inline container py-2 my-2 text-start align-items-center rounded'>
            <i className="fa-solid me-2 fa-envelope fontawesome"></i> <a className='text-decoration-none d-inline me-2 headingwithbluecolor aofcontactme' href="mailto:huzaifakhanofficial01@gmail.com">Click me</a> to open my gmail account
          </h6>
        </div>
        <div className='rounded d-flex align-items-center my-2 px-3'>
          <h6 className='d-flex container py-2 my-2 text-start align-items-center rounded'>
            <i className="fa-solid me-2 fa-phone fontawesome"></i> +92-3322433615
          </h6>
        </div>
        <div className='rounded d-flex align-items-center my-2 px-3'>
          <h6 className='d-inline container py-2 my-2 text-start align-items-center rounded'>
            <i className="fa-brands me-2 fa-github fontawesome"></i> <a className='text-decoration-none d-inline me-2 headingwithbluecolor aofcontactme' href="https://github.com/huzaifa-khan-official">CLick Me</a> to open my github proifle
          </h6>
        </div>
        <div className='rounded d-flex align-items-center my-2 px-3'>
          <h6 className='d-inline container py-2 my-2 text-start align-items-center rounded'>
            <i className="fa-brands me-2 fa-linkedin fontawesome"></i> <a className='text-decoration-none d-inline me-2 headingwithbluecolor aofcontactme' href="https://www.linkedin.com/in/muhammad-huzaifa-03904a267/" >Click Me</a> to open my linkedin proifle
          </h6>
        </div>
        <div className='rounded d-flex align-items-center my-2 px-3'>
          <h6 className='d-flex container py-2 my-2 text-start align-items-center rounded'>
            <i className="fa-solid me-2 fa-house fontawesome"></i> B-217, Block-1, Metroville, S.I.T.E., Karachi.</h6>
        </div>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <div className='d-flex container footerarea mt-5 align-items-center flex-column justify-content-evenly'>
      <div className='fs-1 headingwithbluecolor'>Huzaifa Khan</div>
      <div className='headingwithbluecolor'>
        All Rights Reversed.
      </div>
    </div>
  )
}


export default App;
