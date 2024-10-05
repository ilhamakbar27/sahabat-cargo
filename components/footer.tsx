import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-start lg:gap-8">
          <Image
            className="object-cover size-32"
            width={600}
            height={400}
            src={
              "https://utfs.io/f/1T6lrtsFpELwUAqEIw6Y3McOxCBkioa20rvzyTE9Dtb6sfZu"
            }
            alt="Company Logo"
          />

          <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
            <div className="col-span-2">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Reliable Cargo Shipping
                </h2>

                <p className="mt-4 text-gray-500">
                  We ensure your goods are delivered safely and on time to any
                  destination worldwide. Trust us with your logistics.
                </p>
              </div>
            </div>

            <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end">
              <form className="w-full">
                <label htmlFor="UserEmail" className="sr-only">
                  Email
                </label>

                <div className="border border-gray-100 p-2 focus-within:ring sm:flex sm:items-center sm:gap-4">
                  <input
                    type="email"
                    id="UserEmail"
                    placeholder="your-email@example.com"
                    className="w-full border-none focus:border-transparent focus:ring-transparent sm:text-sm"
                  />

                  <button className="mt-1 w-full rounded-lg tracking-wider bg-blue-500 px-6 py-3 text-sm font-bold uppercase text-white transition-none hover:bg-teal-600 sm:mt-0 sm:w-auto sm:shrink-0">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900">Services</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75">
                    International Shipping
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75">
                    Freight Forwarding
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75">
                    Warehousing
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75">
                    Customs Clearance
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75">
                    Cargo Insurance
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900">Company</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75">
                    About Us
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75">
                    Careers
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75">
                    Partners
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900">Support</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75">
                    FAQs
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75">
                    Shipping Guide
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75">
                    Live Chat Support
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75">
                    Track Your Shipment
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900">Legal</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75">
                    Privacy Policy
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75">
                    Terms of Service
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75">
                    Shipping Policies
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75">
                    Insurance Coverage
                  </a>
                </li>
              </ul>
            </div>

            <ul className="col-span-2 flex justify-start gap-6 lg:col-span-5 lg:justify-end">
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75">
                  <span className="sr-only">Facebook</span>

                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75">
                  <span className="sr-only">Instagram</span>

                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427C2.013 14.787 2 14.447 2 11.73v-.08c0-2.643.012-2.987.06-4.043.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C9.935 2.013 10.275 2 12.315 2zm0 1.8c-2.43 0-2.787.011-3.785.057-.915.042-1.41.2-1.744.332-.46.179-.789.394-1.137.742-.348.348-.563.677-.742 1.137-.132.334-.29.829-.332 1.744-.046.998-.057 1.355-.057 3.785s.011 2.787.057 3.785c.042.915.2 1.41.332 1.744.179.46.394.789.742 1.137.348.348.677.563 1.137.742.334.132.829.29 1.744.332.998.046 1.355.057 3.785.057s2.787-.011 3.785-.057c.915-.042 1.41-.2 1.744-.332.46-.179.789-.394 1.137-.742.348-.348.563-.677.742-1.137.132-.334.29-.829.332-1.744.046-.998.057-1.355.057-3.785s-.011-2.787-.057-3.785c-.042-.915-.2-1.41-.332-1.744a3.103 3.103 0 00-.742-1.137 3.103 3.103 0 00-1.137-.742c-.334-.132-.829-.29-1.744-.332-.998-.046-1.355-.057-3.785-.057zm0 5.013a4.501 4.501 0 110 9.002 4.501 4.501 0 010-9.002zm0 1.8a2.701 2.701 0 100 5.402 2.701 2.701 0 000-5.402zm4.703-.532a1.041 1.041 0 11-2.082 0 1.041 1.041 0 012.082 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75">
                  <span className="sr-only">LinkedIn</span>

                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-12 text-sm text-gray-500">
          &copy; 2024 Sahabat Baru Cargo. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
