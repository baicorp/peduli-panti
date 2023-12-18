import React from "react";

export default function AdminBelumTerdaftar() {
  return (
    <div>
      <h1 className="text-lg font-semibold px-9 py-6">
        Silahkan Isi Profil dan Data Panti
      </h1>
      <hr className="text-border-color" />
      <div className="px-9 py-6">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between gap-3">
            <label
              htmlFor="namaPanti"
              className="w-full max-w-[192px] font-semibold"
            >
              Nama Panti
            </label>
            <input
              type="text"
              id="namaPanti"
              className="border rounded-md px-3 py-1 outline-none w-full"
            />
          </div>
          <div className="flex justify-between gap-3">
            <label
              htmlFor="noTlpPanti"
              className="w-full max-w-[192px] font-semibold"
            >
              No Tlp Panti
            </label>
            <input
              type="number"
              id="noTlpPanti"
              className="border rounded-md px-3 py-1 outline-none w-full"
            />
          </div>
          <div className="flex justify-between gap-3">
            <label
              htmlFor="namaPemilik"
              className="w-full max-w-[192px] font-semibold"
            >
              Nama Pemilik
            </label>
            <input
              type="text"
              id="namaPemilik"
              className="border rounded-md px-3 py-1 outline-none w-full"
            />
          </div>
          <div className="flex justify-between gap-3">
            <label
              htmlFor="noTlpPemilik"
              className="w-full max-w-[192px] font-semibold"
            >
              Nama Tlp Pemilik Panti
            </label>
            <input
              type="number"
              id="noTlpPemilik"
              className="border rounded-md px-3 py-1 outline-none w-full"
            />
          </div>
          <div className="flex flex-col gap-[14px]">
            <label
              htmlFor="deskripsiPanti"
              className="w-full max-w-[192px] font-semibold"
            >
              Deskripsi Panti
            </label>
            <textarea
              name="deskripsiPanti"
              id="deskripsiPanti"
              cols="30"
              rows="7"
              className="border rounded-md px-3 py-1 outline-none"
              placeholder="Isi artikel yang akan kamu unggah"
            ></textarea>
          </div>
          <div className="flex gap-[14px]">
            <label
              htmlFor="alamat"
              className="w-full max-w-[192px] font-semibold"
            >
              Alamat
            </label>
            <input
              type="text"
              id="alamat"
              className="border rounded-md px-3 py-1 outline-none w-full"
            />
          </div>
          <div className="flex justify-between gap-3">
            <label
              htmlFor="provinsi"
              className="w-full max-w-[192px] font-semibold"
            >
              Provinsi
            </label>
            <select
              id="provinsi"
              name="provinsi"
              className="w-full border rounded-md px-3 py-1 outline-none"
            >
              <option value="null">--Pilih Provinsi--</option>
              <option value="jawaTimur">Jawa Timur</option>
              <option value="jawaBarat">Jawa Barat</option>
              <option value="jawatengah">Jawa Tengah</option>
              <option value="papua">Papua</option>
            </select>
          </div>
          <div className="flex justify-between gap-3">
            <label
              htmlFor="kabupaten"
              className="w-full max-w-[192px] font-semibold"
            >
              Kabupaten / Kota
            </label>
            <input
              type="text"
              id="kabupaten"
              className="border rounded-md px-3 py-1 outline-none w-full"
            />
          </div>
          <div className="flex justify-between gap-3">
            <label
              htmlFor="kecamatan"
              className="w-full max-w-[192px] font-semibold"
            >
              Kecamatan
            </label>
            <input
              type="text"
              id="kecamatan"
              className="border rounded-md px-3 py-1 outline-none w-full"
            />
          </div>
          <div className="flex flex-col gap-[14px]">
            <label
              htmlFor="deskripsiKebutuhan"
              className="w-full max-w-[192px] font-semibold"
            >
              Deskripsi Kebutuhan
            </label>
            <textarea
              name="deskripsiKebutuhan"
              id="deskripsiKebutuhan"
              cols="30"
              rows="7"
              className="border rounded-md px-3 py-1 outline-none"
              placeholder="Isi artikel yang akan kamu unggah"
            ></textarea>
          </div>
          <div className="flex justify-between gap-3">
            <label
              htmlFor="programPanti"
              className="w-full max-w-[192px] font-semibold"
            >
              Program Panti
            </label>
            <input
              type="text"
              id="programPanti"
              className="border rounded-md px-3 py-1 outline-none w-full"
            />
          </div>
          <div className="flex justify-between gap-3">
            <label
              htmlFor="jumlahPengurus"
              className="w-full max-w-[192px] font-semibold"
            >
              Jumlah Pengurus
            </label>
            <input
              type="number"
              id="jumlahPengurus"
              className="border rounded-md px-3 py-1 outline-none w-full"
            />
          </div>
          <div className="flex justify-between gap-3">
            <label
              htmlFor="jumlahAnakLaki"
              className="w-full max-w-[192px] font-semibold"
            >
              Jumlah Anak Laki-laki
            </label>
            <input
              type="number"
              id="jumlahAnakLaki"
              className="border rounded-md px-3 py-1 outline-none w-full"
            />
          </div>
          <div className="flex justify-between gap-3">
            <label
              htmlFor="jumlahAnakPerempuan"
              className="w-full max-w-[192px] font-semibold"
            >
              Jumlah Anak Perempuan
            </label>
            <input
              type="number"
              id="jumlahAnakPerempuan"
              className="border rounded-md px-3 py-1 outline-none w-full"
            />
          </div>
          <div className="flex flex-col gap-[14px]">
            <label
              htmlFor="logo"
              className="w-full max-w-[192px] font-semibold"
            >
              Logo Panti
            </label>
            <div className="flex gap-5">
              <svg
                viewBox="0 0 256 256"
                className="w-24 h-24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect fill="none" />
                <rect
                  fill="none"
                  height="160"
                  rx="8"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                  width="192"
                  x="32"
                  y="48"
                />
                <path
                  d="M32,168l50.3-50.3a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,0,11.4,0l20.6-20.6a8,8,0,0,1,11.4,0L224,184"
                  fill="none"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                />
                <circle cx="156" cy="100" r="12" />
              </svg>
              <div>
                <p>
                  Max : 2MB. Ukuran 200 x 60 pixel.
                  <br />
                  Format : jpg | png
                </p>
                <input
                  type="file"
                  accept="image/png, image/jpeg, image/jpg"
                  id="logo"
                  className="mt-2"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[14px]">
            <label
              htmlFor="foto"
              className="w-full max-w-[192px] font-semibold"
            >
              Foto Panti
            </label>
            <div className="flex gap-5">
              <svg
                viewBox="0 0 256 256"
                className="w-24 h-24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect fill="none" />
                <rect
                  fill="none"
                  height="160"
                  rx="8"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                  width="192"
                  x="32"
                  y="48"
                />
                <path
                  d="M32,168l50.3-50.3a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,0,11.4,0l20.6-20.6a8,8,0,0,1,11.4,0L224,184"
                  fill="none"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                />
                <circle cx="156" cy="100" r="12" />
              </svg>
              <div>
                <p>
                  Max : 2MB. Ukuran 200 x 60 pixel.
                  <br />
                  Format : jpg | png
                </p>
                <input
                  type="file"
                  accept="image/png, image/jpeg, image/jpg"
                  id="foto"
                  className="mt-2"
                />
              </div>
            </div>
          </div>
          <input
            type="submit"
            value="Simpan"
            className="bg-medium-pink px-4 py-2 rounded-md font-semibold mt-[18px] w-fit self-center"
          />
        </div>
      </div>
    </div>
  );
}
