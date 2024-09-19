"use client";
import React, { useState } from "react";

function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    material: "",
    labor: "",
    workArea: "",
    location: "",
    timeline: "",
    date: "",
    specificMessage: "",
    budget: "",
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    grade: "",
    length: "",
    height: "",
    breadth: "",
  });

  const [refId, setRefId] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  // Generate unique reference ID
  const generateRefId = () => {
    return "REF-" + Math.random().toString(36).substr(2, 9).toUpperCase();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate a reference ID and show the popup
    setRefId(generateRefId());
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    // Reset form or redirect as necessary
  };
  return (
    <div className="flex flex-col md:flex-row justify-between mx-4 md:mx-10 my-10">
      {/* Left Side - Form */}
      <div className="w-full md:w-1/2 space-y-4">
        {step === 1 && (
          <div>
            <h2 className="text-[18px] tracking-wide uppercase text-[#656565] font-bold mb-4">
              Step 1: Project Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6">
              <input
                type="text"
                name="material"
                placeholder="Material"
                value={formData.material}
                onChange={handleInputChange}
                className="border border-[#dcdcdc] p-2 rounded-md w-full"
              />
              <input
                type="text"
                name="labor"
                placeholder="Labor"
                value={formData.labor}
                onChange={handleInputChange}
                className="border border-[#dcdcdc] p-2 rounded-md w-full"
              />
              <input
                type="number"
                name="workArea"
                placeholder="Work Area (sqft)"
                value={formData.workArea}
                onChange={handleInputChange}
                className="border border-[#dcdcdc] p-2 rounded-md w-full"
              />
              <input
                type="text"
                name="location"
                placeholder="Location"
                value={formData.location}
                onChange={handleInputChange}
                className="border border-[#dcdcdc] p-2 rounded-md w-full"
              />
              <input
                type="text"
                name="timeline"
                placeholder="Timeline"
                value={formData.timeline}
                onChange={handleInputChange}
                className="border border-[#dcdcdc] p-2 rounded-md w-full"
              />
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="border border-[#dcdcdc] p-2 rounded-md w-full"
              />
              <textarea
                name="specificMessage"
                placeholder="Specific Message"
                value={formData.specificMessage}
                onChange={handleInputChange}
                className="border border-[#dcdcdc] p-2 rounded-md w-full"
              />
            </div>
            <br />
            <div className="flex justify-center space-x-8 mt-4">
              <button className="btn-primary text-[#c2c2c2]" disabled>
                Previous
              </button>
              <button onClick={nextStep} className="btn-primary">
                Next
              </button>
            </div>
          </div>
        )}
        {step === 2 && (
          <div>
            <h2 className="text-[18px] tracking-wide uppercase text-[#656565] font-bold mb-4">
              Step 2: Personal Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                className="border border-[#dcdcdc] p-2 rounded-md w-full"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="border border-[#dcdcdc] p-2 rounded-md w-full"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                className="border border-[#dcdcdc] p-2 rounded-md w-full"
              />
              <select
                name="serviceType"
                value={formData.serviceType}
                onChange={handleInputChange}
                className="border border-[#dcdcdc] p-2 rounded-md w-full"
              >
                <option value="">Select Service Type</option>
                <option value="construction">Construction</option>
                <option value="renovation">Renovation</option>
              </select>
            </div>
            <br />
            <div className="flex justify-center space-x-8 mt-4">
              <button onClick={prevStep} className="btn-primary">
                Previous
              </button>
              <button onClick={nextStep} className="btn-primary">
                Next
              </button>
            </div>
          </div>
        )}
        {step === 3 && (
          <div>
            <h2 className="text-[18px] tracking-wide uppercase text-[#656565]font-bold mb-4">
              Step 3: Project Dimensions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4  px-6">
              <input
                type="text"
                name="grade"
                placeholder="Grade"
                value={formData.grade}
                onChange={handleInputChange}
                className="border border-[#dcdcdc] p-2 rounded-md w-full"
              />
              <input
                type="text"
                name="length"
                placeholder="Length"
                value={formData.length}
                onChange={handleInputChange}
                className="border border-[#dcdcdc] p-2 rounded-md w-full"
              />
              <input
                type="text"
                name="height"
                placeholder="Height"
                value={formData.height}
                onChange={handleInputChange}
                className="border border-[#dcdcdc] p-2 rounded-md w-full"
              />
              <input
                type="text"
                name="breadth"
                placeholder="Breadth"
                value={formData.breadth}
                onChange={handleInputChange}
                className="border border-[#dcdcdc] p-2 rounded-md w-full"
              />
            </div>
            <br />
            <div className="flex justify-center space-x-8 mt-4">
              <button onClick={prevStep} className="btn-primary">
                Previous
              </button>
              <button onClick={handleSubmit} className="btn-primary">
                Submit
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Right Side - Preview */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0 p-8 border-l-2 border-[#ebebeb] bg-[#f8f8f8da] ">
        <h2 className="text-xl font-bold mb-4">Preview</h2>
        <table className="table-auto w-full">
          <tbody>
            <tr className="border border-[#e1e1e1]">
              <td className="font-semibold p-2">Material:</td>
              <td>{formData.material}</td>
            </tr>
            <tr className="border border-[#e1e1e1]">
              <td className="font-semibold p-2">Labor:</td>
              <td>{formData.labor}</td>
            </tr>
            <tr className="border border-[#e1e1e1]">
              <td className="font-semibold p-2">Work Area (sqft):</td>
              <td>{formData.workArea}</td>
            </tr>
            <tr className="border border-[#e1e1e1]">
              <td className="font-semibold p-2">Location:</td>
              <td>{formData.location}</td>
            </tr>
            <tr className="border border-[#e1e1e1]">
              <td className="font-semibold p-2">Timeline:</td>
              <td>{formData.timeline}</td>
            </tr>
            <tr className="border border-[#e1e1e1]">
              <td className="font-semibold p-2">Date:</td>
              <td>{formData.date}</td>
            </tr>
            <tr className="border border-[#e1e1e1]">
              <td className="font-semibold p-2">Specific Message:</td>
              <td>{formData.specificMessage}</td>
            </tr>
            <tr className="border border-[#e1e1e1]">
              <td className="font-semibold p-2">Name:</td>
              <td>{formData.name}</td>
            </tr>
            <tr className="border border-[#e1e1e1]">
              <td className="font-semibold p-2">Email:</td>
              <td>{formData.email}</td>
            </tr>
            <tr className="border border-[#e1e1e1]">
              <td className="font-semibold p-2">Phone:</td>
              <td>{formData.phone}</td>
            </tr>
            <tr className="border border-[#e1e1e1]">
              <td className="font-semibold p-2">Service Type:</td>
              <td>{formData.serviceType}</td>
            </tr>
            <tr className="border border-[#e1e1e1]">
              <td className="font-semibold p-2">Grade:</td>
              <td>{formData.grade}</td>
            </tr>
            <tr className="border border-[#e1e1e1]">
              <td className="font-semibold p-2">Length:</td>
              <td>{formData.length}</td>
            </tr>
            <tr className="border border-[#e1e1e1]">
              <td className="font-semibold p-2">Height:</td>
              <td>{formData.height}</td>
            </tr>
            <tr className="border border-[#e1e1e1]">
              <td className="font-semibold p-2">Breadth:</td>
              <td>{formData.breadth}</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-bold mb-4">Submission Successful!</h2>
            <p>
              Your reference ID is:{" "}
              <span className="font-semibold">{refId}</span>
            </p>
            <p className="mt-2">
              Please wait, our team will reach out in less than 24 hours.
            </p>
            <button
              onClick={closePopup}
              className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MultiStepForm;
