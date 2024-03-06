import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import {
  faHooli,
  faLyft,
  faPiedPiperHat,
  faStripe,
  faAws,
  faRedditAlien,
} from "@fortawesome/free-brands-svg-icons";

const Pricing = () => {
  return (
    <div id="pricing" className="flex flex-col items-center text-center bg-gray">
      <section
        id="pricing-type"
        className="flex items-center text-center justify-between w-full font-bold px-40 py-20  sm:px-10 sm:py-20 sm:gap-12 sm:w-full flex-col gap-16 bg-lightgray"
      >
        <span
          id="text-span"
          className="flex flex-col gap-5 items-center text-center sm:gap-8"
        >
          <h3 className="h3-styles sm:text-5xl">Pricing</h3>
          <p className="p-styles w-1/2 sm:w-full sm:text-xl">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
          <span
            id="switch-button"
            className="flex flex-row gap-3 text-center items-center"
          >
            <h4 className="h4-styles">Monthly</h4>
      
            <h4 className="h4-styles">Yearly</h4>
            <button className="border border-blue2 bg-blue2 text-blue1 rounded-2xl text-sm py-1 px-2 ">
              Save 25%
            </button>
          </span>
        </span>
        <span
          id="box-span"
          className="flex flex-row sm:flex-col sm:gap-8 w-full items-end justify-center"
        >
          <span id="box-1" className="border hover:scale-110 transition duration-200 text-center font-bold items-center rounded-lg flex flex-col w-full gap-8 py-10">
            <h3 className="text-black sm:text-3xl">FREE</h3>
            <p className="font-semibold text-sm w-2/5 w-[35%] sm:w-full sm:text-xl text-black">
              Organize across all apps by hand
            </p>
            <span className="flex flex-row text-blue1 gap-2 items-center">
              <h3 className="text-3xl sm:text-5xl">0</h3>
              <span className="flex flex-col items-start gap-2">
                <h5 className="text-base sm:text-2xl">$</h5>
                <p className="sm:text-2xl">Per Month</p>
              </span>
            </span>
            <span
              id="tick-rows"
              className="flex flex-col gap-4 text-sm items-start"
            >
              <p className="sm:text-lg">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{ color: "#2DC071" }}
                />{" "}
                Unlimited product updates
              </p>
              <p className="sm:text-lg">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{ color: "#2DC071" }}
                />{" "}
                Unlimited product updates
              </p>
              <p className="sm:text-lg">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{ color: "#2DC071" }}
                />{" "}
                Unlimited product updates
              </p>
              <p className="sm:text-lg">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{ color: "#737373" }}
                />{" "}
                1GB Cloud Storage
              </p>
              <p className="sm:text-lg">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{ color: "#737373" }}
                />{" "}
                Email and community support
              </p>
              <button className="w-full border sm:text-xl border-darkblue1 rounded-md text-[#282D4D] text-sm py-3">
                Try for free
              </button>
            </span>
          </span>
          <span id="box-2" className="border text-center hover:scale-110 transition duration-200 bg-[#282D4D] text-white font-bold items-center rounded-lg flex flex-col w-full gap-8 py-10">
            <h3 className="text-white sm:text-3xl">STANDARD</h3>
            <p className="font-semibold text-sm w-2/5 w-[35%] sm:w-full sm:text-xl text-white">
              Organize across all apps by hand
            </p>
            <span className="flex flex-row text-blue1 gap-2 items-center">
              <h3 className="text-3xl sm:text-5xl">9.99</h3>
              <span className="flex flex-col items-start gap-2">
                <h5 className="text-base sm:text-2xl">$</h5>
                <p className="sm:text-2xl">Per Month</p>
              </span>
            </span>
            <span
              id="tick-rows"
              className="flex sm:text-lg flex-col gap-4 text-sm items-start"
            >
              <p>
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{ color: "#2DC071" }}
                />{" "}
                Unlimited product updates
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{ color: "#2DC071" }}
                />{" "}
                Unlimited product updates
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{ color: "#2DC071" }}
                />{" "}
                Unlimited product updates
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{ color: "#2DC071" }}
                />{" "}
                1GB Cloud Storage
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{ color: "#737373" }}
                />{" "}
                Email and community support
              </p>
              <button className="w-full sm:text-xl border border-blue1 rounded-md bg-blue1 text-white text-sm py-3">
                Try for free
              </button>
            </span>
          </span>
          <span id="box-3" className="border text-center hover:scale-110 transition duration-200 font-bold items-center rounded-lg flex flex-col w-full gap-8 py-10">
            <h3 className="text-black sm:text-3xl">PREMIUM</h3>
            <p className="font-semibold text-sm w-2/5 w-[35%] sm:w-full sm:text-xl text-black">
              Organize across all apps by hand
            </p>
            <span className="flex flex-row text-blue1 gap-2 items-center">
              <h3 className="text-3xl sm:text-5xl">19.99</h3>
              <span className="flex flex-col items-start gap-2">
                <h5 className="text-base sm:text-2xl">$</h5>
                <p className="sm:text-2xl">Per Month</p>
              </span>
            </span>
            <span
              id="tick-rows"
              className="flex sm:text-lg flex-col gap-4 text-sm items-start"
            >
              <p>
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{ color: "#2DC071" }}
                />{" "}
                Unlimited product updates
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{ color: "#2DC071" }}
                />{" "}
                Unlimited product updates
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{ color: "#2DC071" }}
                />{" "}
                Unlimited product updates
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{ color: "#2DC071" }}
                />{" "}
                1GB Cloud Storage
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{ color: "#2DC071" }}
                />{" "}
                Email and community support
              </p>
              <button className="w-full sm:text-xl border rounded-md bg-blue1 text-[#282D4D] text-sm py-3">
                Try for free
              </button>
            </span>
          </span>
        </span>
      </section>
      <section
        id="companies"
        className="flex items-center text-center justify-between w-full font-bold px-40 py-20  sm:px-10 sm:py-20 sm:gap-12 sm:w-full flex-col bg-lightgray gap-10"
      >
        <span id="companies-text" className="flex flex-col items-center gap-5">
          <p className="p-styles w-full text-base sm:text-lg">
            Trusted By Over 4000 Big Companies
          </p>
        </span>
        <div className="bg-[#FAFAFA] mt-5 flex-col">
            <div className="flex flex-col lg:flex-row gap-5 px-[50px] sm:px-[195px] justify-between ">
                <FontAwesomeIcon icon={faHooli} size="6x" style={{ color: "#737373", }} />
                <FontAwesomeIcon icon={faLyft} size="6x" style={{ color: "#737373", }} />
                <FontAwesomeIcon icon={faPiedPiperHat} size="6x" style={{ color: "#737373", }} />
                <FontAwesomeIcon icon={faStripe} size="6x" style={{ color: "#737373", }} />
                <FontAwesomeIcon icon={faAws} size="6x" style={{ color: "#737373", }} />
                <FontAwesomeIcon icon={faRedditAlien} size="6x" style={{ color: "#737373", }} />
            </div>
        </div>
      </section>
      <section
        id="FAQ"
        className="flex items-center justify-between w-full flex-col gap-8 px-40 py-10 sm:px-10"
      >
      </section>
      <section id="trial" className="flex items-center text-center justify-between w-full font-bold px-40 py-20  sm:px-10 sm:py-20 sm:gap-12 sm:w-full flex-col gap-8">
        <h3 className="sm:text-5xl">Start your 14 days free trial</h3>
        <p className="w-1/3 sm:w-full sm:text-lg">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent.
        </p>
        <button className="text-center border rounded-lg px-5 py-3 bg-[#23A6F0] text-white font-bold hover:bg-blue-600 text-sm sm:text-lg">
          Try it free now
        </button>
      </section>
    </div>
  );
};
export default Pricing;
