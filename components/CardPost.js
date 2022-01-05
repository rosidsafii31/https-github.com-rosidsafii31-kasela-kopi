import Link from 'next/link';
import InfoPost from '../components/InfoPost';

export default function CardPost(props) {
  return (
    <article className="shadow-2xl " >
      <Link href={`/artikel/${props._id}`}>
        <a>
          <img src={props.img} className="w-full  rounded mb-4" />
        </a>
      </Link>
      <InfoPost
          title = {props.title}
          content ={props.content}
      />
    </article>
  );
}
