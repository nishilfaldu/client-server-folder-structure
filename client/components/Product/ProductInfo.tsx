
interface ProductInfoProps {
  sellerName: string;
  productName: string;
  price: string;
}

export function ProductInfo({ sellerName, productName, price }: ProductInfoProps) {
  return (
    <div className="w-1/2 max-[1100px]:w-full max-[1100px]:mt-8">
      <div className="h-full flex flex-col mx-48 min-[1100px]:justify-center max-[1100px]:mx-8 max-[1100px]:items-center">
        <span className="leading-8">{sellerName}</span>
        <span className="leading-8">{productName}</span>
        <span className="leading-8">${price}</span>
        <button className="cursor-pointer rounded-3xl bg-black text-white py-2 px-4 transition-all ease-in-out hover:text-black hover:bg-white border-solid hover:border-[1px] border-black my-8 w-full">
          <span className="flex items-center justify-center text-base gap-x-2">
            <span>Add to Cart</span>
          </span>
        </button>
      </div>
    </div>
  );
}
