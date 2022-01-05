import Link from 'next/link';

export default function FeaturedPost() {
  return (
    <div  className="">
      <div className="  bg-transparent pt-10 bg-footer-texture 2xl:h-[600px] xl:h-[600px] lg:h-[550px] md:h-[500px] pb-20 bg-cover w-auto md:w-full mb-4 md:mb-0 ">
          <Link href="/detail">
            <a>
              <img src="/kasela.png" className=" content-center object-contain max-h-96 w-full" />
            </a>
          </Link>
        </div>
        </div>
  );
}
