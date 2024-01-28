import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/logo.png";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <footer className="pt-3 px:1 w-auto sm:px-5">
        <section className="w-full bg-white">
          <div className="px-8 py-12 mx-auto max-w-7xl">
            <div className="grid grid-cols-2 gap-10 mb-3 md:grid-cols-3 lg:grid-cols-12 lg:gap-20">
              <div className="col-span-3">
                <Link href="/" legacyBehavior>
                  <a>
                    <div className="flex items-center">
                      <Image
                        src={logo}
                        alt="BunnieABC Logo"
                        width={100}
                        height={100}
                        className="rounded-full"
                      />
                    </div>
                  </a>
                </Link>
                <p className="font-bold text-lg">Bunnie-LLC</p>
                <small>Garden Estates, Valley View</small>
              </div>

              <nav className="col-span-2 md:col-span-1 lg:col-span-2  ">
                <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">
                  Product
                </p>
                <a
                  href="#"
                  className="flex mb-3 text-sm font-medium text-gray-500 transition hover:text-gray-700 md:mb-2 hover:text-primary"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="flex mb-3 text-sm font-medium text-gray-500 transition hover:text-gray-700 md:mb-2 hover:text-primary"
                >
                  Integrations
                </a>
                <a
                  href="#"
                  className="flex mb-3 text-sm font-medium text-gray-500 transition hover:text-gray-700 md:mb-2 hover:text-primary"
                >
                  Documentation
                </a>
                <a
                  href="#"
                  className="flex mb-3 text-sm font-medium text-gray-500 transition hover:text-gray-700 md:mb-2 hover:text-primary"
                >
                  FAQs
                </a>
                <a
                  href="#"
                  className="flex mb-3 text-sm font-medium text-gray-500 transition hover:text-gray-700 md:mb-2 hover:text-primary"
                >
                  Pricing
                </a>
              </nav>
              <nav className="col-span-2 md:col-span-1 lg:col-span-2 ">
                <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">
                  About
                </p>
                <a
                  href="#"
                  className="flex mb-3 text-sm font-medium text-gray-500 transition hover:text-gray-700 md:mb-2 hover:text-primary"
                >
                  Our Story
                </a>
                <a
                  href="#"
                  className="flex mb-3 text-sm font-medium text-gray-500 transition hover:text-gray-700 md:mb-2 hover:text-primary"
                >
                  Company
                </a>
                <a
                  href="#"
                  className="flex mb-3 text-sm font-medium text-gray-500 transition hover:text-gray-700 md:mb-2 hover:text-primary"
                >
                  Privacy
                </a>
                <a
                  href="#"
                  className="flex mb-3 text-sm font-medium text-gray-500 transition hover:text-gray-700 md:mb-2 hover:text-primary"
                >
                  Blog
                </a>
              </nav>
              <nav className="col-span-2 md:col-span-1 lg:col-span-2">
                <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">
                  Contact
                </p>
                <a
                  href="#"
                  className="flex mb-3 text-sm font-medium text-gray-500 transition hover:text-gray-700 md:mb-2 hover:text-primary"
                >
                  Advertising
                </a>
                <a
                  href="#"
                  className="flex mb-3 text-sm font-medium text-gray-500 transition hover:text-gray-700 md:mb-2 hover:text-primary"
                >
                  Email
                </a>
                <a
                  href="#"
                  className="flex mb-3 text-sm font-medium text-gray-500 transition hover:text-gray-700 md:mb-2 hover:text-primary"
                >
                  Partners
                </a>
                <a
                  href="#"
                  className="flex mb-3 text-sm font-medium text-gray-500 transition hover:text-gray-700 md:mb-2 hover:text-primary"
                >
                  Jobs
                </a>
              </nav>

              <div className="col-span-3">
                <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">
                  SUBSCRIBE TO OUR NEWSLETTER
                </p>
                <form action="#" className="mb-2">
                  <div className="relative flex items-center overflow-hidden border border-gray-200 rounded-lg">
                    <input
                      className="w-full px-3 py-2 text-base leading-normal transition duration-150 ease-in-out bg-white appearance-none focus:outline-none"
                      type="email"
                      placeholder="Enter your email"
                    />
                    <button
                      className="px-3 py-2 text-xs  font-medium text-center text-white no-underline bg-black border-2 border-blue-200 rounded-md"
                      type="submit"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className=" flex justify-center items-center my-3">
              <a
                href="#"
                target="_blank"
                className="text-blue-500 hover:text-blue-700 mx-2"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="#"
                target="_blank"
                className="text-blue-500 hover:text-blue-700 mx-2"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="#"
                target="_blank"
                className="text-gray-800 hover:text-gray-600 mx-2"
              >
                <FaGithub size={24} />
              </a>
            </div>
            <div className="flex flex-col items-start justify-between pt-10 mt-5 border-t border-gray-100 md:flex-row md:items-center">
              <p className="mb-6 text-sm text-left text-gray-600 md:mb-0">
                © 2020~2024 BunnieABC formerly Bunniestore.KE
              </p>
              <div className="flex items-start justify-start space-x-6 mx-auto">
                <a
                  href="#_"
                  className="text-sm text-gray-600 transition hover:text-primary"
                >
                  Terms
                </a>
                <a
                  href="#_"
                  className="text-sm text-gray-600 transition hover:text-primary"
                >
                  Privacy
                </a>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default Footer;
