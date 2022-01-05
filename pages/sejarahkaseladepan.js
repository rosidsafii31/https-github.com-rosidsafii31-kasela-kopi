import Link from 'next/link';

export default function Sejarahkasela(props) {

  return (
    <div className="relative bg-gray-lightest overflow-hidden mt-6">
    <div className="max-w-7xl mx-auto">
      <div className="relative z-10 pb-8 bg-gray-lightest sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
        <svg
          className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-gray-lightest transform translate-x-1/2"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>
        <div>
          <div className="relative pt-6 px-4 sm:px-6 lg:px-8 flex justify-center  ">
          <img src={props.logo}  className=""  />
          </div>
          
        </div>
        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-14 lg:mt-20 lg:px-8 xl:mt-21">
          <div className="sm:text-center lg:text-left">
            <h2 className="text-2xl font-produk3 tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block text-black xl:inline">
              {props.title}
              </span>
            </h2>
            <p className="mt-3 text-base font-produk2 text-gray-hitam  sm:mt-5 break-word  sm:text-justify sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              {props.contentisi}
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
              <div className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-lightest bg-coklat-middark hover:bg-coklat-dark md:py-4 md:text-lg md:px-10">
                <Link href="/profilkasela" >
                <a className="font-produk2">Read More</a>
                </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img
        className="h-56 w-full object-cover pt-3 sm:h-72 md:h-96 lg:w-full lg:h-full"
        src={props.imgsamping}
        
      />
    </div>
  </div>
          );
}
