import Head from 'next/head'
import CardPost from '../components/CardPost';
import CardProduk from '../components/CardProduk';
import FeaturedPost from '../components/FeaturedPost'
import Sejarahkasela from './sejarahkaseladepan';
import Link from 'next/link';
import Layout from '../components/Layout';
import axios from 'axios';

export default function Home({produk, posts, profildepan} ) {


  return (
    <Layout>
      <Head>
        <title>Home &mdash; COFFEE KASELA</title>
      </Head>
         <FeaturedPost/>
         {profildepan.map(profildepan => (
            <div key={profildepan._id}>
          <Sejarahkasela
           {...profildepan} />
            </div>
          ))}
        
        
        <div className="">
          
        <div className="bg-gray-hitam  pb-10  mt-6">
        <p className="pt-10 pb-10 text-center font-produkjudul text-gray-lightest text-4xl">KOPI KASELA GOMBENGSARI </p>
        <div className=" flex justify-end mr-5 pt-5 ">
          <button className=" bg-gray-dark hover:bg-gray  text-gray-lightest hover:text-gray-hitam  font-bold py-2 px-4 border border-blue-700 rounded">
          <Link href="/produk"><a className=" text-auto md:text-center font-produk2">PRODUK LAINNYA</a></Link>
          </button>
          </div>
        <div className="grid grid-cols-1 md:grid-cols-4">
          {produk.map(produk =>  (
            <div key={produk._id} className=" md:w-12/12 w-full px-4 py-6">
              <CardProduk {...produk} />
            </div>
          ))}
          </div>
          
        </div>
        </div>
        <div className=" container  bg-white  px-10 pb-10  mt-6">
        <p className="pt-10 text-center text-black font-produkjudul text-gray-hitam text-4xl ">ARTIKEL </p>
        <div className=" flex justify-end mr-5 pt-5 ">
          <button className=" bg-gray-dark hover:bg-gray  text-gray-lightest hover:text-gray-hitam font-bold py-2 px-4 border border-blue-700 rounded">
          <Link href="/artikel"><a className=" text-auto md:text-center font-produk2">Read More</a></Link>
          </button>
          </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {posts.map(posts => (
            <div key={posts._id} className="md:w-12/12 w-full  px-4 py-6">
              <CardPost {...posts} />   
            </div>
          ))}
      </div>
    
        </div> 
    </Layout>
  )
}

export const getServerSideProps = async () => {

  const res = await axios(`${process.env.NEXT_PUBLIC_APIURL}/api/products`);

  const artikel = await axios(`${process.env.NEXT_PUBLIC_APIURL}/api/artikels`);

  const sejarahdepan = await axios(`${process.env.NEXT_PUBLIC_APIURL}/api/kaseladepans`);
 
  return {
    props: {
      produk: res.data,
      posts: artikel.data,
      profildepan: sejarahdepan.data,
    },
  };
};
