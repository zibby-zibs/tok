import Image from "next/image";
import React from "react";
import AuthForm from "./_components/auth-form";
import Wallpaper from "./_components/wallpaper";

type Props = {};

const Page = (props: Props) => {
  return (
    <main className="relative flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-100">
      <div className="sm:mx-auto sm:w-full sm:max-w-md z-10">
        <Image
          src="/logo-t.png"
          alt="logo"
          height={48}
          width={48}
          className="mx-auto w-auto"
        />
        <h2 className="mt-6 text-center text-2xl font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>
      <section className="z-10">
        <AuthForm />
      </section>
      <aside className="fixed top-0 left-0 inset-0 h-full w-full overflow-hidden z-0">
        <Wallpaper />
      </aside>
    </main>
  );
};

export default Page;
