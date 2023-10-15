import "../globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header/Header";

export const metadata: Metadata = {
  title: "Todos application",
  description: "Created by Abdallah Yassin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <main className="w-full">
        <div className="app-wrapper flex justify-center">
          <div className="container">{children}</div>
        </div>
      </main>
    </div>
  );
}
