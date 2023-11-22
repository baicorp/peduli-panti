import React from "react";
import { Link } from "react-router-dom";
// import programDonasi from "../../assets/Images/program-donasi.jpg";
import programDonasi from "../assets/Images/program-donasi.jpg";

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
    <Link
      key={crypto.randomUUID()}
      to={"123"}
      className="bg-light-pink rounded-xl overflow-hidden max-w-[390px]"
    >
      <img src={programDonasi} alt="" />
      <div className="px-8 py-5">
        <p className="text-xl text-pink font-semibold mb-7">
          Yayasan Putra Nusa
        </p>
        <p>
          Jl. Dukuh Pinggir IV, Kb. Melati, Tanah Abang, Kota Jakarta Pusat
          Tanahabang, Daerah Khusus IbuKota Jakarta, Indonesia
        </p>
        <p className="text-14">{desc}</p>
      </div>
      {/* <Link
        to={link}
        className="text-white block text-lg bg-purple w-full py-2 font-bold text-center"
      >
        Donasi Sekarang
      </Link> */}
    </Link>
  );
}
