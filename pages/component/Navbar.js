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
    <div>
      <nav className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-sm z-50">
        <ul className="flex align-middle justify-between py-6 bg-transparent text-white pr-5">
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
                <button
                  style={{ fontFamily: "Raleway, sans-serif" }}
                  className="bg-[#647ECB] hover:dropShadow-3xl hover:bg-[#D01498] text-white text-base hover:shadow-lg hover:drop-shadow-[0_8px_15px_#D01498] ease-in-out duration-500 font-bold py-2 px-4 rounded"
                >
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
