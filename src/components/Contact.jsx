import React, { useState } from "react";

import axios from "axios";
const Contact = () => {
  const url = "http://localhost:5000/";
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });
  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }
  function submit(e){
    e.preventDefault();
    console.log("click");
    axios.post(url,{
      name:data.name,
      email:data.email,
      message:data.message
    })
    .then(res=>{
      console.log(res.data);
      setData({
        name:"",
        email:"",
        message:""
      })
    })
  }
  return (
    <section class="text-gray-400 bg-gray-1000 body-font relative">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-12">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            Contact Us
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
        </div>
        <div class="lg:w-1/2 md:w-2/3 mx-auto">
          <form class="flex flex-wrap -m-2" onSubmit={(e)=>submit(e)}>
            <div class="p-2 w-1/2">
              <div class="relative">
                <label for="name" class="leading-7 text-sm text-gray-400">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  onChange={(e) => handle(e)}
                  value={data.name}
                  class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-lime-500 focus:bg-gray-900 focus:ring-2 focus:ring-lime-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div class="p-2 w-1/2">
              <div class="relative">
                <label for="email" class="leading-7 text-sm text-gray-400">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={(e) => handle(e)}
                  value={data.email}
                  class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-lime-500 focus:bg-gray-900 focus:ring-2 focus:ring-lime-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div class="p-2 w-full">
              <div class="relative">
                <label for="message" class="leading-7 text-sm text-gray-400">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  onChange={(e) => handle(e)}
                  value={data.message}
                  class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-lime-500 focus:bg-gray-900 focus:ring-2 focus:ring-lime-500 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div class="p-2 w-full">
              <button class="flex mx-auto text-white bg-lime-500 border-0 py-2 px-8 focus:outline-none hover:bg-lime-500 rounded text-lg">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
