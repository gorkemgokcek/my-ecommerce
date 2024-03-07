export default function CategoryCard5() {
    return (
        <div className="relative">
            <img src="kids.jpeg" className="md:w-[215px] md:h-[223px] w-[305px] h-[323px]" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
                <h5 className="z-10 text-white font-bold text-base leading-6">OTHER</h5>
                <p className="z-10 leading-5 font-semibold text-sm text-white">100 Items</p>
            </div>
        </div>
    );
}
