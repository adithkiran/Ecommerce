import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function Products({ HandlerAddCart }) {
  const [prodData, setProdData] = useState([]);
  const [nameSubmit, setNameSubmit] = useState({
    firstname: "",
    lastname: "",
  });
  const [flagheader, setFlagHeader] = useState(false)

  function handleChange(e) {
   
    console.log(e.target.value)
    setNameSubmit({...nameSubmit, [e.target.name] : e.target.value})
      // setNameSubmit({ firstname: "",
      //                 lastname: "",})
    
   
  }

  function handleSubmit(e){
    e.preventDefault();
    setFlagHeader(true)
    setNameSubmit({ firstname: "",
                      lastname: "",})
    
    
  }

  useEffect(() => {
    const url = "https://fakestoreapi.com/products";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
       // console.log(json);
        setProdData(json);
        //console.log(prodData);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    <div>

    {flagheader ? <p>Thank you registering {nameSubmit.firstname} {nameSubmit.lastname}</p> : "" }
      
    </div>
    <div className=" flex flex-col items-center">

      <div className="">
        <label>
          <span className="font-medium">First Name :</span>
          <input
            className="border p-2 mb-2 rounded-md shadow-lg"
            type="text" name="firstname" vlaue={nameSubmit.firstname} onChange={handleChange}
            placeholder="Enter your First name"
          />
        </label>
        <br />
        <label>
          <span className="font-medium">Last Name :</span>
          <input
            className="border p-2 mb-2 rounded-md shadow-lg"
            type="text" name="lastname" vlaue={nameSubmit.lastname} onChange={handleChange}
            placeholder="Enter your First name"
          />
        </label>
        <br />

        <button onClick={handleSubmit} className="m-5 ml-0 border p-2 rounded-md shadow-lg px-5 py-2 font-medium bg-green-200 cursor-pointer">
          Submit
        </button>
      </div>

      <div className="container m-auto  w-[70%]">
        <section>
          <div className=" grid grid-cols-3 gap-5">
            {prodData.map((item) => (
              <ProductCard
                HandlerAddCart={() => HandlerAddCart(item)}
                title={item.title}
                price={item.price}
                image={item.image}
                category={item.category}
                key={item.id}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
    </>
  );
}

export default Products;
