import type { NextPage } from "next";

import Picture from "../assets/images/airbnb-sample.jpeg.webp";
import { ListingCard } from "@/components/Listings/ListingCard";



const listings = [
  {
    id: 1,
    price: 24,
    imageSrc: Picture,
    title: "PUMA Mens Viz Runner",
  },
  {
    id: 2,
    price: 24,
    imageSrc: Picture,
    title: "PUMA Mens Viz Runner",
  },
  {
    id: 3,
    price: 24,
    imageSrc: Picture,
    title: "PUMA Mens Viz Runner",
  },
  {
    id: 4,
    price: 24,
    imageSrc: Picture,
    title: "PUMA Mens Viz Runner",
  },
  {
    id: 5,
    price: 24,
    imageSrc: Picture,
    title: "PUMA Mens Viz Runner",
  },
  {
    id: 6,
    price: 24,
    imageSrc: Picture,
    title: "PUMA Mens Viz Runner",
  },
  {
    id: 7,
    price: 24,
    imageSrc: Picture,
    title: "PUMA Mens Viz Runner",
  },
  {
    id: 8,
    price: 24,
    imageSrc: Picture,
    title: "PUMA Mens Viz Runner",
  },
  {
    id: 8,
    price: 24,
    imageSrc: Picture,
    title: "PUMA Mens Viz Runner",
  },
  {
    id: 8,
    price: 24,
    imageSrc: Picture,
    title: "PUMA Mens Viz Runner",
  },
  {
    id: 8,
    price: 24,
    imageSrc: Picture,
    title: "PUMA Mens Viz Runner",
  },
  {
    id: 8,
    price: 24,
    imageSrc: Picture,
    title: "PUMA Mens Viz Runner",
  },
  {
    id: 8,
    price: 24,
    imageSrc: Picture,
    title: "PUMA Mens Viz Runner",
  },
];

const HomePage: NextPage = () => {
  return(
    <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
      <div className="pt-56 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-8 pb-16">
        {listings.map(listing => (
          <ListingCard
            //   currentUser={currentUser}
            key={listing.id}
            data={listing}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
