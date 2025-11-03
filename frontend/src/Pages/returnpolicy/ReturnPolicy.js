import React from "react";

const ReturnPolicy = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-20 bg-gray-50">
      <div className="max-w-4xl mx-auto sm:p-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
          Return & Refund Policy
        </h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Eligibility for Returns</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            At <strong>BSJ SILVER</strong>, we want you to be fully satisfied with your purchase. Returns are accepted within 7 days of delivery for products that are:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-2 space-y-1">
            <li>Unused, unworn, and in the same condition as received.</li>
            <li>In the original packaging with all tags intact.</li>
            <li>Accompanied by the original invoice or proof of purchase.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Non-Returnable Items</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            Certain items are not eligible for return due to hygiene or custom-made nature, including:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-2 space-y-1">
            <li>Customized or engraved jewellery pieces.</li>
            <li>Products that have been altered, worn, or damaged after delivery.</li>
            <li>Gift cards or vouchers.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Return Process</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            To initiate a return, please contact our customer support team at{" "}
            <a href="mailto:info@bsjsilver.com" className="text-blue-600 hover:underline">
              info@bsjsilver.com
            </a>{" "}
            within 7 days of delivery. Include your order number and reason for return. Our team will guide you with the return shipping process.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Refunds</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            Once your return is received and inspected, we will notify you of the approval or rejection of your refund. Approved refunds will be processed to your original payment method within 5-7 business days. Shipping costs are non-refundable.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Exchanges</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            Exchanges are possible if you want a different size or style, subject to stock availability. Contact our support team at{" "}
            <a href="mailto:info@bsjsilver.com" className="text-blue-600 hover:underline">
              info@bsjsilver.com
            </a>{" "}
            to request an exchange.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Damaged or Defective Items</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            If your jewellery arrives damaged or defective, please contact us immediately with photos of the issue. We will provide a replacement or full refund based on your preference.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Contact Us</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            For any questions or assistance regarding returns, exchanges, or refunds, contact us at{" "}
            <a href="mailto:info@bsjsilver.com" className="text-blue-600 hover:underline">
              info@bsjsilver.com
            </a>
            .
          </p>
        </section>

        <p className="text-gray-500 text-sm text-center mt-8">
          © {new Date().getFullYear()} <strong>BSJ SILVER</strong>. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default ReturnPolicy;