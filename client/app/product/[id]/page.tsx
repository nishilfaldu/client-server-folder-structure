import type { NextPage } from "next";

import ImageSlider from "@/components/Product/ImageSlider";
import { ProductInfo } from "@/components/Product/ProductInfo";
import { RelatedProducts } from "@/components/Product/RelatedProducts";



const productImages = [
  { url: "https://www.ingenstudio.com/blog/wp-content/uploads/2016/08/eCommerce-Product-Photography-Tips.jpg", id:1 },
  { url: "https://www.magestore.com/wp-content/uploads/2021/07/eCommerce-product-photography.jpg", id:2 },
  { url: "https://blog.carts.guru/hubfs/Launch%20a%20New%20Product.png", id:3 },
  { url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80", id:4 },
  { url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D&w=1000&q=80", id: 5 },
  { url: "https://images.unsplash.com/photo-1615900119312-2acd3a71f3aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdCUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fHww&w=1000&q=80", id: 6 },
];

const ProductPage: NextPage = () => {
  return(
    <>
      <div className="pt-28 pb-20 max-w-[2520px] flex flex-col max-[1100px]:flex-col mx-auto xl:px-10 md:px-10 sm:px-4 px-4 box-border h-full">
        <div className="flex max-[1100px]:flex-col h-full">
          <ImageSlider images={productImages} productName="Shake Sandal"/>
          <ProductInfo sellerName="Nishil Faldu (Seller)" productName="Shake Sandal" price="1,220.00"/>
        </div>
        <RelatedProducts />
      </div>
    </>
  );
};

export default ProductPage;
