"use client";

import useConversation from "@/hooks/useConversation";
import useRoutes from "@/hooks/useRoutes";
import { it } from "node:test";
import React from "react";
import MobileItem from "./mobile-item";

type Props = {};

const MobileFooter = (props: Props) => {
  const routes = useRoutes();
  const { isOpen } = useConversation();

  if (isOpen) {
    return null;
  }
  return (
    <footer className="fixed justify-between w-full bottom-0 z-40 flex items-center bg-white border-t-[1px] lg:hidden">
      {routes.map((item) => (
        <MobileItem
          key={item.href}
          href={item.href}
          active={item.active}
          icon={item.icon}
          // label={item.label}
          onClick={item.onClick}
        />
      ))}
    </footer>
  );
};

export default MobileFooter;
