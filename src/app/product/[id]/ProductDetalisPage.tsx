"use client";
import { GetProductById } from "@/Api/Api";
import Footer from "@/component/Footer/Footer";
import Header from "@/component/Header/Header";
import { FC, useEffect, useState } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { IoIosStar } from "react-icons/io";
import ReactImageMagnify from "react-image-magnify";
import { useParams, useRouter } from "next/navigation";
import { productImage, productItem } from "@/interfaces";
import { FaCircleChevronLeft } from "react-icons/fa6";
export default function ProductDetalisPage() {
  const router = useRouter()
  const { id } = useParams();
  const [isloading, setIsloading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [discount, setDiscount] = useState(0);
  const [product, setProduct] = useState<productItem>({
    id: 0,
    name: "",
    description: "",
    price: 0,
    stock: 0,
    images: [],
  });
  const [imgData, setImgData] = useState<productImage[]>([]);
  const [setImgMain, setSetImgMain] = useState<productImage>({
    id: 0,
    image: "",
  });
  useEffect(() => {
    GetDataById();
  }, []);

  useEffect(() => {
    calculateDiscount(product.price);
    if (product?.images?.length) {
      setImgData(product.images);
      setSetImgMain(product.images[0]);
    }
  }, [product]);
  const GetDataById = () => {
    setIsloading(true)
    GetProductById(id)
      .then(function (response) {
        setProduct(response.data);
        setIsloading(false)
      })
      .catch(function (error) {
        console.log(error);
        setIsloading(false)

      });
  };
  const calculateDiscount = (price: number) => {
    setDiscount(price - 150);
  };

  return (
    <>
      <Header search="" headerShow={false} />
      <Container className="">
        <Row className="my-3">
          <Col xs={12} className="cursor-pointer p-2">
            <FaCircleChevronLeft onClick={()=>router.push("/")}  size={30}/>
          </Col>
           
          {isloading ? (
            <>
              <div className="hight">
                <span className="rotating"></span>
              </div>
            </>
          ) : ( 
            <>
          <Col md={5} className="mb-4">
            <div className="border">
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: "Wristwatch by Ted Baker London",
                    isFluidWidth: true,
                    src: setImgMain.image,
                  },
                  largeImage: {
                    src: setImgMain.image,
                    width: 1200,
                    height: 1800,
                  },
                }}
              />
            </div>

            <div className="d-flex">
              {imgData.map((ele: any) => {
                return (
                  <div
                    className="p-2 border cursor-pointer"
                    onClick={(e) => setSetImgMain(ele)}
                  >
                    <img width={"50px"} src={ele.image} />
                  </div>
                );
              })}
            </div>
          </Col>
          <Col md={7}>
            <h4>{product.name}</h4>
            <div className="d-flex align-item-center">
              <p className="d-flex align-items-center">
                <IoIosStar /> <b>4.7 </b>(3)
              </p>
              <p className="text-muted ms-3">
                SKU: <b>A4B5C6D7</b>
              </p>
            </div>
            <div className="price">
              <span className="original-price">${product.price}</span>
              <span className="discounted-price fontcolour">${discount}</span>
            </div>
            {product.stock ? (
              <p className="text-success">
                <b>In Stock ({product.stock})</b>
              </p>
            ) : (
              <p className="text-danger">
                <b>Out of Stock</b>
              </p>
            )}
            <p>{product.description}</p>
            <div className="d-flex align-items-center mb-3">
              <Button
                variant="outline-secondary"
                className="me-2"
                onClick={() => setQuantity(quantity == 0 ? 0 : quantity - 1)}
              >
                -
              </Button>
              <input
                type="number"
                className="form-control width-input text-center"
                value={quantity}
              />
              <Button
                variant="outline-secondary"
                className="ms-2"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </Button>
              <Button variant="" className="ms-2 bg-dark text-white">
                Add to Cart
              </Button>
              <Button variant="" className="ms-2 border border-secondary">
                Buy Now
              </Button>
            </div>
            <ul className="mt-3">
              <li>Price match promise</li>
              <li>Free delivery on all orders</li>
              <li>Safe & secure transaction</li>
              <li>Extended Christmas return policy</li>
            </ul>
          </Col>
            </>
          )}
        </Row>
      </Container>
      <Footer />
    </>
  );
}
