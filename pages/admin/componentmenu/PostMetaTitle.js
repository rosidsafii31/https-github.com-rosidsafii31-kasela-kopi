import Link from 'next/link';

export default function PostMetaTitle({ title, date, slug}) {
  return (
    <>
      <div className="flex items-center text-black/60 space-x-4 mx-5">
        <div>
          {date}
        </div>
      </div>
      <h2 className="text-xl mt-4 text-center font-produk2 font-extrabold text-black">
        <Link href={`/admin/${slug}`}><a>{title}</a></Link>
      </h2>
    </>
  );
}
