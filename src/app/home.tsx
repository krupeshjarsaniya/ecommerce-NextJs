"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/component/Header/Header";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import ProductCard from "@/component/ProductCard/ProductCard";
import Footer from "@/component/Footer/Footer";
import { GetProduct } from "../Api/Api";
import { productItem } from "@/interfaces";
import { Metadata } from "next";
export default function Home() {
    const [cardData, setCardData] = useState<productItem[]>([]);
    const [search, setSearch] = useState<string>("");
    const [dropdown, setDropdown] = useState([])
    const [isloading, setIsloading] = useState(true);
  
    useEffect(() => {
      getProductList(true);
  }, []);
    useEffect(() => {
        getProductList();
    }, [search]);
  
    const getProductList = (firstLoad?: boolean) => {
      setIsloading(true);
      var data = {
        name: search,
      };
      GetProduct(data)
        .then(function (response) {
          setIsloading(false);
          setCardData(response.data);
          if(firstLoad) {
            setDropdown(response.data)
          }
        })
        .catch(function (error) {
          console.log(error);
          setIsloading(false);
        });
    };
    return (
      <>
        <Header setSearch={setSearch} search={search} headerShow={true} cardData={dropdown} />
        <Container>
          <Row>
       
            {isloading ? (
              <>
                <div className="hight">
                  <span className="rotating"></span>
                </div>
              </>
            ) : (
              <>
                   <Col xs={12}>
              <h3 className="text-center my-5 "> New Arrivals</h3>
            </Col>
                {cardData.map((product) => {
                  return (
                    <div className="col-12 col-sm-6 col-lg-3 py-3">
                      <ProductCard product={product} />
                    </div>
                  );
                })}
              </>
            )}
          </Row>
        </Container>
  
        <Footer />
      </>
    );
  }