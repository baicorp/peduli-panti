import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { RootLayout, RootLayoutAdmin, RootLayoutLogin } from "./routes";

import {
  Beranda,
  ProgramDonasi,
  TentangKami,
  Login,
  KabarPanti,
  DetailPanti,
  KonfirmasiUang,
  KonfirmasiBarang,
  Daftar,
} from "./pages";

import {
  Dashboard,
  DonasiMasuk,
  Notifikasi,
  StatusPanti,
  KabarPantiAdmin,
} from "./pages/Admin";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Beranda />} index />
        <Route path="program-donasi" element={<ProgramDonasi />} />
        <Route path="program-donasi/:idPanti" element={<DetailPanti />} />
        <Route path="tentang-kami" element={<TentangKami />} />
        <Route path="kabar-panti" element={<KabarPanti />} />
        <Route path="konfirmasi-uang" element={<KonfirmasiUang />} />
        <Route path="konfirmasi-barang" element={<KonfirmasiBarang />} />
      </Route>
      <Route element={<RootLayoutLogin />}>
        <Route path="login" element={<Login />} />
        <Route path="Daftar" element={<Daftar />} />
      </Route>
      <Route element={<RootLayoutAdmin />}>
        <Route path="profile" element={<Dashboard />} />
        <Route path="status-panti" element={<StatusPanti />} />
        <Route path="donasi-masuk" element={<DonasiMasuk />} />
        <Route path="kabar-panti-admin" element={<KabarPantiAdmin />} />
        <Route path="notifikasi" element={<Notifikasi />} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
