
import { faAws, faStripe, faLyft, faPiedPiperHat, faRedditAlien, faHooli } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TeamCard from "../components/TeamCard";
import TeamCard2 from "../components/TeamCard2";
import TeamCard3 from "../components/TeamCard3";


export default function AboutPage() {



    return (
        <div className="mt-5 ">
            <div>
                <div className="flex lg:flex-row flex-col  px-[10px] lg:pl-[250px] ">

                    <div className="sm:text-left text-center  flex flex-col basis-1/3 gap-4">
                        <h5 className="font-bold text-base leading-6 text-[#252B42]">ABOUT COMPANY</h5>
                        <h1 className="font-bold text-6xl leading-[80px] text-[#252B42]">ABOUT US</h1>
                        <h4 className="text-xl text-secondaryColor leading-7">We know how large objects will act, but things on a small scale just do not act that way.</h4>
                        <div>
                        <button className="py-4 px-10 items-center gap-2.5 text-white font-bold text-md rounded hover:bg-blue-600 bg-[#23A6F0]">Get Quote Now</button>
                        </div>
                    </div>
                    <div className="flex md:w-full md:justify-center">
                        <img src="about.jpeg" className="flex m:w-[342px]" />
                    </div>
                </div>
            </div>
            <div className="px-[50px] md:px-[255px]">
                <div className="pt-[100px]  ">

                    <div className="flex md:flex-row flex-col justify-between gap-[80px]">
                        <div className="flex basis-1/3">
                            <h3 className="font-bold text-2xl leading-8 text-[#252B42]">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.</h3>
                        </div>
                        <div className="flex basis-2/3">
                            <p className="text-secondaryColor text-md leading-5">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
                        </div>
                    </div>
                </div>

                <div className=" text-center py-5 ">
                    <div className="flex md:flex-row flex-col gap-3 justify-between">
                        <div className="flex-col">
                            <h1 className="font-bold text-6xl leading-[80px] text-[#252B42]">15K</h1>
                            <h5 className="text-base text-secondaryColor font-bold leading-6">Happy Customers</h5>
                        </div>
                        <div>
                            <h1 className="font-bold text-6xl leading-[80px] text-[#252B42]">150K</h1>
                            <h5 className="text-base text-secondaryColor font-bold leading-6">Monthly Visitors</h5>
                        </div>
                        <div>
                            <h1 className="font-bold text-6xl leading-[80px] text-[#252B42]">15</h1>
                            <h5 className="text-base text-secondaryColor font-bold leading-6">Countries  Worldwide</h5>
                        </div>
                        <div>
                            <h1 className="font-bold text-6xl leading-[80px] text-[#252B42]">100+</h1>
                            <h5 className="text-base text-secondaryColor font-bold leading-6">Top Partners</h5>
                        </div>

                    </div>
                </div>
                <div className="relative justify-center flex ">
                    <img src="video.jpeg" className="w-[500px]  lg:w-[989px] md:w-[600px] sm:w-[600px] shadow-[10px] rounded-[20px]" />
                </div>
                <div className="flex-col flex items-center mt-10 pb-10">
            <div className="w-[400px] mb-5 flex flex-col gap-3">
                <h2 className="font-bold text-4xl text-center">Meet Our Team</h2>
                <p className="text-md leading-5 text-secondaryColor text-center">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 flex-wrap">
                <TeamCard />
                <TeamCard2 />
                <TeamCard3 />
            </div>
        </div>

            </div>
            <div className="px-[50px] lg:px-[255px] pt-5">


            </div>
            <div className="pt-5 bg-[#FAFAFA] pb-5 ">
                <div className="flex flex-col text-center gap-4  ">
                    <h2 className="text-[#252B42] font-bold text-[40px] leading-[40px]">Big Companies Are Here</h2>
                    <p className="text-sm text-secondaryColor leading-5">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
                </div>
                <div className="flex flex-col lg:flex-row gap-5 px-[50px] sm:px-[195px] justify-between mt-5">
                    <FontAwesomeIcon icon={faHooli} size="5x" style={{ color: "#737373", }} />
                    <FontAwesomeIcon icon={faLyft} size="5x" style={{ color: "#737373", }} />
                    <FontAwesomeIcon icon={faPiedPiperHat} size="5x" style={{ color: "#737373", }} />
                    <FontAwesomeIcon icon={faStripe} size="5x" style={{ color: "#737373", }} />
                    <FontAwesomeIcon icon={faAws} size="5x" style={{ color: "#737373", }} />
                    <FontAwesomeIcon icon={faRedditAlien} size="5x" style={{ color: "#737373", }} />
                </div>

            </div>

            <div className="flex flex-col md:flex-row justify-between bg-[#2A7CC7] my-5">
                <div className="flex-col  basis-1/3 flex justify-center gap-4 mx-40 py-5 text-center ">
                    <h5 className="text-sm font-bold text-white leading-6">WORK WITH US</h5>
                    <h2 className="font-bold leading-[50px] text-[40px] text-white">Now Let’s grow Yours</h2>
                    <p className="text-sm leading-5 text-white">The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th </p>
                    <div><button className="third-button border-white border-1 rounded-[5px]">Button</button></div>
                </div>
                <div className="justify-end flex items-end">
                    <img src="women.jpeg" className="md:w-[590px] w-full h-[640px] hidden md:flex " />
                </div>
            </div>

        </div>
    )
};