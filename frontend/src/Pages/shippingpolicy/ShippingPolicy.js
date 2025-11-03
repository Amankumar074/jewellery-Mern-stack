import React from "react";

const ShippingPolicy = () => {
  return (
    <div className="min-h-screen py-12 px-3 sm:px-6 lg:px-20 bg-gray-50">
      <div className="max-w-4xl mx-auto sm:p-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
          Shipping Policy
        </h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Order Processing</h2>
          <p className="text-gray-700 mb-2 leading-relaxed text-justify">
            At <strong>BSJ SILVER</strong>, we strive to process all orders within 1-3 business days. Once your order is processed, you will receive a confirmation email with your order details and tracking information.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Shipping Methods & Delivery Time</h2>
          <p className="text-gray-700 mb-2 leading-relaxed text-justify">
            We offer secure shipping for all our jewellery products. Delivery time depends on your location and chosen shipping method:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-2 space-y-1">
            <li>Standard Shipping: 5-7 business days</li>
            <li>Express Shipping: 2-3 business days</li>
            <li>International Shipping: 7-14 business days (varies by country)</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Shipping Charges</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            Shipping charges are calculated based on the weight of the order and the delivery location. Free standard shipping is available for orders above ₹5,000. All charges will be displayed at checkout.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Order Tracking</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            Once your order is shipped, you will receive a tracking number via email. You can track your shipment directly through the courier’s website for real-time updates.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Shipping Restrictions</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            We currently ship to most cities within India and select international locations. Certain remote or restricted areas may have longer delivery times or may not be serviceable. Please contact us for any specific shipping queries.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Lost or Damaged Items</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            <strong>BSJ SILVER</strong> ensures all packages are securely packed. In the rare event your jewellery is lost or arrives damaged, please contact us immediately at{" "}
            <a href="mailto:info@bsjsilver.com" className="text-blue-600 hover:underline">
              info@bsjsilver.com
            </a>
            . We will assist in resolving the issue promptly.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Contact Us</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            For any questions about shipping, delivery times, or costs, please reach out to our customer support team at{" "}
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

export default ShippingPolicy;