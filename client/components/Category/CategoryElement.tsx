import type { IconType } from "react-icons";



interface CategoryElementProps {
  icon: IconType;
  label: string;
  selected?: boolean;
}

export function CategoryElement({ icon: Icon, label, selected }: CategoryElementProps) {
  return(
    <div className={`flex flex-col sticky items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer
    ${selected ? "border-b-neutral-800" : "border-transparent"}
    ${selected ? "text-neutral-800" : "text-neutral-500"}`}>
      <Icon size={26} />
      <div className="font-medium text-base">
        {label}
      </div>
    </div>
  );
}
