"use client";

import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { routes } from "@/constants";
import { buttonVariants } from "../ui/button";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  const activeRoute =
    routes.find(
      (route) => route.href.length > 1 && pathname.includes(route.href)
    ) || routes[0];

  //!TODO CREDITS

  return (
    <div className="hidden relative md:block min-w-[280px] max-w-[280px] h-screen overflow-hidden w-full bg-primary/5 dark:bg-[#121212] dark:text-foreground text-muted-foreground border-r-2 border-separate">
      <div className="flex items-center justify-center gap-2 border-b-[1px] border-separate p-4">
        <Logo fontSize="2xl" iconSize={20} />
      </div>
      <div className="flex flex-col p-2 gap-1">
        {routes.map((route: any) => (
          <Link
            key={route.href}
            href={route.href}
            className={buttonVariants({
              variant:
                activeRoute.href === route.href
                  ? "sidebarActiveItem"
                  : "sidebarItem",
            })}
          >
            <route.icon size={20} />
            {route.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
