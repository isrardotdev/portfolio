import { useState } from "react";
import "./App.css";
import {
  MenuBtn,
  MyProjectsSection,
  SkillSection,
  SpotifyPlayList,
} from "./Components";
import {
  aboutImage,
  metalImage,
  nfakImg,
  valo,
  cssEnthu,
} from "./assets/imgIndex";
import {
  LiaDownloadSolid,
  FaMusic,
  FaLinkedinIn,
  FaBars,
  SiGmail,
  SlOptions,
  TbBrandGithubFilled,
  FaXTwitter,
  FaXmark,
} from "./icons";
import { motion, AnimatePresence } from "framer-motion";
// creating a small chrome's dino like game: under development
// import { Canvas } from "./Canvas/Canvas";

function App() {
  const [overlay, setOverlay] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const [openSongs, setOpenSongs] = useState(false);

  const onHover = (e) => {
    setOverlay(true);
  };
  const offHover = (e) => {
    setOverlay(false);
  };

  const handleNav = () => {
    setOpenNav((prev) => !prev);
  };

  const openPlaylist = () => {
    setOpenSongs((prev) => !prev);
  };

  return (
    <main className="overflow-x-hidden  max-w-full h-[100vh]">
      <AnimatePresence>
        {overlay && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className={` w-[100vw] h-[100vh] fixed  bg-black opacity-50 z-[100]`}
          ></motion.div>
        )}
      </AnimatePresence>

      <div className="first-fold p-6 max-md:bg-cover max-md:bg-left ">
        <nav className="nav container-custom ">
          <div className=" max-md:hidden flex justify-end gap-5">
            <MenuBtn content={"About me"} link="#about-me" />
            <MenuBtn content={"Projects"} link="#projects" />
            <MenuBtn content={"Contact"} link="#connnect" />
          </div>
          <div className=" md:hidden flex justify-end gap-5 relative">
            <button
              type="button"
              className="text-white text-4xl"
              onClick={handleNav}
            >
              {openNav ? <FaXmark /> : <FaBars />}
            </button>
            <AnimatePresence>
              {openNav && (
                <motion.ul
                  initial={{
                    translateY: -300,
                    transformOrigin: "top right",
                    rotate: 90,
                  }}
                  animate={{ translateY: 0, rotate: 0 }}
                  exit={{
                    translateY: -300,
                    transformOrigin: "top left",
                    rotate: -90,
                  }}
                  transition={{ duration: 1, type: "spring" }}
                  className="menu-items absolute top-10 right-0"
                >
                  <li>
                    <a href="#about-me">About me</a>
                  </li>
                  <li>
                    <a href="#projects">Projects</a>
                  </li>
                  <li>
                    <a href="#connnect">Contact</a>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Hero Header starts */}
        <section className="hero-section container-custom h-[90vh] grid content-center max-md:h-[30vh] max-md:mb-[250px]">
          <div className="hero-info w-fit m-auto mb-[-230px] max-md:mb-[-150px]">
            <h1 className=" text-[230px] leading-[0.9em] text-[#DBFF00] max-md:text-[150px]">
              Hello
            </h1>
            <h3 className="heading text-[84px] leading-[1em] text-right max-md:text-[60px]">
              Iam Israr
            </h3>
          </div>
        </section>

        <section className="front-end container-custom heading text-4xl mb-8 mt-40 max-md:mt-60 max-md:text-center">
          Front-end Developer
        </section>
        {/* Hero Header ends */}

        <section className="info container-custom flex flex-nowrap items-center mb-10 max-md:flex-col max-md:w-full max-md:mb-10">
          <div className="info-inner">
            <div className="info-inner-box">
              Based in <br />
              Mumbai, India
            </div>
          </div>
          <div className="info-inner">
            <div className="info-inner-box">
              3+ years of
              <br /> work exp.
            </div>
          </div>
          <div className="info-inner flex flex-nowrap items-center justify-evenly gap-3">
            <span className="ml-8">
              View <br />
              my resume
            </span>
            <span className="rounded-full w-16 h-16 bg-[#DBFF00] text-black grid content-center transition-all duration-200 justify-center text-[32px] hover:bg-[#BEC200]">
              <a href={'/ISRAR KHAN_Resume.pdf'} target="_blank">
                <LiaDownloadSolid />
              </a>
            </span>
          </div>

          <div className="info-inner m-auto flex items-center justify-center gap-7 text-[28px]">
            Care for songs?
            <span className="rounded-full w-16 h-16 bg-[#4DF4FF] text-black flex justify-center items-center text-[32px] relative ">
              <button onClick={openPlaylist} className="z-10">
                <FaMusic />
              </button>
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4DF4FF] opacity-75 "></span>
            </span>
          </div>
        </section>
      </div>
      {openSongs && (
        <div>
          <SpotifyPlayList />
        </div>
      )}
      {/* about section */}
      <section
        id="about-me"
        className="about-us container-custom flex my-20  max-md:flex-col "
      >
        <div className="about-left w-6/12 max-md:w-full max-md:mx-auto">
          <div className="about-wrap p-5 rounded-3xl w-10/12 bg-[#262626] max-md:w-full max-md:mb-8">
            <div className="bar-main mb-5 rounded-[12px] h-12 bg-gradient-to-r from-[#4cf4fe] to-[#3b9aa0]">
              <div className="inner-bar rounded-[12px] flex flex-nowrap px-3 py-2  h-12 bg-gradient-to-r from-[#DBFF00] to-[#A0FB6A]">
                <div className="bar-pusher h-full w-0"></div>
                <div className="bar-scroller w-[60px] bg-white h-full rounded-md border-5 border-[#BBD905]"></div>
              </div>
            </div>
            <div className="about-image relative">
              <img src={aboutImage} alt="" />
              <img
                src={metalImage}
                alt=""
                className="metal-spining absolute left-[15%] bottom-[20%] w-8/12 animate-spin "
              />
            </div>
          </div>
        </div>

        <div className="about-right w-6/12 flex flex-col max-md:w-full max-md:mb-8">
          <h2 className="heading text-6xl">About us</h2>
          <p className="mt-4 md:pr-32">
            An enthusiastic technocrat who thrives on challenges. I stand for
            well reasoned upskilling aimed at building smooth user interactions.
            with my two years of extensive work experience, Iam ready to dive
            into a junior frontend dev role!
          </p>
          <p className="my-4 md:pr-32">
            Teamwork and collaboration is my jam, you can still count on me for
            a solo web voyage too. The goal is to balance the visual
            interactivity and immaculate functionality of any web page or
            application. A dash of seamless animation always does the trick.
          </p>

          <div className="cards-container flex-grow-[1] relative z-[150] max-md:mt-8 max-md:h-[300px]">
            <div
              onMouseOver={onHover}
              onMouseLeave={offHover}
              className="card bg-[#DBFF00] text-black flex  flex-nowrap items-center w-96 rounded-2xl absolute top-0 left-0  hover:translate-y-[-20px] hover:z-[101] transition-all duration-500 max-md:w-[340px]"
            >
              <div className="image w-32">
                <img
                  src={cssEnthu}
                  alt="nusrat fateh ali khan singing qawwali"
                />
              </div>
              <div className="title heading text-3xl ml-3">
                CSS <br />
                Enthusiast
              </div>
              <div className="option-dots ml-auto mr-5 text-3xl text-[#C2E105]">
                <SlOptions />
              </div>
            </div>
            <div
              onMouseOver={onHover}
              onMouseLeave={offHover}
              className="card bg-[#4CF4FF] text-black flex  flex-nowrap items-center w-96 rounded-2xl absolute top-[90px] left-[55px] rotate-6 hover:rotate-0  hover:translate-y-[-50px] hover:z-[101] transition-all duration-500 max-md:w-[340px] max-md:left-[20px]"
            >
              <div className="image w-32">
                <img
                  src={nfakImg}
                  alt="nusrat fateh ali khan singing qawwali"
                />
              </div>
              <div className="title heading text-3xl ml-3">
                Ghazal Geek <br /> on Fridays
              </div>
              <div className="option-dots ml-auto mr-5 text-3xl text-[#2CBFC9]">
                <SlOptions />
              </div>
            </div>
            <div
              onMouseOver={onHover}
              onMouseLeave={offHover}
              className="card bg-white text-black flex  flex-nowrap items-center w-96 rounded-2xl absolute top-[150px] left-[70px] -rotate-6 hover:rotate-0  hover:translate-y-[-50px] hover:z-[101] transition-all duration-500 max-md:w-[360px] max-md:left-[0px]"
            >
              <div className="image w-32">
                <img src={valo} alt="nusrat fateh ali khan singing qawwali" />
              </div>
              <div className="title heading text-3xl ml-3">
                Gaming is a <br />
                love language
              </div>
              <div className="option-dots ml-auto mr-5 text-3xl text-[#D9D9D9]">
                <SlOptions />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end of about section */}

      {/* Skill section start */}
      <SkillSection />
      {/* Skill section end */}

      {/* My project section start */}
      <MyProjectsSection />
      {/* My project section ends */}

      {/* Game stection starts */}
      {/* <div className="game-section">
      <section className=" h-[600px] grid content-center container-custom my-20" id="game">
      <Canvas width="1366" height="700" />
      </section>
      </div> */}
      {/* Game stection ends */}

      {/* Footer section */}
      <footer id="connnect" className="mb-8">
        <section className="footer relative mb-28 container-custom bg-['1f1f41'] border-[#DBFF00] border-4 px-10 py-20 flex flex-nowrap max-md:flex-col max-md:m-5">
          <div className="footer-left w-6/12 max-md:w-full">
            <h3 className="heading text-[140px] leading-[0.9em] max-md:text-[60px] max-md:text-center">
              Reach Out
            </h3>
            <div className="flex gap-4 mt-10 max-md:flex-wrap max-md:justify-evenly">
              <a
                href="https://www.linkedin.com/in/israr-khan-a8824ba4/"
                target="_blank"
              >
                {" "}
                <div className="connect">
                  <span className="mr-[35px]">
                    <FaLinkedinIn />
                  </span>
                  <div className="whitespace-nowrap textnomo">/israr-khan</div>
                </div>
              </a>
              <a href="https://github.com/isrardotdev/" target="_blank">
                {" "}
                <div className="connect">
                  <span className="mr-[35px]">
                    <TbBrandGithubFilled />
                  </span>
                  <div className="whitespace-nowrap">/isrardotdev</div>
                </div>
              </a>
              <a href="mailto:isrark005@gmail.com" target="_blank">
                <div className="connect">
                  <span className="mr-[35px]">
                    <SiGmail />
                  </span>
                  <div className="whitespace-nowrap">isrark005@</div>
                </div>
              </a>
              <a href="https://twitter.com/isrardotdev" target="_blank">
                <div className="connect">
                  <span className="mr-[35px]">
                    <FaXTwitter />
                  </span>
                  <div className="whitespace-nowrap">/isrardotdev</div>
                </div>
              </a>
            </div>

            <div className="bar-main rounded-[12px] h-12 bg-[#4DF4FF] absolute w-[500px] -bottom-7 max-md:-top-7 max-md:w-[80%]">
              <div className="inner-bar rounded-[12px] flex flex-nowrap px-3 py-2  h-12 bg-gradient-to-r from-[#DBFF00] to-[#A0FB6A]">
                <div className="bar-pusher h-full w-0"></div>
                <div className="bar-scroller w-[60px] bg-white h-full rounded-md border-5 border-[#BBD905]"></div>
              </div>
            </div>
          </div>
          <div className="footer-right w-6/12 flex flex-wrap justify-center items-center text-center max-md:flex-col max-md:mt-10 max-md:gap-8 max-md:w-full">
            <div className="w-6/12">
              <a href="#about-me">
                <button className="border-[2px] py-5 w-[220px] rotate-[14deg] rounded-[50px] text-[28px] hover:bg-white hover:text-black transition-all duration-[250ms]">
                  About me
                </button>
              </a>
            </div>
            <div className="w-6/12">
              <a href={'/ISRAR KHAN_Resume.pdf'} target="_blank">
                <button className="border-[2px] py-5 w-[220px] rotate-[14deg] rounded-[50px] text-[28px] hover:bg-white hover:text-black transition-all duration-[250ms]">
                  Resume
                </button>
              </a>
            </div>
            <div className="w-full">
              <a href="#projects">
                <button className="border-[2px] py-5 w-[220px] -rotate-6 rounded-[50px] text-[28px] hover:bg-white hover:text-black transition-all duration-[250ms] max-md:rotate-[14deg]">
                  My Projects
                </button>
              </a>
            </div>
          </div>
        </section>
      </footer>
    </main>
  );
}

export default App;
