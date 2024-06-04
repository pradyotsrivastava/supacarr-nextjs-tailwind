import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";

const NavBar = () => (
  <header className="w-full  absolute z-10">
    <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
      <Link href="/" className="flex justify-center items-center">
        {/* <Image
          src='/logo.svg'
          alt='logo'
          width={118}
          height={18}
          className='object-contain'
        /> */}
        <p className=" text-5xl">🏎️</p>
        <CustomButton
          title="SupaCarr"
          containerStyles="bg-pink-500 text-3xl mt-5 font-bold text-white rounded-full"
        />
      </Link>
      <div className="flex justify-center items-center gap-2 ">
        <Link href="https://github.com/pradyotsrivastava/" target="_blank">
          <CustomButton
            title="Github"
            containerStyles="bg-pink-500 text-md font-bold text-white rounded-full"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/pradyotsrivastava/"
          target="_blank"
        >
          <CustomButton
            title="Linked In"
            containerStyles="bg-pink-500 text-md  font-bold text-white rounded-full"
          />
        </Link>
        <Link
          href="https://github.com/pradyotsrivastava/pradyot.portfolio"
          target="_blank"
        >
          <CustomButton
            title="Portfolio"
            containerStyles="bg-pink-500 text-md  font-bold text-white rounded-full"
          />
        </Link>
      </div>
      <CustomButton
        title="Sign in"
        btnType="button"
        containerStyles="text-white text-xl font-bold rounded-full bg-pink-500 min-w-[130px]"
      />
    </nav>
  </header>
);

export default NavBar;
