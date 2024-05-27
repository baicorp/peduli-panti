import React, { useState, useRef } from "react";
import { useAuth } from "../../../context/AuthContext";
import { BASE_URL } from "../../../constant";
import { useNavigate } from "react-router-dom";

export default function BuatKabarPanti() {
  const { currentUser } = useAuth();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [articleImage, setArticleImage] = useState(null);
  const navigate = useNavigate();
  const [notif, setNotif] = useState("");
  const notification = useRef();

  function showNotif(status) {
    if (status === "success") {
      setNotif("Berhasil");
      notification.current.classList.remove("bg-rose-500");
      notification.current.classList.add("bg-green-500");
    } else if (status === "error") {
      setNotif("Gagal");
      notification.current.classList.remove("bg-green-500");
      notification.current.classList.add("bg-rose-500");
    }
    setTimeout(() => {
      notification.current.style.top = "-100%";
    }, 3000);
    notification.current.style.top = "3rem";
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const userId = currentUser.uid;
      if (!userId || !title || !author || !description) {
        showNotif("error");
        return;
      }

      const formData = new FormData();
      formData.append("title", title);
      formData.append("author", author);
      formData.append("description", description);
      formData.append("image", articleImage);
      formData.append("user_id", userId);

      const addArticle = await fetch(`${BASE_URL}/articles`, {
        method: "POST",
        body: formData,
      });

      console.log(addArticle);
      if (!addArticle.ok) {
        console.log("tidak berhasil upload");
        return;
      }
      console.log("berhasil upload");
      showNotif("success");
      setTimeout(() => {
        navigate("/kabar-panti-admin");
      }, 1000);
    } catch (error) {
      console.log("something wrong");
    }
  }

  return (
    <div>
      <h1 className="text-lg font-semibold px-9 py-6">Kabar Panti</h1>
      <hr className="text-border-color" />
      <div className="px-9 py-6 relative">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-[14px]">
            <label htmlFor="judul" className="font-semibold">
              Judul Kabar Panti
            </label>
            <input
              type="text"
              id="judul"
              className="border rounded-md px-3 py-1 outline-none"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col gap-[14px]">
            <label htmlFor="penulis" className="font-semibold">
              Nama Penulis
            </label>
            <input
              type="text"
              id="penulis"
              className="border rounded-md px-3 py-1 outline-none"
              value={author}
              onChange={(e) => {
                setAuthor(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col gap-[14px]">
            <label htmlFor="foto" className="font-semibold">
              Foto Kabar Panti
            </label>
            <div className="flex gap-5">
              {(articleImage && (
                <img
                  // src={URL.createObjectURL(articleImage)}
                  src={""}
                  alt="Selected"
                  style={{ width: "96px", objectFit: "cover" }}
                />
              )) || (
                <svg
                  viewBox="0 0 256 256"
                  className="w-24 h-24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect fill="none" />
                  <rect
                    fill="none"
                    height="160"
                    rx="8"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                    width="192"
                    x="32"
                    y="48"
                  />
                  <path
                    d="M32,168l50.3-50.3a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,0,11.4,0l20.6-20.6a8,8,0,0,1,11.4,0L224,184"
                    fill="none"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                  />
                  <circle cx="156" cy="100" r="12" />
                </svg>
              )}
              <div>
                <p>
                  Max : 2MB. Ukuran 200 x 60 pixel.
                  <br />
                  Format : jpg | png
                </p>
                <input
                  type="file"
                  accept="image/png, image/jpeg, image/jpg"
                  id="foto"
                  className="mt-2"
                  onChange={(e) => {
                    setArticleImage("image123.jpg");
                  }}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[14px]">
            <label htmlFor="kabarPanti" className="font-semibold">
              Deskripsi Kabar Panti
            </label>
            <textarea
              name="kabarPanti"
              id="kabarPanti"
              cols="30"
              rows="7"
              className="border rounded-md px-3 py-1 outline-none"
              placeholder="Isi artikel yang akan kamu unggah"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-medium-pink px-4 py-2 rounded-md font-semibold mt-[18px] w-fit self-center"
          >
            Unggah
          </button>
        </form>
        <div
          ref={notification}
          className="fixed -top-full left-10 rounded-lg duration-300"
        >
          <p className="text-lg px-5 py-3 text-white font-bold">{notif}</p>
        </div>
      </div>
    </div>
  );
}

export function BuatKabarPanti2() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const userId = "123";
      if (!userId || !title || !author || !description) {
        setMessage("semua field harus diisi");
        return;
      }
      setMessage("berhasil upload");
    } catch (error) {
      console.log("something wrong");
    }
  }

  return (
    <div>
      <h1 className="text-lg font-semibold px-9 py-6">Kabar Panti</h1>
      <hr className="text-border-color" />
      <div className="px-9 py-6">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-[14px]">
            <label htmlFor="judul" className="font-semibold">
              Judul Kabar Panti
            </label>
            <input
              type="text"
              id="judul"
              className="border rounded-md px-3 py-1 outline-none"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col gap-[14px]">
            <label htmlFor="penulis" className="font-semibold">
              Nama Penulis
            </label>
            <input
              type="text"
              id="penulis"
              className="border rounded-md px-3 py-1 outline-none"
              value={author}
              onChange={(e) => {
                setAuthor(e.target.value);
              }}
            />
          </div>
          {/* <div className="flex flex-col gap-[14px]">
            <label htmlFor="foto" className="font-semibold">
              Foto Kabar Panti
            </label>
            <div className="flex gap-5">
              {(articleImage && (
                <img
                  src={URL.createObjectURL(articleImage)}
                  alt="Selected"
                  style={{ width: "96px", objectFit: "cover" }}
                />
              )) || (
                <svg
                  viewBox="0 0 256 256"
                  className="w-24 h-24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect fill="none" />
                  <rect
                    fill="none"
                    height="160"
                    rx="8"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                    width="192"
                    x="32"
                    y="48"
                  />
                  <path
                    d="M32,168l50.3-50.3a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,0,11.4,0l20.6-20.6a8,8,0,0,1,11.4,0L224,184"
                    fill="none"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                  />
                  <circle cx="156" cy="100" r="12" />
                </svg>
              )}
              <div>
                <p>
                  Max : 2MB. Ukuran 200 x 60 pixel.
                  <br />
                  Format : jpg | png
                </p>
                <input
                  type="file"
                  accept="image/png, image/jpeg, image/jpg"
                  id="foto"
                  className="mt-2"
                  onChange={(e) => {
                    setArticleImage(e.target.files[0]);
                  }}
                />
              </div>
            </div>
          </div> */}
          <div className="flex flex-col gap-[14px]">
            <label htmlFor="kabarPanti" className="font-semibold">
              Deskripsi Kabar Panti
            </label>
            <textarea
              name="kabarPanti"
              id="kabarPanti"
              cols="30"
              rows="7"
              className="border rounded-md px-3 py-1 outline-none"
              placeholder="Isi artikel yang akan kamu unggah"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-medium-pink px-4 py-2 rounded-md font-semibold mt-[18px] w-fit self-center"
          >
            Unggah
          </button>
          {message ? <p>{message}</p> : ""}
        </form>
      </div>
    </div>
  );
}
