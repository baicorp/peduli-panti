import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import {
  Beranda,
  ProgramDonasi,
  TentangKami,
  Login,
  KabarPanti,
  DetailPanti,
  KonfirmasiUang,
  KonfirmasiBarang,
} from "./pages";

import { RootLayout } from "./routes";

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
      <Route path="login" element={<Login />} />
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
