import React from "react";
import { Link } from "react-router-dom";

export default function CardPanti({
  title,
  penerima,
  progres,
  donasiTerkumpul,
  target,
  tagList,
  desc,
  link,
}) {
  return (
    <div
      key={crypto.randomUUID()}
      className="bg-light-pink rounded-xl overflow-hidden max-w-[390px]"
    >
      <img src={programDonasi} alt="" />
      <div className="px-8 py-5">
        <p className="text-2xl text-pink font-bold mb-7">{title}</p>
        <p className="text-base">Penerima : {penerima}</p>
        <div className="text-sm mt-2">
          <div className="flex justify-between">
            <p>Progres Realisasi Donasi</p>
            <p>{progres}</p>
          </div>
          <div className="rounded-full h-[10px] bg-light-pink border mb-2 overflow-hidden">
            <div className="w-3/4 h-full bg-medium-pink"></div>
          </div>
        </div>
        <p className="mb-1">
          Donasi Terkumpul :{" "}
          <span className="text-pink">Rp.{donasiTerkumpul}</span>
        </p>
        <p className="mb-4">
          Target : <span className="text-pink">Rp.{target}</span>
        </p>
        {tagList.map((data) => {
          return (
            <button
              key={crypto.randomUUID()}
              className="font-semibold text-xs text-white bg-purple p-[6px] rounded-full mb-4"
            >
              {data}
            </button>
          );
        })}

        <p className="text-14">{desc}</p>
      </div>
      <Link
        to={link}
        className="text-white block text-lg bg-purple w-full py-2 font-bold text-center"
      >
        Donasi Sekarang
      </Link>
    </div>
  );
}
