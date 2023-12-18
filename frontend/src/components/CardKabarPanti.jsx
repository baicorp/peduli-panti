import React from "react";
import { Link } from "react-router-dom";

export default function CardKabarPanti({ img, judul, deskripsi, link }) {
  return (
    <div className="max-w-xs drop-shadow-xl rounded-xl overflow-hidden bg-gradient-to-b from-gradient-pink to-white">
      <img src={img} alt="" />
      <div className=" space-y-3 p-4">
        <div className="flex items-center gap-2">
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M43.75 20.8333H6.25M33.3333 4.16663V12.5M16.6667 4.16663V12.5M16.25 45.8333H33.75C37.2503 45.8333 39.0005 45.8333 40.3374 45.1521C41.5135 44.5529 42.4696 43.5967 43.0688 42.4207C43.75 41.0838 43.75 39.3336 43.75 35.8333V18.3333C43.75 14.833 43.75 13.0828 43.0688 11.7459C42.4696 10.5698 41.5135 9.61371 40.3374 9.0145C39.0005 8.33329 37.2503 8.33329 33.75 8.33329H16.25C12.7497 8.33329 10.9995 8.33329 9.66256 9.0145C8.48655 9.61371 7.53042 10.5698 6.93121 11.7459C6.25 13.0828 6.25 14.833 6.25 18.3333V35.8333C6.25 39.3336 6.25 41.0838 6.93121 42.4207C7.53042 43.5967 8.48655 44.5529 9.66256 45.1521C10.9995 45.8333 12.7497 45.8333 16.25 45.8333Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="font-semibold">{judul}</p>
        </div>
        <p className="text-sm">{deskripsi}</p>
        <Link
          to={link}
          className="block shadow-lg text-xs p-2 rounded-md border-[1.5px] border-black w-fit"
        >
          selengkapnya
        </Link>
      </div>
    </div>
  );
}
