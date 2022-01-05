import Header from "./componentmenu/headers";
import Sidebarkiri from "./componentmenu/sidebar";
import Footer from "./componentmenu/Footers";
import Link from 'next/link';
import CardPost from './componentmenu/CardPost';
import { parseCookies } from "nookies";

export async function getServerSideProps(){

  const reqartikel = await fetch(process.env.NEXT_PUBLIC_APIURL + '/artikels?featured_ne=true');
  const posts = await reqartikel.json();


  return {
    props:{
      posts
    },
  }                                     
}



export default function Artikel({posts}) {
    
 
    return(
    <div>
    <div className="mx-auto bg-gray-lightest font-produk3">
  {/*Screen*/}
  <div className="min-h-screen flex flex-col">
    <Header />
    <div className="font-produk3 flex flex-1">
    <Sidebarkiri />
     <main className="bg-gray-lightest flex-1 p-3 overflow-hidden">
  <div className="flex flex-col">
    {/* /Cards Section Ends Here */}
    {/*Grid Form*/}
    <div className="flex flex-1 flex-col md:flex-row lg:flex-row mx-2">
      <div className="mb-2 border-solid border-gray-hitam rounded border shadow-sm w-full">
        <div className="bg-gray px-2 py-3 border-solid border-gray-hitam border-b">
          <div className="grid gap-4  grid-cols-1 md:grid-cols-4 ">
          <a className="font-produk3 text-xl font-bold">Artikel</a>
          <button className="col-end-7 col-span-2 content-center bg-blue-dark hover:bg-blue-light  text-white font-bold py-2 px-4 border border-gray-hitam rounded">
          <Link href="../admin/addartikel"><a className=" text-auto md:text-center ">Tambah Artikel</a></Link>
          </button>
          </div>
        </div>
        <div className="p-3">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {posts.map(post => (
            <div key={post.id} className="md:w-12/12 w-full  px-4 py-6">
              <CardPost {...post} />   
            </div>
          ))}
      </div>
        </div>
      </div>
    </div>
    {/*/Grid Form*/}
  </div>
</main>   
    </div>
  </div>
    <Footer />
</div>
 
</div>
);
}