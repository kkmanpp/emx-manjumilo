import Card from "@/components/Card";

export default async function TrendingProductViewer({
  lang,
  dictionary,
  productList,
  error,
}) {
  // const productList = data.json().data;

  // const [productList, setProductList] = useState(null);
  // const [error, setError] = useState("");
  // const router = useRouter();
  // const { startLoading, stopLoading } = useLoading();

  // useEffect(() => {
  //   async function fetchAllTrendingProducts() {
  //     setError("");
  //     setProductList(null);
  //     startLoading();

  //     await fetch("api/best-selling-products")
  //       .then((response) => response.json())
  //       .then((data) => setProductList(data.data))
  //       .catch((err) => setError("Failed to get data"))
  //       .finally(() => stopLoading());
  //   }
  //   fetchAllTrendingProducts();
  // }, []);

  if (!productList) return;
  if (error)
    return (
      <div className="text-red-600 flex flex-col items-center justify-center">
        {error}
      </div>
    );

  return (
    <div className="grid grid-cols-4 gap-4 w-[65rem]">
      {productList.map((item) => {
        return (
          <Card
            key={item.sku}
            title={item.name[lang]}
            image={item.image[0]}
            primaryDesc={item.ad_slogan[lang]}
            label={dictionary.homepage.more}
            path={`/products/${item.sku}`}
          />
        );
      })}
    </div>
  );
}
