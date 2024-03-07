import React from "react";
import {
    faFacebook,
    faInstagram,
    faTwitter,
  } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  
  function Footer() {
    return (
      <div className="font-montserrat justify-center w-full">
        <div className="bg-[#FAFAFA] py-[60px]">
          <div className="flex justify-between w-[80%] m-auto">
            <h3 className=" text-[24px] font-bold text-[#252B42] leading-8 ">Bandage</h3>
           <div className="flex gap-2">
                <a href="https://www.facebook.com">
                  <FontAwesomeIcon
                icon={faFacebook}
                style={{color: "#23A6F0"}}
                className="text-2xl"
                />
                </a>
                <a href="https://www.instagram.com">
                <FontAwesomeIcon
                icon={faInstagram}
                style={{color: "23A6F0"}}
                className="text-2xl"
                />
                </a>
                <a href="https://www.twitter.com">
                <FontAwesomeIcon
                icon={faTwitter}
                style={{color:"23A6F0"}}
                className="text-2xl "
                />
                </a>
           </div>
          </div>
        </div>
        <div className="w-[full] px-[50px] sm:px-[195px] py-5">
          <div className=" flex flex-col gap-5 sm:flex-row justify-between flex-wrap">
            <div className="flex gap-3 flex-col">
              <h5 className="footer-title">Company İnfo</h5>
              <a className="font-bold text-sm secondary-text leading-6" href="about">
                About Us
              </a>
              <a className="font-bold text-sm secondary-text leading-6" href="#">
                Carrier
              </a>
              <a className="font-bold text-sm secondary-text leading-6" href="#">
                We are hiring
              </a>
              <a className="font-bold text-sm secondary-text leading-6" href="#">
                Blog
              </a>
            </div>
            <div className="flex gap-3 flex-col">
              <h5 className="footer-title">Legal</h5>
              <a className="font-bold text-sm secondary-text leading-6" href="#">
                About Us
              </a>
              <a className="font-bold text-sm secondary-text leading-6" href="#">
                Carrier
              </a>
              <a className="font-bold text-sm secondary-text leading-6" href="#">
                We are hiring
              </a>
              <a className="font-bold text-sm secondary-text leading-6" href="#">
                Blog
              </a>
            </div>
            <div className="flex gap-3 flex-col">
              <h5 className="footer-title">Features</h5>
              <a className="font-bold text-sm secondary-text leading-6" href="#">
                Business Marketing
              </a>
              <a className="font-bold text-sm secondary-text leading-6" href="#">
                User Analytic{" "}
              </a>
              <a className="font-bold text-sm secondary-text leading-6" href="#">
                Live Chat
              </a>
              <a className="font-bold text-sm secondary-text leading-6" href="#">
                Unlimited Support
              </a>
            </div>
            <div className="flex gap-3 flex-col">
              <h5 className="footer-title">Resources</h5>
              <a className="font-bold text-sm secondary-text leading-6" href="#">
                IOS & Android
              </a>
              <a className="font-bold text-sm secondary-text leading-6" href="#">
                Watch a Demo{" "}
              </a>
              <a className="font-bold text-sm secondary-text leading-6" href="#">
                Customers
              </a>
              <a className="font-bold text-sm secondary-text leading-6" href="#">
                API
              </a>
            </div>
            <div className=" flex flex-col ">
              <div>
                <label htmlFor="email" className=" font-bold ">
                  Get In Touch
                </label>
                <div className="flex pt-[14px] ">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="bg-[#F9F9F9] border border-gray-300 rounded-l-md px-4 w-[250px] h-[58px] "
                    placeholder="Your Email"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-[#23A6F0] text-white rounded-r-md font-bold px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                  >
                    Subscribe
                  </button>
                </div>
                <p className="font-semibold mt-3">Lorem impsum dolor amit
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[74px] mt-[70px] bg-[#FAFAFA]">
          <p className="m-auto w-[80%] pt-[28px] font-semibold text-[#737373]">
            {" "}
            Gorkem Gokcek
          </p>
        </div>
      </div>
    );
  }
  export default Footer;
  