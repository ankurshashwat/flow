import { cn } from "@/lib/utils";
import { SquareDashedMousePointer } from "lucide-react";
import Link from "next/link";
import React from "react";

const Logo = ({
  fontSize,
  iconSize,
}: {
  fontSize: string;
  iconSize: number;
}) => {
  return (
    <Link
      href="/"
      className={cn(
        "text-2xl font-extrabold flex items-center gap-2",
        fontSize
      )}
    >
      <div className="rounded-xl bg-gradient-to-r from-primary/90 to-primary/80 p-2">
        <SquareDashedMousePointer size={iconSize} className="stroke-white" />
      </div>
      <div>
        <h1 className="bg-gradient-to-r from-primary/90 to-primary/80 bg-clip-text text-transparent">
          Flow
        </h1>
      </div>
    </Link>
  );
};

export default Logo;
