import PostMetaTitle from './PostMetaTitle';
import {formatDate} from './utils';

export default function InfoPost({

  date,
  title,
  content,
  slug,
}) {
  return (
    <>
      <PostMetaTitle 
        
        date={formatDate(date)}
        title={title}
        slug={slug}
      />
      <div className="text-black text-base line-clamp-6  font-produk2 sm:break-all">
      <p className="  mt-5 mx-5">
        {content}
      </p>
      </div>
    </>
  );
}
