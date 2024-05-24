import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BuatKabarPanti2 } from "./BuatKabarPanti"; // Sesuaikan dengan lokasi berkas BuatKabarPanti2

describe("BuatKabarPanti2 component", () => {
  test('menampilkan pesan "semua field harus diisi"', async () => {
    render(<BuatKabarPanti2 />);
    fireEvent.click(screen.getByRole("button", { name: "Unggah" }));
    await waitFor(() => {
      expect(screen.getByText("semua field harus diisi")).toBeInTheDocument();
    });
  });

  test('menampilkan pesan "upload berhasil" jika semua field terisi', async () => {
    render(<BuatKabarPanti2 />);
    fireEvent.change(screen.getByLabelText("Judul Kabar Panti"), {
      target: { value: "Test Title" },
    });
    fireEvent.change(screen.getByLabelText("Nama Penulis"), {
      target: { value: "Test Author" },
    });
    fireEvent.change(screen.getByLabelText("Deskripsi Kabar Panti"), {
      target: { value: "Test Description" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Unggah" }));
    await waitFor(() => {
      expect(screen.getByText("berhasil upload")).toBeInTheDocument();
    });
  });
});
