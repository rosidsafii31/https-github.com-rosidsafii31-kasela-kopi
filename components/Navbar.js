import Link from "next/link";
import { useState } from "react";
import Container from "../components/Container";

export default function Navbar() {
  const [offcavnas, setOffcanvas] = useState(false);
  const [search, setSearch] = useState(false);

  return (
    <div className="py-8 lg:py-14">
      <nav className="lg:h-30 fixed top-0 inset-x-0 w-full bg-gray-black ">
        <Container>
          <div className="flex items-center ">
            <div className="w-3/12 lg:hidden">
              <button onClick={() => setOffcanvas(!offcavnas)}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.4">
                    <path
                      d="M3 12H21"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 6H21"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 18H21"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </button>
            </div>
            <div className="lg:w-2/12 w-6/12 ">
              <Link href="/">
                <a className="flex items-center justify-center lg:justify-start ">
                  <img className="" src="/logo.png" />
                </a>
              </Link>
            </div>
            <div className="w-2/12 lg:hidden text-right">
              <button onClick={() => setSearch(!search)}>
                <svg className="inline-block text-gray-lightest" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.4">
                    <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21 21L16.65 16.65" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                </svg>
              </button>
            </div>
            <div
              className={`lg:w-8/12 w-full bg-gray-black lg:bg-none fixed lg:static top-0 h-full lg:h-auto p-10 lg:p-0 transition-all ${offcavnas ? "left-0" : "-left-full"
                }`}
            >
              <button
                className="absolute top-10 right-10 lg:hidden"
                onClick={() => setOffcanvas(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-x text-gray-lightest"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <ul className=" text-gray-lightest ml-10 lg:space-x-12 font-produk2 font-extrabold text-lg flex lg:items-center  flex-col lg:flex-row space-y-4 lg:space-y-0">
                <li>
                  <Link href="/">
                    <a className="hover:underline md:text-lg ">Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/produk">
                    <a className="hover:underline md:text-lg ">Product</a>
                  </Link>
                </li>
                <li>
                  <Link href="/artikel">
                    <a className="hover:underline md:text-lg">Artikel</a>
                  </Link>
                </li>
                <li>
                  <Link href="/profilkasela">
                    <a className="hover:underline md:text-lg">Profil Kasela</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className={`lg:w-3/12 absolute lg:static w-full left-0 px-10 lg:px-0 transition-all ${search ? 'top-10' : '-top-40'}`}>
              <button
                className="absolute top-3 right-14 lg:hidden"
                onClick={() => setSearch(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
              <input className="bg-gray-700 py-3 px-6 w-full lg:rounded-full rounded-lg bg-search pl-12" placeholder="Search ..." />
            </div>
          </div>
        </Container>
      </nav>
    </div>
  );
}
