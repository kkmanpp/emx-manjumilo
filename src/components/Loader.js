import Image from "next/image";

export default function Loader() {
  return (
    <div className="flex p-32 items-center justify-center">
      <div className="relative w-20 h-20 mobile:w-16 mobile:h-16 tablet:w-20 tablet:h-20 laptop:w-24 laptop:h-24">
        <Image
          src="/loading.gif"
          alt="Loading..."
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}
