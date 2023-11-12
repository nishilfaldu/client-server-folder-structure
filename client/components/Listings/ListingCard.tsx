"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useMemo } from "react";

import HeartButton from "./HeartButton";

// import HeartButton from "./HeartButton";



interface ListingCardProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;

}

export function ListingCard({ data }: ListingCardProps) {
  const router = useRouter();
  const price = useMemo(() => data.price, [data.price]);
  const title = useMemo(() => data.title, [data]);
  //   console.log(data);

  return(
    <div
      onClick={() => router.push(`/listings/${data.id}`)}
      className="col-span-1 cursor-pointer group"
    >
      <div className="flex flex-col gap-2 w-full">
        <div
          className="
            aspect-square
            w-full
            relative
            overflow-hidden
            rounded-xl
          "
        >
          <Image
            fill
            className="
              object-cover
              h-full
              w-full
              rounded-xl
              group-hover:scale-110
              transition
            "
            src={data.imageSrc}
            alt="Listing"
          />
          <div className="
            absolute
            top-3
            right-3
          ">
            <HeartButton
            //   listingId={data.id}
            />
          </div>
        </div>
        <div className="font-semibold text-base">
          {title}
        </div>
        <div className="flex flex-row items-center gap-1">
          <div className="font-semibold">
            ${price}
          </div>
        </div>
      </div>
    </div>
  );
}
