import React from "react";

const WarrantyPolicy = () => {
  return (
    <div className="min-h-screen py-12 px-3 sm:px-6 lg:px-20 bg-gray-50">
      <div className="max-w-4xl mx-auto sm:p-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
          Warranty Policy
        </h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Our Commitment</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            At <strong>BSJ SILVER</strong>, we stand behind the quality of our jewellery. We provide a limited warranty to ensure that your purchase is free from manufacturing defects and workmanship issues.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Warranty Coverage</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            Our warranty covers:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-2 space-y-1">
            <li>Defects in materials or workmanship under normal use.</li>
            <li>Loose stones or broken clasps due to manufacturing issues.</li>
            <li>Discoloration or tarnishing of metal within the warranty period.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Warranty Period</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            The warranty period is valid for 6 months from the date of purchase. Proof of purchase (invoice or receipt) is required to avail of warranty services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Exclusions</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            The warranty does not cover:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-2 space-y-1">
            <li>Normal wear and tear, scratches, or minor imperfections.</li>
            <li>Damage caused by misuse, accidents, or improper care.</li>
            <li>Loss of jewellery or gemstones.</li>
            <li>Customised or engraved items.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Claiming Warranty</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            To claim warranty service, please contact our customer support at{" "}
            <a href="mailto:info@bsjsilver.com" className="text-blue-600 hover:underline">
              info@bsjsilver.com
            </a>{" "}
            with your order details and photos of the issue. Our team will guide you through the process.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Repair or Replacement</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            After inspection, if the defect is covered under warranty, we will either repair the item or provide a replacement of equal value. Shipping charges for warranty service may apply.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Contact Us</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            For any questions or warranty service requests, please reach out to us at{" "}
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

export default WarrantyPolicy;
