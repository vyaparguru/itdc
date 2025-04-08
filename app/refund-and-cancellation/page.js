"use client";

const RefundAndCancellation = () => {
  return (
    <div className="min-h-screen bg-white py-10 px-0 md:px-4">
      <div className="max-w-6xl mx-auto p-6 md:p-10 mt-16 md:mt-20">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6">
          <span className="text-[#800000]">Refund</span> & Cancellation Policy
        </h1>
        <p className="text-gray-700 mb-4">
          At Jalandhar Institute of Driving and Training Centre, we follow a strict set policy for all our courses. Please review the following terms before enrolling.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-6 mb-2">1. No Refund Policy</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>No refunds will be provided under any circumstances once the course fee is paid.</li>
          <li>Fees are non-refundable and non-transferable, regardless of the reason for cancellation or non-attendance.</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-6 mb-2">2. No Transfer or Rescheduling</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Once enrolled in a batch, students cannot transfer their enrollment to another person or reschedule to a different batch.</li>
          <li>If a student misses training sessions or fails to complete the course, the fee will be forfeited.</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-6 mb-2">3. Course Cancellation by the Institute</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>If the institute cancels a course due to unforeseen circumstances, students will have the option to:</li>
          <ul className="list-disc list-inside ml-6">
            <li>Reschedule to a future batch without additional charges.</li>
            <li>Receive a full refund of the paid fees.</li>
          </ul>
        </ul>

        <p className="text-gray-700 mb-4">
          By enrolling in our courses, students acknowledge and agree to these terms.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-6 mb-2">Contact Us</h2>
        <p className="text-gray-700 mb-2">
          For any queries, please contact us at:
        </p>
        <p className="text-gray-700">
          📍 Jalandhar Institute of Driving and Training Centre, Dharam Complex, G.T. Road, Kartarpur, Dist. Jalandhar - 144801 (Punjab)
        </p>
        <p className="text-gray-700">📞 9056500975, 9056500976, 9056500977</p>
        <p className="text-gray-700">📧 hiadshoshiarpur@gmail.com</p>
      </div>
    </div>
  );
};

export default RefundAndCancellation;