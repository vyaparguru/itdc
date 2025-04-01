import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="max-w-full mx-auto px-6 md:px-12 lg:px-48 py-16 mt-16 md:mt-20 bg-white">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 leading-snug mb-5">
        Gallery
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8 md:gap-12 mt-10">
        {["/gallery/g1.jpg", "/gallery/g2.jpg", "/gallery/g3.jpg", "/gallery/g4.jpg", "/gallery/g5.jpg", "/gallery/g6.jpg", "/gallery/g7.jpg", "/gallery/g8.jpg"].map((src, index) => (
          <div key={index} className="shadow-lg rounded-lg overflow-hidden">
            <Image
              src={src} 
              alt={`Gallery image ${index + 1}`}
              width={200}
              height={100}
              className="w-full h-[40vh] object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
