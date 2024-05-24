import React, { useEffect, useState } from "react";
import { baseStyle } from "../../assets/styles";
import { CardPanti } from "../../components";

export const panti = [
  {
    id: 18,
    nama_panti: "Panti Asuhan Budi Mulia",
    notelp_panti: "08123456789",
    nama_pengurus: null,
    nama_pemilik: "Budi Mulia",
    notelp_pemilik: "08765432123",
    deskripsi_panti:
      "Panti asuhan yang peduli terhadap pendidikan dan kesejahteraan anak-anak.",
    alamat_panti: "Jl. Harapan Indah No. 123, Kota Indah",
    provinsi: "jawa timur",
    kabupaten: "kota malang",
    kecamatan: "lowokwaru",
    program_panti: "Mengaji, Olahraga, Kegiatan sosial",
    deskripsi_program: null,
    kebutuhan_panti: "Beras, susu, pakaian, buku",
    deskripsi_kebutuhan:
      "Membutuhkan bantuan berupa beras, susu, pakaian, dan buku untuk mendukung \r\nkegiatan sehari-hari anak-anak.",
    jumlah_pengurus: "10",
    jumlah_anaklaki: "30",
    jumlah_anakpr: "25",
    jumlah_anak: null,
    image: "1703074544216-article 1.png",
    createdAt: "2023-12-20T12:15:44.000Z",
    updatedAt: "2023-12-20T12:15:44.000Z",
    user_id: "DBvFiJBrKbRywKrRlHEX0Hu1lZ12",
    sertifikat_panti: "1703076805084-sertifikat-panti.jpg",
  },
  {
    id: 19,
    nama_panti: "Panti Asuhan Muslimin",
    notelp_panti: "6281234543221",
    nama_pengurus: null,
    nama_pemilik: "Asep",
    notelp_pemilik: "6282312345678",
    deskripsi_panti: "Panti kami berdiri di kota kuningan sejak 2020.",
    alamat_panti: "jl. cirabak nanjak, desa lengkong, kecamatan garawangi",
    provinsi: "jawa barat",
    kabupaten: "kabupaten kuningan",
    kecamatan: "garawangi",
    program_panti: "menghafal alquran, olahraga, kegiatan sosial",
    deskripsi_program: null,
    kebutuhan_panti: "beras, buku, dan alquran",
    deskripsi_kebutuhan: "beasiswa quran untuk penghapal al-quran",
    jumlah_pengurus: "5",
    jumlah_anaklaki: "7",
    jumlah_anakpr: "4",
    jumlah_anak: null,
    image: "1703111539429-panti muslimin.jpg",
    createdAt: "2023-12-20T22:32:19.000Z",
    updatedAt: "2023-12-20T22:32:19.000Z",
    user_id: "xKhyelokGkb5f1LkKL9G4XCheBf1",
    sertifikat_panti: "1703120369802-1703076805084-sertifikat-panti.jpg",
  },
  {
    id: 20,
    nama_panti: "Panti Asuhan Roudlotul Jannah",
    notelp_panti: "087856781234",
    nama_pengurus: null,
    nama_pemilik: "Ibu Ratna Sari",
    notelp_pemilik: "081234567890",
    deskripsi_panti:
      "Panti Anak Bahagia adalah tempat di mana anak-anak yatim, terlantar, dan kurang beruntung mendapatkan kasih sayang, pendidikan, dan bimbingan untuk membangun masa depan yang cerah.",
    alamat_panti: "Jl. Harapan Indah No. 789, Kelurahan Ceria, Kota Sejahtera",
    provinsi: "jawa tengah",
    kabupaten: "kabupaten wonogiri",
    kecamatan: "giritontro",
    program_panti: 'Program Unggulan "Tumbuh Berkarakter"',
    deskripsi_program: null,
    kebutuhan_panti:
      "Donasi bahan makanan, pakaian, perlengkapan sekolah, dana operasional untuk keberlangsungan aktivitas sehari-hari.",
    deskripsi_kebutuhan:
      "Kami membutuhkan dukungan berupa donasi bahan makanan, pakaian layak pakai, buku, dan perlengkapan sekolah untuk memenuhi kebutuhan anak-anak di panti. Bantuan dana operasional juga sangat penting untuk menjaga kelangsungan program dan kehidupan sehari-ha",
    jumlah_pengurus: "6",
    jumlah_anaklaki: "18",
    jumlah_anakpr: "15",
    jumlah_anak: null,
    image: "1703112111372-panti roudhotul.jpeg",
    createdAt: "2023-12-20T22:41:51.000Z",
    updatedAt: "2023-12-20T22:41:51.000Z",
    user_id: "fBwRZrhjtyNw7Vcwb8Yg3roYhwd2",
    sertifikat_panti: "1703120401847-1703076805084-sertifikat-panti.jpg",
  },
  {
    id: 21,
    nama_panti: "Panti Asuhan Kasih Ceria",
    notelp_panti: "082123456789",
    nama_pengurus: null,
    nama_pemilik: "Bapak Iwan Susanto",
    notelp_pemilik: "081598764321",
    deskripsi_panti:
      "Panti Asuhan Kasih Ceria adalah tempat yang memberikan cinta dan perhatian kepada anak-anak yatim piatu serta mereka yang membutuhkan kasih sayang dan bimbingan.",
    alamat_panti: "Jl. Bahagia No. 456 Kelurahan Sejahtera",
    provinsi: "jawa timur",
    kabupaten: "kabupaten sidoarjo",
    kecamatan: "prambon",
    program_panti: 'Program Unggulan "Mendidik Anak Cerdas"',
    deskripsi_program: null,
    kebutuhan_panti:
      "Donasi makanan, bantuan pakaian, peralatan sekolah, dana untuk keperluan operasional sehari-hari.",
    deskripsi_kebutuhan: 'Program Unggulan "Mendidik Anak Cerdas"',
    jumlah_pengurus: "10",
    jumlah_anaklaki: "20",
    jumlah_anakpr: "17",
    jumlah_anak: null,
    image: "1703113170388-panti kasih ceria.jpeg",
    createdAt: "2023-12-20T22:59:30.000Z",
    updatedAt: "2023-12-20T22:59:30.000Z",
    user_id: "ds0nvYTbDWVlQ5FMVIGi1nFQ3rm2",
    sertifikat_panti: "1703120467006-1703076805084-sertifikat-panti.jpg",
  },
  {
    id: 26,
    nama_panti: "Panti asuhan Bina Remaja Mandiri",
    notelp_panti: "081234543221",
    nama_pengurus: null,
    nama_pemilik: "Novi Setia Nurviat",
    notelp_pemilik: "082312345678",
    deskripsi_panti:
      "Memberikan tempat tinggal yang layak, pengasuhan yang profesional, pendidikan agama, formal dan informal untuk anak-anak yatim, piatu dan dhuafa.",
    alamat_panti: "Jl. Pramuka Lingk. Kliwon.",
    provinsi: "jawa barat",
    kabupaten: "kabupaten cirebon",
    kecamatan: "ciledug",
    program_panti: "mengaji, olahraga, hafalan al-quran",
    deskripsi_program: null,
    kebutuhan_panti: "beras, minyak goreng, sayuran, buah-buahan",
    deskripsi_kebutuhan: "membutuhkan keperluan bahan pokok",
    jumlah_pengurus: "10",
    jumlah_anaklaki: "20",
    jumlah_anakpr: "10",
    jumlah_anak: null,
    image: "1703127732992-panti ashabul kahfi.jpg",
    createdAt: "2023-12-21T03:02:12.000Z",
    updatedAt: "2023-12-21T03:02:12.000Z",
    user_id: "Z0JzRb3dqefq7xrwjPTlsDMTaqy2",
    sertifikat_panti: "1703127772718-1703076805084-sertifikat-panti.jpg",
  },
  {
    id: 27,
    nama_panti: "Panti Asuhan Baitul Ummah Wal Amal",
    notelp_panti: "082369785455",
    nama_pengurus: null,
    nama_pemilik: "Muhammad Amaludin",
    notelp_pemilik: "082369785455",
    deskripsi_panti:
      "Panti asuhan yang berlokasi di kota Medan Sumatera Utara.",
    alamat_panti:
      "Jl. Platina VII B No.5, Titi Papan, Kec. Medan Deli, Kota Medan, Sumatera Utara 20244",
    provinsi: "sumatera utara",
    kabupaten: "kota medan",
    kecamatan: "medan deli",
    program_panti: "mengaji, olahraga, kursus (les)",
    deskripsi_program: null,
    kebutuhan_panti: "dana pembangunan, tempat (masih sewa)",
    deskripsi_kebutuhan: "Membutuhkan biaya untuk operasional",
    jumlah_pengurus: "5",
    jumlah_anaklaki: "20",
    jumlah_anakpr: "20",
    jumlah_anak: null,
    image: "1705492661068-baitul-ummah.jpg",
    createdAt: "2024-01-17T11:57:41.000Z",
    updatedAt: "2024-01-17T11:57:41.000Z",
    user_id: "S1nXpdOy6wNdghua3Po09x8RCgk1",
    sertifikat_panti: "1705492691141-sertifikat-panti.jpg",
  },
];

export default function CariPanti2() {
  const [listPanti, setListPanti] = useState(panti);

  const [cari, setCari] = useState("");

  async function handleCari() {
    if (cari === "") {
      setListPanti(panti);
      return;
    }
    const hasilCari = panti.filter((data) => {
      return data.kabupaten.includes(cari);
    });
    setListPanti(hasilCari);
  }

  return (
    <>
      <section>
        <div className="relative">
          <img src={"programDonasiBanner"} className="w-full" alt="" />
          <div
            className={`${baseStyle} absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full`}
          >
            <div className="font-extrabold text-white flex justify-center gap-4 items-center mb-8">
              <h1 className="text-[26px]">
                DAFTARKAN PANTIMU, NIKMATI MANFAATNYA!
              </h1>
              <a
                href={"/daftar"}
                className="text-lg flex items-center px-3 h-10 rounded-md bg-pink"
              >
                Daftar Panti
              </a>
            </div>
            <div className="flex justify-center">
              <div className="flex justify-between bg-white rounded-lg w-full max-w-[480px]">
                <input
                  type="text"
                  className="text-black outline-none rounded-md p-2 max-w-[310px] w-full"
                  placeholder="Masukkan kabupaten/kota"
                  onChange={(e) => {
                    setCari(e.target.value);
                  }}
                  value={cari}
                />
                <button
                  className="bg-pink text-white rounded-md px-5 flex justify-center items-center"
                  onClick={handleCari}
                >
                  <p>Cari</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section
        className={`${baseStyle} py-12 grid grid-cols-3 gap-x-8 gap-y-12`}
      >
        {(listPanti.length !== 0 &&
          listPanti.map((data, index) => {
            return (
              <CardPanti
                key={index}
                id={data.id}
                image={data.image}
                namaPanti={data.nama_panti}
                alamat={`${data.alamat_panti} ${data.kecamatan} ${data.kabupaten} ${data.provinsi}`}
              />
            );
          })) || <p>Belum ada panti terdaftar</p>}
      </section> */}
      {/* <ListPanti panti={listPanti} /> */}
    </>
  );
}

export const ListPanti = ({ panti }) => {
  return (
    <section className={`${baseStyle} py-12 grid grid-cols-3 gap-x-8 gap-y-12`}>
      {(panti.length !== 0 &&
        panti.map((data, index) => {
          return (
            <CardPanti
              key={index}
              id={data.id}
              image={data.image}
              namaPanti={data.nama_panti}
              alamat={`${data.alamat_panti} ${data.kecamatan} ${data.kabupaten} ${data.provinsi}`}
            />
          );
        })) || <p>Belum ada panti terdaftar</p>}
    </section>
  );
};

export const handleCari = (listPanti, search) => {
  if (search === "") {
    return listPanti;
  }
  const hasilCari = panti.filter((data) => {
    return data.kabupaten.includes(search);
  });
  return hasilCari;
};
