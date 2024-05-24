import React from "react";

export default function CardFaq({ img, title, text }) {
  return (
    <div className="flex gap-6">
      <img src={img} alt="" className="w-12 h-12 object-contain" />
      <div>
        <p className="text-gray font-semibold text-xl mb-2">{title}</p>
        <p className="hidden">{text}</p>
      </div>
    </div>
  );
}
