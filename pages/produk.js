import CardProduk from '../components/CardProduk';
import SectionHeaderproduk from '../components/SectionHeaderproduk';
import Head from 'next/head';
import Layout from '../components/Layout';
import {useRouter} from 'next/router';

export async function getServerSideProps({ query:{page=1} }){
  const reqnumber = await fetch(process.env.NEXT_PUBLIC_APIURL + '/products/count');
  const number = await reqnumber.json();
  
  const start = +page === 1 ? 0 : (+page - 1) * 8

  const reqslide = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/products?_sort=id:desc&_limit=6&_start=${start}`);
  const slide = await reqslide.json();

  return {
    props:{
      produk:slide,
      page:+page,
      number,
    },
  }                                     
}

export default function Produk({produk, categories,page,number}) {
  const router = useRouter()
  const lastpage = Math.ceil(number / 8)


  return (
    <Layout categories={categories}>
      <Head>
        <title>Produk &mdash; Produk</title>
      </Head>
        <SectionHeaderproduk>PRODUCT</SectionHeaderproduk>
        <div className="bg-gray-hitam  pb-10 ">
        <p className="text-center font-produkjudul text-gray-lightest text-4xl"></p>
        <div className="grid grid-cols-1 p-10 md:grid-cols-4">
          {produk.map(produk => (
            <div key={produk.id} className=" md:w-12/12 w-full px-4 py-6">
              <CardProduk {...produk} />
            </div>
          ))}
          </div>
          <div className=" flex justify-center space-x-4  ">
          <button className='bg-gray-darkl hover:bg-gray text-xl font-produk3 p-2 rounded-lg' 
          onClick={() => router.push(`/produk/?page=${page - 1}`)} 
          disabled={page <= 1}>Previous</button>
          <button className='bg-gray-darkl hover:bg-gray text-xl font-produk3 p-2 rounded-lg'
          onClick={() => router.push(`/produk/?page=${page + 1}`)}
          disabled={page >= lastpage}>Next</button>
          </div>
          </div>
    </Layout>
  );
}
