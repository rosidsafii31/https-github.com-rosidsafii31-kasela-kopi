import Link from 'next/link';

export default function PostMetaTitle(props) {
  return (
    <>
      <div className="flex items-center  text-black/60 space-x-4 mx-5">
        <div className="text-sm font-produk2">

        </div>
      </div>
      <h2 className="text-xl mt-4 text-center font-produk2 font-extrabold text-black">
        <a>{props.title}</a>
      </h2>
    </>
  );
}
