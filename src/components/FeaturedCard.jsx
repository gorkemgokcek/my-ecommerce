import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faChartLine, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function CategoryCard() {
    return (
        <div>
            <div className="flex flex-col items-start w-[348px] bg-white shadow-lg hover:scale-110 transition duration-200 relative">
                <button className="absolute top-[20px] left-[20px] bg-[#E74040] w-[52px] h-[24px] font-container text-[14px] leading-6 font-bold text-white rounded">NEW</button>
                <img src="featured-2.jpeg" className="w-[348px] h-[300px]  " />
                <div className="flex flex-col gap-3 m-3 ">
                    <div className="flex justify-start gap-3 text-xs flex-wrap">
                        <p className="text-[#23A6F0] text-xs font-normal">
                            Google
                        </p>
                        <div>Trending</div>
                        <div>New</div>
                    </div>
                    <h4 className="text-xl font-semibold w-[240px]">Loudest à la Madison #1 (L'integral)</h4>
                    <p className=" text-sm font-normal w-[280px]">We focus on ergonomics and meeting you where you work. It's only a key stroke away.</p>
                    <div className="flex justify-between">
                        <h6 className="text-xs font-container leading-4 secondary-text "><FontAwesomeIcon icon={faClock} style={{ color: "#8EC2F2" }} /> 22 April 2021</h6>
                        <h6 className="text-xs font-container leading-4 secondary-text "><FontAwesomeIcon icon={faChartLine} style={{ color: "#23856D" }} /> 10 comments</h6>
                    </div>
                    <Link to="/"><button className="product-card-more ">Learn More <FontAwesomeIcon icon={faChevronRight} /> </button></Link>
                </div>
            </div>
        </div>
    )
}