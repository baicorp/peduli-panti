import React, { useEffect, useState } from "react";
import fotoProfilePanti from "../../../assets/Images/foto-profile-panti.jpg";

export default function AdminTerdaftar() {
  const [profileData, setProfileData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/profiles') // Menggunakan endpoint yang sesuai
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProfileData(data);
      })
      .catch(error => {
        setError('Error fetching profile data: ' + error.message);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }


  return (
    <div className="px-9 py-6">
      <img
        src={fotoProfilePanti}
        alt="foto profil panti"
        className="rounded-lg mb-[22px] w-full object-cover"
      />
      {profileData && (
        <table className="border-collapse w-full">
          {profileData.map(profile => (
            <tr key={profile.id}>
              <tr>
              <th className="px-6 py-[18px] border border-border-color text-start">
                Nama Panti
              </th>
              <td className="px-6 py-[18px] border border-border-color ">
                {profile.nama_panti}
              </td>
              </tr>
              <tr><th className="px-6 py-[18px] border border-border-color text-start">
                No Telp Panti
              </th>
              <td className="px-6 py-[18px] border border-border-color ">
                {profile.notelp_panti}
              </td>
              </tr>
              <tr><th className="px-6 py-[18px] border border-border-color text-start">
                Nama Pengurus
              </th>
              <td className="px-6 py-[18px] border border-border-color ">
                {profile.nama_pengurus}
              </td>
              </tr>
              <tr><th className="px-6 py-[18px] border border-border-color text-start">
                Nama Pemilik
              </th>
              <td className="px-6 py-[18px] border border-border-color ">
                {profile.nama_pemilik}
              </td>
              </tr>
              <tr><th className="px-6 py-[18px] border border-border-color text-start">
                No Telp Pemilik
              </th>
              <td className="px-6 py-[18px] border border-border-color ">
                {profile.notelp_pemilik}
              </td>
              </tr>
              <tr><th className="px-6 py-[18px] border border-border-color text-start">
                Deskripsi Panti
              </th>
              <td className="px-6 py-[18px] border border-border-color ">
                {profile.deskripsi_panti}
              </td>
              </tr>
              <tr><th className="px-6 py-[18px] border border-border-color text-start">
                Alamat
              </th>
              <td className="px-6 py-[18px] border border-border-color ">
                {profile.alamat_panti}
              </td>
              </tr>
              <tr><th className="px-6 py-[18px] border border-border-color text-start">
                Provinsi
              </th>
              <td className="px-6 py-[18px] border border-border-color ">
                {profile.provinsi}
              </td>
              </tr>
              <tr><th className="px-6 py-[18px] border border-border-color text-start">
                Kabupaten / Kota
              </th>
              <td className="px-6 py-[18px] border border-border-color ">
                {profile.kabupaten}
              </td>
              </tr>
              <tr><th className="px-6 py-[18px] border border-border-color text-start">
                Kecamatan
              </th>
              <td className="px-6 py-[18px] border border-border-color ">
                {profile.kecamatan}
              </td>
              </tr>
              <tr><th className="px-6 py-[18px] border border-border-color text-start">
                Program Panti
              </th>
              <td className="px-6 py-[18px] border border-border-color ">
                {profile.program_panti}
              </td>
              </tr>
              <tr><th className="px-6 py-[18px] border border-border-color text-start">
                Deskripsi Program
              </th>
              <td className="px-6 py-[18px] border border-border-color ">
                {profile.deskripsi_program}
              </td>
              </tr>
              <tr><th className="px-6 py-[18px] border border-border-color text-start">
                Kebutuhan Panti
              </th>
              <td className="px-6 py-[18px] border border-border-color ">
                {profile.kebutuhan_panti}
              </td>
              </tr>
              <tr><th className="px-6 py-[18px] border border-border-color text-start">
                Deskripsi Kebutuhan
              </th>
              <td className="px-6 py-[18px] border border-border-color ">
                {profile.deskripsi_kebutuhan}
              </td>
              </tr>
              <tr><th className="px-6 py-[18px] border border-border-color text-start">
                Jumlah Pengurus
              </th>
              <td className="px-6 py-[18px] border border-border-color ">
                {profile.jumlah_pengurus}
              </td>
              </tr>
              <tr><th className="px-6 py-[18px] border border-border-color text-start">
                Jumlah Anak Laki-Laki
              </th>
              <td className="px-6 py-[18px] border border-border-color ">
                {profile.jumlah_anaklaki}
              </td>
              </tr>
              <tr><th className="px-6 py-[18px] border border-border-color text-start">
                Jumlah Anak Perempuan
              </th>
              <td className="px-6 py-[18px] border border-border-color ">
                {profile.jumlah_anakpr}
              </td>
              </tr>
              <tr><th className="px-6 py-[18px] border border-border-color text-start">
                Jumlah Anak
              </th>
              <td className="px-6 py-[18px] border border-border-color ">
                {profile.jumlah_anak}
              </td>
              </tr>
            </tr>
          ))}
        </table>
      )}
    </div>
  );
}
