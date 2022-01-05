import Container from '../../components/Container';
import PostDetail from '../../components/PostDetail';
import Head from 'next/head';
import { formatDate } from '../../utils/utils';
import ReactMarkdown from 'react-markdown';
import Layout from '../../components/Layout';
import axios from 'axios';

export const getServerSideProps = async ({params}) => {

  const res = await axios(`${process.env.NEXT_PUBLIC_APIURL}/api/artikels/${params.id}`);

  return {
    props: {
      artikel: res.data,
  }
};
}


export default function Detail({artikel}) {
  return (
    <Layout>
      <Head>
        <title>{artikel.title} &mdash; Epictetus</title>
      </Head>
      <Container>
        <div className="md:w-10/12 w-full mx-auto flex items-center flex-col">
          <PostDetail
            title={artikel.title}
            createdAt={formatDate(artikel.createdAt)}
            center
          />
        </div>
        <div className="md:w-10/12 w-full mx-auto my-5">
          <img src={artikel.img} className="w-screen max-h-[29rem] rounded-lg" />
        </div>
        <div className="md:w-10/12 w-full mx-auto leading-relaxed">
          <div className="text-xl mb-4 text-black">
         <ReactMarkdown className="prose prose-lg indent-10 font-produk3 sm:break-all">
         {artikel.content}
         </ReactMarkdown>
          </div>
        </div>
      </Container>
    </Layout>
  );
}

