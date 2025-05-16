'use client'
import { useState, useEffect } from 'react'
import InputField from './InputField'
import SelectField from './SelectField'
import FileUpload from './FileUpload'

const statesList = [/* Add all 28 states */ "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"]
const qualifications = ["5th standard", "8th standard", "10th standard", "12th standard", "graduate", "others"]
const licenseCategories = ["LMV", "HMV", "LTV", "HTV"]
const authorities = ["RTO", "DTO", "SDM"]

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '', fatherName: '', dob: '', mobile: '', email: '', qualification: '', address: '',
    state: '', city: '', pincode: '', district: '', aadhar: '', dlNumber: '', licenseCategory: '',
    licenseIssue: '', licenseExpiry: '', authority: '', date: '', place: ''
  })
  const [images, setImages] = useState({
    profile: null, aadharFront: null, aadharBack: null, dlFront: null, dlBack: null
  })
  const [profilePreview, setProfilePreview] = useState(null)

  useEffect(() => {
    setFormData(prev => ({ ...prev, date: new Date().toISOString().split('T')[0] }))
  }, [])

  const handleInputChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleImageChange = e => {
    const { name, files } = e.target
    if (files[0]) {
      const imageURL = URL.createObjectURL(files[0])
      if (name === 'profile') setProfilePreview(imageURL)
      setImages({ ...images, [name]: files[0] })
    }
  }

  const validate = () => {
    const errors = []
    if (!/^[a-zA-Z ]+$/.test(formData.name)) errors.push('Invalid Name')
    if (!/^[a-zA-Z ]+$/.test(formData.fatherName)) errors.push('Invalid Father Name')
    if (!/^\d{10}$/.test(formData.mobile)) errors.push('Invalid Mobile Number')
    if (!formData.email.includes('@') || !formData.email.includes('.com')) errors.push('Invalid Email')
    if (!/^\d{6}$/.test(formData.pincode)) errors.push('Invalid Pincode')
    if (!/^\d{12}$/.test(formData.aadhar)) errors.push('Invalid Aadhar Number')
    if (!formData.dlNumber.match(/^[0-9]+$/)) errors.push('Invalid Driving License Number')
    return errors
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const errors = validate()
    if (errors.length) return alert(errors.join(', '))

        
        const form = new FormData()
        Object.entries(formData).forEach(([key, val]) => form.append(key, val))
        Object.entries(images).forEach(([key, val]) => form.append(key, val))
        
        console.log('Form Data:', formData)
        const res = await fetch('/api/register', { method: 'POST', body: form })
    const data = await res.json()
    console.log(res, data)
    if (data.success) {
        alert('Registration successful!')
      window.location.href = '/'
    } else {
      alert('Registration failed. Please try again.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow p-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div className="col-span-full text-right">
        {profilePreview ? (
          <img src={profilePreview} alt="profile" className="w-24 h-24 object-cover rounded-full inline-block" />
        ) : (
          <div className="w-24 h-24 border border-gray-300 rounded-full inline-block"></div>
        )}
      </div>

      <InputField label="Name" name="name" value={formData.name} onChange={handleInputChange} />
      <InputField label="Father's Name" name="fatherName" value={formData.fatherName} onChange={handleInputChange} />
      <InputField label="Date of Birth" type="date" name="dob" value={formData.dob} onChange={handleInputChange} />
      <InputField label="Mobile No." name="mobile" value={formData.mobile} onChange={handleInputChange} />
      <InputField label="Email" name="email" value={formData.email} onChange={handleInputChange} />
      <SelectField label="Qualification" name="qualification" value={formData.qualification} onChange={handleInputChange} options={qualifications} />
      <FileUpload label="Passport Size Photo" name="profile" onChange={handleImageChange} />
      <InputField label="Address" name="address" value={formData.address} onChange={handleInputChange} />
      <SelectField label="State" name="state" value={formData.state} onChange={handleInputChange} options={statesList} />
      {formData.state && <InputField label="City" name="city" value={formData.city} onChange={handleInputChange} />}
      <InputField label="Pincode" name="pincode" value={formData.pincode} onChange={handleInputChange} />
      <InputField label="District" name="district" value={formData.district} onChange={handleInputChange} />
      <InputField label="Aadhar Number" name="aadhar" value={formData.aadhar} onChange={handleInputChange} />
      <FileUpload label="Aadhar Front Side" name="aadharFront" onChange={handleImageChange} />
      <FileUpload label="Aadhar Back Side" name="aadharBack" onChange={handleImageChange} />
      <InputField label="Driving License Number" name="dlNumber" value={formData.dlNumber} onChange={handleInputChange} />
      <SelectField label="License Category" name="licenseCategory" value={formData.licenseCategory} onChange={handleInputChange} options={licenseCategories} />
      <InputField label="License Issue Date" type="date" name="licenseIssue" value={formData.licenseIssue} onChange={handleInputChange} />
      <InputField label="License Expiry Date" type="date" name="licenseExpiry" value={formData.licenseExpiry} onChange={handleInputChange} />
      <SelectField label="Issuing Authority" name="authority" value={formData.authority} onChange={handleInputChange} options={authorities} />
      <FileUpload label="DL Front Side" name="dlFront" onChange={handleImageChange} />
      <FileUpload label="DL Back Side" name="dlBack" onChange={handleImageChange} />
      <InputField label="Date" type="date" name="date" value={formData.date} onChange={() => {}} />
      <InputField label="Place" name="place" value={formData.place} onChange={handleInputChange} />

      <div className="col-span-full mt-4">
        <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded w-full">
          Submit
        </button>
        {/* <p className="text-center text-gray-700 mt-2">
          Upon successful registration, you will be redirected to the online payment screen to pay ₹430.
        </p> */}
      </div>
    </form>
  )
}
