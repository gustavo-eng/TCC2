import {
  Bird,
  Building,
  CalendarPlus,
  CurrencyCircleDollar,
  Notepad,
  Student,
  User,
} from "@phosphor-icons/react";
import { useEffect, useMemo, useState } from "react";
import { Outlet } from "react-router-dom";
import BellNotifications from "../components/bell-notifications/BellNotifications";
import "../components/tabs/styles.css";
import Tabs from "../components/tabs/Tabs";
import TabTestModal from "../components/tabTestModal/TabTestModal";
import UserDropDown from "../components/userDropdown/UserDropdown";
import "./layoutMain.css";

export interface TabsProps {
  id: string;
  icon?: React.ReactNode;
  title: string;
  component: React.ReactNode;
}

export default function LayoutMain({ componentName = "tab" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGym, setIsGym] = useState<boolean>(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [user, setUser] = useState<any>({});
  useEffect(() => {
    setUser({
      name: "João",
      role: "gym",
    });
  }, []);

  {
    /* <Building size={22} />*/
  }
  const tabs = useMemo(() => {
    if (user.role === "athlet") {
      return [
        { id: "tabCompetition", icon: <CalendarPlus size={25} /> },
        { id: "myPayments", icon: <CurrencyCircleDollar size={25} /> },
        {
          id: "myProfile",
          icon: <User size={20} />,
          component: <TabTestModal />,
        },
      ];
    } else if (user.role === "gym") {
      return [
        { id: "tabCompetition", icon: <CalendarPlus size={25} /> },
        { id: "listAthlets", icon: <Student size={25} /> },
        {
          id: "registersAthlets",
          icon: <Notepad   size={25}/>,
          text: "Incricoes atletas",
        },
        {
          id: "myProfile",
          icon: <User size={20} />,
          component: <TabTestModal />,
        },

        //{ id: "testModal", icon: <Bird />, component: <TabTestModal /> },
      ];
    } else {
      return [
        { id: "tabCompetition", icon: <CalendarPlus size={25} /> },
        { id: "listRegistrations", icon: <CurrencyCircleDollar size={25} /> },
        { id: "lisGyms", icon: <Building size={22} /> },
        { id: "list", icon: <Student size={25} /> },
        {
          id: "allStfasdudedsnts",
          icon: <Bird />,
          component: <TabTestModal />,
        },
      ];
    }
  }, [user]);

  //const { selectedTabIndex } = useTabs(tabs, componentName);

  return (
    <div className="flex flex-col h-screen bg-green-100">
      <header className="h-fit w-full ">
        <nav className="  px-4 lg:px-6 pt-1 pb-0 lg:pb-0  bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a className="flex items-center">
              <img
                src={"../src/assets/logoFPRJ.webp"}
                className="mr-3 h-6 sm:h-9"
                alt="Flowbite Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                FPRJ
              </span>
            </a>
            <div className="flex items-center lg:order-2">
              {isGym && <BellNotifications />}
              <UserDropDown />
              <button
                onClick={toggleMenu}
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded={isMenuOpen ? "true" : "false"}
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className={`${
                isMenuOpen ? "block" : "hidden"
              }  mt-1 justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
              id="mobile-menu-2"
            >
              <ul className="flex flex-col  font-medium lg:flex-row lg:space-x-8  ">
                <Tabs tabs={tabs} />
              </ul>
            </div>
          </div>
        </nav>
        <div className="w-full h-[4px] bg-gradient-to-r from-green-400 to-green-700"></div>
      </header>
      <main className=" h-screen flex flex-col overflow-auto ">
        <section className="  w-full h-full flex flex-col items-center  ">
          <div className=" lg:w-[75%] h-full  w-fit mt-0 lg:mt-3 mb-2 bg-slate-50 shadow  flex justify-center items-start rounded-lg overflow-auto">
            {/* tabs[selectedTabIndex].component */}
            <Outlet />
          </div>
        </section>
      </main>
    </div>
  );
}
