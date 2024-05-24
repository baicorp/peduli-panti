export default function DeskripsiPanti({
  namaPemilik,
  kontak,
  alamat,
  deskripsi,
}) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-extrabold mb-3">Nama Pemilik</h2>
        <p className="text-lg">{namaPemilik}</p>
      </div>
      <div>
        <h2 className="text-xl font-extrabold mb-3">Kontak</h2>
        <p className="text-lg">{kontak}</p>
      </div>
      <div>
        <h2 className="text-xl font-extrabold mb-3">Alamat</h2>
        <p className="text-lg">{alamat}</p>
      </div>
      <div>
        <h2 className="text-xl font-extrabold mb-3">Deskripsi</h2>
        <p className="text-lg">{deskripsi}</p>
      </div>
    </div>
  );
}
