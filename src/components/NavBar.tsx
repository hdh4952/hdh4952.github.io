import Image from "next/image";
import Link from "next/link";
import { IoMdHome } from "react-icons/io";
import { BiSolidCategory } from "react-icons/bi";
import { CiCircleInfo } from "react-icons/ci";

const navItems = [
  {
    name: "HOME",
    href: "/",
    icon: <IoMdHome />,
  },
  {
    name: "CATEGORIES",
    href: "/categories",
    icon: <BiSolidCategory />,
  },
  {
    name: "ABOUT",
    href: "/about",
    icon: <CiCircleInfo />,
  },
];

const NavBar = () => {
  return (
    <nav className="h-full w-1/6 border border-white flex flex-col justify-start items-center">
      <div className="w-3/5 h-1/3 flex flex-col justify-center items-start">
        <div>
          <Image
            className="rounded-full mb-5"
            src="/profile.png"
            alt="next Logo"
            width={120}
            height={120}
          />
        </div>
        <div>
          <div className="font-bold text-3xl">Daehee</div>
          <div className="italic">그냥 하면 돼</div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        {navItems.map((item) => (
          <Link
            href={item.href}
            key={item.name}
            className="h-10 w-2/3 border border-slate-600 hover:border-white rounded mb-5 text-start">
            <div className="h-full w-full flex items-center">
              <div className="flex items-center mx-2">{item.icon}</div>
              <div className="text-sm">{item.name}</div>
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
