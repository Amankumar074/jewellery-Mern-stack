import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-20">
      <div className="max-w-4xl mx-auto sm:p-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">
          Privacy Policy
        </h1>

        <p className="text-gray-700 mb-6 leading-relaxed text-justify">
          Your privacy is important to us. This Privacy Policy explains how we
          collect, use, disclose, and safeguard your information when you
          visit our website. Please read this policy carefully to understand
          our views and practices regarding your personal data.
        </p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Information We Collect
          </h2>
          <p className="text-gray-700 mb-2 leading-relaxed text-justify">
            We may collect personal information such as your name, email
            address, phone number, and payment details when you make purchases
            or interact with our website. We also collect non-personal
            information such as browser type, IP address, and browsing
            behavior for analytics and improving our services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            How We Use Your Information
          </h2>
          <p className="text-gray-700 mb-2 leading-relaxed text-justify">
            The information we collect is used to:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-2 space-y-1">
            <li>Process and fulfill your orders.</li>
            <li>Improve our website and services.</li>
            <li>Send updates, offers, and promotional emails.</li>
            <li>Prevent fraudulent activities and ensure security.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Sharing Your Information
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            We do not sell, trade, or rent your personal information to others.
            We may share information with trusted third-party service providers
            to help us operate our website, conduct business, or provide
            services to you, so long as those parties agree to keep this
            information confidential.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Data Security
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            We implement appropriate security measures to protect your personal
            information from unauthorized access, alteration, disclosure, or
            destruction. However, no method of transmission over the Internet or
            electronic storage is 100% secure.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Your Rights
          </h2>
          <p className="text-gray-700 mb-2 leading-relaxed text-justify">
            You have the right to:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-2 space-y-1">
            <li>Access and review your personal information.</li>
            <li>Request corrections to inaccurate data.</li>
            <li>Opt-out of marketing communications at any time.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Updates to this Policy
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated revision date. Please
            check back periodically to stay informed about how we protect your
            information.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Contact Us
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            If you have any questions about this Privacy Policy or the practices
            of this site, please contact us at{" "}
            <a
              href="mailto:info@example.com"
              className="text-blue-600 hover:underline"
            >
              info@example.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
