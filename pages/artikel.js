import {useRouter} from 'next/router';
import CardPost from '../components/CardPost';
import SectionHeader from '/components/SectionHeader';
import Container from '../components/Container'
import Head from 'next/head';
 import Layout from '../components/Layout';

export async function getServerSideProps({ query:{page=1} }) {

  const reqnumber = await fetch(process.env.NEXT_PUBLIC_APIURL + '/artikels/count');
  const number = await reqnumber.json();
  
  const start = +page === 1 ? 0 : (+page - 1) * 6

  const reqslide = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/artikels?_sort=id:desc&_limit=6&_start=${start}`);
  const slide = await reqslide.json();
  
return {
    props:{
      posts:slide,
      page:+page,
      number,
    },
  }                                     
}


export default function Artikel({posts, categories,page,number}) {
  const router = useRouter()
  const lastpage = Math.ceil(number / 6)

  return (
    <Layout categories={categories}>
      <Head>
        <title>Artikel &mdash; Artikel</title>
      </Head>
        <SectionHeader>ARTIKEL</SectionHeader>
        <Container>
          <div className="flex -mx-4 flex-wrap mt-4">
            {posts.map(post => (
              <div key={post.id} className="md:w-4/12 w-full px-4 py-6">
                <CardPost {...post} />
              </div>
            ))}
          </div>
          <div className=" flex justify-center space-x-4 mb-10 ">
          <button className='bg-gray-darkl hover:bg-gray text-xl font-produk3 p-2 rounded-lg' 
          onClick={() => router.push(`/artikel/?page=${page - 1}`)} 
          disabled={page <= 1}>Previous</button>
          <button className='bg-gray-darkl hover:bg-gray text-xl font-produk3 p-2 rounded-lg'
          onClick={() => router.push(`/artikel/?page=${page + 1}`)}
          disabled={page >= lastpage}>Next</button>
          </div>
      </Container>
    </Layout>
  );
}
