"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ link }) => {
  const pathName = usePathname();
  console.log(pathName);

  const isActive = pathName === link.url;

  return (
    <Link
      className={`rounded p-1 ${
        isActive ? "bg-black text-white" : "hover:bg-gray-200"
      }`}
      href={link.url}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
