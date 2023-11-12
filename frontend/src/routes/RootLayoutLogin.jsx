import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import logoPanti from "../assets/Icons/logo-panti.svg";
import { baseStyle } from "../assets/styles/index";

export default function RootLayoutLogin() {
  return (
    <>
      <header className="shadow-lg mb-5">
        <nav
          className={`${baseStyle} flex justify-between items-center w-full h-[75px]`}
        >
          <img src={logoPanti} alt="Logo website panti" />
          <ul className="flex justify-between gap-14 font-semibold text-xl text-[#767272]">
            <li>
              <NavLink to={"/"}>Beranda</NavLink>
            </li>
            <li>
              <NavLink to={"program-donasi"}>Program Donasi</NavLink>
            </li>
            <li>
              <NavLink to={"tentang-kami"}>Tentang Kami</NavLink>
            </li>
            <li>
              <NavLink to={"login"}>Login</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main> </>
  )
  }