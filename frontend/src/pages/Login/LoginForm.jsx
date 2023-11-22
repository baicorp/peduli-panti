import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import logoGooglePlay from "../../assets/Icons/logo-google-play.png";
import { baseStyle } from "../../assets/styles";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className={`${baseStyle}rounded-md shadow-sm -space-y-px justify-center items-center text-center ml-[37px]`}
    >
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="text-xl font-bold text-gray-900">
            Ayo Bergabung Dengan Komunitas Kami!
          </h2>
        </div>
        <div className="flex align-middle">
          <div className="bg-slate-400 h-px w-24 mt-2 me-3"></div>
          <p className=" text-center text-sm leading-none font-normal text-slate-400">
            Masuk menggunakan Akun
          </p>
          <div className="bg-slate-400 h-px w-24 mt-2 ms-3"></div>
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

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label
                htmlFor="remember_me"
                className="ml-2 block text-sm text-gray-900"
              >
                Ingat Saya
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Lupa Kata Sandi
              </a>
            </div>
          </div>

          <div>
            <Link
              to="/profile"
              className=" group relative w-[400px] h-[50px] flex justify-center py-2 px-4 border border-transparent text-[24px]  rounded-md text-white bg-pink hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Masuk
            </Link>
          </div>
          <div className="flex align-middle">
            <div className="bg-slate-400 h-px w-24 mt-2 me-3"></div>
            <p className=" text-center text-sm leading-none font-normal text-slate-400">
              Masuk menggunakan google
            </p>
            <div className="bg-slate-400 h-px w-24 mt-2 ms-3"></div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="group relative w-24 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Google
            </button>
          </div>
          <div>
            <p className=" text-center text-sm leading-none font-normal text-slate-400">
              Belum memiliki akun? yuk daftar{" "}
              <Link to="/daftar" className="text-indigo-600 font-bold">
                Disini
              </Link>
            </p>
            <div className="bg-slate-400 h-px w-full mt-3"></div>
            <p className=" text-center text-sm leading-none font-normal text-slate-400 mt-3">
              Download Aplikasi
            </p>
            <div className="flex justify-center mt-3">
              <img src={logoGooglePlay} alt="logo-google-play" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
