"use client";

import { Avatar, Divider } from "antd";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

import MenuItem from "./MenuItem";



export function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  //   NOTE: Add user logic later
  const toggleOpen = useCallback(() => {
    setIsOpen(value => !value);
  }, []);

  return(
    <div className="relative">
      <div className="flex flex-row items-center gap-3 cursor-pointer">
        <div onClick={toggleOpen}>
          <Avatar shape="circle" size={48} className="bg-white text-black border-solid border-neutral-200 border-[1px]">
            <div className="transition-all ease-in-out hover:scale-110">N</div>
          </Avatar>
        </div>
      </div>
      {isOpen && (
        <div className="absolute z-20 rounded-md shadow-lg w-64 overflow-hidden divide-y divide-black left-0 top-[60px] text-lg">
          <div className="px-4 py-3 text-base">
            <div>Nishil Faldu</div>
            <div className="font-medium truncate">nishilfaldu@gmail.com</div>
          </div>
          <div className="flex flex-col cursor-pointer">
            {
              (
                <>
                  <MenuItem
                    label="Messages"
                    onClick={() => router.push("/trips")}
                  />
                  <MenuItem
                    label="Notifications"
                    onClick={() => router.push("/favorites")}
                  />
                  <MenuItem
                    label="Orders"
                    onClick={() => router.push("/reservations")}
                  />
                  <MenuItem
                    label="Wishlists"
                    onClick={() => router.push("/properties")}
                  />
                  <Divider className="m-0"/>
                  <MenuItem
                    label="Marketplace"
                    onClick={() => router.push("/properties")}
                  />
                  <MenuItem
                    label="Account"
                    onClick={() => router.push("/properties")}
                  />
                  <Divider className="m-0"/>
                  <MenuItem
                    label="Help"
                    onClick={() => router.push("/properties")}
                  />
                  <MenuItem
                    label="Logout"
                    onClick={() => router.push("/properties")}
                  />
                </>
              )}
          </div>
        </div>
      )}
    </div>
  );
}
