import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import logoPanti from "../assets/Icons/logo-panti.svg";
import { footerData } from "../constant";
import { baseStyle } from "../assets/styles/index";

export default function RootLayout() {
  return (
    <>
      <header className="shadow-lg mb-5">
        <nav
          className={`${baseStyle} flex justify-between items-center w-full h-[75px]`}
        >
          <img src={logoPanti} alt="Logo website panti" className="w-[200px]" />
          <ul className="flex justify-between gap-14 font-semibold text-lg text-[#767272]">
            <li>
              <NavLink
                className={({ isActive }) => isActive && "text-pink"}
                to={"/"}
              >
                Beranda
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => isActive && "text-pink"}
                to={"cari-panti"}
              >
                Cari Panti
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => isActive && "text-pink"}
                to={"tentang-kami"}
              >
                Tentang Kami
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => isActive && "text-pink"}
                to={"login"}
              >
                Login
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
