'use client'
import { useRef, useState } from 'react'

export default function RegistrationForm() {
  const [showModal, setShowModal] = useState(false)
  const [uniqueId, setUniqueId] = useState('')
  const formRef = useRef(null)

  const [status, setStatus] = useState('')
  const [profilePhoto, setProfilePhoto] = useState(null)
  const [fieldErrors, setFieldErrors] = useState({})
  const [fileErrors, setFileErrors] = useState({
    passportPhoto: '',
    aadharFront: '',
    aadharBack: '',
    licenseFront: '',
    licenseBack: '',
  })
  const handlePayment = async() => {
    if (!uniqueId) return
    await loadRazorpayScript()
  
  const res = await fetch('/api/create-order', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      amount: 88500,
      receipt: uniqueId,
    }),
  });
  const data = await res.json();
  if (!data.orderId) {
    setStatus('Failed to initiate payment');
    return;
  }
    const options = {
    key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'rzp_live_CG5HThTQPJqpX4',
    amount: 88500,
    currency: 'INR',
    name: 'Jal Driving Centre',
    description: `Registration Payment (ID: ${uniqueId})`,
    order_id: data.orderId, 
    handler: function (response) {
      window.location.href = `/payment-confirmation?uid=${uniqueId}`;
    },
    prefill: {},
    notes: { uniqueId },
    theme: { color: '#800000' },
  };
  const rzp = new window.Razorpay(options);
  rzp.open();
};

  const loadRazorpayScript = () => {
    if (window.Razorpay) return Promise.resolve()
    return new Promise((resolve) => {
      const script = document.createElement('script')
      script.src = 'https://checkout.razorpay.com/v1/checkout.js'
      script.onload = resolve
      document.body.appendChild(script)
    })
  }

  const handleProfilePhotoChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => setProfilePhoto(reader.result)
      reader.readAsDataURL(file)
    }
  }
  const isValidJpg = (file) => {
    if (!file) return true
    const validTypes = ['image/jpeg', 'image/jpg']
    const fileType = file.type
    const fileName = file.name.toLowerCase()
    return (
      validTypes.includes(fileType) ||
      fileName.endsWith('.jpg') ||
      fileName.endsWith('.jpeg')
    )
  }

  const handleFileChange = (e) => {
    const { name, files } = e.target
    let error = ''
    if (files && files[0] && !isValidJpg(files[0])) {
      error = 'Only JPG/JPEG files are allowed'
    }
    setFileErrors((prev) => ({ ...prev, [name]: error }))

    if (name === 'passportPhoto' && files && files[0] && !error) {
      const reader = new FileReader()
      reader.onload = () => setProfilePhoto(reader.result)
      reader.readAsDataURL(files[0])
    } else if (name === 'passportPhoto' && (!files || !files[0] || error)) {
      setProfilePhoto(null)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('')
    setFieldErrors({})

    const form = e.target
    const requiredFields = [
      'name', 'fathersName', 'dob', 'mobile', 'email', 'qualification',
      'passportPhoto', 'address', 'state', 'city', 'pincode', 'district',
      'aadharNumber', 'licenseNumber', 'date', 
    ]

    let errors = {}

    for (let field of requiredFields) {
      const input = form.elements[field]
      if (!input || (input.type === 'file' ? !input.files[0] : !input.value.trim())) {
        errors[field] = 'This field is required'
      }
    }

    const fileFields = [
      'passportPhoto', 'aadharFront', 'aadharBack', 'licenseFront', 'licenseBack'
    ]
    let newFileErrors = { ...fileErrors }
    for (let field of fileFields) {
      const input = form.elements[field]
      if (input && input.files[0]) {
        if (!isValidJpg(input.files[0])) {
          errors[field] = 'Only JPG/JPEG files are allowed'
          newFileErrors[field] = 'Only JPG/JPEG files are allowed'
        } else {
          newFileErrors[field] = ''
        }
      }
    }
    setFileErrors(newFileErrors)

    const name = form.elements['name'].value.trim()
    if (name && !/^[A-Za-z\s]+$/.test(name)) {
      errors['name'] = 'Name must contain only letters and spaces'
    }

    const fathersName = form.elements['fathersName'].value.trim()
    if (fathersName && !/^[A-Za-z\s]+$/.test(fathersName)) {
      errors['fathersName'] = "Father's Name must contain only letters and spaces"
    }

    const email = form.elements['email'].value.trim()
    if (email && (!email.includes('@') || !email.endsWith('.com'))) {
      errors['email'] = 'Email must contain "@" and end with ".com"'
    }

    const mobile = form.elements['mobile'].value.trim()
    if (mobile && !/^\d{10}$/.test(mobile)) {
      errors['mobile'] = 'Mobile number must be exactly 10 digits'
    }

    const aadhar = form.elements['aadharNumber'].value.trim()
    if (aadhar && !/^\d{12}$/.test(aadhar)) {
      errors['aadharNumber'] = 'Aadhar number must be exactly 12 digits'
    }

    const pincode = form.elements['pincode'].value.trim()
    if (pincode && !/^\d{6}$/.test(pincode)) {
      errors['pincode'] = 'Pincode must be exactly 6 digits'
    }

    const errorCount = Object.keys(errors).length
    if (errorCount > 0) {
      if (errorCount > 4) {
        setStatus('Please fill in all the fields')
        setFieldErrors({})
      } else {
        setStatus('Please correct the errors')
        setFieldErrors(errors)
      }
      return
    }

    setStatus('Submitting...')
    const formData = new FormData(form)

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        body: formData,
      })

      const data = await res.json()
      if (data.success && data.uniqueId) {
        setStatus('')
        setUniqueId(data.uniqueId)
        setShowModal(true)
        formRef.current.reset()
        setProfilePhoto(null)
        setFieldErrors({})
        setFileErrors({
          passportPhoto: '',
          aadharFront: '',
          aadharBack: '',
          licenseFront: '',
          licenseBack: '',
        })
        setStatus('Form submitted successfully!')
      } else {
        setStatus('Failed to submit form.')
      }
    } catch (err) {
      setStatus('Server error.')
    }
  }

  return (
    <div className="max-w-screen bg-gray-100 flex items-center justify-center px-4 py-40">
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
            <h2 className="text-2xl font-bold mb-4 text-[#800000]">Kindly make payment for registration</h2>
            <p className="mb-2 text-gray-900">Application would be void without receipt of payment!</p>
            <p className="mb-4 font-semibold text-gray-900">Your Unique ID: <span className="text-blue-700">{uniqueId}</span></p>
            <button
              className="bg-[#800000] text-white px-4 py-2 rounded mb-2 w-full"
              onClick={
                handlePayment()
              }
            >
              Make Payment (₹885)
            </button>
            {/* <button
              className="mt-2 text-gray-600 underline"
              onClick={() => setShowModal(false)}
            >
              Close
            </button> */}
          </div>
        </div>
      )}
      <form
      ref={formRef}
        onSubmit={handleSubmit}
        className="w-full max-w-5xl text-black bg-white p-8 shadow-md rounded"
        autoComplete="off"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 leading-snug mb-5"><span className='text-[#800000]'>Registration</span> <span>Form</span></h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-black font-semibold">Name<span className="text-red-600">*</span></label>
            <input name="name" className="border border-gray-600 p-2 w-full" type="text" />
            {fieldErrors.name && (
              <p className="text-red-600 text-sm mt-1">{fieldErrors.name}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-black font-semibold">Father's Name<span className="text-red-600">*</span></label>
            <input name="fathersName" className="border border-gray-600 p-2 w-full" type="text" />
            {fieldErrors.fathersName && (
              <p className="text-red-600 text-sm mt-1">{fieldErrors.fathersName}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-black font-semibold">Date of Birth<span className="text-red-600">*</span></label>
            <input name="dob" className="border border-gray-600 p-2 w-full" type="date" />
          </div>

          <div>
            <label className="block text-gray-black font-semibold">Mobile No.<span className="text-red-600">*</span></label>
            <input name="mobile" className="border border-gray-600 p-2 w-full" type="text" />
            {fieldErrors.mobile && (
              <p className="text-red-600 text-sm mt-1">{fieldErrors.mobile}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-black font-semibold">Email<span className="text-red-600">*</span></label>
            <input name="email" className="border border-gray-600 p-2 w-full" type="text" />
            {fieldErrors.email && (
              <p className="text-red-600 text-sm mt-1">{fieldErrors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-black font-semibold">Qualification<span className="text-red-600">*</span></label>
            <select name="qualification" className="border border-gray-600 p-2 w-full">
              <option value="">Select</option>
              <option>5th standard</option>
              <option>8th standard</option>
              <option>10th standard</option>
              <option>12th standard</option>
              <option>Graduate</option>
              <option>Others</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-black font-semibold">Passport Size Photo<span className="text-red-600">*</span></label>
            <input
              type="file"
              name="passportPhoto"
              accept=".jpg,.jpeg,image/jpeg"
              onChange={handleFileChange}
              className="border border-gray-600 p-2 w-full"
            />
            {fileErrors.passportPhoto && (
              <p className="text-red-600 text-sm mt-1">{fileErrors.passportPhoto}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-black font-semibold">Profile Photo Preview</label>
            <div className="border border-gray-600 p-2 w-full h-32 flex items-center justify-center">
              {profilePhoto ? (
                <img src={profilePhoto} alt="Profile Preview" className="h-full" />
              ) : (
                <span>No photo uploaded</span>
              )}
            </div>
          </div>

          <div className="md:col-span-2">
            <label className="block text-gray-black font-semibold">Address<span className="text-red-600">*</span></label>
            <input name="address" className="border border-gray-600 p-2 w-full" type="text" />
          </div>

          <div>
            <label className="block text-gray-black font-semibold">State<span className="text-red-600">*</span></label>
            <select name="state" className="border border-gray-600 p-2 w-full">
              <option value="">Select</option>
              <option>Andaman and Nicobar Islands</option>
              <option>Andhra Pradesh</option>
              <option>Arunachal Pradesh</option>
              <option>Assam</option>
              <option>Bihar</option>
              <option>Chandigarh</option>
              <option>Chhattisgarh</option>
              <option>Dadra and Nagar Haveli and Daman and Diu</option>
              <option>Delhi</option>
              <option>Goa</option>
              <option>Gujarat</option>
              <option>Haryana</option>
              <option>Himachal Pradesh</option>
              <option>Jammu and Kashmir</option>
              <option>Jharkhand</option>
              <option>Karnataka</option>
              <option>Kerala</option>
              <option>Ladakh</option>
              <option>Lakshadweep</option>
              <option>Madhya Pradesh</option>
              <option>Maharashtra</option>
              <option>Manipur</option>
              <option>Meghalaya</option>
              <option>Mizoram</option>
              <option>Nagaland</option>
              <option>Odisha</option>
              <option>Puducherry</option>
              <option>Punjab</option>
              <option>Rajasthan</option>
              <option>Sikkim</option>
              <option>Tamil Nadu</option>
              <option>Telangana</option>
              <option>Tripura</option>
              <option>Uttar Pradesh</option>
              <option>Uttarakhand</option>
              <option>West Bengal</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-black font-semibold">City<span className="text-red-600">*</span></label>
            <input name="city" className="border border-gray-600 p-2 w-full" type="text" />
          </div>

          <div>
            <label className="block text-gray-black font-semibold">Pincode<span className="text-red-600">*</span></label>
            <input name="pincode" className="border border-gray-600 p-2 w-full" type="text" />
            {fieldErrors.pincode && (
              <p className="text-red-600 text-sm mt-1">{fieldErrors.pincode}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-black font-semibold">District<span className="text-red-600">*</span></label>
            <input name="district" className="border border-gray-600 p-2 w-full" type="text" />
          </div>

          <div>
            <label className="block text-gray-black font-semibold">Aadhar Card Number<span className="text-red-600">*</span></label>
            <input name="aadharNumber" className="border border-gray-600 p-2 w-full" type="text" />
            {fieldErrors.aadharNumber && (
              <p className="text-red-600 text-sm mt-1">{fieldErrors.aadharNumber}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-black font-semibold">Aadhar Front Side</label>
            <input
              type="file"
              name="aadharFront"
              accept=".jpg,.jpeg,image/jpeg"
              onChange={handleFileChange}
              className="border border-gray-600 p-2 w-full"
            />
            {fileErrors.aadharFront && (
              <p className="text-red-600 text-sm mt-1">{fileErrors.aadharFront}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-black font-semibold">Aadhar Back Side</label>
            <input
              type="file"
              name="aadharBack"
              accept=".jpg,.jpeg,image/jpeg"
              onChange={handleFileChange}
              className="border border-gray-600 p-2 w-full"
            />
            {fileErrors.aadharBack && (
              <p className="text-red-600 text-sm mt-1">{fileErrors.aadharBack}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-black font-semibold">Driving License Number<span className="text-red-600">*</span></label>
            <input name="licenseNumber" className="border border-gray-600 p-2 w-full" type="text" />
          </div>

          <div>
            <label className="block text-gray-black font-semibold">License Category</label>
            <select name="licenseCategory" className="border border-gray-600 p-2 w-full">
              <option value="">Select</option>
              <option>LMV</option>
              <option>HMV</option>
              <option>LTV</option>
              <option>HTV</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-black font-semibold">License Issue Date</label>
            <input name="licenseIssueDate" className="border border-gray-600 p-2 w-full" type="date" />
          </div>
          <div>
            <label className="block text-gray-black font-semibold">License Expiry Date</label>
            <input name="licenseExpiryDate" className="border border-gray-600 p-2 w-full" type="date" />
          </div>

          <div>
            <label className="block text-gray-black font-semibold">Issuing Authority</label>
            <select name="issuingAuthority" className="border border-gray-600 p-2 w-full">
              <option value="">Select</option>
              <option>RTO</option>
              <option>DTO</option>
              <option>SDM</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-black font-semibold">Driving License Front Side</label>
            <input
              type="file"
              name="licenseFront"
              accept=".jpg,.jpeg,image/jpeg"
              onChange={handleFileChange}
              className="border border-gray-600 p-2 w-full"
            />
            {fileErrors.licenseFront && (
              <p className="text-red-600 text-sm mt-1">{fileErrors.licenseFront}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-black font-semibold">Driving License Back Side</label>
            <input
              type="file"
              name="licenseBack"
              accept=".jpg,.jpeg,image/jpeg"
              onChange={handleFileChange}
              className="border border-gray-600 p-2 w-full"
            />
            {fileErrors.licenseBack && (
              <p className="text-red-600 text-sm mt-1">{fileErrors.licenseBack}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-black font-semibold">Date</label>
            <input
              name="date"
              className="border border-gray-600 p-2 w-full"
              type="text"
              defaultValue={
                (() => {
                  const d = new Date()
                  const day = String(d.getDate()).padStart(2, '0')
                  const month = String(d.getMonth() + 1).padStart(2, '0')
                  const year = d.getFullYear()
                  return `${day}-${month}-${year}`
                })()
              }
            />
          </div>

          <div>
            <label className="block text-gray-black font-semibold">Place</label>
            <input name="place" className="border border-gray-600 p-2 w-full" type="text" />
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 bg-[#800000] cursor-pointer text-white px-4 py-2 rounded flex mx-auto"
        >
          Submit
        </button>
        {/* <p className="text-center text-gray-700 mt-2">
          Upon successful registration, you will be redirected to the online payment screen to pay ₹885.
        </p> */}
        {status && <p className="mt-4 text-md font-medium text-red-600">{status}</p>}
      </form>
    </div>
  )
}