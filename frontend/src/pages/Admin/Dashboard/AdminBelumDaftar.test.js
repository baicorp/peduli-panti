import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { AdminBelumTerdaftar2 } from "./AdminBelumTerdaftar";

describe("AdminBelumTerdaftar2", () => {
  test("menampilkan pesan semua field harus di isi jika ada formfield yang belum di isi", async () => {
    render(<AdminBelumTerdaftar2 />);
    fireEvent.click(screen.getByText("Simpan"));
    await waitFor(() => {
      expect(screen.getByText("semua field harus diisi")).toBeInTheDocument();
    });
  });

  test("menampilkan pesan data berhasil disimpan jika semua form field diisi", async () => {
    render(<AdminBelumTerdaftar2 />);
    fireEvent.change(screen.getByLabelText("Nama Panti"), {
      target: { value: "Nama Panti Test" },
    });
    fireEvent.change(screen.getByLabelText("No Tlp Panti"), {
      target: { value: "123456789" },
    });
    fireEvent.change(screen.getByLabelText("Nama Pemilik"), {
      target: { value: "Nama Pemilik Test" },
    });
    fireEvent.change(screen.getByLabelText("No Tlp Pemilik"), {
      target: { value: "987654321" },
    });
    fireEvent.change(screen.getByLabelText("Deskripsi Panti"), {
      target: { value: "Deskripsi Panti Test" },
    });
    fireEvent.change(screen.getByLabelText("Alamat"), {
      target: { value: "Alamat Test" },
    });
    fireEvent.change(screen.getByLabelText("Provinsi"), {
      target: { value: "Provinsi Test" },
    });
    fireEvent.change(screen.getByLabelText("Kabupaten / Kota"), {
      target: { value: "Kabupaten Test" },
    });
    fireEvent.change(screen.getByLabelText("Kecamatan"), {
      target: { value: "Kecamatan Test" },
    });
    fireEvent.change(screen.getByLabelText("Deskripsi Kebutuhan"), {
      target: { value: "Deskripsi Kebutuhan Test" },
    });
    fireEvent.change(screen.getByLabelText("Kebutuhan Panti"), {
      target: { value: "Kebutuhan Panti Test" },
    });
    fireEvent.change(screen.getByLabelText("Program Panti"), {
      target: { value: "Program Panti Test" },
    });
    fireEvent.change(screen.getByLabelText("Jumlah Pengurus"), {
      target: { value: "5" },
    });
    fireEvent.change(screen.getByLabelText("Jumlah Anak Laki-laki"), {
      target: { value: "10" },
    });
    fireEvent.change(screen.getByLabelText("Jumlah Anak Perempuan"), {
      target: { value: "15" },
    });

    fireEvent.click(screen.getByText("Simpan"));

    await waitFor(() => {
      expect(screen.getByText("data berhasil disimpan")).toBeInTheDocument();
    });
  });
});
