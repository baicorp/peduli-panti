import React from "react";
import bantuan from "../../assets/Images/bantuan.jpeg";
import calendar from "../../assets/Icons/calendar.svg";
import { Link } from "react-router-dom";

export default function CardKabarPanti({ judul, deskripsi, tag, link }) {
  return (
    <div className="max-w-xs drop-shadow-xl rounded-xl overflow-hidden bg-gradient-to-b from-gradient-pink to-white">
      <img src={bantuan} alt="" />
      <div className=" space-y-3 p-4">
        <div className="flex items-center gap-2">
          <img src={calendar} alt="" />
          <p className="font-semibold">{judul}</p>
        </div>
        <p>{deskripsi}</p>
        <div className="flex gap-3 flex-wrap">
          {tag.map((data) => {
            return (
              <button
                key={crypto.randomUUID()}
                className="font-semibold text-xs text-white bg-pink p-[6px] rounded-full"
              >
                {data}
              </button>
            );
          })}
        </div>

        <Link
          to={link}
          className="block shadow-lg text-xs p-2 rounded-md border-[1.5px] border-black"
        >
          selengkapnya
        </Link>
      </div>
    </div>
  );
}
