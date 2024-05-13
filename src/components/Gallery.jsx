import React from "react";
import { useEffect, useState } from "react";

const Gallery = () => {
  const [prodData, setProdData] = useState([]);
  const [listCategory, setListCategory] = useState([]);
  const [productList, setProductList] = useState([]);
  const [productName, setProductName] = useState("");

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
    console.log(productName);
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
                    class="lg:w-1/4 md:w-1/2 p-4 w-full rounded border shadow-lg "
                  >
                    <a class="block relative h-48 rounded overflow-hidden ">
                      <img
                        alt="ecommerce"
                        class="object-cover object-center w-full h-full block"
                        src={item.image}
                      />
                    </a>
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
                );
              })}
            </div>
          </div>
        </section>
      </>

      <>
        <div class="flex  flex-wrap gap-3 mt-5">
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
        <div className=" flex  shadow-lg gap-3 mt-3">
          {productList.map((itet, id) => (
            <div key={id} className="border-4 mb-4">
              <img src={itet.thumbnail} alt="" />
              <p>Title: {itet.title}</p>
              <p>Ratings: {itet.rating}</p>
              <p>Price: {itet.price}</p>
            </div>
          ))}
        </div>
      </>
    </>
  );
};

export default Gallery;
