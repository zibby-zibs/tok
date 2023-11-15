"use client";

import useConversation from "@/hooks/useConversation";
import clsx from "clsx";
import EmptyState from "../(site)/_components/empty-state";

import React from "react";

type Props = {};

const Home = (props: Props) => {
  const { isOpen } = useConversation();
  return (
    <div
      className={clsx("lg:pl-80 h-full lg:block", isOpen ? "block" : "hidden")}
    >
      <EmptyState />
    </div>
  );
};

export default Home;
