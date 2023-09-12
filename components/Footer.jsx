import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants";
const Footer = () => {
  return (
    <footer className="flex flex-col text-white bg-black border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <img
            src="/assets/logo.png"
            alt="logo"
            width={118}
            height={18}
            className="object-contain invert"
          />
          <p className="text-base text-gray-400">
            Craftsmith 2023 <br />
            All Rights Reserved &copy;
          </p>
        </div>

        <div className="footer__links">
          {footerLinks.map((item) => (
            <div key={item.title}>
              <h3 className="font-bold mb-8">{item.title}</h3>
              <div className="flex flex-col gap-5 ">
                {item.links.map((link) => (
                  <Link
                    key={link.title}
                    href={link.url}
                    className="text-gray-500"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <p>@2023 Craftsmith. All rights reserved</p>

        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-500">
            Privacy & Policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms & Condition
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
