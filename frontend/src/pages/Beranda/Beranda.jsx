import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { baseStyle } from "../../assets/styles";
import firstCarousel from "../../assets/Images/carousel-1.jpg";
import bantuan from "../../assets/Images/bantuan.jpeg";
import hero from "../../assets/Images/hero-donatur.jpg";
import calendar from "../../assets/Icons/calendar.svg";
import { Link } from "react-router-dom";

import { alasanDonasiData, doaDonaturData } from "../../constant";

export default function Beranda() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <section className={baseStyle}>
        <div className="mt-8 mb-14">
          <Slider {...settings}>
            <div>
              <img src={firstCarousel} alt="" />
            </div>
            <div>
              <img src={firstCarousel} alt="" />
            </div>
            <div>
              <img src={firstCarousel} alt="" />
            </div>
            <div>
              <img src={firstCarousel} alt="" />
            </div>
            <div>
              <img src={firstCarousel} alt="" />
            </div>
          </Slider>
        </div>
      </section>
      <section className={baseStyle}>
        <h1 className="text-[45px] mb-12 text-center">
          Kabar{" "}
          <span className="underline font-bold text-pink">Panti Peduli</span>
        </h1>
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3].map(() => {
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
        </div>
        <div className="flex justify-center">
          <Link
            to="kabar-panti"
            className="text-lg font-semibold w-[207px] mt-8 text-pink p-2 rounded-md shadow drop-shadow-lg"
          >
            Liaht Selengkapnya
          </Link>
        </div>
      </section>
      <section className={baseStyle}>
        <h1 className="text-[45px] mt-12 mb-10 text-center">
          Kenapa kamu harus berdonasi di{" "}
          <span className="underline font-bold text-pink">Panti Peduli</span> ?
        </h1>
        <div className="flex justify-between">
          {alasanDonasiData.map((data) => {
            return (
              <div key={crypto.randomUUID()} className="flex gap-4">
                <img
                  src={data.img}
                  alt=""
                  className="w-[75px] h-[75px] object-contain"
                />
                <div className="flex flex-col gap-4">
                  <p className="text-xl">{data.title}</p>
                  <p className="max-w-[233px] text-sm">{data.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section>
        <div className="mt-6 relative pb-72">
          <img src={hero} alt="" className="mx-auto" />
          <div
            className={`${baseStyle} absolute top-[77px] right-1/2 translate-x-1/2`}
          >
            <h2 className="text-white mb-14 text-5xl font-bold text-center">
              Pesan dan Doa Donatur
            </h2>
            <div className="flex justify-between gap-4">
              {doaDonaturData.map((data) => {
                return (
                  <div
                    key={crypto.randomUUID()}
                    className="font-normal w-[280px]"
                  >
                    <div className="p-5 bg-white text-xs shadow-lg mb-4 text-black rounded-md">
                      <p>{data.doa}</p>
                    </div>
                    <div className="flex gap-2">
                      <img src={data.avatar} alt="" />
                      <div className="text-sm text-black">
                        <p className="font-bold">{data.nama}</p>
                        <p>{data.profesi}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
