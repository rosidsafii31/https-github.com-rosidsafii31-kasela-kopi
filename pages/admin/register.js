import { useState } from "react";
import nookies from 'nookies';

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

export default function Register() {
const [field, setField] = useState({});
const[success, setSuccess] = useState(false);

function setValue(e){
    const target = e.target;
    const name = target.name;
    const value = target.value;


    setField({
        ...field,
        [name]:value
    });
}
    async function doRegister(e){
        e.preventDefault();

        const req = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/auth/local/register`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(field)
        });
        const res = await req.json();
        
        if (res.jwt) {
        setField({});
        setSuccess(true);
        e.target.reset();
    }
        
    }

    return (
        <div className="h-screen font-sans bg-blue-middrak bg-cover">
        <div className="container mx-auto h-full flex flex-1 justify-center items-center">
            <div className="w-full max-w-lg">
                <div className="leading-loose">
                    { success &&(<div className="bg-green-middark text-gray-lightest m-4 text-lg text-center rounded p-4 max-w-xl">
                        Selamat Register Anda Berhasil 
                    </div>
                    )}
                    <form onSubmit={doRegister} className="max-w-xl m-4 p-10 bg-gray-lightest rounded shadow-xl">
                        <p className="text-gray-hitam font-semibold text-xl text-center font-produk3">Register</p>
                        <div className>
                            <label className="block text-base mt-3 text-gray-hitam font-serif" htmlFor="cus_name">
                            Username
                            </label>
                            <input
                                className="w-full px-5 py-1 font-produk3 text-gray-hitam bg-gray-light rounded"
                                onChange={setValue}
                                name="username"
                                type="text"
                                
                                placeholder="Your Name"
                                aria-label="Name"
                            />
                        </div>
                        <div className="mt-2">
                            <label className="block text-base mt-2 text-gray-hitam font-serif" htmlFor="cus_email">
                                Email
                            </label>
                            <input
                                className="w-full px-5  py-1 font-produk3 text-gray-hitam bg-gray-light rounded"
                                onChange={setValue}
                                name="email"
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
                                Register
                            </button>
                        </div>
                        <a
                            className="inline-block right-0 align-baseline font-produk3 font-bold text-sm text-500 hover:text-blue-800"
                            href="../auth/login"
                        >
                            Already have an account ?
                        </a>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
}
