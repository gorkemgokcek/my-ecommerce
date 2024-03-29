import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faEnvelope,
  faHeart,
  faList,
  faMagnifyingGlass,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
export default function Header() {
  const socialMediaLinks = [
    {
      icon: faInstagram,
      url: "https://www.instagram.com/",
      label: "Instagram",
    },
    { icon: faYoutube, url: "https://www.youtube.com/", label: "YouTube" },
    { icon: faFacebook, url: "https://www.facebook.com/", label: "Facebook" },
    { icon: faTwitter, url: "https://twitter.com", label: "Twitter" },
  ];

  const routeData = [
    { key: "Home", linkTo: "/" },
    { key: "Shop", linkTo: "/products" },
    { key: "About", linkTo: "/about" },
    { key: "Team", linkTo: "/team" },
    { key: "Contact", linkTo: "/contact" },
    { key: "Pricing", linkTo: "/pricing" },
  ];

  return (
    <header className="flex flex-col justify-start w-full">
      <section className="hidden sm:flex sm:flex-row justify-between items-center h-[58px] px-[10%] text-lightTextColor font-bold bg-[#282D4D]">
        <div className="flex items-center gap-8 ">
          <div className="flex items-center gap-2 ">
            <FontAwesomeIcon
              icon={faPhone}
              style={{ color: "white" }}
            />
            <p className="text-white">(225) 555-0118</p>
          </div>

          <div className="sm:hidden xl:flex xl:items-center gap-2 ">
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ color: "white" }}
            />
            <p className="text-white">michelle.rivera@example.com</p>
          </div>
        </div>

        <div className="sm:hidden text-white xl:flex xl:items-center gap-2">
          <p>Follow Us and get a chance to win 80% off</p>
        </div>
        <div className="flex text-white items-center gap-4">
          <p>Follow Us</p>
          <p>:</p>
          {socialMediaLinks.map((link, index) => {
            return (
              <a
                href={link.url}
                key={index}
                target="_blank"
                aria-label={`Follow us on ${link.label}`}
                rel="noopener noreferrer"
                className="text-lightTextColor"
              >
                <FontAwesomeIcon
                  icon={link.icon}
                  style={{ color: "lightTextColor" }}
                />
              </a>
            );
          })}
        </div>
      </section>

      <nav className="flex flex-col h-[400px] items-center sm:gap-6 sm:flex sm:flex-row sm:justify-between sm:items-center sm:h-auto px-[10%] py-2.5 bg-">
        <div className="flex flex-row gap-40 pb-8 sm:flex sm:pb-0">
          <div className="">
            <Link to="/" className="text-darkTextColor text-2xl font-bold">
              Bandage
            </Link>
          </div>
          <div className="flex flex-row gap-2 sm:hidden">
            <Link to="/search">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                style={{ color: "primaryColor" }}
              />
            </Link>

            <Link to="/basket">
              <FontAwesomeIcon
                icon={faCartShopping}
                style={{ color: "primaryColor" }}
              />
            </Link>

            <Link to="/login">
              <FontAwesomeIcon
                icon={faUser}
                style={{ color: "primaryColor" }}
              />
            </Link>
          </div>
        </div>

        <div className="flex flex-col sm:flex sm:flex-row gap-4">
          {routeData.map((data, index) => {
            return (
              <div className="flex items-center" key={index}>
                <Link
                  to={data.linkTo}
                  className="text-secondTextColor text-xl font-normal sm:text-sm sm:font-bold"
                >
                  {data.key}
                </Link>
              </div>
            );
          })}
        </div>

        <div className="hidden lg:flex lg:gap-6 text-primaryColor items-center">
          <div className="flex gap-2 text-primaryColor">
            <Link to="/profile">
              <FontAwesomeIcon
                icon={faUser}
                className="text-[#23A6F0]"
              />
            </Link>
            <Link to="/login" className="text-[#23A6F0]">
              Login
            </Link>
            <p className="text-[#23A6F0]">/</p>
            <Link to="/signup" className="text-[#23A6F0]">
              Register
            </Link>
          </div>

          <div className="flex gap-5 ">
            <div className="flex gap-2">
              <Link to="/search">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="text-[#23A6F0]"
                />
              </Link>
            </div>

            <div className="flex gap-2">
              <Link to="/basket">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className="text-[#23A6F0]"
                />
              </Link>
            <p className="text-[#23A6F0]">1</p>
            </div>

            <div className="flex gap-2">
              <Link to="/favorites">
                <FontAwesomeIcon
                  icon={faHeart}
                  className="text-[#23A6F0]"
                />
              </Link>
              <p className="text-[#23A6F0]">1</p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
