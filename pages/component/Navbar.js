import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [pathname, setPathname] = useState("");
  const router = useRouter();

  useEffect(() => {
    setPathname(router.pathname);
  }, [router]);

  return (
    <div className="">
      <nav className="w-screen">
        <ul className="flex items-end justify-between py-3 bg-transparent text-white pr-5">
          <li className="flex items-end ml-5 pb-2">
            <Link href="/">
              <div className="inline-block font-bold text-xl ml-2">
                NFT Marketplace
              </div>
            </Link>
          </li>
          <li className="w-2/6">
            <ul className="lg:flex justify-between font-bold mr-10 text-lg">
              <li className="nav-item">
                <Link href="/" className="inner">
                  Market place
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/sellNFT" className="inner">
                  List My NFT
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/profile" className="inner">
                  Profile
                </Link>
              </li>
              <li>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm">
                  Connect
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
