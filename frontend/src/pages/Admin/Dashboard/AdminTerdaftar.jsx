import React from "react";
import fotoProfilePanti from "../../../assets/Images/foto-profile-panti.jpg";

export default function AdminTerdaftar() {
  return (
    <div className="px-9 py-6">
      <img
        src={fotoProfilePanti}
        alt="foto profil panti"
        className="rounded-lg mb-[22px] w-full object-cover"
      />
      <table className="border-collapse w-full">
        <tr>
          <th className="px-6 py-[18px] border border-border-color text-start">
            Nama Panti
          </th>
          <td className="px-6 py-[18px] border border-border-color ">
            Yayasan Islam Media Kasih
          </td>
        </tr>
        <tr>
          <th className="px-6 py-[18px] border border-border-color text-start ">
            No Tlp Panti
          </th>
          <td className="px-6 py-[18px] border border-border-color">
            0217328463
          </td>
        </tr>
        <tr>
          <th className="px-6 py-[18px] border border-border-color text-start ">
            Nama Pengurus
          </th>
          <td className="px-6 py-[18px] border border-border-color">
            Bani Agusalam
          </td>
        </tr>
        <tr>
          <th className="px-6 py-[18px] border border-border-color text-start ">
            Nama Pemilik
          </th>
          <td className="px-6 py-[18px] border border-border-color">
            Agus Salim
          </td>
        </tr>
        <tr>
          <th className="px-6 py-[18px] border border-border-color text-start ">
            Nama Tlp Pemilik
          </th>
          <td className="px-6 py-[18px] border border-border-color">
            089543246765
          </td>
        </tr>
        <tr>
          <th className="px-6 py-[18px] border border-border-color text-start ">
            Deskripsi Panti
          </th>
          <td className="px-6 py-[18px] border border-border-color">-</td>
        </tr>
        <tr>
          <th className="px-6 py-[18px] border border-border-color text-start ">
            Alamat Panti
          </th>
          <td className="px-6 py-[18px] border border-border-color">
            Cipadu Rt.001/004 No.13 Ciledug Tangerang
          </td>
        </tr>
        <tr>
          <th className="px-6 py-[18px] border border-border-color text-start ">
            Provinsi
          </th>
          <td className="px-6 py-[18px] border border-border-color">
            Jawa Barat
          </td>
        </tr>
        <tr>
          <th className="px-6 py-[18px] border border-border-color text-start ">
            Kabupaten / Kota
          </th>
          <td className="px-6 py-[18px] border border-border-color">
            Tangerang
          </td>
        </tr>
        <tr>
          <th className="px-6 py-[18px] border border-border-color text-start ">
            Kecamatan
          </th>
          <td className="px-6 py-[18px] border border-border-color">Ciledug</td>
        </tr>
        <tr>
          <th className="px-6 py-[18px] border border-border-color text-start ">
            Program Panti
          </th>
          <td className="px-6 py-[18px] border border-border-color">-</td>
        </tr>
        <tr>
          <th className="px-6 py-[18px] border border-border-color text-start ">
            Deskripsi Program
          </th>
          <td className="px-6 py-[18px] border border-border-color">-</td>
        </tr>
        <tr>
          <th className="px-6 py-[18px] border border-border-color text-start ">
            Kebutuhan Panti
          </th>
          <td className="px-6 py-[18px] border border-border-color">
            Yayasan Islam Media Kasih
          </td>
        </tr>
        <tr>
          <th className="px-6 py-[18px] border border-border-color text-start ">
            Deskripsi Kebutuhan
          </th>
          <td className="px-6 py-[18px] border border-border-color">-</td>
        </tr>
        <tr>
          <th className="px-6 py-[18px] border border-border-color text-start ">
            Jumlah Pengurus
          </th>
          <td className="px-6 py-[18px] border border-border-color">15</td>
        </tr>
        <tr>
          <th className="px-6 py-[18px] border border-border-color text-start ">
            Jumlah Anak Laki-laki
          </th>
          <td className="px-6 py-[18px] border border-border-color">20</td>
        </tr>
        <tr>
          <th className="px-6 py-[18px] border border-border-color text-start ">
            Jumlah Anak Perempuan
          </th>
          <td className="px-6 py-[18px] border border-border-color">30</td>
        </tr>
        <tr>
          <th className="px-6 py-[18px] border border-border-color text-start">
            Jumlah Anak{" "}
          </th>
          <td className="px-6 py-[18px] border border-border-color">50</td>
        </tr>
      </table>
    </div>
  );
}
