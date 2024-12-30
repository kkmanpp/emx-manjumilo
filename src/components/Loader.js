"use client";
import { useLoading } from "../context/LoadingContext";
import Image from "next/image";

export default function Loader({ children }) {
  const { isLoading } = useLoading();

  return (
    <>
      {isLoading && (
        <div className="flex p-32 items-center justify-center">
          <Image
            src="/loading.gif"
            alt="Loading..."
            layout="responsive"
            width={1} // Aspect ratio numerator
            height={1}
          />
        </div>
      )}
      <div style={{ display: isLoading ? "none" : "block" }}>{children}</div>
    </>
  );
}
