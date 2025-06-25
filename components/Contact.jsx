import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactPage = () => {
  return (
    <section className="max-w-full mx-auto px-6 md:px-12 lg:px-48 py-20 md:py-40 mt-16 md:mt-20 bg-white">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 leading-snug mb-6">
        Contact<span className="text-[#800000]"> Us</span>
      </h1>

      {/* Contact Info Boxes */}
      <div className="grid gap-8 md:grid-cols-3 mt-8">
        {/* Address Box */}
        <div className="flex flex-col items-start bg-gray-100 p-6 rounded-lg shadow-lg">
          <FaMapMarkerAlt className="text-2xl text-[#800000] mb-3" />
          <h2 className="text-lg font-semibold text-gray-700">Address</h2>
          <p className="text-gray-600 text-start">
            Jalandhar Institute of Drivers Training, Dharam Complex, G.T. Road, Kartarpur, Jalandhar, 144801
          </p>
        </div>

        {/* Phone Box */}
        <div className="flex flex-col items-start bg-gray-100 p-6 rounded-lg shadow-lg">
          <FaPhoneAlt className="text-2xl text-[#800000] mb-3" />
          <h2 className="text-lg font-semibold text-gray-700">Phone</h2>
          <p className="text-gray-600">+91 90560-66373 
          <br />
          +91 90560-66473
</p>
        </div>

        {/* Email Box */}
        <div className="flex flex-col items-start bg-gray-100 p-6 rounded-lg shadow-lg">
          <FaEnvelope className="text-2xl text-[#800000] mb-3" />
          <h2 className="text-lg font-semibold text-gray-700">Email</h2>
          <p className="text-gray-600">info@itdcpunjab.com</p>
        </div>
      </div>

      {/* Google Map */}
      <div className="mt-12">
        <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps?q=Hoshiarpur+Institute+Of+Automotive+and+Driving+Skills,+Red+Cross+Building,+Bazar+Vakilan,+Hoshiarpur,+Punjab+146001&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;