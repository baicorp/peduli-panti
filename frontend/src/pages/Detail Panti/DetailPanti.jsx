import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { baseStyle } from "../../assets/styles";
import detailPanti from "../../assets/Images/detail-panti.jpg";
import share from "../../assets/Icons/share.svg";

export default function DetailPanti() {
  const { idPanti } = useParams();
  const [detailButton, setDetailButton] = useState("deskripsiPanti");

  return (
    <section className={`${baseStyle}`}>
      <div className="px-9 py-6 rounded-lg shadow-2xl my-8">
        <img src={detailPanti} alt="" className="mb-12" />
        <div className="flex justify-between items-center mb-10">
          <h1 className="font-semibold text-4xl text-pink">
            Panti Bina Remaja Mandiri
          </h1>
          <div className="flex gap-4">
            <img src={share} alt="" />
            <Link
              to="#"
              className="bg-medium-pink text-xl font-medium px-6 py-2 rounded-md"
            >
              Donasi Uang
            </Link>
            <Link
              to="#"
              className="bg-medium-pink text-xl font-medium px-6 py-2 rounded-md"
            >
              Donasi Barang
            </Link>
          </div>
        </div>
        <div className="text-[26px] mb-8">
          <div className="flex justify-between items-center mb-6">
            <p>Progres Donasi</p>
            <p>75%</p>
          </div>
          <div className="h-6 rounded-full border border-gray overflow-hidden mb-6">
            <div className="bg-medium-pink w-3/4 h-full"></div>
          </div>
          <div className="flex justify-between">
            <p>
              Donasi Terkumpul :{" "}
              <span className="text-pink font-semibold">Rp.125.000</span>
            </p>
            <p>
              Target :{" "}
              <span className="text-pink font-semibold">Rp.800.000</span>
            </p>
          </div>
        </div>
        <hr />
        <div className="w-full flex justify-between gap-4 mt-[14px] mb-6">
          <button
            className={`${
              detailButton === "deskripsiPanti" ? "bg-medium-pink" : ""
            } w-full py-2 rounded-full text-[26px]`}
            onClick={() => {
              setDetailButton("deskripsiPanti");
            }}
          >
            Detail Panti
          </button>
          <button
            className={`${
              detailButton === "kebutuhanPanti" ? "bg-medium-pink" : ""
            } w-full py-2 rounded-full text-[26px]`}
            onClick={() => {
              setDetailButton("kebutuhanPanti");
            }}
          >
            Deskripsi Kebutuhan
          </button>
        </div>
        <div>
          {detailButton === "deskripsiPanti" ? (
            <DeskripsiPanti />
          ) : (
            <KebutuhanPanti />
          )}
        </div>
      </div>
    </section>
  );
}

function DeskripsiPanti({ namaPemilik, kontak, Alamat, deskripsi }) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-[26px] font-extrabold mb-3">Nama Pemilik</h2>
        <p className="text-2xl">Ibu Ferliani Anggraeni</p>
      </div>
      <div>
        <h2 className="text-[26px] font-extrabold mb-3">Kontak</h2>
        <p className="text-2xl">+62 812-6314-7664 / (021) 7873042</p>
      </div>
      <div>
        <h2 className="text-[26px] font-extrabold mb-3">Alamat</h2>
        <p className="text-2xl">
          Jl Banjaran Pucung, Gg. Masjid Al Ikhlas Jl. Emeralda Raya No.100,
          RT.3/RW.10, Cilangkap, Kec. Tapos, Kota Depok, Jawa Barat 16458,
          Indonesia
        </p>
      </div>
      <div>
        <h2 className="text-[26px] font-extrabold mb-3">Deskripsi</h2>
        <p className="text-2xl">
          Panti kami telah berdiri di Kota Depok sejak tahun 2009, yang
          berkonsentrasi di pelayanan: 1. Tumbuh kembang anak yatim dan dhuafa
          yang berusia balita hingga remaja terlantar (yang dititipkan oleh
          kepolisian, dinas sosial, serta warga sekitar depok & luar depok) 2.
          Taman Anak Sejahtera, (program dari Kementrian Sosial RI untuk wilayah
          Depok), program ini layaknya Daycare, namun untuk anak dari orang tua
          berpenghasilan minim yang harus bekerja untuk memenuhi kebutuhan
          hidupnya (pedagang kaki lima, buruh cuci, buruh pasar, dll), dan
          setelah bekerja mereka akan menjemput anaknya pulang ke rumah.
        </p>
      </div>
    </div>
  );
}

function KebutuhanPanti({ kebutuhan, totalAnak, programPanti }) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-[26px] font-extrabold mb-3">Kebutuhan</h2>
        <div className="text-2xl">
          <p>Membutuhkan Keperluan Makanan, terkhususnya: </p>
          <ul className="list-disc ml-10">
            <li>Beras</li>
            <li>Susu</li>
            <li>Pampers</li>
          </ul>
        </div>
      </div>
      <div>
        <h2 className="text-[26px] font-extrabold mb-3">Total Anak</h2>
        <div className="text-2xl">
          <p>Total 40 anak, terdiri dari:</p>
          <ul className="list-disc ml-10">
            <li>Beras</li>
            <li>Susu</li>
            <li>Pampers</li>
          </ul>
        </div>
      </div>
      <div>
        <h2 className="text-[26px] font-extrabold mb-3">Program Panti</h2>
        <div className="text-2xl">
          <ul className="list-disc ml-10">
            <li>Beasiswa Kakak Asuh</li>
            <li>Produk usaha Kuliner (Binari Fried Chicken dan lele olahan)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}