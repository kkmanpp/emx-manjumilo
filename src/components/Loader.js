"use client";
import { useLoading } from "../context/LoadingContext";

export default function Loader({ children }) {
  const { isLoading } = useLoading();

  return isLoading ? (
    <div className="flex p-32 items-center justify-center">
      <img src="/loading.gif" alt="Loading..." />
    </div>
  ) : (
    <>{children}</>
  );
}
