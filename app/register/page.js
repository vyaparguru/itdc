"use client"

import { useState } from "react";
import FormInput from "@/components/reusable/FormInput";
import FormSelect from "@/components/reusable/FormSelect";
import FormFileUpload from "@/components/reusable/FormFileUpload";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    fathersName: "",
    dob: "",
    mobileNo: "",
    email: "",
    qualification: "",
    address: "",
    state: "",
    city: "",
    pincode: "",
    district: "",
    adharNo: "",
    drivingLicenseNo: "",
    licenseCategory: "",
    licenseIssueDate: "",
    licenseExpiryDate: "",
    issuingAuthority: "",
    place: "",
  });

  const [filePreviews, setFilePreviews] = useState({
    profilePhoto: "",
    adharFront: "",
    adharBack: "",
    drivingLicenseFront: "",
    drivingLicenseBack: "",
  });

  const [files, setFiles] = useState({
    profilePhoto: null,
    adharFront: null,
    adharBack: null,
    drivingLicenseFront: null,
    drivingLicenseBack: null,
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (field, e) => {
    const file = e.target.files[0];
    if (file) {
      setFiles((prev) => ({
        ...prev,
        [field]: file,
      }));

      const reader = new FileReader();
      reader.onloadend = () => {
        setFilePreviews((prev) => ({
          ...prev,
          [field]: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.fathersName || !formData.dob || !formData.mobileNo || !formData.email) {
      setMessage("Please fill in all the required fields.");
      return;
    }

    if (formData.mobileNo.length !== 10) {
      setMessage("Mobile number must be 10 digits.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    if (formData.adharNo.length !== 12) {
      setMessage("Adhar card number must be 12 digits.");
      return;
    }

    const formPayload = new FormData();
    Object.keys(files).forEach((key) => {
      if (files[key]) {
        formPayload.append(key, files[key]);
      }
    });

    try {
      // Upload images to Cloudinary
      const uploadPromises = Object.keys(files).map(async (key) => {
        if (files[key]) {
          const formData = new FormData();
          formData.append("file", files[key]);
          formData.append("upload_preset", "your_preset_here"); // Add your Cloudinary upload preset

          const res = await fetch("/api/upload", {
            method: "POST",
            body: formData,
          });
          const { url } = await res.json();
          formPayload.append(`${key}Url`, url);
        }
      });

      await Promise.all(uploadPromises);

      formPayload.append("data", JSON.stringify(formData));

      // Send form data via email
      const emailRes = await fetch("/api/send-email", {
        method: "POST",
        body: JSON.stringify({
          data: { ...formData, fileUrls: formPayload },
        }),
      });

      const result = await emailRes.json();
      if (result.success) {
        setMessage("Thank you for registering. We will get back to you shortly.");
        setFormData({
          name: "",
          fathersName: "",
          dob: "",
          mobileNo: "",
          email: "",
          qualification: "",
          address: "",
          state: "",
          city: "",
          pincode: "",
          district: "",
          adharNo: "",
          drivingLicenseNo: "",
          licenseCategory: "",
          licenseIssueDate: "",
          licenseExpiryDate: "",
          issuingAuthority: "",
          place: "",
        });
        setFilePreviews({
          profilePhoto: "",
          adharFront: "",
          adharBack: "",
          drivingLicenseFront: "",
          drivingLicenseBack: "",
        });
        setFiles({
          profilePhoto: null,
          adharFront: null,
          adharBack: null,
          drivingLicenseFront: null,
          drivingLicenseBack: null,
        });
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 py-40">
      <h1 className="text-3xl font-semibold mb-4 text-center">Registration Form: Refresher Course for HMV Drivers</h1>
      {message && <div className="mb-4 p-3 bg-yellow-200 text-center rounded">{message}</div>}

      <form onSubmit={handleSubmit}>
        <FormInput label="Name" value={formData.name} setValue={handleChange} name="name" />
        <FormInput label="Father's Name" value={formData.fathersName} setValue={handleChange} name="fathersName" />
        <FormInput label="Date of Birth" type="date" value={formData.dob} setValue={handleChange} name="dob" />
        <FormInput label="Mobile Number" value={formData.mobileNo} setValue={handleChange} name="mobileNo" />
        <FormInput label="Email" type="email" value={formData.email} setValue={handleChange} name="email" />
        <FormSelect
          label="Qualification"
          value={formData.qualification}
          setValue={handleChange}
          name="qualification"
          options={["5th Standard", "8th Standard", "10th Standard", "12th Standard", "Graduate", "Others"]}
        />
        <FormFileUpload label="Profile Photo" file={files.profilePhoto} setFile={(e) => handleFileChange("profilePhoto", e)} preview={filePreviews.profilePhoto} setPreview={setFilePreviews} />
        <FormInput label="Address" value={formData.address} setValue={handleChange} name="address" />
        <FormSelect
          label="State"
          value={formData.state}
          setValue={handleChange}
          name="state"
          options={["State 1", "State 2", "State 3", "State 4"]} // Add all 28 states here
        />
        <FormInput label="City" value={formData.city} setValue={handleChange} name="city" />
        <FormInput label="Pincode" value={formData.pincode} setValue={handleChange} name="pincode" />
        <FormInput label="District" value={formData.district} setValue={handleChange} name="district" />
        <FormInput label="Adhar Card Number" value={formData.adharNo} setValue={handleChange} name="adharNo" />
        <FormFileUpload label="Adhar Front Side Photo" file={files.adharFront} setFile={(e) => handleFileChange("adharFront", e)} preview={filePreviews.adharFront} />
        <FormFileUpload label="Adhar Back Side Photo" file={files.adharBack} setFile={(e) => handleFileChange("adharBack", e)} preview={filePreviews.adharBack} />
        <FormInput label="Driving License Number" value={formData.drivingLicenseNo} setValue={handleChange} name="drivingLicenseNo" />
        <FormSelect
          label="License Category"
          value={formData.licenseCategory}
          setValue={handleChange}
          name="licenseCategory"
          options={["LMV", "HMV", "LTV", "HTV"]}
        />
        <FormInput label="License Issue Date" type="date" value={formData.licenseIssueDate} setValue={handleChange} name="licenseIssueDate" />
        <FormInput label="License Expiry Date" type="date" value={formData.licenseExpiryDate} setValue={handleChange} name="licenseExpiryDate" />
        <FormSelect
          label="Issuing Authority"
          value={formData.issuingAuthority}
          setValue={handleChange}
          name="issuingAuthority"
          options={["RTO", "DTO", "SDM"]}
        />
        <FormFileUpload label="Front Side of License" file={files.drivingLicenseFront} setFile={(e) => handleFileChange("drivingLicenseFront", e)} preview={filePreviews.drivingLicenseFront} />
        <FormFileUpload label="Back Side of License" file={files.drivingLicenseBack} setFile={(e) => handleFileChange("drivingLicenseBack", e)} preview={filePreviews.drivingLicenseBack} />
        <FormInput label="Date" type="text" value={new Date().toLocaleDateString()} disabled />
        <FormInput label="Place" value={formData.place} setValue={handleChange} name="place" />

        <div className="mt-4 text-center">
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Submit</button>
        </div>
      </form>
    </div>
  );
}
