import React from "react";
import { baseStyle } from "../../assets/styles";

export default function KirimDoa() {
 return (
    <section className={`${baseStyle} flex items-center justify-center`}>
        <div className="w-[885px] h-[576px] drop-shadow-xl rounded-[10px] overflow-hidden ">
        <div
          key={crypto.randomUUID()}
          className="w-[885px] h-[576px] drop-shadow-1xl rounded-xl overflow-hidden bg-white">
            <h1 className="text-center font-bold mt-[50px] text-2xl">Form Pesan & Doa</h1>
            <form className="ml-[50px] mt-[50px]">
                <div className="flex mb-[20px]">
                    <label htmlFor="nama-lengkap" className="font-bold">
                        Nama lengkap
                    </label>
                    <input
                        id="nama-lengkap"
                        name="nama-lengkap"
                        type="text"
                        autoComplete="nama-lengkap"
                        required
                        className="ml-[50px] mb-[15px] rounded-[8px] relative block w-[550px] h-[35px] px-3 py-2 border border-gray placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Nama lengkap"
                    />
                </div>

                <div className="flex mb-[20px]">
                    <label htmlFor="Pekerjaan" className="font-bold">
                        Pekerjaan
                    </label>
                    <input
                        id="Pekerjaan"
                        name="Pekerjaan"
                        type="text"
                        autoComplete="Pekerjaan"
                        required
                        className="ml-[80px] mb-[15px] rounded-[8px] relative block w-[550px] h-[35px] px-3 py-2 border border-gray placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Pekerjaan"
                    />
                </div>


                <div className="flex mb-[20px]">
                    <label htmlFor="PesanDoa" className="font-bold">
                        Pesan / Doa
                    </label>
                    <textarea
                        id="PesanDoa"
                        name="PesanDoa"
                        type="text"
                        autoComplete="PesanDoa"
                        required
                        className="ml-[65px] mb-[15px] rounded-[8px] relative block w-[550px] h-[200px] border border-gray placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Pesan Doa"
                    />
                </div>

                <button className="ml-[300px] w-[100px] h-[40px] bg-[#F2CFE6] rounded-[10px]">Kirim</button>
            </form>
            </div>
        </div>
    </section>
 );
}