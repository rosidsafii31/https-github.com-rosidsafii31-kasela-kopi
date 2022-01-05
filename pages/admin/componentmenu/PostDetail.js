import Link from 'next/link';

export default function PostDetail({ title, date, slug}) {
  return (
    <>
        <h2 className="text-4xl mt-16 text-center font-produk2 font-extrabold text-black">
        <Link href={`/${slug}`}><a>{title}</a></Link>
      </h2>
      <div className="flex items-center text-black/60 font-produk2 mt-4 space-x-4">
        <div>
          {date}
        </div>
      </div>
    </>
  );
}
