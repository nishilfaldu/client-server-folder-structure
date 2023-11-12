import { LuSettings2 } from "react-icons/lu";



export function FiltersButton() {
  return(
    <button className="cursor-pointer rounded-3xl bg-black text-white py-2 px-4 border-0 transition-all ease-in-out hover:scale-105 mb-4">
      <span className="flex items-center text-base gap-x-2">
        <span>Filters</span>
        <LuSettings2 />
      </span>
    </button>
  );
}
