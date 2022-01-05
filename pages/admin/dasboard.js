import Header from "./componentmenu/headers";
import Sidebarkiri from "./componentmenu/sidebar";
import Footer from "./componentmenu/Footers";
import nookies from 'nookies';

export async function getServerSideProps(ctx) {
  const cookies = nookies.get(ctx);

  if(!cookies.token) {
      return{
          redirect: {
              destination: `./login`
          }
      }
  
  }

  return{
      props: {}
  }
}

export default function Dasboard() {
    return (
<div className="mx-auto bg-gray-lightest font-produk3">
  {/*Screen*/}
  <div className="min-h-screen flex flex-col">
    <Header />
    <div className="font-produk3 flex flex-1">
    <Sidebarkiri />
    </div>
  </div>
    <Footer />
</div>

    );
}