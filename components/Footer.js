
import Link from 'next/link';
export default function Footer() {
  return (
    
  <footer className=" bg-gray-black text-center text-white/60">
  <div style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
      <div className="lg:flex">
          <div className="lg:flex">
            <div className="w-full pt-6 pr-2 pl-2 mb-12 lg:mb-0 lg:w-1/2">
              <h2
                style={{ fontFamily: '"Baloo Tamma 2", cursive' }}
                className="font-bold text-xl text-gray-100 mb-4"
              >
               LOCATION
              </h2>
              <div className=" pt-6 px-4 sm:px-6 lg:px-6 flex justify-center  ">
          <img className="" src="/maps.jpg"  />
          </div>
          <p className="text-white pt-2 ">
              LINGKUNGAN KACANGAN ASRI RT 02  RW 02 KELURAHAN GOMBENGSARI KECAMATAN KALIPURO KABUPATEN BANYUWANGI
              </p>
            </div>
            <div className="w-full mb-12 pt-6 pr-2 pl-2 lg:mb-0 lg:w-1/2">
              <h2
                style={{ fontFamily: '"Baloo Tamma 2", cursive' }}
                className="font-bold text-xl text-gray-100 mb-4"
              >
                SOSIAL MEDIA
              </h2>
              <>
             <div>
             <a className="social-media-icon" href="https://link_social_mendia_anda"><span className="fab fa-whatsapp"></span></a>
             </div>
        </>
          </div>
          <div className="w-full  pt-6 pr-2 pl-2 lg:mb-0 lg:w-1/2">
              <h2
                style={{ fontFamily: 'font-produk3' }}
                className="font-bold text-2xl text-gray-lightest mb-4"
              >
                JALAN PINTAS
              </h2>
              <ul className=" text-gray-lightest font-produk2 font-semibold text-lg flex items-center  flex-col space-y-4">
              <li><Link href="/"><a className="hover:underline md:text-lg md:font-produk2  ">Home</a></Link></li>
              <li><Link href="/produk"><a className="hover:underline md:text-lg md:font-produk2  ">Product</a></Link></li>
              <li><Link href="/posts"><a className="hover:underline md:text-lg md:font-produk2 ">Artikel</a></Link></li>
              <li><Link href="/"><a className="hover:underline md:text-lg md:font-produk2 ">Profil Kasela</a></Link></li>
            </ul>
              </div>
          </div>
      </div>
  </div>
  {/* Footer bottom */}
  <div
    style={{
      fontFamily: 'font-produk2',
      backgroundColor: "rgba(0, 0, 0, 0.7)"
    }}
  >
    <div className="container bg-gray-hitam mx-auto px-6 lg:px-20 py-6">
      <div className="flex font-light justify-center text-gray-500 text-sm">
        <p>
          Designed by <span className="font-bold">Coffee Kasela</span>
        </p>
      </div>
    </div>
  </div>
    </footer>
    
  );
}
