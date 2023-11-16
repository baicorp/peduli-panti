import React from "react";

export default function StatusPanti() {
  return (
    <div>
      <h1 className="text-lg font-semibold px-9 py-6">Status Panti</h1>
      <hr className="text-border-color" />
      <div className="px-9 py-6 flex flex-col gap-8">
        <div className="font-semibold flex justify-between">
          <div>
            <p className="mb-1">Bergabung Sejak</p>
            <p className="text-[#545757]">2023-09-15</p>
          </div>
          <div>
            <p className="mb-1">Terakhir Update</p>
            <p className="text-[#545757]">2023-11-07 16:46:49</p>
          </div>
        </div>
        <div>
          <p className="font-semibold mb-1">Status Panti</p>
          <div className="px-2 py-1 bg-pink rounded-md w-fit">
            <p className="text-white text-sm">Belum Terverifikasi</p>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="akte" className="w-full max-w-[192px] font-semibold">
            Unggah Akte Panti
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
                width="192"
                x="32"
                y="48"
              />
              <path
                d="M32,168l50.3-50.3a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,0,11.4,0l20.6-20.6a8,8,0,0,1,11.4,0L224,184"
                fill="none"
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
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
                id="akte"
                className="mt-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
