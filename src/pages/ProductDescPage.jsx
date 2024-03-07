import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faCartShopping,
  faEye,
  faStar,
  faCircle,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import ProductCards from "../components/ProductCards";
import ProductCards6 from "../components/ProductCards6";
import ProductCards5 from "../components/ProductCards5";
import ProductCards4 from "../components/ProductCards4";
const Product = () => {
  return (
    <main>
      <section className="navBar flex flex-row flex-wrap py-6 items-center justify-center">
        <div className="flex flex-row gap-4 justify-center sm:justify-start w-[1033px]">
          <p className="text-center text-sm font-bold text-[#252B42]">Home</p>
          <FontAwesomeIcon icon={faAngleRight} style={{ color: "#737373" }} />
          <p className="text-center text-sm font-bold text-[#BDBDBD]">Detail</p>
        </div>
      </section>

      <section className="flex px-48 bg-[#F8F8F8] justify-center items-center self-stretch bg-">
        <div className="flex pb-12 items-start">
          <div className="flex flex-col md:flex-row items-start gap-10">
            <img src="productDesc2.jpeg" className="w-[500px] lg:w-[500px] md:w-[600px] sm:w-[600px] shadow-[10px] rounded-[20px]" />
            <div className="flex justify-center items-center basis-1/2">
            </div>

            <div className=" flex flex-col w-[510px] h-[470px] justify-around md:w-[350px] md:items-center md:my-8">
              <h4 className="text-xl font-semibold">
                Gray Wing Chair
              </h4>

              <div className="inline-flex items-start gap-2.5">
                <div className="flex">
                  <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
                </div>
                <p>10 Reviews</p>
              </div>

              <h5 className="text-2xl font-bold">
                $1,139.33
              </h5>

              <div className="flex flex-row gap-2 items-center">
                <p className="text-sm font-bold text-secondaryColor">
                  Availability :
                </p>
                <p className="text-sm font-bold text-secondaryColor">In Stock </p>
              </div>

              <p className="text-[#858585] text-sm md:text-center">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>

              <hr className="flex" />
              <div className="inline-flex items-center gap-2.5">
                <FontAwesomeIcon
                  icon={faCircle}
                  style={{ color: "#24a6f0" }}
                  size="2xl"
                />
                <FontAwesomeIcon
                  icon={faCircle}
                  style={{ color: "#2cc071" }}
                  size="2xl"
                />
                <FontAwesomeIcon
                  icon={faCircle}
                  style={{ color: "#e77b40" }}
                  size="2xl"
                />
                <FontAwesomeIcon
                  icon={faCircle}
                  style={{ color: "#252b42" }}
                  size="2xl"
                />
              </div>

              <div className="flex justify-center md:justify-start items-center gap-2.5 pt-8">
                <button className="py-4 px-7 items-center gap-2.5 bg-[#23A6F0] hover:bg-blue-600 text-white font-bold text-sm rounded">
                  Select Options
                </button>
            
                  <button className="flex w-[40px] h-[40px] p-2.5 justify-center items-center rounded-[45px] border border-solid border-borderColor bg-white ">
                    <FontAwesomeIcon icon={faHeart} />
                  </button>

                  <button className="flex w-[40px] h-[40px] p-2.5 justify-center items-center rounded-[45px] border border-solid border-borderColor bg-white ">
                    <FontAwesomeIcon icon={faCartShopping} />
                  </button>
                  <button className="flex w-[40px] h-[40px] p-2.5 justify-center items-center rounded-[45px] border border-solid border-borderColor bg-white ">
                    <FontAwesomeIcon icon={faEye} />
                  </button>
                </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-row items-center gap-1 pt-2 px-96 pb-1">
          <div className="flex p-6 justify-center items-center gap-2">
            <a href="#" className="text-sm font-semibold text-secondTextColor">
              Description
            </a>
          </div>
          <div className="inline-flex p-6 justify-center items-center gap-2 ">
            <a href="#" className="text-sm font-semibold text-secondTextColor">
              Additional Information
            </a>
          </div>
          <div className="inline-flex p-6 justify-center items-center gap-2">
            <a href="#" className="text-sm font-semibold text-secondTextColor">
              Reviews
            </a>
            <p className="text-sm font-semibold text-secondTextColor">(0)</p>
          </div>
        </div>

      <div className="flex flex-col py-6 px-12 gap-8">
        <div className="flex flex-col flex-wrap justify-center md:flex-row items-start gap-8">
          <div className="flex flex-col items-start shrink-0 w-[332px] h-[392px]">
            <img src="productInfo.jpeg" className="shrink-0 rounded" />
          </div>

          <div className="flex flex-col items-start w-[332px] pb-6 gap-8">
            <h5 className="text-2xl font-bold text-darkTextColor">
              the quick fox jumps over
            </h5>

            <p className="text-sm font-semibold">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie.
              Excitation venial consequent sent nostrum met.
              <br />
              <br />
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie.
              Excitation venial consequent sent nostrum met.
              <br />
              <br />
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie.
              Excitation venial consequent sent nostrum met.
            </p>
          </div>

          <div className="flex flex-col w-[332px] items-start gap-5 shrink-0">
            <div className="flex flex-col items-start gap-2">
              <h5 className="text-2xl font-bold text-darkTextColor">
                the quick fox jumps over
              </h5>
              <div className="flex flex-col items-start gap-2.5">
                <div className="flex tems-start gap-2">
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    style={{ color: "#737373" }}
                  />
                  <p>the quick fox jumps over the lazy dog</p>
                </div>
                <div className="flex tems-start gap-2">
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    style={{ color: "#737373" }}
                  />
                  <p>the quick fox jumps over the lazy dog</p>
                </div>
                <div className="flex tems-start gap-2">
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    style={{ color: "#737373" }}
                  />
                  <p>the quick fox jumps over the lazy dog</p>
                </div>
                <div className="flex tems-start gap-2">
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    style={{ color: "#737373" }}
                  />
                  <p>the quick fox jumps over the lazy dog</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-[332px] items-start gap-5 shrink-0">
              <div className="flex flex-col items-start gap-2">
                <h5 className="text-2xl font-bold text-darkTextColor">
                  the quick fox jumps over
                </h5>
                <div className="flex flex-col items-start gap-2.5">
                  <div className="flex tems-start gap-2">
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      style={{ color: "#737373" }}
                    />
                    <p>the quick fox jumps over the lazy dog</p>
                  </div>
                  <div className="flex tems-start gap-2">
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      style={{ color: "#737373" }}
                    />
                    <p>the quick fox jumps over the lazy dog</p>
                  </div>
                  <div className="flex tems-start gap-2">
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      style={{ color: "#737373" }}
                    />
                    <p>the quick fox jumps over the lazy dog</p>
                  </div>
                  <div className="flex tems-start gap-2">
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      style={{ color: "#737373" }}
                    />
                    <p>the quick fox jumps over the lazy dog</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="flex items-center justify-center bg-lightGray1">
        <div className="flex flex-col py-12 gap-6">
          <div className="flex flex-col items-center justify-center md:items-start text-darkTextColor">
            <h3 className="text-2xl font-bold text-center ">
              BESTSELLER PRODUCTS
            </h3>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-wrap flex-col md:flex-row items-center justify-center gap-8">
              <ProductCards />
              <ProductCards4 />
              <ProductCards6 />
              <ProductCards5 />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Product;
