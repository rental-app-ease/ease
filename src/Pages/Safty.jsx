import React from 'react'

export const Safty = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 bg-gray-50">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        Safety Guidelines for Online Apartment Rental
      </h1>
      
      <div className="text-center mb-8">
        <p className="text-lg text-gray-600">
          Your safety is our top priority. Please review these important guidelines before proceeding with any online rental transactions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            🔍 Before Viewing an Apartment
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="block text-gray-600">Research the property and neighborhood thoroughly</span>
            </li>
            <li className="flex items-start">
              <span className="block text-gray-600">Verify the landlord's identity and credentials</span>
            </li>
            <li className="flex items-start">
              <span className="block text-gray-600">Check if the listing price matches local market rates</span>
            </li>
            <li className="flex items-start">
              <span className="block text-gray-600">Be suspicious of prices that seem too good to be true</span>
            </li>
            <li className="flex items-start">
              <span className="block text-gray-600">Use Google Street View to confirm the property exists</span>
            </li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            👥 Meeting and Viewing
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="block text-gray-600">Never go to a viewing alone - bring a friend or family member</span>
            </li>
            <li className="flex items-start">
              <span className="block text-gray-600">Meet during daylight hours</span>
            </li>
            <li className="flex items-start">
              <span className="block text-gray-600">Share your location with a trusted contact</span>
            </li>
            <li className="flex items-start">
              <span className="block text-gray-600">View the property only with licensed agents or verified landlords</span>
            </li>
            <li className="flex items-start">
              <span className="block text-gray-600">Trust your instincts - if something feels wrong, leave</span>
            </li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            💰 Financial Safety
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="block text-gray-600">Never wire money or send cash to unknown parties</span>
            </li>
            <li className="flex items-start">
              <span className="block text-gray-600">Don't provide financial information via email</span>
            </li>
            <li className="flex items-start">
              <span className="block text-gray-600">Avoid paying security deposits before viewing the property</span>
            </li>
            <li className="flex items-start">
              <span className="block text-gray-600">Get all agreements in writing</span>
            </li>
            <li className="flex items-start">
              <span className="block text-gray-600">Keep copies of all documents and correspondence</span>
            </li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            🚩 Red Flags to Watch For
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="block text-gray-600">Landlord refuses to meet in person</span>
            </li>
            <li className="flex items-start">
              <span className="block text-gray-600">Pressure to wire money immediately</span>
            </li>
            <li className="flex items-start">
              <span className="block text-gray-600">Unable to view the property interior</span>
            </li>
            <li className="flex items-start">
              <span className="block text-gray-600">No proper lease agreement</span>
            </li>
            <li className="flex items-start">
              <span className="block text-gray-600">Requests for unnecessary personal information</span>
            </li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            📱 Online Security
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="block text-gray-600">Use secure and trusted payment methods</span>
            </li>
            <li className="flex items-start">
              <span className="block text-gray-600">Never share login credentials</span>
            </li>
            <li className="flex items-start">
              <span className="block text-gray-600">Be careful with personal information online</span>
            </li>
            <li className="flex items-start">
              <span className="block text-gray-600">Verify emails and websites are legitimate</span>
            </li>
            <li className="flex items-start">
              <span className="block text-gray-600">Report suspicious activity immediately</span>
            </li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            📄 Documentation & Legal Aspects
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="block text-gray-600">Always read the lease agreement thoroughly</span>
            </li>
            <li className="flex items-start">
              <span className="block text-gray-600">Keep copies of all signed documents</span>
            </li>
            <li className="flex items-start">
              <span className="block text-gray-600">Take photos of the property before moving in</span>
            </li>
            <li className="flex items-start">
              <span className="block text-gray-600">Understand your rights as a tenant</span>
            </li>
            <li className="flex items-start">
              <span className="block text-gray-600">Verify all terms and conditions are in writing</span>
            </li>
          </ul>
        </section>
      </div>

      <div className="mt-12 text-center bg-blue-50 p-6 rounded-lg">
        <p className="text-gray-700 mb-2">
          If you encounter any suspicious activity or feel unsafe, please contact local authorities immediately.
        </p>
        <p className="text-gray-800 font-semibold">
          Emergency: 911 | Consumer Protection: 1-800-XXX-XXXX
        </p>
      </div>
    </div>
  );
};
