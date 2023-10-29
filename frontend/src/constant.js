import peduli from "./assets/Icons/logo-peduli.svg";
import kesehatan from "./assets/Icons/logo-kesehatan.svg";
import pendidikan from "./assets/Icons/logo-pendidikan.svg";
import hadiah from "./assets/Icons/logo-hadiah.svg";

import hubungi from "./assets/Icons/logo-cara-hubungi.svg";
import mendaftar from "./assets/Icons/logo-cara-mendaftar.svg";
import donasi from "./assets/Icons/logo-cara-donasi.svg";
import validasi from "./assets/Icons/logo-validasi-informasi.svg";

import maps from "./assets/Icons/logo-maps.svg";
import jumlahAnak from "./assets/Icons/logo-jumlah-anak.svg";
import jumlahDonatur from "./assets/Icons/logo-jumlah-donatur.svg";
import jumlahUang from "./assets/Icons/logo-jumlah-uang.svg";

export const footerData = [
  {
    title: "Program",
    list: [
      "Peduli Anak Panti Asuhan",
      "Kesehatan Anak Panti",
      "Pendidikan Anak Panti",
      "Infrastruktur Fasilitas Panti",
    ],
  },
  { title: "Donasi", list: ["Donasi Uang", "Donasi Barang", "Upcycling"] },
  {
    title: "Kontak",
    list: [
      "Jalan Beringin Raya, No. 51 B, Kec. Beji, Kel. Beji, Kota Depok, Jawa Barat. 16421",
      "0812 8133 6070",
      "pantipeduli@gmail.com",
    ],
  },
];

export const cardTentangData = [
  {
    text: "Peduli Adik Panti Asuhan",
    img: peduli,
  },
  {
    text: "Kesehatan Adik",
    img: kesehatan,
  },
  {
    text: "Pendidikan Adik",
    img: pendidikan,
  },
  {
    text: "Donasi Infrastuktur & Fasilitas",
    img: hadiah,
  },
];

export const FaqData = [
  {
    img: hubungi,
    title: "Cara Hubungi Panti Asuhan",
    text: `Klik menu “Cari Panti” lalu pilih tujuan panti untuk berdonasi lalu lihat informasi lokasi dan kontak di detail Panti Asuhan.`,
  },
  {
    img: donasi,
    title: "Cara Donasi Barang",
    text: `Silahkan klik menu “Program Donasi” lalu pilih donasi barang, maka akan muncul tutorial pengiriman barang dan sistem konfirmasinya.`,
  },
  {
    img: mendaftar,
    title: "Cara Mendaftar Panti Asuhan",
    text: `Silahkan login terlebih dahulu, lalu akan muncul form daftar panti. Persyaratan harus dipenuhi sebelum mendaftar panti asuhannya.`,
  },
  {
    img: validasi,
    title: "Validasi Informasi Data Panti Asuhan",
    text: `Semua data sudah melalui verifikasi dan dijamin kebenaran informasi datanya.`,
  },
];

export const faqStatData = [
  { img: maps, title: `Panti Terpetakan`, count: `120 Panti` },
  {
    img: jumlahUang,
    title: `Jumlah Donasi Tersalurkan`,
    count: `Rp5,932,228,800`,
  },
  { img: jumlahDonatur, title: `Jumlah Donatur`, count: `70 Orang` },
  { img: jumlahAnak, title: `Jumlah Anak yang Terbantu`, count: `5,740 Anak` },
];
