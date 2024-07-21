import React from "react";

const ContactForm = () => {
  return (
    <>
      <div className="md:w-[650px] w-full h-auto py-6 px-4 bg-white md:rounded-2xl rounded-none md:drop-shadow-lg drop-shadow-none">
        <div className="title py-2">
          <h1 className="text-3xl">Contact Us</h1>
        </div>
        <br />
        <form action="/" method="POST">
          <div className="flex md:flex-row flex-col gap-4 md:flex-nowrap flex-wrap">
            <div className="flex flex-col gap-3">
              <label htmlFor="name" className="text-sm text-gray-600">
                First Name
              </label>
              <input
                type="text"
                name="firstname"
                placeholder="Enter first name"
                autoFocus={false}
                className="py-3 px-3 md:w-[300px] w-full border-b-2 focus:border-b-2"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="name" className="text-sm text-gray-600">
                Last Name
              </label>
              <input
                type="text"
                name="lastname"
                placeholder="Enter last name"
                autoFocus={false}
                className="py-3 px-3 md:w-[300px] w-full border-b-2 focus:border-b-2"
              />
            </div>
          </div>
          <br />
          <div className="flex flex-col gap-3">
            <label htmlFor="name" className="text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              autoFocus={false}
              className="py-3 px-3 w-full border-b-2 focus:border-b-2"
            />
          </div>
          <br />
          <div className="flex flex-col gap-3">
            <label htmlFor="name" className="text-sm text-gray-600">
              Message
            </label>
            <textarea
              className="py-3 px-3 w-full border-b-2 focus:border-b-2"
              name="message"
              id="message"
              placeholder="Enter your message"
              cols={30}
              lang="en"
              rows={1}
            ></textarea>
            <input
              type="submit"
              value="Submit"
              className="text-sm py-3 px-4 w-[160px] text-black bg-yellow-400 cursor-pointer"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
