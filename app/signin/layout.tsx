import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "رزرو رویداد | ورود",
  description: "مرجع رزرو رویداد های مهم",
};

export default function SingninLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="signin-layout__section h-screen w-screen flex justify-center items-center">
      {children}
    </section>
  );
}
