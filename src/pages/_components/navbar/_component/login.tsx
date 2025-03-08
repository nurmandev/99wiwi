import Glowcard from "../../glowcard";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="flex md:w-[60vw] p-4">
      <div className="flex-1 hidden md:block">
        <div className="font-bold text-xl py-10 text-center">LOGO</div>
        <div className="border-y border-primary p-4 bg-primary/10">
          <div className="bg-gradient-to-br from-primary/50 via-primary text-center font-bold text-lg bg-clip-text text-transparent to-primary">
            WELCOME TO THE MOST INNOVATIVE ROBLOX CASINO
          </div>
        </div>
      </div>
      <div className=" flex-[3]">
        <Glowcard
          color="bg-primary border-primary"
          size="25rem"
          position="100% 0%"
        >
          <div className="p-8 flex flex-col items-center gap-6">
            <h2 className="text-3xl font-bold text-center text-primary mb-4">
              LOGIN
            </h2>
            <div className="w-full">
              <label className="block font-bold text-center text-base uppercase mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full px-4 py-4 bg-background  rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            <div className="w-full">
              <label className="block text-center text-base font-bold uppercase mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="w-full px-4 py-4 bg-background  rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <button className="absolute bg-primary rounded-full right-4 top-1/2 -translate-y-1/2 text-white px-4 p-1 hover:text-primary hover:bg-white">
                  Forgot Password
                </button>
              </div>
            </div>

            <div className="flex w-3/4 gap-4 mt-6">
              <button
                onClick={() => navigate("/register")}
                className="flex-1 py-4 px-6 bg-background border border-primary rounded-md uppercase text-primary font-bold text-base hover:scale-105"
              >
                REGISTER
              </button>
              <button className="flex-1 py-4 px-6 uppercase bg-primary rounded-md text-white font-bold min-w text-base hover:scale-105">
                LOGIN
              </button>
            </div>

            <p className=" text-center text-gray-400 mt-4">
              By accessing RBLXRoll.com, I attest that I am at least 18 years
              old and have read and agree with the
              <span className="text-primary cursor-pointer">
                {" "}
                Terms of Service
              </span>
              .
            </p>
          </div>
        </Glowcard>
      </div>
    </div>
  );
};

export default Login;
