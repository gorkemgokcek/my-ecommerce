import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import CategoryCard from "../components/CategoryCard";
import CategoryCard2 from "../components/CategoryCard2";
import CategoryCard3 from "../components/CategoryCard3";
import CategoryCard4 from "../components/CategoryCard4";
import CategoryCard5 from "../components/CategoryCard5";
import Pagination from "../components/Pagination";
import { faTableCellsLarge, faListCheck } from "@fortawesome/free-solid-svg-icons";
import ProductCard from "../components/ProductCards";
import ProductCard2 from "../components/ProductCards2";
import ProductCard3 from "../components/ProductCards3";
import ProductCard4 from "../components/ProductCards4";
import ProductCard5 from "../components/ProductCards5";
import ProductCard6 from "../components/ProductCards6";
import ProductCard7 from "../components/ProductCards7";
import ProductCard8 from "../components/ProductCards8";
import {faAws, faHooli, faLyft, faPiedPiperHat, faRedditAlien, faStripe } from "@fortawesome/free-brands-svg-icons";

export default function ProductPage({}) {

    return (
        <div>
        <div className="bg-[#FAFAFA] ">
            <div className="flex md:justify-between justify-center md:flex-row flex-col  w-[full] px-[150px] sm:px-[195px] py-8 gap-3 ">
                <h3 className="font-bold text-2xl leading-8 text-[#252B42] ml-5 sm:ml-0">Shop</h3>
            </div>
            <div className="flex md:flex-row flex-col gap-4 px-[50px] sm:px-[205px] justify-between ">
                <div className="hover:scale-110 transition duration-200"><CategoryCard /></div>
                <div className="hover:scale-110 transition duration-200"><CategoryCard2 /></div>
                <div className="hover:scale-110 transition duration-200"><CategoryCard3 /></div>
                <div className="hover:scale-110 transition duration-200"><CategoryCard4 /></div>
                <div className="hover:scale-110 transition duration-200"><CategoryCard5 /></div>
            </div>

        </div>
        <div className="flex flex-col lg:flex-row gap-4 justify-between px-[100px] sm:px-[195px] py-8 items-center ">
            <h6 className="font-bold text-sm leading-6 text-secondaryColor">Showing all 8 results</h6>
            <div className="flex flex-row gap-3">
                <h5 className="text-sm font-bold text-secondaryColor leading-6 mt-2">Views:</h5>
                <button className="border-1 p-2 border-[#ECECEC]"><FontAwesomeIcon icon={faTableCellsLarge} size="lg" /></button>
                <button className="border-1 p-2 border-[#ECECEC]"><FontAwesomeIcon icon={faListCheck} size="lg" /></button>
            </div>    
        </div>
        <div className="px-[10px] sm:px-[195px]">
            <section className="best-seller mb-10 text-center ">
                <div className=" flex flex-wrap flex-row gap-2 justify-between  ">
                    <ProductCard8 />
                    <ProductCard5 />
                    <ProductCard3 />
                    <ProductCard4 />
                    <ProductCard2 />
                    <ProductCard6 />
                    <ProductCard7 />
                    <ProductCard />

                </div>
            </section>
            <Pagination />
        </div>       
        <div className="bg-[#FAFAFA] mt-5">
            <div className="flex flex-col lg:flex-row gap-5 px-[50px] sm:px-[195px] justify-between ">
                <FontAwesomeIcon icon={faHooli} size="6x" style={{ color: "#737373", }} />
                <FontAwesomeIcon icon={faLyft} size="6x" style={{ color: "#737373", }} />
                <FontAwesomeIcon icon={faPiedPiperHat} size="6x" style={{ color: "#737373", }} />
                <FontAwesomeIcon icon={faStripe} size="6x" style={{ color: "#737373", }} />
                <FontAwesomeIcon icon={faAws} size="6x" style={{ color: "#737373", }} />
                <FontAwesomeIcon icon={faRedditAlien} size="6x" style={{ color: "#737373", }} />
            </div>
        </div>
    </div>

    )
}