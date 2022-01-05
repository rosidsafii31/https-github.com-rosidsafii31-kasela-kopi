import Header from "./componentmenu/headers";
import Sidebarkiri from "./componentmenu/sidebar";
import Footer from "./componentmenu/Footers";
import Container from '../../components/Container';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import { parseCookies } from "nookies";
import Router from 'next/router';

export async function getStaticPaths() {
    const res = await fetch(process.env.NEXT_PUBLIC_APIURL + '/artikels');
    const news = await res.json();
    const paths = news.map((item) =>({
        params: {slug: item.slug},
    }));

    return{
        paths,
        fallback: true,
    }
};

export async function getStaticProps({ params: { slug } }) {
    const res = await fetch(process.env.NEXT_PUBLIC_APIURL + '/artikels?slug=' + slug );
    const singleNews = await res.json();
    return {
        props: {
            news: singleNews.length > 0 ? singleNews[0] : {},
        },
        revalidate: 1,
    }
}

export default function SingleNews({news}) {
  
  const deleteNews = async (e,ctx) => {
  if(window.confirm("Apakah Yakin ingin di Hapus ?")) {
    const jwt = parseCookies(ctx).token
    const res = await fetch( `${process.env.NEXT_PUBLIC_APIURL}/artikels/${news.id}`,{
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    const data = await res.json();
    if (res) {
      Router.replace(`../admin/artikel`);
  }
  }
  };

    return (
      <div className="mx-auto bg-gray-lightest font-produk3">
        {/*Screen*/}
        <div className="min-h-screen flex flex-col">
          <Header />
          <div className="font-produk3 flex flex-1">
            <Sidebarkiri />
            <Container>
            <div className=" flex gap-2 justify-end mr-5 pt-5 ">
          <button className=" bg-blue hover:bg-gray-light  text-white font-bold py-2 px-4 border border-blue-700 rounded">
          <Link href={`/admin/edit/${news.id}`}><a className=" text-auto md:text-center ">Edit</a></Link>
          </button>
          <button onClick={deleteNews} className=" bg-pink-low hover:bg-gray-light  text-white font-bold py-2 px-4 border border-blue-700 rounded">
         <a className=" text-auto md:text-center ">Delete</a>
          </button>
          </div>
        <div className=" w-full mx-auto flex text-2xl mt-5 text-center font-produk2 font-extrabold text-black items-center flex-col">
        {news.title}
       
        </div>
        <div className="md:w-10/12 w-full mx-auto leading-relaxed">
          <div className="text-xl mb-4 text-black">
         <ReactMarkdown className="prose ">
         {news.content}
         </ReactMarkdown>
          </div>
        </div>
      </Container>
          </div>
        </div>
        <Footer />
      </div>
    );
}