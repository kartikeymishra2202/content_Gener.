"use client";
import React, { useMemo } from "react";
import Logo from "./Logo";
import { CreditCardIcon, History, WandSparkles } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const menuList = [
  {
    name: "Magic Tools",
    icon: WandSparkles,
    path: "/dashboard",
  },
  {
    name: "Output History",
    icon: History,
    path: "/dashboard/history",
  },
  {
    name: "Upgrade",
    icon: CreditCardIcon,
    path: "/dashboard/upgrade",
  },
];

const Sidebar = () => {
  const path = usePathname(); // usePathname is a hook that returns the current pathname of the URL => konsa path iss samay select kiya hai pta chalta hai

  //
  const menuItems = useMemo(() => {
    return menuList.map((menu) => (
      <Link
        href={menu.path}
        prefetch={false} // Prevent unnecessary prefetching and spped up the link
        key={menu.name}
        className={cn(
          "flex items-center space-x-2 py-2 px-4 my-2 rounded-lg hover:bg-gray-800 hover:text-cyan-50 cursor-pointer",
          path === menu.path && "bg-primary text-white"
        )}
      >
        <menu.icon className="h-6 w-6" />
        <h2 className="text-lg">{menu.name}</h2>
      </Link>
    ));
  }, [path]);
  return (
    <div className="p-5 bg-white h-[800px] flex flex-col">
      <Logo />
      <div className="mt-10 h-max flex flex-col justify-between">
        {menuItems}
      </div>
    </div>
  );
  ///
  // here i modified code with useMemo and prefectch to spped up
  ///

  // return (
  //   <div className="p-5 bg-white h-[800px] flex flex-col">
  //     <Logo />

  //     <div className="mt-10 h-max flex flex-col justify-between">
  //       {menuList.map((menu) => (
  //         <Link
  //           href={menu.path}
  //           key={menu.name}
  //           prefetch={false}
  //           className={cn(
  //             "flex items-center space-x-2 py-2 px-4 my-2 rounded-lg hover:bg-gray-800 hover:text-cyan-50 cursor-pointer",
  //             path === menu.path && "bg-primary text-white"
  //           )}
  //         >
  //           <menu.icon className="h-6 w-6"></menu.icon>
  //           <h2 className="text-lg">{menu.name}</h2>
  //         </Link>
  //       ))}
  //     </div>
  //   </div>
  // );
};

export default Sidebar;
