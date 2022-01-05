import { useState } from "react";
import styles from "./Form.module.css";
import { parseCookies } from "nookies";

export default function ImageUpload({sportNewsId, imageUploaded}) {
    console.log(imageUploaded);

    const [images, setImage] = useState(null);

    const handleSubmit = async(e,ctx) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("files", images);
        formData.append("ref", 'artikel');
        formData.append("refId", sportNewsId);
        formData.append("field", 'thumbnail');

        const jwt = parseCookies(ctx).token
        const res = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/upload `, {
            method:"POST",
            body: formData,
            headers: {
                Authorization: `Bearer ${jwt}`,
                
            },
        });

        if(res.ok) {
            imageUploaded();
            
        }
    };


    const handleFileChange =(e) => {
        setImage(e.target.files[0]);
       
    };



    return (
        <div className={styles.form}>
            <h4>Upload Sport News Image</h4>
            <form onSubmit={handleSubmit}>
                <div className={styles.file}>
                    <input type="file" onChange={handleFileChange}/>
                </div>
                <input type="submit" value="Upload" clasname="px-4 py-2 text-gray-lightest font-produk3 tracking-wider bg-gray-black rounded"/>
            </form>
        </div>
    )
}