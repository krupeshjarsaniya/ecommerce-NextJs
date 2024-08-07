import { Metadata } from "next";
import ProductDetalisPage from "./ProductDetalisPage";
export const metadata: Metadata = {
  title: 'E-Commerce',
  description: 'E-Commerce',
}
export default function Page() {
  return (
    <>
      <ProductDetalisPage />
    </>
  );
}
