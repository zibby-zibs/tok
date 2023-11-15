"use client";

import { User } from "@prisma/client";
import Image from "next/image";
import React from "react";

type Props = {
  users?: User[];
};

const AvatarGroup = ({ users }: Props) => {
  const slicedUsers = users?.slice(0, 3);

  const positionMap = {
    0: "top-0 left-[2px]",
    1: "top-0 left-0 right-0 mx-auto ",
    2: "top-0 right-0",
  };
  return (
    <main className="relative h-11 w-11 flex items-center">
      {slicedUsers?.map((user, index) => (
        <div
          key={user.id}
          className={`absolute inline-block transform translate-y-[50%] rounded-full overflow-hidden h-[21px] w-[21px] ${
            positionMap[index as keyof typeof positionMap]
          }`}
        >
          <Image
            alt="avatar"
            fill
            src={user?.image || "/userplaceholder.png"}
          />
        </div>
      ))}
    </main>
  );
};

export default AvatarGroup;
