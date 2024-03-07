import TeamCard from "../components/TeamCard";
import TeamCard2 from "../components/TeamCard2";
import TeamCard3 from "../components/TeamCard3";
import  { Link } from "react-router-dom/cjs/react-router-dom.min";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faInstagram, faFacebook, faTwitter, faLinkedin} from "@fortawesome/free-brands-svg-icons";
export default function Team() {
    return (
        <div className="flex-col flex items-center mt-10 pb-10">
            <div className="flex flex-col items-center gap-5 py-20  ">
        <p className="text-center text-[#737373] text-base font-bold tracking-tight ">
          WHAT WE DO
        </p>
        <h3 className="text-center text-slate-800 text-5xl font-bold leading-[80px] tracking-tight lg-text-6xl">
          Inovation tailored for you
        </h3>
        <p className="text-center text-neutral-500 text-base font-bold font-['Montserrat']  tracking-tight flex gap-5">
          <span className="text-slate-800">Home</span>
          <img src="public/rightVector.svg" />
          <span className="text-[#737373]">Team</span>
        </p>
      </div>
      <section className="flex flex-col lg:flex-row justify-center items-center shrink-0 gap-2.5">
        <div>
          <img src="team1.jpeg" className="shrink-0"></img>
        </div>
        <div className="flex lg:flex-col gap-2.5">
          <img
            src="team2.jpeg"
            className="w-[200px] h-[260px] md:w-[361px] md:h-[260px] object-cover shrink-0"
          ></img>
          <img
            src="team3.jpeg"
            className="w-[200px] h-[260px] md:w-[361px] md:h-[260px] object-cover shrink-0 "
          ></img>
        </div>

        <div className="flex lg:flex-col gap-2.5">
          <img
            src="team4.jpeg"
            className="w-[200px] h-[260px] md:w-[361px] md:h-[260px] object-cover shrink-0"
          ></img>
          <img
            src="team5.jpeg"
            className="w-[200px] h-[260px] md:w-[361px] md:h-[260px] object-cover shrink-0"
          ></img>
        </div>
      </section>
            
      <section className="flex flex-col flex-wrap items-center justify-center">
        <div className="flex flex-col items-center justify-center py-28 gap-28">
          <h2 className="text-4xl font-bold text-center ">
            Meet Our Team
          </h2>

          <div className="flex flex-row gap-5 mt-2 justify-center flex-wrap">
            <TeamCard />
            <TeamCard2 />
            <TeamCard3 />
          </div>
        </div>
      </section>
            <div className="container mx-auto text-center my-[5rem] flex flex-col gap-[2rem] sm:w-11/12">
        <h2 className="text-center text-slate-800 text-4xl font-bold font-['Montserrat']  tracking-tight xl:text-5xl">
          Start your 14 days free trial
        </h2>
        <h6 className="w-[40%] mx-auto sm:w-[100%] text-center text-[#737373] text-base font-normal font-['Montserrat'] tracking-tight max-w-md">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent.
        </h6>
        <Link to="/pricing"> <button className="text-center border rounded-lg px-5 py-3 bg-[#23A6F0] text-white font-bold hover:bg-blue-600 text-sm sm:text-lg">
          Try it free now
        </button></Link>
        <div
          className="text-4xl flex justify-center gap-3"
        >
          <a href="https://www.instagram.com/">
            <FontAwesomeIcon icon={faInstagram}
             style={{color: "23A6F0"}} />
          </a>
          <a href="https://www.facebook.com/">
            <FontAwesomeIcon icon={faFacebook}
             style={{color: "23A6F0"}} />
          </a>
          <a href="https://www.twitter.com/">
            <FontAwesomeIcon icon={faTwitter}
             style={{color: "23A6F0"}} />
          </a>
          <a href="https://www.linkedin.com/">
            <FontAwesomeIcon icon={faLinkedin}
             style={{color: "23A6F0"}} />
          </a>
        </div>

        </div>
        </div>
    )
}