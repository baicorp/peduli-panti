import React, { useEffect } from "react";
import AdminTerdaftar from "./AdminTerdaftar";
import AdminBelumTerdaftar, {
  AdminBelumTerdaftar2,
} from "./AdminBelumTerdaftar";
import { useAuth } from "../../../context/AuthContext";
import { useState } from "react";
import { BASE_URL } from "../../../constant";

export default function Dashboard() {
  const { currentUser } = useAuth();
  if (!currentUser.uid) {
    console.log("tidak ada user_id");
    return;
    // return <Navigate to={"/login"} replace />;
  }
  const userId = currentUser.uid;

  const [dataPanti, setDataPanti] = useState(null);
  const [reload, setReload] = useState(false);

  function handleReload() {
    setReload((prev) => !prev);
  }

  useEffect(() => {
    async function getDataPanti() {
      try {
        const res = await fetch(`${BASE_URL}/profiles/user/${userId}`);
        if (!res.ok) {
          setDataPanti(null);
          return;
        }
        const data = await res.json();
        setDataPanti(data[0]);
      } catch (error) {
        console.log(error);
      }
    }
    getDataPanti();
  }, [userId, reload]);

  return (
    <>
      {dataPanti ? (
        <AdminTerdaftar
          nama_panti={dataPanti.nama_panti}
          notelp_panti={dataPanti.notelp_panti}
          nama_pemilik={dataPanti.nama_pemilik}
          notelp_pemilik={dataPanti.notelp_pemilik}
          deskripsi_panti={dataPanti.deskripsi_panti}
          alamat_panti={dataPanti.alamat_panti}
          provinsi={dataPanti.provinsi}
          kabupaten={dataPanti.kabupaten}
          kecamatan={dataPanti.kecamatan}
          program_panti={dataPanti.program_panti}
          kebutuhan_panti={dataPanti.kebutuhan_panti}
          deskripsi_kebutuhan={dataPanti.deskripsi_kebutuhan}
          jumlah_pengurus={dataPanti.jumlah_pengurus}
          jumlah_anaklaki={dataPanti.jumlah_anaklaki}
          jumlah_anakpr={dataPanti.jumlah_anakpr}
          image={dataPanti.image}
        />
      ) : (
        <AdminBelumTerdaftar reload={handleReload} />
      )}
    </>
  );
}
