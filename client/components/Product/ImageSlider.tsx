"use client";

import { Image } from "antd";
import { useCallback, useState } from "react";

import { GridTileImage } from "./GridTileImage";
import BrownShoesPicture from "../../assets/images/brownShoes.jpg";
import Cream from "../../assets/images/cream.jpeg";
import FlyingShoe from "../../assets/images/flyingShoe.png";
import GreyWatch from "../../assets/images/greyWatch.jpeg";
import Headphones from "../../assets/images/headphones.jpeg";
import Photography from "../../assets/images/photograph.jpg";



interface ImageSliderProps {
  images: {
    url: string;
    id: number;
  }[];
  productName: string;
}

const previewImages = [
  BrownShoesPicture,
  Photography,
  FlyingShoe,
  GreyWatch,
  Headphones,
  Cream,
  Cream,
];

export function ImageSlider({ images, productName }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  //   const goToPrevious = () => {
  //     const isFirstSlide = currentIndex === 0;
  //     const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
  //     setCurrentIndex(newIndex);
  //   };

  //   const goToNext = () => {
  //     const isLastSlide = currentIndex === images.length - 1;
  //     const newIndex = isLastSlide ? 0 : currentIndex + 1;
  //     setCurrentIndex(newIndex);
  //   };

  const goToSlide = useCallback((slideIndex: number) => {
    setCurrentIndex(slideIndex);
  }, []);
  //   const goToSlide = slideIndex => {
  //     setCurrentIndex(slideIndex);
  //   };
  //   const slideStylesWidthBackground = useMemo(() => ({
  //     backgroundImage: `url(${images[currentIndex].url})`,
  //   }), [currentIndex, images]);

  return (
    <div className="w-1/2 max-[1100px]:w-full">

      <div className="relative h-full flex gap-x-5">
        {/* <div>
          <div onClick={goToPrevious} className="absolute top-1/2 transform -translate-x-1/2 left-8 text-black z-20 cursor-pointer">
          ❰
          </div>
          <div onClick={goToNext} className="absolute top-1/2 transform translate-x-1/2 left-8 text-black z-20 cursor-pointer">
          ❱
          </div>
        </div> */}
        <div className="flex flex-col gap-y-7 h-full overflow-y-scroll no-scrollbar">
          {previewImages.map((slide, slideIndex) => (
            <div
              className="cursor-pointer text-xl"
              //   h-24 w-40"
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
            >
              <GridTileImage
                src={slide}
                alt={`${productName}_${slideIndex}`}
                width={150}
                height={200}
                active={slideIndex === currentIndex}
                isInteractive
              />
            </div>
          ))}
        </div>
        {/* <div style={slideStylesWidthBackground} className="h-full w-full bg-cover rounded-xl bg-center"></div> */}
        <div className="h-full w-full bg-cover rounded-xl">
          <Image
            src={images[currentIndex].url}
            alt="sample"
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
