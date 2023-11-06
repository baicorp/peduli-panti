import React from "react";
import { baseStyle } from "../../assets/styles";
import bantuan from "../../assets/Images/bantuan.jpeg";
import calendar from "../../assets/Icons/calendar.svg";

export default function KabarPanti() {
  return (
    <>
      <section className={baseStyle}>
        <h1 className="text-[45px] text-center">
          Kabar <span className="font-bold text-pink ">Panti Peduli</span>
        </h1>
      </section>
      <section className={`${baseStyle} mt-14 mb-10 grid grid-cols-3 gap-4`}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14].map(() => {
          return (
            <div
              key={crypto.randomUUID()}
              className="max-w-[390px] drop-shadow-xl rounded-xl overflow-hidden bg-gradient-to-b from-gradient-pink to-white"
            >
              <img src={bantuan} alt="" />
              <div className=" space-y-3 p-4">
                <div className="flex items-center gap-2">
                  <img src={calendar} alt="" />
                  <p className="font-semibold">
                    Penyaluran Alat sekolah kepada 89 anak panti
                  </p>
                </div>
                <p>
                  Bandung - Sabtu 2 Oktober 2023, melakukan “kolaborasi
                  kebaikan” bersama sahabat yatim indonesia dalam rangka
                  menyalurkan program Yatim berprestasi.
                </p>
                <button className="font-semibold text-xs text-white bg-pink p-[6px] rounded-full">
                  CSR
                </button>
                <button className="block shadow-lg text-xs p-2 rounded-md border-[1.5px] border-black">
                  selengkapnya
                </button>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
