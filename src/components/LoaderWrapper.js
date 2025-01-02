"use client";
import { useLoading } from "../context/LoadingContext";
import Loader from "@/components/Loader";
export default function LoaderWrapper({ children }) {
  const { isLoading } = useLoading();
  return (
    <>
      {isLoading && <Loader />}
      <div className={isLoading ? "hidden" : "block"}>{children}</div>
    </>
  );
}
