import React from "react";

export default function KabarPantiAdmin() {
  return (
    <div>
      <h1 className="text-lg font-semibold px-9 py-6">Kabar Panti</h1>
      <hr className="text-border-color" />
      <div className="px-9 py-6">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-[14px]">
            <label htmlFor="judul" className="font-semibold">
              Judul Kabar Panti
            </label>
            <input
              type="text"
              id="judul"
              className="border rounded-md px-3 py-1 outline-none"
            />
          </div>
          <div className="flex flex-col gap-[14px]">
            <label htmlFor="penulis" className="font-semibold">
              Nama Penulis
            </label>
            <input
              type="text"
              id="penulis"
              className="border rounded-md px-3 py-1 outline-none"
            />
          </div>
          <div className="flex flex-col gap-[14px]">
            <label htmlFor="foto" className="font-semibold">
              Foto Kabar Panti
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
          <div className="flex flex-col gap-[14px]">
            <label htmlFor="kabarPanti" className="font-semibold">
              Deskripsi Kabar Panti
            </label>
            <textarea
              name="kabarPanti"
              id="KabarPanti"
              cols="30"
              rows="7"
              className="border rounded-md px-3 py-1 outline-none"
              placeholder="Isi artikel yang akan kamu unggah"
            ></textarea>
          </div>
          <input
            type="submit"
            value="Unggah"
            className="bg-medium-pink px-4 py-2 rounded-md font-semibold mt-[18px] w-fit self-center"
          />
        </div>
      </div>
    </div>
  );
}
