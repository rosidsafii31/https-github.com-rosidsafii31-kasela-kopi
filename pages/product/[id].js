import Head from 'next/head';
import Layout from '../../components/Layout';
import { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

export const getServerSideProps = async ({params}) => {

  const res = await axios(`${process.env.NEXT_PUBLIC_APIURL}/api/products/${params.id}`);

  return {
    props: {
      produk: res.data,
  }
};
}

export default function Detail({produk}) {
console.log(produk);

  return (
    <Layout >
      <Head>
        <title>{produk.title} &mdash; Epictetus</title>
      </Head>

      <div className=" grid grid-cols-1 md:grid-cols-3 col-span-2 gap-10 px-10 py-10 bg-gray-hitam ">
        <div className=" border-solid border-8  border-blue-dark p-3 ">
          <img
            className=" max-h-128 w-full object-contain content-center"
            src={produk.img
            }
          />
        </div>
        <div className=" text-gray-lightest">
          <div className="text-5xl pb-5 font-produk4 ">{produk.title}</div>
          <div className="text-base pb-5 font-produk2 ">{produk.deskripsi}</div>
          <div className="text-xl pb-5 font-produk2 ">{produk.berat}</div>
          <div className="text-4xl pb-5 font-produk4 ">{`Rp.${produk.harga}`}</div>
          {/* <Link href={`/produk/pesanan/${id}`}>
          <button
            className="px-5 py-3 bg-green-middark hover:bg-green-dark text-gray-hitam font-produk4 tracking-wider rounded"
          >
            BELI
          </button>
          </Link> */}
        </div>
      </div>
    </Layout>
  );
}
