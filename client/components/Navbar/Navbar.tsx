import Link from "next/link";

import { Cart } from "./Cart";
import { LogoSquare } from "./Logo";
import { SellWithUs } from "./SellWithUs";
import { UserMenu } from "./UserMenu";
import { Categories } from "../Category/Categories";



export function Navbar() {
  return(
    <nav className="fixed w-full bg-white z-10 shadow-sm box-border">
      {/* TODO: Implement Mobile Menu if needed */}
      {/* <div className="block flex-none md:hidden"> */}
      {/* <MobileMenu menu={menu} /> */}
      {/* </div> */}
      <div className="border-solid border-l-0 border-r-0 border-neutral-200 border-b-[1px] p-4">
        <div
          className="
            flex
            flex-row
            items-center
            justify-between
            gap-3
            md:gap-0
          "
        >
          <div className="flex w-1/3">
            <UserMenu/>
          </div>
          <div className="w-1/3">
            <Link
              href="/"
              aria-label="Go back home"
              className="flex w-full items-center justify-center md:w-auto no-underline text-black"
            >
              <LogoSquare />
              <div className="ml-2 flex-none text-base font-medium uppercase lg:block">
                7WEST
              </div>
            </Link>
          </div>

          <div className="flex justify-end w-1/3 items-center gap-x-3">
            <SellWithUs />
            <Cart quantity={2}/>
          </div>
        </div>
      </div>
      <Categories/>
    </nav>
  );
}
