"use client";

import React from "react";
import { User } from "@prisma/client";
import { HiUserCircle } from "react-icons/hi2";
import Image from "next/image";
import useActiveList from "@/hooks/useActiveList";

type Props = {
  user?: User | null;
};

const Avatar = ({ user }: Props) => {
  const { members } = useActiveList();

  const isActive = members.indexOf(user?.email!) !== -1;
  return (
    <div className="relative">
      <div className="relative inline-block rounded-full overflow-hidden h-9 w-9 md:w-11 md:h-11">
        <Image
          alt="user-image"
          src={user?.image || "/userplaceholder.png"}
          height={0}
          width={0}
          sizes="100vw"
          className="object-cover h-full w-full"
        />
      </div>
      {isActive && (
        <span className="absolute block rounded-full bg-green-500 ring-2 ring-white top-0 right-0 h-2 w-2 md:h-3 md:w-3" />
      )}
    </div>
  );
};

export default Avatar;
