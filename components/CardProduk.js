import Link from 'next/link';
import InfoProduk from './InfoProduk';

export default function CardProduk(props) {
  return (
    <article className=" bg-gray-lightest p-10 " >
      <Link href={`/product/${props._id}`} >
        <div className="border-solid border-8 border-blue-dark " >
          <img src={props.img} className="w-full  max-h-40 object-contain content-center mt-5 mb-5" />
        </div>
      </Link>
      <InfoProduk
      title = {props.title}
      harga ={`Rp.${props.harga}`}
      
      />
       <div className="rounded-md shadow pt-5">
        <Link href={`/product/${props._id}`} >
                <a
                  className="w-full font-produk4 flex items-center justify-center px-5 py-3 border border-transparent text-xl rounded-md text-gray-lightest hover:text-gray-hitam  bg-green-light hover:bg-green md:py-4 md:text-xl md:px-10">
            BELI
                </a>
                </Link>
              </div>
    </article>
  );
}
