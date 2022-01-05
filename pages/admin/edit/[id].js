import Header from "../componentmenu/headers";
import Sidebarkiri from "../componentmenu/sidebar";
import Footer from "../componentmenu/Footers";
import { useState } from "react";
import { parseCookies } from "nookies";
import Router from 'next/router';
import Modal from "../componentmenu/Modal";
import ImageUpload from "../componentmenu/imageUpload";

export async function getServerSideProps({ params: {id} }) {
    const res = await fetch(process.env.NEXT_PUBLIC_APIURL + `/artikels/${id}` );
    const sportNews = await res.json();
    
    return {
        props: {
           sportNews
        },
    }
}

export default function Edit({sportNews}) {
    console.log(sportNews);
    const [values, setValues] = useState({
      title: sportNews.title,
      content: sportNews.content,
    });


    const [showModal, setShowModal] = useState(false);

    const[success, setSuccess] = useState(false);

    const {title, content} = values;
    
    const handleSubmit = async(e,ctx) => {
      e.preventDefault();
      
      const jwt = parseCookies(ctx).token
      const req = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/artikels/${sportNews.id}`,{
          method: 'PUT',
          headers: {
              Authorization: `Bearer ${jwt}`,
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(values)
      });
      
      const res = await req.json();

      if (res) {
      setValues({});
      setSuccess(true);
      e.target.reset();
      Router.replace(`/admin/${res.slug}`);
  }
    };

    const imageUploaded = async (e) => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/artikels/${sportNews.id}`);
      const data = res.json();
      setShowModal(false);
      Router.replace(`/admin/artikel`);
    };

    const handleInputChange = (e) => {
      const {name, value} = e.target;
      setValues({...values, [name]: value }); 
    };

    return (
      <div>
        <div className="mx-auto bg-gray-lightest font-produk3">
          {/*Screen*/}
          <div className="min-h-screen flex flex-col">
            <Header />
            <div className="font-produk3 flex flex-1">
              <Sidebarkiri />
              <main className="bg-gray-lightest flex-1 p-3 overflow-hidden">
                <div className="flex flex-col">
                  {/* /Cards Section Ends Here */}
                  {/*Grid Form*/}
                  <div className="flex flex-1 flex-col md:flex-row lg:flex-row mx-2">
                    <div className="mb-2 border-solid border-gray-hitam rounded border shadow-sm w-full">
                      <div className="bg-gray font-bold px-2 py-3 border-solid border-gray-hitam border-b">
                        Tambah Artikel
                      </div>
                      <div className="p-3">
                        {success && (
                          <div className="bg-green-middark text-gray-lightest m-4 text-lg text-center rounded p-4 max-w-xl">
                            Selamat Artikel Anda Berhasil Di Unggah
                          </div>
                        )}
                        <form onSubmit={handleSubmit} className="">
                          <div className="flex justify-start">
                            <div className="mb-3 xl:w-96">
                              <label
                                htmlFor="title"
                                className="form-label inline-block mb-2 text-gray-700 font-bold text-lg"
                              >
                                Title
                              </label>
                              <input
                                type="text"
                                className=" form-control block  w-full  px-3  py-1.5  text-base  font-normal  text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300  rounded  transition  ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                                id="title"
                                onChange={handleInputChange}
                                value={title}
                                name="title"
                              
                              />
                            </div>
                          </div>
                          <div className="flex justify-start">
                            <div className="mb-3 xl:w-full">
                              <label
                                htmlFor="content"
                                className="form-label inline-block mb-2 text-gray-700 font-bold text-lg"
                              >
                                Content
                              </label>
                              <textarea
                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  rounded  transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                id="content"
                                rows={10}
                                onChange={handleInputChange}
                                value={content}
                                name="content"
                              />
                            </div>
                          </div>
                          
                          <div className="mt-2">
                            <button
                              className="px-4 py-2 text-gray-lightest font-produk3 tracking-wider bg-gray-black rounded"
                              type="submit"
                            >
                              Update
                            </button>
                          </div>
                        </form>
                        <div className="pt-2">
                         <button onClick={() => setShowModal(true)} className="px-4 py-2 text-gray-lightest font-produk3 tracking-wider bg-gray-black rounded">
                           Update Image
                         </button>
                        </div>
                          <Modal show={showModal} onClose={() => setShowModal(false)}>
                            <ImageUpload sportNewsId={sportNews.id} imageUploaded={imageUploaded} />
                          </Modal>
                      </div>
                    </div>
                  </div>
                  {/*/Grid Form*/}
                </div>
              </main>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
}