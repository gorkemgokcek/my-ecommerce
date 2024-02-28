import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TeamCard() {
    return (
        <div className="shadow-sm bg-[#FFFFFF] w-[305px] md:h-[383px] h-[483px]">

            <img src="teamcard2.jpeg" className="md:w-[316px] md:h-[231px] w-[305px] h-[323px]" />
            <div className="flex-col flex items-center gap-2 mt-4">
                <h5 className="font-bold text-base leading-6 text-[#252B42]">Username</h5>
                <h5 className="font-bold text-sm text-secondaryColor leading-6">Profession</h5>
                <div className="flex flex-row gap-4 ">
                    <button className=""><FontAwesomeIcon icon={faFacebook} size="lg" style={{ color: "#23A6F0" }} /></button>
                    <button><FontAwesomeIcon icon={faInstagram} size="lg" style={{ color: "#23A6F0" }} /></button>
                    <button><FontAwesomeIcon icon={faTwitter} size="lg" style={{ color: "#23A6F0" }} /></button>
                </div>
            </div>
        </div>
    );
}
