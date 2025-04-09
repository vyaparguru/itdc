'use client';

import FileUpload from '@/components/reusable/FileUpload';
import FormField from '@/components/reusable/FormField';
import FormRow from '@/components/reusable/FormRow';
import stateCityData from '@/utils/stateCityData';
import React, { useState } from 'react';

const Apply = () => {
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [aadhaarFront, setAadhaarFront] = useState(null);
  const [aadhaarBack, setAadhaarBack] = useState(null);
  const [licenseFront, setLicenseFront] = useState(null);
  const [licenseBack, setLicenseBack] = useState(null);
  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);

  const handleStateChange = (e) => {
    const state = e.target.value;
    setSelectedState(state);
    setCities(stateCityData[state] || []);
  };

  const handleFileUpload = (setter) => (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setter(reader.result);
      reader.readAsDataURL(file);
    }
  };
  
  return (
    <section className="max-w-full mx-auto px-6 md:px-12 lg:px-48 py-16 mt-16 md:mt-20 bg-white">
      {/* Heading */}
      <h1 className="text-left text-3xl md:text-4xl font-extrabold text-[#800000] leading-snug mb-8">
        <span className="text-gray-800">Registration Form:</span> Refresher Course for HMV Drivers
      </h1>

      {/* Form Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Profile Photo Section */}
        <div className="order-1 md:order-2 flex items-center justify-center">
          <div className="w-44 md:w-64 h-52 md:h-64 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center overflow-hidden">
            {profilePhoto ? (
              <img src={profilePhoto} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <span className="text-gray-500">Profile Photo Preview</span>
            )}
          </div>
        </div>

        {/* Left Form */}
        <form className="order-2 md:order-1 grid grid-cols-1 gap-6 text-black">
          {/* Row 1: Name & Father's Name */}
          <FormRow className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField label="Name" placeholder="Enter your name" />
            <FormField label="Father's Name" placeholder="Enter your father’s name" />
          </FormRow>

          {/* Row 2: DOB & Mobile Number */}
          <FormRow className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField label="Date of Birth" type="date" />
            <FormField label="Mobile Number" placeholder="Enter your mobile number" />
          </FormRow>

          {/* Row 3: Email & Qualification */}
          <FormRow className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField label="Email" type="email" placeholder="Enter your email" />
            <FormField
              label="Qualification"
              type="select"
              options={[
                "5th Standard",
                "8th Standard",
                "10th Standard",
                "12th Standard",
                "Graduate",
                "Others",
              ]}
            />
          </FormRow>

          {/* Row 4: Passport Photo */}
          <FormRow columns={1}>
            <FormField
              label="Passport Size Photo"
              type="file"
              accept="image/*"
              onChange={handleFileUpload(setProfilePhoto)}
            />
          </FormRow>
        </form>
      </div>

      {/* New Section */}
      <div className="mt-12 grid grid-cols-1 gap-6 text-black">
        {/* Row 1: Address & State */}
        <FormRow>
          <FormField label="Address" placeholder="Enter your address" />
          <FormField
            label="State"
            type="select"
            value={selectedState}
            onChange={handleStateChange}
            options={Object.keys(stateCityData)}
          />
        </FormRow>

        {/* Row 2: City, Pincode & District */}
        <FormRow columns={3}>
          <FormField label="City" type="select" options={cities} placeholder="Select City" />
          <FormField label="Pincode" type="text" placeholder="Enter your pincode" />
          <FormField label="District" type="text" placeholder="Enter your district" />
        </FormRow>

        {/* Row 3: Aadhaar Card Details */}
        <FormRow columns={3}>
          <FormField label="Aadhaar Card Number" type="text" placeholder="Enter your Aadhaar number" />
          <FileUpload
            label="Aadhaar Front Side"
            onChange={handleFileUpload(setAadhaarFront)}
            preview={aadhaarFront}
          />
          <FileUpload
            label="Aadhaar Back Side"
            onChange={handleFileUpload(setAadhaarBack)}
            preview={aadhaarBack}
          />
        </FormRow>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-6 text-black">
        {/* Row 1: Driving License Number & License Category */}
        <FormRow>
          <FormField label="Driving License Number" type="text" placeholder="Enter your license number"/>
          <FormField label="License Category" type="select" options={["LMV", "HMV", "LTV", "HTV"]} />
        </FormRow>

        {/* Row 2: License Issue Date & Expiry Date */}
        <FormRow>
          <FormField label="License Issue Date" type="date" />
          <FormField label="License Expiry Date" type="date" />
        </FormRow>
        {/* Row 3: Issuing Authority */}
        <FormRow>
          <FormField label="Issuing Authority" type="select" options={["RTO", "DTO", "SDM"]}/>
        </FormRow>
        {/* Row 4: License Front & Back Pictures */}
        <FormRow>
          <FileUpload
            label="Front picture of Driving License"
            onChange={handleFileUpload(setLicenseFront)}
            preview={licenseFront}
          />
          <FileUpload
            label="Back picture of Driving License"
            onChange={handleFileUpload(setLicenseBack)}
            preview={licenseBack}
          />
        </FormRow>

        {/* Row 5: Date & Place */}
        <FormRow>
          <FormField
            label="Date"
            type="date"
            value={new Date().toISOString().split('T')[0]}
            readOnly
          />
          <FormField label="Place" type="text" placeholder="Enter your place" />
        </FormRow>
        <div className="mt-8 text-center">
          <button className="bg-[#800000] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#a00000]">
            Submit
          </button>
          <p className="mt-4 text-sm text-gray-600">
            Upon successful registration, you will be redirected to the online payment screen to pay ₹430.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Apply;