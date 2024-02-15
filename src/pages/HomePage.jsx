import SliderCarousel from "../components/SliderCarousel";
export default function HomePage(){
    return (
        <div>
        <div className="relative text-white">
            <SliderCarousel />
            <div className="absolute top-0 left-0 z-10 flex flex-col text-left py-[40px] gap-[24px] ml-20">
                <div><h5 className="font-bold text-[16px] font-container leading-[24px]">SUMMER 2020</h5></div>
                    <div>
                        <h1 className="font-bold text-[58px] font-container leading-[80px]">NEW COLLECTION</h1>
                        <br/>
                        <h1 className="font-bold text-[58px] font-container leading-[80px]"></h1>
                    </div>
                    <div><h4 className=" text-[20px] leading-[30px] font-container">We know how large objects will act,</h4>
                    <h6 className="text-[20px] leading-[30px] font-container">but things on a small scale.</h6></div>
                        <button className="text-[24px] font-bold text-white bg-[#2DC071] rounded-[5px] py-3 px-2 w-[50%]">SHOP NOW</button>
                </div>
            </div>
        </div>
    
)
}