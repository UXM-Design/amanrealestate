import React from "react";
import Image from "next/image";
import ContactForm from "../ui/contactForm/page";

const ContactPage = () => {
  return (
    <>
      <section className="w-full h-screen overflow-hidden flex justify-end items-center md:px-16 px-2 bg-white relative  mt-4 contact-section">
        <div className="absolute md:top-[15%] top-0 md:left-[15%] left-0 w-full h-full">
          <ContactForm />
        </div>
        <div className="w-[600px] h-[350px] md:mr-20 mr-0 md:flex hidden justify-center items-center border-2 border-yellow-200 rounded-2xl ">
          <div className="contact-pic"></div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
