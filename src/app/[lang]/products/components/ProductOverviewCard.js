import Image from "next/image";

export default function ProductOverviewCard({ lang, product, onClick }) {
  return (
    <div
      className="largeMobile:rounded-xl largeMobile:p-4 shadow-md overflow-hidden flex flex-col bg-white items-center cursor-pointer p-2 rounded-none"
      onClick={onClick}
    >
      <div className="flex flex-col justify-center items-cener">
        <Image
          src={product.image[0]}
          alt="product"
          height={200}
          width={200}
          className="object-contain largeMobile:h-[15rem] h-[10rem]"
        />
      </div>
      <div className="my-0 mobile:my-2">
        <div className="font-bold text-center">{product.name[lang]}</div>
        <div className="my-2 text-Grey-700 text-center">
          {product.slogan[lang]}
        </div>
      </div>
    </div>
  );
}
