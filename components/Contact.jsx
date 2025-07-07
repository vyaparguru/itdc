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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.0004265987864!2d75.49099489999999!3d31.441655199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a4d99379c1fb9%3A0x26e64d1197b3f51!2sJalandhar%20Institute%20Of%20Drivers%20Training!5e0!3m2!1sen!2sin!4v1751543862310!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;