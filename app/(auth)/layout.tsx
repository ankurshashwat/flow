import Logo from "@/components/shared/Logo";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <Logo fontSize="2xl" iconSize={20} />
      {children}
    </div>
  );
};

export default layout;
