"use client";

import React from "react";
import { signOut } from "next-auth/react";
import EmptyState from "../(site)/_components/empty-state";

type Props = {};

const UserPage = (props: Props) => {
  return (
    <main className="hidden lg:block lg:pl-80 h-full">
      <EmptyState />
    </main>
  );
};

export default UserPage;
