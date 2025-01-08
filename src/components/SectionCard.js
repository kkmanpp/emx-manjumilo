import React from "react";

export default function SectionCard({ title, children }) {
  return (
    <div className="bg-white">
      <div className="border-l-4 border-l-Green-600 m-2">
        <div className="px-4 font-semibold">{title}</div>
      </div>
      {children}
    </div>
  );
}
