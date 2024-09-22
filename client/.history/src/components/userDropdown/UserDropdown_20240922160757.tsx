import { CaretDown, SignOut } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import useAppSelector from "../../hooks/useAppSelector";
import { authSelector, logOut } from "../../store/auth/authReducer";
import { AppDispatch } from "../../store/store";

export default function UserDropDown() {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch<AppDispatch>();
  const {user} = useAppSelector(authSelector);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropDown = () => {
    setIsOpen(false);
  };

  function handleLogOut() {
    dispatch(logOut());
  }

  const handleOutSideClick = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node | null)
    ) {
      closeDropDown();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutSideClick);
    return () => {
      document.removeEventListener("click", handleOutSideClick);
    };
  });

  return (
    <>
      <div className=" relative inline-block">
        <button
          id="hs-dropdown-custom-trigger"
          type="button"
          className="hs-dropdown-toggle py-1 pr-3 shadow-sm inline-flex items-center gap-x-2 text-sm font-semibold"
          onClick={toggleDropDown}
        >
          <div className="w-[32px] h-[32px] rounded-full flex flex-col justify-center bg-green-700 text-white">
            {" "}
            {false || "GD"}
          </div>
          <span className="text-white  font-medium max-w-[7.5rem]">
            {false || "Gustavo Dias"}
          </span>
          <CaretDown
            size={16}
            weight="light"
            className={isOpen ? "text-white rotate-180" : "text-white"}
          />
        </button>
        {isOpen && (
          <div className="transition-[opacity, margin] rounded-t-md duration absolute right-[0.0rem] mt-1 bg-white shadow-md rounded-xl p-1 min-w-[14rem] z-10">
            <div className=" px-1 ">
              <p className="text-sm text-green-600 font-semibold">
                {user?.name || "Fulano"}
              </p>
              <p className="text-xs font-medium text-gray-800 ">
                {user?.email || "user@hotmail.com"}
              </p>
            </div>

            <div className="pb-0">
              <button
                className=" w-full  flex items-center justify-center font-semibold  mt-4 gap-x-1 py-1 px-3 rounded-md text-sm  bg-red-200/50 hover:bg-red-400/40"
                onClick={handleLogOut}
              >
                <SignOut size={20} weight="bold" className="text-red-600" />
                <div className="text-red-600 ">Sair</div>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
