import Link from 'next/link';
import InfoPost from './InfoPost';

export default function CardPost(props) {
  return (
    <article className="shadow-2xl" >
      <Link href={`/admin/${props.slug}`}>
        <a>
          <img src={process.env.NEXT_PUBLIC_APIURL + props.thumbnail.formats.small.url} className="w-full  rounded mb-4" />
        </a>
      </Link>
      <InfoPost
           slug={props.slug}
          date  = {props.published_at}
          title = {props.title}
          content ={props.content}
      />
    </article>
  );
}
