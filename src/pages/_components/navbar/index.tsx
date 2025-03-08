import { NavLink } from "react-router";
import { TiHome } from "react-icons/ti";
import { FaUser, FaChevronDown } from "react-icons/fa";
import Glowcard from "../glowcard";
import { FaTrophy } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";
import { useState } from "react";
import Modal from "../modal";
import Login from "./_component/login";

const navs = [
  { name: "Home", icon: TiHome, path: "/" },
  { name: "Sport", icon: FaTrophy, path: "/sport" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-white/10 backdrop-blur-lg flex items-center z-50 ">
        <div className="font-bold text-lg w-64 px-4">LOGO</div>
        <div className="flex-1 hidden md:block">
          <div className="flex items-center gap-4">
            {navs.map((nav) => (
              <NavLink to={nav.path} end>
                {({ isActive }) => (
                  <Glowcard
                    color="bg-primary border-primary"
                    position="50% 100%"
                    bg={false}
                    size="3rem"
                    show={isActive ? true : false}
                  >
                    <div className="flex items-center gap-2 p-3.5 px-5">
                      <nav.icon className="text-primary text-lg" /> {nav.name}
                    </div>
                  </Glowcard>
                )}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4 p-2">
          <Glowcard>
            <div className=" flex items-center gap-4 ">
              <div className="px-2">123.56</div>
              <div className="bg-primary rounded-lg p-1.5 px-4">Deposit</div>
            </div>
          </Glowcard>
          <div className="hidden md:block">
            <Glowcard>
              <div className=" flex items-center gap-4 p-1 px-2 ">
                <div className="bg-background p-1.5 rounded-lg">
                  <FaUser />
                </div>

                <div className="">User1234</div>
                <div className="border border-white/10 p-1.5 rounded-lg">
                  <FaChevronDown className="text-xs" />
                </div>
              </div>
            </Glowcard>
          </div>
          <button
            onClick={() => setIsLogin(true)}
            className="bg-primary rounded-lg p-1.5 px-4"
          >
            Login
          </button>

          <div className="relative md:hidden ">
            {isOpen ? (
              <IoCloseSharp
                className="text-3xl"
                onClick={() => setIsOpen(!isOpen)}
              />
            ) : (
              <RiMenu3Fill
                className="text-3xl"
                onClick={() => setIsOpen(!isOpen)}
              />
            )}
            <div
              className={`absolute right-0 top-[130%] flex flex-col bg-black backdrop-blur-lg w-screen h-screen p-4 h- gap-4 transition-all duration-300 ${
                isOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              {navs.map((nav) => (
                <NavLink to={nav.path} end onClick={() => setIsOpen(false)}>
                  {({ isActive }) => (
                    <Glowcard
                      color="bg-primary border-primary"
                      position="0% 50%"
                      size="3rem"
                      show={isActive ? true : false}
                    >
                      <div className="flex items-center gap-2 p-3.5 px-5">
                        <nav.icon className="text-primary text-lg" /> {nav.name}
                      </div>
                    </Glowcard>
                  )}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isLogin} onClose={() => setIsLogin(false)}>
        <Login />
      </Modal>
      <div className="h-14" />
    </>
  );
}

export default Navbar;
