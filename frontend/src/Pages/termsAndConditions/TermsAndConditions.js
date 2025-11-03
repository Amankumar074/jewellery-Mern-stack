import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen py-12 px-3 m:px-6 lg:px-20 bg-gray-50">
      <div className="max-w-4xl mx-auto sm:p-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
          Terms & Conditions
        </h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Introduction</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            Welcome to <strong>BSJ SILVER</strong>. By using our website and purchasing our products, you agree to these Terms & Conditions. Please read carefully. If you do not agree with any part of these terms, please refrain from using our services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Products & Availability</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            We make every effort to display accurate product information, including images, descriptions, and prices. However, product availability, pricing, or images may change without notice. We reserve the right to correct any errors or omissions at any time.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Orders & Payment</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            All orders are subject to acceptance and availability. Payments must be completed using the provided payment methods. By placing an order, you confirm that you are authorized to use the chosen payment method and provide accurate information. Any fraudulent activity may result in cancellation of the order and termination of your account.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Shipping & Delivery</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            We strive to deliver products within the estimated delivery time. However, delays may occur due to unforeseen circumstances or shipping carrier issues. <strong>BSJ SILVER</strong> is not liable for delays caused by third-party delivery services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Returns & Exchanges</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            Returns or exchanges are accepted only for eligible products within the specified timeframe. Products must be unused, in original packaging, and accompanied by proof of purchase. Customized or personalized items cannot be returned or exchanged.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Intellectual Property</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            All content on this website, including images, descriptions, logos, and designs, is owned by or licensed to <strong>BSJ SILVER</strong>. You may not reproduce, distribute, or modify any content without prior written permission.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Limitation of Liability</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            <strong>BSJ SILVER</strong> shall not be liable for any indirect, incidental, or consequential damages arising from the use of our website or products. Use of our services is at your own risk.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Governing Law</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            These Terms & Conditions are governed by the laws of [Your Country/State]. Any disputes arising from these terms will be resolved under the jurisdiction of courts located in [Your City/State].
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Changes to Terms</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            We may update these Terms & Conditions periodically. Updates will be posted on this page with a revised date. Continued use of our website constitutes acceptance of the updated terms.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Contact Us</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            For any questions regarding these Terms & Conditions, please contact us at{" "}
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

export default TermsAndConditions;
