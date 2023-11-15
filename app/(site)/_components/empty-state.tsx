import React from "react";

type Props = {};

const EmptyState = (props: Props) => {
  return (
    <main className="px-4 py-10 sm:px-6 lg:px-8 h-full flex justify-center items-center bg-gray-100">
      <section className="text-center items-center flex flex-col">
        <h3 className="mt-2 text-2xl font-semibold text-gray-900">
          Select a chat or start a new conversation
        </h3>
      </section>
    </main>
  );
};

export default EmptyState;
