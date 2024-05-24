import React, { useEffect, useState } from "react";
import { baseStyle } from "../../assets/styles";
import bantuan from "../../assets/Images/bantuan.jpeg";
import calendar from "../../assets/Icons/calendar.svg";
import { CardKabarPanti } from "../../components";
import { BASE_URL } from "../../constant";

export default function KabarPanti() {
  const [articles, setArticles] = useState();
  useEffect(() => {
    async function getDataArticle() {
      const res = await fetch(`${BASE_URL}/articles/`);
      const data = await res.json();
      setArticles(data);
    }
    getDataArticle();
  }, []);
  return (
    <>
      <section className={baseStyle}>
        <h1 className="text-4xl text-center">
          Kabar <span className="font-bold text-pink ">Panti Peduli</span>
        </h1>
      </section>
      <section className={`${baseStyle} mt-14 mb-10 grid grid-cols-3 gap-4`}>
        {(articles &&
          articles.map((data) => {
            return (
              <CardKabarPanti
                key={crypto.randomUUID()}
                img={`${BASE_URL}/images/article/${data.image}`}
                judul={data.title}
                deskripsi={data.description}
                id={`${data.id}`}
              />
            );
          })) || <p>Belum ada artikel</p>}
      </section>
    </>
  );
}
