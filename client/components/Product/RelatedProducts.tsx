import Link from "next/link";

import { GridTileImage } from "./GridTileImage";
import BrownShoesPicture from "../../assets/images/brownShoes.jpg";
import FlyingShoe from "../../assets/images/flyingShoe.png";
import GreyWatch from "../../assets/images/greyWatch.jpeg";
import Headphones from "../../assets/images/headphones.jpeg";
import Photography from "../../assets/images/photograph.jpg";



const relatedProducts = [
  {
    handle: 1,
    title: "New Shoe",
    src: BrownShoesPicture,
  },
  {
    handle: 2,
    title: "New Shoe",
    src: Headphones,
  },
  {
    handle: 3,
    title: "New Shoe",
    src: BrownShoesPicture,
  },
  {
    handle: 4,
    title: "New Shoe",
    src: GreyWatch,
  },
  {
    handle: 5,
    title: "New Shoe",
    src: BrownShoesPicture,
  },
  {
    handle: 6,
    title: "New Shoe",
    src: FlyingShoe,
  },
  {
    handle: 7,
    title: "New Shoe",
    src: Photography,
  },
];

export function RelatedProducts() {
//   const relatedProducts = await getProductRecommendations(id);

  if (!relatedProducts.length) { return null; }

  return (
    <div className="py-8">
      <h2 className="mb-4 text-2xl font-bold">Related Products</h2>
      <ul className="flex w-full gap-4 overflow-x-auto pt-1 no-scrollbar list-none">
        {relatedProducts.map(product => (
          <li
            key={product.handle}
            className="aspect-square w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
          >
            <Link className="relative h-full w-full" href={`/product/${product.handle}`}>
              <GridTileImage
                alt={product.title}
                // label={{
                //   title: product.title,
                //   amount: product.priceRange.maxVariantPrice.amount,
                //   currencyCode: product.priceRange.maxVariantPrice.currencyCode,
                // }}
                src={product?.src}
                fill
                sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
