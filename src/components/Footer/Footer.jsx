import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 font-dm bg-[#0D0D0D] text-gray-400">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Top Section */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-syne font-bold text-lime-400">
              SkyMart
            </h2>

            <p className="mt-4 font-dm text-sm leading-6">
              Discover premium products at unbeatable prices. Fast
              delivery, secure payments, and an exceptional shopping
              experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="transition hover:text-lime-400">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-lime-400">
                  Products
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-lime-400">
                  Categories
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-lime-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Support
            </h3>

            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="transition hover:text-lime-400">
                  Help Center
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-lime-400">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-lime-400">
                  Terms & Conditions
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-lime-400">
                  Shipping Info
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Follow Us
            </h3>

            <p className="mb-5 text-sm">
              Stay connected with us for updates, offers, and new arrivals.
            </p>

            <div className="flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700 transition hover:border-lime-400 hover:bg-lime-400 hover:text-black"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700 transition hover:border-lime-400 hover:bg-lime-400 hover:text-black"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700 transition hover:border-lime-400 hover:bg-lime-400 hover:text-black"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700 transition hover:border-lime-400 hover:bg-lime-400 hover:text-black"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-neutral-800 pt-6 text-center">
          <h2 className="font-syne text-2xl font-bold text-lime-400">
            SkyMart
          </h2>

          <p className="mt-3 text-sm text-gray-500">
            © {new Date().getFullYear()} SkyMart. Crafted with ❤️ using React,
            Tailwind CSS & Redux Toolkit.
          </p>
        </div>
      </div>
    </footer>
  );
}