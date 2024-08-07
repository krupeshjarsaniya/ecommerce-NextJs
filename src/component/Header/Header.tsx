"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline, IoSearchSharp } from "react-icons/io5";
import "./Header.css";
import { useRouter } from "next/navigation";
import ReactSearchBox from "react-search-box";
import { productItem } from "@/interfaces";

interface HeaderProps {
  setSearch?: Dispatch<SetStateAction<string>>;
  search: string;
  headerShow: boolean;
  cardData?:productItem[]
}

const Header: React.FC<HeaderProps> = ({ setSearch, search, headerShow ,cardData}) => {
  const router = useRouter();
  const [isSearch, setIsSearch] = useState(false);
  return (
    <div className="bg-change">
      <Container>
        <Navbar  className="">
          {!isSearch ? (
            <Container fluid>
              <Navbar.Brand href="#" onClick={() => router.push("/")}>
                E-Commerce
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse
                id="navbarScroll"
                className="justify-content-end"
              >
                <div className="d-flex">
                  {headerShow && (
                    <IoSearchSharp
                      className="cursor-pointer"
                      size={20}
                      onClick={() => setIsSearch(true)}
                    />
                  )}
                  <IoCartOutline className="mx-2 cursor-pointer" size={20} />
                  <CiHeart className="cursor-pointer" size={20} />
                </div>
              </Navbar.Collapse>
            </Container>
          ) : (
            <div className="w-100 d-flex justify-content-center fade-in">
              <div className="search-container">
                <ReactSearchBox
                  placeholder="Search Product By Name"
                  value={search}
                  data={cardData?.map((ele: any) => ({
                    key: ele.name,
                    value: ele.name,
                  }))}

                  onSelect={(record:any) => setSearch && setSearch(record.item.value)}
                  
                />

                <button
                  className="clear-btn"
                  onClick={() => {
                    setIsSearch(false);
                    setSearch && setSearch("")
                  }}
                >
                  <svg
                    className="clear-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;
