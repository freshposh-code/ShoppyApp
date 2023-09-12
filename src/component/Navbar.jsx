import React, { useEffect } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { UseStateContext } from "../context/ContextProvider";
import { AiOutlineMenu } from "react-icons/ai";
import avatar from "../data/avatar.jpg";
import { Chat, Notification, UserProfile, Cart } from ".";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative  xs:text-xl text-[13px] rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
    screenSize,
    setScreenSize,
    currentColor,
  } = UseStateContext();

  useEffect(() => {
    const handleScreenSize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleScreenSize);

    handleScreenSize();

    return () => {
      window.removeEventListener("resize", handleScreenSize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);
  return (
    <>
      <div className="flex justify-between p-2 md:mx-6 relative ">
        <NavButton
          title="Menu"
          customFunc={() => {
            setActiveMenu((prev) => !prev);
          }}
          color={currentColor}
          icon={<AiOutlineMenu />}
        />
        <div className="flex">
          <NavButton
            title="Chat"
            dotColor={currentColor}
            customFunc={() => handleClick("chat")}
            color={currentColor}
            icon={<BsChatLeft />}
          />
          <NavButton
            title="cart"
            dotColor={currentColor}
            customFunc={() => handleClick("cart")}
            color={currentColor}
            icon={<FiShoppingCart />}
          />
          <NavButton
            title="notification"
            dotColor={currentColor}
            customFunc={() => handleClick("notification")}
            color={currentColor}
            icon={<RiNotification3Line />}
          />
          <TooltipComponent content="profile" position="BottomCenter">
            <div
              onClick={() => handleClick("userProfile")}
              className="flex items-center gap-2 cursor-pointer rounded-lg hover:bg-light-gray"
            >
              <img
                src={avatar}
                alt="profile"
                className="rounded-full w-8 h-8"
              />
              <p>
                <span className="text-gray-400 xs:text-14 text-[9.5px]">
                  Hi,{" "}
                </span>
                <span className="text-gray-400 font-bold ml-1 xs:text-14 text-[9.5px]">
                  Micheal
                </span>
              </p>
              <MdKeyboardArrowDown className="text-gray-400 text-14" />
            </div>
          </TooltipComponent>

          {isClicked.chat && <Chat />}
          {isClicked.cart && <Cart />}
          {isClicked.notification && <Notification />}
          {isClicked.userProfile && <UserProfile />}
        </div>
      </div>
    </>
  );
};

export default Navbar;
