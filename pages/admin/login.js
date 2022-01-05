import Router from 'next/router';
import nookies from 'nookies';
import { useState } from "react";

export async function getServerSideProps(ctx) {
    const cookies = nookies.get(ctx);

    if(cookies.token) {
        return{
            redirect: {
                destination: `./dasboard`
            }
        }
        
    }
    
    return{
        props: {}
    }
}


export default function Login() {
const [field, setField] = useState({});

function setValue(e){
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setField({
        ...field,
        [name]:value
    });
}
    async function doLogin(e){
        e.preventDefault();

        const req = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/auth/local`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(field)
        });
        const res = await req.json();
        if (res.jwt) {
          nookies.set(null, 'token', res.jwt,)
          
         Router.replace('./dasboard');
        }
    }

    return (
        <div className="h-screen font-sans bg-blue-middrak bg-cover">
        <div className="container mx-auto h-full flex flex-1 justify-center items-center">
            <div className="w-full max-w-lg">
                <div className="leading-loose">
                    <form onSubmit={doLogin} className="max-w-xl m-4 p-10 bg-gray-lightest rounded shadow-xl">
                        <p className="text-gray-hitam font-semibold text-xl text-center font-produk3">Login</p>
                        <div className="mt-2">
                            <label className="block text-base mt-2 text-gray-hitam font-serif" htmlFor="cus_email">
                                Email
                            </label>
                            <input
                                className="w-full px-5  py-1 font-produk3 text-gray-hitam bg-gray-light rounded"
                                onChange={setValue}
                                name="identifier"
                                type="text"
                                
                                placeholder="Your Email"
                                aria-label="Email"
                            />
                        </div>
                        <div className="mt-2">
                            <label className=" block text-base mt-3 text-gray-hitam font-serif" htmlFor="cus_email">
                                Password
                            </label>
                            <input
                                className="w-full px-5 py-1 font-produk3 text-gray-hitam bg-gray-light rounded"
                                onChange={setValue}
                                name="password"
                                type="password"
                                
                                placeholder="Password"
                                aria-label="Email"
                            />
                        </div>
                        <div className="mt-4">
                            <button
                                className="px-4 py-1 text-gray-lightest font-produk3 tracking-wider bg-gray-black rounded"
                                type="submit"
                            >
                                Login
                            </button>
                        </div>
                        <a
                            className="inline-block right-0  mt-2 font-produk3 align-baseline font-bold text-sm text-500 hover:text-blue-800"
                            href="../auth/register"
                        >
                            Register !!
                        </a>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
}
