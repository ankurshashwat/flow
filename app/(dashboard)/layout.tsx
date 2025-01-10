import BreadCrumb from "@/components/shared/BreadCrumb";
import Sidebar from "@/components/shared/Sidebar";
import { ModeToggle } from "@/components/shared/Theme";
import { Separator } from "@/components/ui/separator";
import { SignedIn, UserButton } from "@clerk/nextjs";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1 min-h-screen">
        <header className="flex items-center justify-between px-6 py-4 h-[50px] container">
          <BreadCrumb />
          <div className="gap-3 flex items-center">
            <ModeToggle />
            <SignedIn>
              <UserButton 
              appearance={{
                elements: {
                  avatarBox: "h-10 w-10"
                },
              }}
              />
            </SignedIn>
          </div>
        </header>
        <Separator />

        <div className="overflow-auto"></div>
        <div className="flex-1 container py-4 text-accent-foreground">
          {children}
        </div>
      </div>
    </div>
  );
};

export default layout;
