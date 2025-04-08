import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="max-w-full mx-auto px-6 md:px-12 lg:px-48 py-16 mt-16 md:mt-20 bg-white">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 leading-snug mb-5">
         About <span className="text-red-600">Us</span>
      </h2>

      {/* Paragraph (2nd line) */}
      <p className="text-gray-700 text-left mt-4 max-w-full mx-auto">
        With the sincere efforts, far-sighted vision and progressive mission of Sh Bhagwant Mann – the worthy Chief Minister of Punjab; “HOSHIAPUR INSTITUTE OF AUTOMOTIVE & DRIVING SKILLS, HOSHIARPUR”, A joint venture of Punjab Government and Red Cross Hoshiarpur has been established by “Hoshiarpur Automotive & Driving Skills Society” with the aims to upgrade the skills of the youth, start various courses in driving, automotive and other related fields.
      </p>

      {/* Image on Left, Text on Right (3rd line) */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mt-8">
        {/* Left Image with Caption */}
        <div className="md:w-1/3 flex flex-col items-center">
          <div className="shadow-lg rounded-lg overflow-hidden">
            <Image
              src="/about/dc-komal.jpg" // Replace with actual image path
              alt="Leader Image"
              width={400}
              height={300}
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="text-sm text-center text-gray-600 mt-2">
            Mrs. Komal Mittal, IAS <br /> Deputy Commissioner, Hoshiarpur
          </p>
        </div>

        {/* Right Paragraph */}
        <div className="md:w-2/3 text-gray-700 leading-relaxed">
          <p>
            District Red Cross Society Hoshiarpur under the visionary leadership of Mrs Komal Mittal IAS is doing yeoman's service for the needy and the downtrodden. Red Cross is already working on many social welfare projects like free dialysis facility for the needy, fee to poor students, social security to helpless old age people, financial help to meritorious students pursuing professional education, help to poor and needy patients, deformity corrective surgery of poor kids, wheelchairs, tricycles, and other aids to physically challenged. Red Cross is also working for the empowerment of needy women through various vocational and income-generating courses, running a physiotherapy center, creche, homeopathic dispensaries, and a prestigious Sanjhi Rasoi to feed the needy in this city beautiful Hoshiarpur.
          </p>
        </div>
      </div>

      {/* Another Paragraph (4th line) */}
      <p className="text-gray-700 text-left mt-8 max-w-full mx-auto">
        Red Cross has taken a new leap into another area of road safety. Hoshiarpur Institute of Automotive and Skill driving Society was registered under Societies Registration Act (XXI of 1960) and as amended by Punjab Government Act.1957. Institute of Automotive and Driving Skills Hoshiarpur is going to be a milestone for the candidates of Majha and Doaba region especially. This facility is going to be only second in state of Punjab.
      </p>

      {/* Image Grid (5th line) */}
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8 md:gap-12 mt-10">
        {["/about/a1.jpg", "/about/a2.jpg", "/about/a3.jpg", "/about/a4.jpg", "/about/a5.jpg", "/about/a6.jpg", "/about/a7.jpg"].map((src, index) => (
          <div key={index} className="shadow-lg rounded-lg overflow-hidden">
            <Image
              src={src} // Replace with actual image paths
              alt={`Gallery image ${index + 1}`}
              width={150}
              height={40}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
