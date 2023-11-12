import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";



export function Cart({
  className,
  quantity,
}: {
  className?: string;
  quantity?: number;
}) {
  return (
    <div className="relative flex h-11 w-11 items-center justify-center rounded-full border-solid border-[1px] text-black transition-colors border-neutral-200 cursor-pointer">
      <ShoppingCartIcon
        className={clsx("h-4 transition-all ease-in-out hover:scale-110 stroke-2", className)}
      />

      {quantity ? (
        <div className="absolute right-0 top-0 -mt-2 rounded-full w-4 h-4 bg-black text-[11px] font-medium text-white flex justify-center">
          {quantity}
        </div>
      ) : null}
    </div>
  );
}
