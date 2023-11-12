import clsx from "clsx";
import Image from "next/image";



export function GridTileImage({
  isInteractive = true,
  active,
  label,
  ...props
}: {
  isInteractive?: boolean;
  active?: boolean;
  label?: {
    title: string;
    amount: string;
    currencyCode: string;
    position?: "bottom" | "center";
  };
} & React.ComponentProps<typeof Image>) {
  return (
    <div
      className={clsx(
        "group flex w-full h-full items-center justify-center overflow-hidden rounded-lg border box-border bg-white",
        {
          "relative": label,
          "border-solid border-2 border-black-600": active,
          "border-neutral-200": !active,
        }
      )}
    >
      {props.src ? (
        // eslint-disable-next-line jsx-a11y/alt-text -- `alt` is inherited from `props`, which is being enforced with TypeScript
        <Image
          className={clsx("relative h-full w-full object-contain", {
            "transition duration-300 ease-in-out": isInteractive,
          })}
          {...props}
        />
      ) : null}
      {/* {label ? (
        <Label
          title={label.title}
          amount={label.amount}
          currencyCode={label.currencyCode}
          position={label.position}
        />
      ) : null} */}
    </div>
  );
}
