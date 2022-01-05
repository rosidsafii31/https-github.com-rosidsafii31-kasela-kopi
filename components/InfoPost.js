import PostMetaTitle from '../components/PostMetaTitle';

export default function InfoPost({

  title,
  content,
}) {
  return (
    <>
      <PostMetaTitle   
        title={title}
      />
      <div className="">
      <p className=" text-black text-base line-clamp-6 text-gray-hitam font-produk2 sm:break-all mt-5 mx-5">
        {content}
      </p>
      </div>
    </>
  );
}
