import { panti, handleCari } from "./CariPanti2";

describe("handle cari panti", () => {
  test("return listPanti jika search tidak ada", () => {
    const search = "";
    const result = handleCari(panti, search);
    expect(result).toEqual(panti);
  });

  test("return listPanti sesuai dengan lokasi tersedia", () => {
    const search = "malang";
    const expectedResult = [
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
    ];
    const result = handleCari(panti, search);
    expect(result).toEqual(expectedResult);
  });

  test("return array kosong jika tidak ada lokasi sesuai", () => {
    const search = "Kabupaten ponorogo";
    const result = handleCari(panti, search);
    expect(result).toEqual([]);
  });
});
