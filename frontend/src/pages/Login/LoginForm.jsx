import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import logoGooglePlay from "../../assets/Icons/logo-google-play.png";
import { baseStyle } from "../../assets/styles";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={`${baseStyle}rounded-md shadow-sm -space-y-px justify-center items-center text-center ml-[37px]`}>
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className='text-xl font-bold text-gray-900'>Ayo Bergabung Dengan Komunitas Kami!</h2>
        </div>
        <div className='flex align-middle'>
          <div className='bg-slate-400 h-px w-24 mt-2 me-3'></div>
          <p className=" text-center text-sm leading-none font-normal text-slate-400">
            Masuk menggunakan Akun
          </p>
          <div className='bg-slate-400 h-px w-24 mt-2 ms-3'></div>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value={rememberMe} />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mb-[15px]  rounded-[8px] relative block w-[400px] h-[35px] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="mb-[15px]  rounded-[8px] relative block w-[400px] h-[35px] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

     
          <div>
            <button
              type="submit"
              className=" group relative w-[400px] h-[50px] flex justify-center py-2 px-4 border border-transparent text-[24px]  rounded-md text-white bg-pink hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Masuk
            </button>
          </div>

          <div>
            <p className=" text-center text-sm leading-none font-normal text-slate-400">
              Belum memiliki akun? yuk daftar <span className='text-indigo-600 font-bold'>Disini</span>
            </p>
            <div className='bg-slate-400 h-px w-full mt-3'></div>
            <p className=" text-center text-sm leading-none font-normal text-slate-400 mt-3">
              Download Aplikasi
            </p>
            <div className='ml-[137px] mt-3 w-[120px] h-[79px]'>
              <img src={logoGooglePlay} alt="logo-google-play" />
            </div>
          </div>

        </form>
      </div>
    </div>
  );
};

export default LoginPage;