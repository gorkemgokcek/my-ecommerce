import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";

export default function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    const showForm = () => {
        document.getElementById('contactForm').classList.remove('hidden');
    };

    return (
        <div className="my-20 px-[10px] lg:px-[250px]">
            <div className="flex flex-col items-center gap-4 ">
                <h2 className="font-bold text-[40px] leading-10 md:w-[607px] w-[307px] text-center">Get answers to all your questions.</h2>
                <h4 className="text-secondaryColor text-xl leading-8 md:w-[607px] w-[307px] text-center">Problems trying to resolve the conflict between the two major realms of Classical physics: </h4>
                <button onClick={showForm} className="text-center w-[221px] h-[62px] hover:text text-white hover:bg-[#010B48] bg-[#23A6F0] text-[14px] rounded-[5px]">CONTACT OUR COMPANY</button>
                <div className="flex flex-row gap-3">
                    <button><FontAwesomeIcon icon={faTwitter} size="lg" style={{ color: "#23A6F0" }} /></button>
                    <button ><FontAwesomeIcon icon={faFacebook} size="lg" style={{ color: "#23A6F0" }} /></button>
                    <button><FontAwesomeIcon icon={faInstagram} size="lg" style={{ color: "#23A6F0" }} /></button>
                    <button><FontAwesomeIcon icon={faLinkedin} size="lg" style={{ color: "#23A6F0" }} /></button>
                </div>
                <form id="contactForm" className="hidden" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex-col flex bg-[#F9F9F9] w-[607px] p-20 gap-5">
                        <input {...register("name", { required: true })} type="text" placeholder="Name" className="p-2 rounded-xl" /> 
                        {errors.name && <span>Bu Alan Boş Bırakılamaz</span>}                       
                        <input {...register("email", { required: true })} type="email" placeholder="Email" className="p-2 rounded-xl" /> 
                        {errors.name && <span>Email Adresinizi Giriniz</span>}                    
                        <input {...register("message", { required: true })} type="text" placeholder="Message" className="p-2 rounded-xl" />
                        {errors.name && <span>Bu Alan Boş Bırakılamaz</span>}
                        <button type="submit" className="text-center w-[221px] h-[62px] hover:text text-white hover:bg-[#010B48] bg-[#23A6F0] text-[20px] rounded-[5px]">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
