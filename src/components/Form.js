import React, { useState } from "react";
import PropTypes from "prop-types";
export const Form = (props) => {
  const handleUpClick = () => {
    console.log("handle Uppercase Click");
    console.log("After changing2: ", text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnChange = (e) => {
    setText(e.target.value);
    console.log("After changing: ", text);
  };

  // const [text, setText] = useState("Enter your text here...");
  const [text, setText] = useState();
  return (
    <>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Enter your text here
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              {props.heading}
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-full">
                <div className="relative">
                  <div className="form-floating">
                    <textarea
                      className=" p-3 w-full h-60 border-2 rounded-md border-black flex mx-auto"
                      placeholder="Enter text here..."
                      value={text}
                      onChange={handleOnChange}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  onClick={handleUpClick}
                  className="flex text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg"
                >
                  Convert to uppercase
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
Form.propTypes = {
  heading: PropTypes.string.isRequired,
};
