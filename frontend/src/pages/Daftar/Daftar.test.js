import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { DaftarPage2 } from "./DaftarForm";

describe("Daftar panti", () => {
  test("Menampilkan pesan error jika password dan konfirmasi password tidak sama", async () => {
    render(<DaftarPage2 />);
    fireEvent.change(screen.getByLabelText("Nama"), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText("Email address"), {
      target: { value: "test@gmail.com" },
    });
    fireEvent.change(screen.getByLabelText("Kata Sandi"), {
      target: { value: "password123" },
    });
    fireEvent.change(screen.getByLabelText("Konfirmasi Kata Sandi"), {
      target: { value: "password1234" },
    });
    fireEvent.click(screen.getByText("Daftar"));

    await waitFor(() => {
      expect(screen.getByText("Kata sandi harus sama")).toBeInTheDocument();
    });
  });

  test("Menampilkan pesan berhasil signup jika semua field diisi dengan benar", async () => {
    render(<DaftarPage2 />);
    fireEvent.change(screen.getByLabelText("Nama"), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText("Email address"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Kata Sandi"), {
      target: { value: "password123" },
    });
    fireEvent.change(screen.getByLabelText("Konfirmasi Kata Sandi"), {
      target: { value: "password123" },
    });
    fireEvent.click(screen.getByText("Daftar"));

    await waitFor(() => {
      expect(screen.getByText("success signup")).toBeInTheDocument();
    });
  });
});
