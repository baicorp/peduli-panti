import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import logoGooglePlay from "../../assets/Icons/logo-google-play.png";
import { baseStyle } from "../../assets/styles";

const DaftarPage = () => {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [konfirmasiPassword, setKonfirmasiPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan validasi atau pengiriman data ke server di sini
  };

  return (
    <section className={`${baseStyle}`}>
    <div className=" min-h-screen flex items-center justify-center bg-gray-50 sm:px-6 lg:px-8">
      <div className="">
        <div>
          <h2 className='mt-[45px] text-[27px] font-bold text-black justify-center items-center text-center'>Bersama Panti Peduli, Sejahterakan <br /> Kehidupan Anak Panti di Indonesia</h2>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px justify-center items-center text-center ml-[37px]">
            <div>
              <label htmlFor="nama" className="sr-only text-[24px]">
                Nama
              </label>
              <input
                id="nama"
                name="nama"
                type="text"
                autoComplete="nama"
                required
                className="mb-[15px] rounded-[8px] relative block w-[400px] h-[35px]] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Nama"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only text-[24px]">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mb-[15px]   rounded-[8px] relative block w-[400.1px] h-[35px] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only text-[24px]">
                Kata Sandi
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="mb-[15px]  rounded-[8px] relative block w-[400px] h-[35px] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Kata Sandi"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="konfirmasi-password" className="sr-only text-[24px]">
                Konfirmasi Kata Sandi
              </label>
              <input
                id="konfirmasi-password"
                name="konfirmasiPassword"
                type="password"
                autoComplete="new-password"
                required
                className="mb-[15px]  rounded-[8px] relative block w-[400px] h-[35px] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Konfirmasi Kata Sandi"
                value={konfirmasiPassword}
                onChange={(e) => setKonfirmasiPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="ml-[37px] group relative w-[400px] h-[50px] flex justify-center py-2 px-4 border border-transparent text-[24px]  rounded-md text-white bg-pink hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Daftar
            </button>
          </div>

          <div>
            <p className="ml-[37px] text-[22px] text-center text-sm leading-none font-normal text-slate-400">
              Belum memiliki akun? yuk daftar <span className='text-indigo-600 font-bold'>Disini</span>
            </p>
            <div className=' bg-slate-400 h-px w-full mt-3'></div>
            <p className="ml-[37px] text-center text-sm leading-none font-normal text-slate-400 mt-3">
              Download Aplikasi
            </p>
            <div className='ml-[190px] mt-3 w-[120px] h-[79px]'>
              <img src={logoGooglePlay} alt="logo-google-play" />
            </div>
          </div>

        </form>
      </div>
    </div>
    </section>
  );
};

export default DaftarPage;