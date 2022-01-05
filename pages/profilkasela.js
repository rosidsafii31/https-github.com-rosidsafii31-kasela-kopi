import SectionHeader from '../components/SectionHeader';
import Head from 'next/head';
import  Container  from '../components/Container';
import ReactMarkdown from 'react-markdown';
import Layout from '../components/Layout';

export async function getServerSideProps(){

  const reqprofil = await fetch(process.env.NEXT_PUBLIC_APIURL + '/profilkaselas?featured_ne=true');
  const profil = await reqprofil.json();

  return {
    props:{
      profil: profil.length > 0 ? profil[0] :{}
    },
  }                                     
}

export default function Profil({profil, categories={categories}}) {
  return (
    <Layout categories={categories}>
      <Head>
        <title>ProfilKasela &mdash; Profilkasela</title>
      </Head>
        <SectionHeader>Profil Kasela</SectionHeader>
        <Container>
      <img
        className=" pb-5 bg-cover max-h-[32rem] w-auto md:w-full mb-4 md:mb-0"
        src={process.env.NEXT_PUBLIC_APIURL + profil.thumbnail.formats.large.url}
      />
    <div className="grid grid-cols-1 md:grid-cols-2">
    <div className="text-black text-2xl">
    <img
        className=" 2xl:h-[350] xl:h-[350] lg:h-[300] md:h-[200] pb-5 bg-cover w-auto md:w-full mb-4 md:mb-0"
        src={process.env.NEXT_PUBLIC_APIURL + profil.thumbnail1.formats.medium.url}
    />
    </div>
    <ReactMarkdown className=" pl-2 font-produk2 prose prose-base text-justify whitespace-normal break-all">
    {profil.content}    
    </ReactMarkdown> 
    </div>
    <div className="grid grid-cols-1  md:grid-cols-2">
    <reactMarkdown className="prose prose-base font-produk2 max-w-none text-gray-black pr-2 text-justify whitespace-normal break-all">
    {profil.content1}    
    </reactMarkdown> 
    <img
        className=" 22xl:h-[350] xl:h-[350] lg:h-[300] md:h-[200] bg-cover w-auto md:w-full mb-4 md:mb-0"
        src={process.env.NEXT_PUBLIC_APIURL + profil.thumbnail2.formats.medium.url}
    />
    </div>
    <div className="">
      <img
        className=" pt-5 w-auto max-h-[38rem] md:w-full mb-4 md:mb-0"
        src={process.env.NEXT_PUBLIC_APIURL + profil.thumbnail3.formats.large.url}
      />
    </div>
    <ReactMarkdown className=" prose prose-base font-produk2 max-w-none text-gray-black pr-2 text-justify whitespace-normal break-all">
    {profil.content2} 
    </ReactMarkdown>   
        </Container>
    </Layout>
  );
}
