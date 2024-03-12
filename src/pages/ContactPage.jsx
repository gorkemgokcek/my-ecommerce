import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import  { Link } from "react-router-dom/cjs/react-router-dom.min";

const Contact = () => {
  return (
    <div>
      <div className="flex flex-wrap items-center max-w-[1400px] mx-auto pl-[100px]">
        <div className="flex flex-col gap-[35px] items-start">
          <h5 className="text-[#252B42] text-base font-bold">CONTACT US</h5>
          <h1 className="ext-[#252B42] text-[58px] font-bold">Get in touch today!</h1>
          <h4 className=" w-[65%] text-neutral-500 text-xl font-normal">
            We know how large objects will act, but things on a small scale
          </h4>
          <p className="text-[#252B42] text-2xl font-bold">Phone ; +451 215 215 </p>
          <p className="text-[#252B42] text-2xl font-bold">Fax : +451 215 215</p>
          <div className="text-4xl flex sm:justify-center gap-8">
            <a href="https://www.twitter.com" className="hover:scale-110">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.facebook.com" className="hover:scale-110">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://wwww.instagram.com" className="hover:scale-110">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.linkedin.com" className="hover:scale-110">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
        <img src="contactfamily.jpeg" className="w-full sm:max-w-[550px] max-w-100 z-1 flex mr-20 sm:mr-0" />
      </div>
      <div className="flex flex-col items-center gap-10 px-5 my-4 py-8 ">
        <p className="text-center text-slate-800 text-base font-bold font-['Montserrat']  tracking-tight">
          VISIT OUR OFFICE
        </p>
        <h3 className="text-center text-slate-800 text-5xl font-bold font-['Montserrat']  tracking-tight max-w-2xl  ">
          We help small businesses with big ideas
        </h3>
      </div>
      <div className="flex flex-wrap justify-center gap-10 pt-32 pb-20 font-montserrat sm:bg-[#FAFAFA]">
        <div className="py-20 flex flex-col hover:scale-110 transition duration-200 items-center gap-2 p-14 bg-white">
          <img src="public/telephone.svg"></img>
          <p className="text-center text-slate-800 text-base font-bold font-['Montserrat']  tracking-tight">
            georgia.young@example.com
          </p>
          <p className="text-center text-slate-800 text-base font-bold font-['Montserrat']  tracking-tight">
            georgia.young@ple.com
          </p>
          <p className="text-center text-slate-800 text-lg font-bold font-['Montserrat']  tracking-tight pt-5 pb-2">
            Get Support
          </p>
          <button className="ml-[23px] border-1  border-[#23A6F0] text-[#23A6F0] w-[189px] h-[54px] px-[36px] py-[15px] rounded-[37px] hover:bg-gray-300">Submit</button>
        </div>
        <div className="py-20 flex flex-col hover:scale-110 transition duration-200 items-center gap-2 p-14 bg-[#252B42] ">
          <img src="public/location.svg"></img>
          <p className="text-center text-slate-800 text-white text-base font-bold tracking-tight">
            georgia.young@example.com
          </p>
          <p className="text-center text-white text-slate-800 text-base font-bold tracking-tight">
            georgia.young@ple.com
          </p>
          <p className="text-center text-white text-slate-800 text-lg font-bold tracking-tight pt-5 pb-2">
            Get Support
          </p>
          <button className="ml-[23px] border-1 border-[#23A6F0] text-[#23A6F0] w-[189px] h-[54px] px-[36px] py-[15px] rounded-[37px] hover:bg-gray-300">Submit</button>
          
        </div>
        <div className="py-20 flex flex-col hover:scale-110 transition duration-200 items-center gap-2 p-14 bg-white  ">
          <img src="public/mail.svg"></img>
          <p className="text-center text-slate-800 text-base font-bold tracking-tight">
            georgia.young@example.com
          </p>
          <p className="text-center text-slate-800 text-base font-bold tracking-tight">
            georgia.young@ple.com
          </p>
          <p className="text-center text-slate-800 text-lg font-bold tracking-tight pt-5 pb-2">
            Get Support
          </p>
          <button className="ml-[23px] border-1 border-[#23A6F0] text-[#23A6F0] w-[189px] h-[54px] px-[36px] py-[15px] rounded-[37px] hover:bg-gray-300">Submit</button>
        </div>
      </div>
      <div className="flex flex-col gap-10 items-center px-[15%] py-20 font-montserrat">
        <img src="public/arrow.svg" />
        <p className=" text-center text-slate-800 text-lg font-bold">
          WE Can't WAIT TO MEET YOU
        </p>
        <p className="text-center text-slate-800 text-6xl font-bold leading-[58px] max-w-md">
          Let’s Talk
        </p>
        <button className="text-center border rounded-lg px-5 py-3 bg-[#23A6F0] text-white font-bold hover:bg-blue-600 text-sm sm:text-lg">
          CONTACT OUR COMPANY
        </button>
      </div>
    </div>
  );
};
export default Contact;
