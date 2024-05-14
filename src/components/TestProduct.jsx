import React, { useEffect, useState } from "react";
import Layout from '../components/Layout'

const TestProduct = () => {
  const [testProd, setTestProd] = useState([]);

  useEffect(() => {
    const url = "https://api.escuelajs.co/api/v1/products";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        // console.log(json);
        setTestProd(json);
        //console.log(prodData);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);
  return (


    <Layout>

    <div>
    <h1 className="text-center font-semibold text-2xl px-3 py-2">Test Cart</h1>
    </div>
    <div className=" flex flex-wrap gap-4 justify-center mt-7">
      {testProd.map((item, id) => (
        <div key={id}  className="lg:w-1/4 md:w-1/2 p-4 w-full rounded border shadow-lg ">
          <img
            alt="ecommerce"
            className="object-cover object-center w-[%] block"
            src={item.category.image}
          />

          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
              {item.title}
            </h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">
              {item.category.name}
            </h2>
            <p className="mt-1">$ {item.price}</p>
          </div>
        </div>
      ))}
    </div>
    </Layout>
  );
};

export default TestProduct;
