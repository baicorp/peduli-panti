import React from "react";
import { baseStyle } from "../../assets/styles";

export default function KiirimDoa() {
  return (
    <section className={baseStyle}>
        <div className="mb-[50px] ml-[120px] w-[800px] h-[500px]  drop-shadow border-gray border-[1px] rounded-[10px] overflow-hidden ">
            <h1 className="text-center items-center font-bold mt-[50px]">Form Pesan & Doa</h1>
            <form className="ml-[50px] mt-[50px]">

                <div className="flex">
                <label htmlFor="nama-lengkap" className="font-bold">
                nama lengkap
              </label>
              <input
                id="nama-lengkap"
                name="nama-lengkap"
                type="nama-lengkap"
                autoComplete="nama-lengkap"
                required
                className="ml-[50px] mb-[15px] rounded-[8px] relative block w-[550px] h-[35px] px-3 py-2 border border-gray placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="nama lengkap"
              />
                </div>

                <div className="flex">
                    <label htmlFor="Pekerjaan" className="font-bold">
                        Pekerjaan
                    </label>
                    <input
                        id="Pekerjaan"
                        name="Pekerjaan"
                        type="Pekerjaan"
                        autoComplete="Pekerjaan"
                        required
                        className="ml-[80px] mb-[15px] rounded-[8px] relative block w-[550px] h-[35px] px-3 py-2 border border-gray placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Pekerjaan"
                    />
                </div>


                <div className="flex">
                    <label htmlFor="PesanDoa" className="font-bold">
                        Pesan / Doa
                    </label>
                    <textarea
                        id="PesanDoa"
                        name="PesanDoa"
                        type="PesanDoa"
                        autoComplete="PesanDoa"
                        required=""
                        className=" ml-[65px] mb-[15px] rounded-[8px] relative block w-[550px] h-[200px]  border border-gray placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm  "
                        placeholder="Pesan Doa"
                    />
                </div>

              
                <button className=" ml-[300px] w-[100px] h-[40px] bg-[#F2CFE6] rounded-[10px]">Kirim</button>
            </form>

        </div>
    </section>
  );
}
