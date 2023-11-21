import React from "react";
import { baseStyle } from "../../assets/styles";
import gizi from "../../assets/Images/pemenuhan-gizi.png";
import share from "../../assets/Icons/icon-share.svg";
import kabar from "../../assets/Images/kabar.png";
import penyaluran from "../../assets/Images/penyaluran-alat-sekolah.png";
import calendar from "../../assets/Icons/calendar.svg";

export default function KabarPanti() {
  return (
    <div className={`${baseStyle} mt-12 mb-10 grid grid-cols-2 gap-20 drop-shadow`}>
      <section>
        <div
          key={crypto.randomUUID()}
          className="w-[591px] h-[1339px] drop-shadow-xl rounded-xl overflow-hidden bg-white"
        >
          <div className="space-y-3 p-4">
                <p className="font-inter text-2xl font-bold text-pink">
                Pemenuhan Gizi Seimbang, Modal Untuk Kesehatan Tumbuh Kembang Anak
                </p>
          </div>
          <div className="flex items-center justify-between space-y-3 p-4">
                <p className="font-inter text-base font-bold ">
                Oleh : Putu Anggi<br></br>
                Sabtu, 11 Nov 2023</p>
                <img src={share} alt="" className="ml-2" />
          </div>
          <div className="flex items-center justify-center">
            <img src={gizi} alt="" className="max-w-full h-auto" />
          </div>
          <div className="space-y-3 p-4">
                <p className="font-inter text-base">
                <b>28 Februari</b> ini merupakan Hari Gizi Nasional ke-62. Hari dimana dapat jadi momentum bagi kita untuk meningkatkan kesadaran akan pentingnya pemenuhan gizi demi kelangsungan hidup yang sehat dan berkualitas. Sampai saat ini pemenuhan gizi seimbang di masyarakat Indonesia masih menjadi PR bersama, karena di beberapa kalangan khususnya menengah ke bawah pemenuhan gizi yang seimbang menjadi suatu hal yang sulit untuk diwujudkan. Salah satu faktornya yaitu dari segi ekonomi yang kurang, menyebabkan sulitnya bagi masyarakat kalangan menengah ke bawah memenuhi asupan gizi yang seimbang bagi keluarganya.<br></br><br></br>
                <b>Ternyata permasalahan mengenai pemenuhan gizi yang seimbang</b> banyak dirasakan juga oleh anak-anak yang tinggal di panti asuhan, hal ini berdasarkan hasil wawancara yang kami lakukan kepada beberapa pengurus panti di Indonesia. Terdapat berbagai macam faktor yang menyebabkan sulitnya pemenuhan gizi yang seimbang untuk anak-anak di panti asuhan, yaitu kondisi keuangan panti yang rendah, jumlah anak yang banyak, banyaknya kebutuhan yang harus dipenuhi dan minimnya bantuan sosial untuk pemenuhan gizi yang baik bagi anak-anak di panti.<br></br><br></br>
                Beberapa pengurus panti menyatakan bahwa meski anak-anak di pantinya dapat makan 3 kali sehari, namun menu makan mereka tidak bervariasi dan bahkan jika sedang kesulitan hanya satu macam saja. Menu makanannya secara umum kalau pagi yaitu mie goreng, nasi goreng, dan Telor dadar. Makan siangnya yaitu tahu/tempe, sayur dan makan malam biasanya hampir sama dengan makan siang.<br></br><br></br>
                Maka dari itu melalui Panti Peduli di momentum hari baik ini mari kita hadirkan bekal gizi kepada lebih banyak panti di Indonesia, terutama untuk adik-adik di Panti Bina Remaja Mandiri yang saat ini sedang membutuhkan bantuan untuk <b>mewujudkan panti yang sehat dalam memenuhi nutrisi adik panti.</b><br></br><br></br>
                </p>
          </div>
        </div>
      </section>
      <section>
        <div
          key={crypto.randomUUID()}
          className="w-[290px] h-[1086px] drop-shadow-xl rounded-xl overflow-hidden bg-white"
        >
          <div className="flex justify-left space-y-3 p-4 mt-2">
            <img src={kabar} alt="" className="max-w-full h-auto" />
          </div>
          <div className="flex items-center justify-center mt-5">
            <img src={penyaluran} alt="" className="max-w-full h-auto" />
          </div>
          <div className="flex items-center gap-2 space-y-3 p-4">
                  <img src={calendar} alt="" className="w-[46px] h-[44px]"/>
                  <p className="font-semibold">
                    Penyaluran Alat sekolah kepada 89 anak panti
                  </p>
                </div>
          <div className="space-y-3 p-4">
                <p className="font-inter text-xs">
                Bandung - Sabtu 2 Oktober 2023, melakukan “kolaborasi kebaikan”
                bersama sahabat yatim indonesia dalam rangka menyalurkan program Yatim berprestasi.
                </p>
          </div>
        </div>
      </section>
    </div>
  );
}