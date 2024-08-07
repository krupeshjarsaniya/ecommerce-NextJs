import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import "./ProductCard.css";
import { IoCartOutline, IoSearchSharp, IoStar } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { productItem } from "@/interfaces";
import { useRouter } from "next/navigation";
import { IoIosStarOutline } from "react-icons/io";
interface ProductProps {
  product: productItem;
}
const ProductCard: React.FC<ProductProps> = ({product}) => {
  const router = useRouter()
  const [liked, setLiked] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    calculateDiscount(product.price);
    if(product.images.length) {
      setMainImage(product.images[0].image)
    }
  }, [product])

  const calculateDiscount = (price: number) => {
    setDiscount(price - 150)
  }

  return (
    <Card
      className="hover-card cursor-pointer card-hight shadow"
      onClick={()=>router.push("/product/" + product.id)}
    >
      <div className="m-2 position-relative">

      <Card.Img
        variant="top"
        src={mainImage}
        className="hover-card-img "
        />
        <div className="offer">70% off</div>
        </div>
      <Card.Body className="text-center m-2">
        <div className="d-flex justify-content-center align-items-center">
          <IoStar />
          <IoStar />
          <IoStar />
          <IoIosStarOutline />
          <IoIosStarOutline />
          <span className="mx-2">
            (3 review)
          </span>
        </div>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          <div className="price">
            <span className="original-price">${product.price}</span>
            <span className="discounted-price fontcolour">${discount}</span>
          </div>
        </Card.Text>
      </Card.Body>
      <div className="overlay-icon">
        <IoCartOutline className="mx-2" size={20} />
        <CiHeart color={liked ? "red" : ""} size={20} onClick={(e)=> {
          e.stopPropagation();
          setLiked(!liked)
        }} />
      </div>
    </Card>
  );
};

export default ProductCard;
