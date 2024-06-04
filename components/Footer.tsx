import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "@constants";

const Footer = () => (
  <footer className="flex flex-col text-black-100 bg-zinc-200  mt-5 border-t border-gray-100">
    <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
      <div className="flex flex-col justify-start items-start gap-6">
        {/* <Image
          src="/logo.svg"
          alt="logo"
          width={118}
          height={18}
          className="object-contain"
        /> */}
        <p className=" text-7xl">🏎️</p>

        <p className="text-base font-bold text-pink-700">
          SupaCarr 2024 <br />
          All Rights Reserved &copy;
        </p>
      </div>

      <div className="footer__links">
        {footerLinks.map((item) => (
          <div key={item.title} className="footer__link">
            <h3 className="font-bold">{item.title}</h3>
            <div className="flex flex-col gap-5">
              {item.links.map((link) => (
                <Link
                  key={link.title}
                  href={link.url}
                  className="text-pink-500 font-bold"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="flex justify-between items-center bg-slate-100 flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
      <p className="text-pink-500 font-bold">
        @2024 SupaCarr. All rights reserved
      </p>

      <div className="footer__copyrights-link">
        <Link href="/" className="text-pink-500 font-bold">
          Privacy & Policy
        </Link>
        <Link href="/" className="text-pink-500 font-bold">
          Terms & Condition
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
