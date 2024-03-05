import { useHistory } from "react-router-dom";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Login = () => {
  const history = useHistory();
  return (
    <div className="flex flex-col items-center justify-center ">
    <div className="flex flex-col items-center justify-center w-full p-20 bg-gray-100 shadow-md gap-20 rounded-md ">
        
              <h1 className="font-montserrat font-bold text-[#252B42] text-4xl tracking-[0.0625] ">
          Bandage
        </h1>
              
        

            <div className="mt-8">
              <form className="flex flex-col max-w-3/12 gap-4">
                <div className="flex gap-4">
                <a href="" className="p-4 pr-0">
              <FontAwesomeIcon
                icon={faEnvelope}
                size="lg"
                style={{ color: "#23A6F0" }}
              />
            </a>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="block w-full px-4 py-2 mt-2 text-black placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>


                <div className="flex gap-4">
            <a href="" className="p-4 pr-0">
              <FontAwesomeIcon
                icon={faKey}
                size="lg"
                style={{ color: "#23A6F0" }}
              />
            </a>

                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="block w-full px-4 py-2 mt-2 text-black placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="mt-6">
                  <button className="items-center justify-center text-white border-2 rounded-md px-8 py-4 font-bold bg-[#23A6F0] hover:bg-blue-600">
                    Sign in
                  </button>
                </div>
              </form>

              <p className="mt-6 text-sm text-center text-black">
                Don't have an account yet ? {" "}
                <button
                  onClick={() => history.push("/signup")}
                  className="font-montserrat font-bold text-base "
                >
                  Sign Up
                </button>
                .
              </p>
            </div>
            </div>
            </div>
          
  );
};
export default Login;
