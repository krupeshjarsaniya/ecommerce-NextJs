import { Metadata } from "next";
import Home from "./home";
export const metadata: Metadata = {
  title: 'E-Commerce',
  description: 'E-Commerce',
}
export default function Page() {
  return (
    <>
      <Home />
    </>
  );
}
