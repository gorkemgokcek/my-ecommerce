import SliderCarousel from "../components/SliderCarousel";
export default function HomePage(){
    return (
        <div>
        <div className="relative text-white hero-section">
            <SliderCarousel />
            <div className="absolute top-0 left-0 z-10 flex flex-col xl:text-left 2xl:text-left lg:text-left md:text-left sm:text-left xl:py-[290px] lg:py-[180px] md:py-[120px] sm:py-[100px] py-[40px] gap-[1px] 2xl:gap-[24px] xl:gap-[24px] lg:gap-[18px] md:gap-[14px] sm:gap-[12px] xl:ml-[200px] 2xl:ml-[200px] lg:ml-[120px] md:ml-[80px] sm:ml-[60px] ml-[30px]">
                    <div><h5 className="font-2xl:bold 2xl:text-[16px] xl:text-[16px] lg:text-sm md:text-xs sm:text-xs text-[16px]  leading-[24px]">SUMMER 2020</h5></div>
                    <div>
                        <h1 className="font-bold xl:text-[58px] 2xl:text-[58px] lg:text-[40px] md:text-[32px] sm:text-[28px] text-[40px]  leading-[80px]">NEW COLLECTION </h1>

                    </div>
                    <div><h4 className="2xl:text-xl xl:text-xl leading-[30px] ">We know how large objects will act,</h4>
                        <h4 className="2xl:text-xl xl:text-xl  leading-[30px] ">but things on a small scale.</h4></div>
                    <div><button className="carousel-button hover:bg-white hover:text-[#2DC071]">SHOP NOW</button></div>
                </div>
              </div>
            <div className="editor-pick py-[80px] relative">
             <h3 className="font-bold text-[24px] leading-[32px] font-container text-[#252B42] align-middle mb-3">EDITOR'S PICK</h3>
             <p className="text-[20px] leading-[30px] align-middle">Problems trying to resolve the conflict between. </p>
               <div className="flex gap-3 justify-center mt-[50px] relative">
                 <div className="flex">
                  <img src="editor.jpeg" className="object-cover w-[500px] h-[509px]" />                 
                </div>
              <div className="flex">
                <img src="editor.jpeg" className="object-cover w-[250px]  h-[509px]"/>
              </div>
              <div className="flex-col relative ">
                 <div className="flex mb-2">
                  <img src="editor.jpeg" className="object-cover w-[250px] h-[250px]" />
              </div>
             <div className="flex">
                 <img src="editor.jpeg" className="object-cover w-[250px] h-[250px]" />
          </div>
        </div>
    </div>
            </div>
        </div>



)
}