'use client';

import FormField from '@/components/reusable/FormField';
import React, { useState } from 'react';

const stateCityData = {
  "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore"],
  "Arunachal Pradesh": ["Itanagar", "Tawang", "Ziro", "Pasighat"],
  "Assam": ["Guwahati", "Dibrugarh", "Silchar", "Jorhat"],
  "Bihar": ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur"],
  "Chhattisgarh": ["Raipur", "Bilaspur", "Durg", "Korba"],
  "Goa": ["Panaji", "Margao", "Vasco da Gama", "Mapusa"],
  "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot"],
  "Haryana": ["Gurgaon", "Faridabad", "Panipat", "Ambala"],
  "Himachal Pradesh": ["Shimla", "Manali", "Dharamshala", "Kullu"],
  "Jharkhand": ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro"],
  "Karnataka": ["Bengaluru", "Mysuru", "Mangaluru", "Hubli"],
  "Kerala": ["Thiruvananthapuram", "Kochi", "Kozhikode", "Kollam"],
  "Madhya Pradesh": ["Bhopal", "Indore", "Gwalior", "Jabalpur"],
  "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik"],
  "Manipur": ["Imphal", "Churachandpur", "Thoubal", "Ukhrul"],
  "Meghalaya": ["Shillong", "Tura", "Jowai", "Nongpoh"],
  "Mizoram": ["Aizawl", "Lunglei", "Champhai", "Serchhip"],
  "Nagaland": ["Kohima", "Dimapur", "Mokokchung", "Tuensang"],
  "Odisha": ["Bhubaneswar", "Cuttack", "Rourkela", "Puri"],
  "Punjab": ["Chandigarh", "Ludhiana", "Amritsar", "Jalandhar"],
  "Rajasthan": ["Jaipur", "Jodhpur", "Udaipur", "Ajmer"],
  "Sikkim": ["Gangtok", "Namchi", "Pelling", "Ravangla"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli"],
  "Telangana": ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar"],
  "Tripura": ["Agartala", "Udaipur", "Dharmanagar", "Kailashahar"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi", "Agra"],
  "Uttarakhand": ["Dehradun", "Haridwar", "Nainital", "Rishikesh"],
  "West Bengal": ["Kolkata", "Darjeeling", "Siliguri", "Howrah"],
  "Andaman and Nicobar Islands": ["Port Blair"],
  "Chandigarh": ["Chandigarh"],
  "Dadra and Nagar Haveli and Daman and Diu": ["Silvassa", "Daman", "Diu"],
  "Delhi": ["New Delhi"],
  "Lakshadweep": ["Kavaratti"],
  "Puducherry": ["Puducherry"],
  "Ladakh": ["Leh", "Kargil"],
  "Jammu and Kashmir": ["Srinagar", "Jammu", "Anantnag", "Baramulla"],
};

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

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setProfilePhoto(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleAadhaarFrontUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setAadhaarFront(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleAadhaarBackUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setAadhaarBack(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleLicenseFrontUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setLicenseFront(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleLicenseBackUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setLicenseBack(reader.result);
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField label="Name" placeholder="Enter your name" />
            <FormField label="Father's Name" placeholder="Enter your father’s name" />
          </div>

          {/* Row 2: DOB & Mobile Number */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField label="Date of Birth" type="date" />
            <FormField label="Mobile Number" placeholder="Enter your mobile number" />
          </div>

          {/* Row 3: Email & Qualification */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          </div>

          {/* Row 4: Passport Photo */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              label="Passport Size Photo"
              type="file"
              accept="image/*"
              onChange={handlePhotoUpload}
            />
          </div>
        </form>
      </div>

      {/* New Section */}
      <div className="mt-12 grid grid-cols-1 gap-6 text-black">
        {/* Row 1: Address & State */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <FormField label="Address" placeholder="Enter your address" />
          </div>
          <FormField
            label="State"
            type="select"
            value={selectedState}
            onChange={handleStateChange}
            options={Object.keys(stateCityData)}
          />
        </div>

        {/* Row 2: City, Pincode & District */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FormField
            label="City"
            type="select"
            options={cities}
            placeholder="Select City"
          />
          <FormField
            label="Pincode"
            type="text"
            placeholder="Enter your pincode"
          />
          <FormField
            label="District"
            type="text"
            placeholder="Enter your district"
          />
        </div>

        {/* Row 3: Aadhaar Card Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FormField
            label="Aadhaar Card Number"
            type="text"
            placeholder="Enter your Aadhaar number"
          />
          <div>
            <FormField
              label="Aadhaar Front Side"
              type="file"
              accept="image/*"
              onChange={handleAadhaarFrontUpload}
            />
            <div className="mt-2 w-60 md:w-80 h-44 md:h-48 border-2 border-dashed border-gray-300 rounded-lg overflow-hidden">
              {aadhaarFront ? (
                <img src={aadhaarFront} alt="Aadhaar Front" className="w-full h-full object-cover" />
              ) : (
                <span className="text-gray-500 text-sm flex items-center justify-center h-full">
                  Front Preview
                </span>
              )}
            </div>
          </div>
          <div>
            <FormField
              label="Aadhaar Back Side"
              type="file"
              accept="image/*"
              onChange={handleAadhaarBackUpload}
            />
            <div className="mt-2 w-60 md:w-80 h-44 md:h-48 border-2 border-dashed border-gray-300 rounded-lg overflow-hidden">
              {aadhaarBack ? (
                <img src={aadhaarBack} alt="Aadhaar Back" className="w-full h-full object-cover" />
              ) : (
                <span className="text-gray-500 text-sm flex items-center justify-center h-full">
                  Back Preview
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-6 text-black">
        {/* Row 1: Driving License Number & License Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            label="Driving License Number"
            type="text"
            placeholder="Enter your license number"
          />
          <FormField
            label="License Category"
            type="select"
            options={["LMV", "HMV", "LTV", "HTV"]}
          />
        </div>

        {/* Row 2: License Issue Date & Expiry Date */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            label="License Issue Date"
            type="date"
          />
          <FormField
            label="License Expiry Date"
            type="date"
          />
        </div>
        {/* Row 3: Issuing Authority */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            label="Issuing Authority"
            type="select"
            options={["RTO", "DTO", "SDM"]}
          />
        </div>
        {/* Row 4: License Front & Back Pictures */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <FormField
              label="Front picture of Driving License"
              type="file"
              accept="image/*"
              onChange={handleLicenseFrontUpload}
            />
            <div className="mt-2 w-60 md:w-96 h-44 md:h-48 border-2 border-dashed border-gray-300 rounded-lg overflow-hidden">
              {licenseFront ? (
                <img src={licenseFront} alt="License Front" className="w-full h-full object-cover" />
              ) : (
                <span className="text-gray-500 text-sm flex items-center justify-center h-full">
                  Front Preview
                </span>
              )}
            </div>
          </div>
          <div>
            <FormField
              label="Back picture of Driving License"
              type="file"
              accept="image/*"
              onChange={handleLicenseBackUpload}
            />
            <div className="mt-2 w-60 md:w-96 h-44 md:h-48 border-2 border-dashed border-gray-300 rounded-lg overflow-hidden">
              {licenseBack ? (
                <img src={licenseBack} alt="License Back" className="w-full h-full object-cover" />
              ) : (
                <span className="text-gray-500 text-sm flex items-center justify-center h-full">
                  Back Preview
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Row 5: Date & Place */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            label="Date"
            type="date"
            value={new Date().toISOString().split('T')[0]}
            readOnly
          />
          <FormField
            label="Place"
            type="text"
            placeholder="Enter your place"
          />
        </div>
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