import TeamCard from "../components/TeamCard";
import  { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Team() {
    return (
        <div className="flex-col flex items-center mt-10 pb-10">
            <div className="flex flex-col items-center gap-5 py-20  ">
        <p className="text-center text-[#737373] text-base font-bold font-['Montserrat'] tracking-tight ">
          WHAT WE DO
        </p>
        <h3 className="text-center text-slate-800 text-5xl font-bold font-['Montserrat'] leading-[80px] tracking-tight lg-text-6xl">
          Inovation tailored for you
        </h3>
        <p className="text-center text-neutral-500 text-base font-bold font-['Montserrat']  tracking-tight flex gap-5">
          <span className="text-slate-800">Home</span>
          <img src="public/rightVector.svg" />
          <span className="text-[#737373]">Team</span>
        </p>
      </div>
            <div className="w-[400px] mb-5 flex flex-col gap-3">
                <h2 className="font-bold text-4xl text-center">Meet Our Team</h2>
                <p className="text-md leading-5 text-secondaryColor text-center">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 flex-wrap">
                <TeamCard />
                <TeamCard />
                <TeamCard />
            </div>
            <div className="container mx-auto text-center my-[5rem] flex flex-col gap-[2rem] sm:w-11/12">
        <h2 className="text-center text-slate-800 text-4xl font-bold font-['Montserrat']  tracking-tight xl:text-5xl">
          Start your 14 days free trial
        </h2>
        <h6 className="w-[40%] mx-auto sm:w-[100%] text-center text-[#737373] text-base font-normal font-['Montserrat'] tracking-tight max-w-md">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent.
        </h6>
        <Link to="/pricing"><button className="bg-[#23A6F0] hover:bg-blue-600 text-white w-[23%] sm:w-[20%] mx-auto py-[10px] rounded-[5px]">
          TRY IT FREE NOW
        </button></Link>

        </div>
        </div>
    )
}