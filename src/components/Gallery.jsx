import React from "react";
import { useEffect, useState } from "react";
import { FaRegStar } from "react-icons/fa";

const Gallery = () => {
  const [prodData, setProdData] = useState([]);
  const [listCategory, setListCategory] = useState([]);
  const [productList, setProductList] = useState([]);
  const [productName, setProductName] = useState("");
  const [activeRate, setActiveRate] = useState(false);

  const handlerSelectRating = (prev) => {
    setActiveRate((prev) => !prev);
  };

  useEffect(() => {
    const url = "https://fakestoreapi.com/products";

    const fetchProd = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();

        setProdData(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchProd();
  }, []);

  /*------  Buttons list ----------*/
  useEffect(() => {
    const url = "https://dummyjson.com/products/categories";

    const fetchCategory = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();

        setListCategory(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchCategory();
  }, []);

  /*------Product list after the click on the button ----------*/
  useEffect(() => {
    const fetchProductList = async () => {
      try {
        if (productName) {
          const response = await fetch(
            `https://dummyjson.com/products/category/${productName}`
          );
          const json = await response.json();

          setProductList(json.products);
        }
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchProductList();
  }, [productName]);

  function selectProduct(item) {
    console.log(item);
    setProductName(item);
    //console.log(prodData);
    const filterDataItems = prodData.filter(
      (filterItem) => filterItem.category === item
    );

    console.log(filterDataItems);
  }
  return (
    <>
      <>
        <section class="text-gray-600 body-font">
          <div class="container mx-[180px] justify-center items-center">
            <div class="flex flex-wrap gap-3">
              {prodData.map((item, id) => {
                return (
                  <div
                    key={id}
                    class="lg:w-1/4 md:w-1/2 p-4 w-full rounded border shadow-lg  bg-blue-300"
                  >
                    <a class="block relative h-48 rounded overflow-hidden ">
                      <img
                        alt="ecommerce"
                        class="object-cover object-center w-full h-full block"
                        src={item.image}
                      />
                    </a>
                    <div className="bg-blue-100 shadow-lg border rounded-md mt-3 "> 
                    <div class="mt-4">
                      <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                        {item.title}
                      </h3>
                    </div>
                    <div className="flex justify-between mt-3 ">
                      <div>
                        <h2 class="text-gray-900 title-font text-lg font-medium">
                          {item.category}
                        </h2>
                        <p class="mt-1">$ {item.price}</p>
                      </div>
                      <button className="border rounded-md text-black bg-cyan-200 px-3 py-0 hover:bg-cyan-700 hover:text-white">
                        Add to Cart
                      </button>
                    </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </>

      <section className="mt-10" >
      <div className="   bg-blue-800">
              <h1 className="text-center px-4 py-2 font-bold  text-md text-white text-2xl">Filter by Categories</h1>
      </div>
      </section>

      <>
        <div class="flex  flex-wrap gap-3 mt-7 ml-5">
          {listCategory.map((item, index) => (
            <div key={index}>
              <button
                onClick={() => selectProduct(item)}
                class="border rounded gap-5 bg-slate-900 text-white px-3 py-2 "
              >
                {item}
              </button>
            </div>
          ))}
        </div>
      </>
      <>
        <>
          <div className=" m-5">
            <button className="border  text-white bg-black rounded-md  m-5 px-3 py-2 ">
              Ratings
            </button>

            <button
              onClick={handlerSelectRating}
              className={`border m-5 px-3 py-2 ${
                activeRate ? "bg-yellow-500 text-white" : ""
              }`}
            >
              <FaRegStar />
            </button>

            <button
              onClick={handlerSelectRating}
              className={`border m-5 px-3 py-2 ${
                activeRate ? "bg-yellow-500 text-white" : ""
              }`}
            >
              <div className="flex gap-1">
                <FaRegStar />

                <FaRegStar />
              </div>
            </button>

            <button
              onClick={handlerSelectRating}
              className="border  m-5 px-3 py-2 "
            >
              <div className="flex gap-1">
                <FaRegStar />

                <FaRegStar />

                <FaRegStar />
              </div>
            </button>

            <button
              onClick={handlerSelectRating}
              className="border  m-5 px-3 py-2 "
            >
              <div className="flex gap-1">
                <FaRegStar />

                <FaRegStar />

                <FaRegStar />

                <FaRegStar />
              </div>
            </button>

            <button
              onClick={handlerSelectRating}
              className="border   m-5 px-3 py-2 "
            >
              <div className="flex gap-1">
                <FaRegStar />

                <FaRegStar />

                <FaRegStar />

                <FaRegStar />

                <FaRegStar />
              </div>
            </button>
          </div>
        </>

        <div className="container mx-[180px] justify-center items-center">
          <div class="flex flex-wrap gap-3">
            {productList.map((itet, id) => (
              <div
                key={id}
                className="lg:w-1/4 md:w-1/2 p-4 w-full rounded border shadow-lg bg-blue-300"
              >
                <a class="block relative h-48 rounded overflow-hidden ">
                  <img
                    className="object-cover object-center w-full h-full block"
                    src={itet.thumbnail}
                    alt=""
                  />
                </a>
                <div className="bg-blue-100 shadow-lg border rounded-md mt-3 ">
                <p className="text-gray-500 text-s font-semibold mx-4 my-1">
                  {itet.title}
                </p>
                <p className="text-sm mx-5">Ratings: {itet.rating}</p>
                <p className="text-sm mx-5 mb-2">Price: $ {itet.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    </>
  );
};

export default Gallery;
