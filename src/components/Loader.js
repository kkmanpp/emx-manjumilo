import Image from "next/image";

export default function Loader() {
  return (
    <div className="flex p-32 items-center justify-center">
      <Image
        src="/loading.gif"
        alt="Loading..."
        layout="responsive"
        width={1}
        height={1}
      />
    </div>
  );
}
