import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { RootLayout, RootLayoutAdmin, RootLayoutLogin } from "./routes";

import {
  Beranda,
  CariPanti,
  TentangKami,
  Login,
  KabarPanti,
  KabarPanti2,
  DetailPanti,
  KonfirmasiUang,
  KonfirmasiBarang,
  Daftar,
  KirimDoa,
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
        <Route path="cari-panti" element={<CariPanti />} />
        <Route path="cari-panti/:idPanti" element={<DetailPanti />} />
        <Route path="tentang-kami" element={<TentangKami />} />
        <Route path="kabar-panti" element={<KabarPanti />} />
        <Route path="kabar-panti2" element={<KabarPanti2 />} />
        <Route path="konfirmasi-uang" element={<KonfirmasiUang />} />
        <Route path="konfirmasi-barang" element={<KonfirmasiBarang />} />
        <Route path="login" element={<Login />} />
        <Route path="daftar" element={<Daftar />} />
        <Route path="kirim-doa" element={<KirimDoa />} />
      </Route>
      <Route element={<RootLayoutLogin />}></Route>
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
