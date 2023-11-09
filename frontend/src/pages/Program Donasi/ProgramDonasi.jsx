import React from "react";
import { Link } from "react-router-dom";
import programDonasi from "../../assets/Images/program-donasi.jpg";
import programDonasiBanner from "../../assets/Images/program-donasi-banner.jpg";
import search from "../../assets/Icons/search.svg";
import { baseStyle } from "../../assets/styles";

export default function ProgramDonasi() {
  return (
    <>
      <section>
        <div className="relative">
          <img src={programDonasiBanner} className="w-full" alt="" />
          <div
            className={`${baseStyle} absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full`}
          >
            <div className="font-extrabold text-white flex justify-between items-center mb-8">
              <h1 className="text-[34px]">
                DAFTARKAN PANTIMU, NIKMATI MANFAATNYA!
              </h1>
              <Link
                to={"#"}
                className="text-2xl flex items-center px-8 h-10 rounded-md bg-pink"
              >
                Daftar Panti
              </Link>
            </div>
            <div className="flex justify-between">
              <input
                type="text"
                className="text-black outline-none rounded-md p-2 max-w-[310px] w-full"
                placeholder="Cari berdasarkan nama panti"
              />
              <input
                type="text"
                className="text-black outline-none rounded-md p-2 max-w-[310px] w-full"
                placeholder="Cari berdasarkan lokasi panti"
              />
              <input
                type="text"
                className="text-black outline-none rounded-md p-2 max-w-[310px] w-full"
                placeholder="Cari berdasarkan kota panti"
              />
              <button className="bg-white rounded-md p-1 w-[40px] flex justify-center items-center">
                <img src={search} alt="" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section
        className={`${baseStyle} py-12 grid grid-cols-3 gap-x-8 gap-y-12`}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((data) => {
          return (
            <div
              key={crypto.randomUUID()}
              className="bg-light-pink rounded-xl overflow-hidden max-w-[390px]"
            >
              <img src={programDonasi} alt="" />
              <div className="px-8 py-5">
                <p className="text-2xl text-pink font-bold mb-7">
                  Hadirkan Beasiswa & Dukung Pendidikan Untuk Adik Panti
                </p>
                <p className="text-base">
                  Penerima : Panti Bina Remaja Mandiri
                </p>
                <div className="text-sm mt-2">
                  <div className="flex justify-between">
                    <p>Progres Realisasi Donasi</p>
                    <p>75%</p>
                  </div>
                  <div className="rounded-full h-[10px] bg-light-pink border mb-2 overflow-hidden">
                    <div className="w-3/4 h-full bg-medium-pink"></div>
                  </div>
                </div>
                <p className="mb-1">
                  Donasi Terkumpul :{" "}
                  <span className="text-pink">Rp.3.780.000</span>
                </p>
                <p className="mb-4">
                  Target : <span className="text-pink">Rp.5.200.000</span>
                </p>
                <button className="font-semibold text-xs text-white bg-purple p-[6px] rounded-full mb-4">
                  Pendidikan
                </button>
                <p className="text-14">
                  Mari jadi bagian terbaik untuk jembatan pendidikan anak-anak
                  yatim & dhuafa di Indonesia
                </p>
              </div>
              <Link
                to={"#"}
                className="text-white block text-lg bg-purple w-full py-2 font-bold text-center"
              >
                Donasi Sekarang
              </Link>
            </div>
          );
        })}
      </section>
    </>
  );
}
