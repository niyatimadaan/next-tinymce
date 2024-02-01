'use client';

import { useRouter } from "next/navigation";
import TinymceEditor from "../newDoc/document";
import axios from "axios";


// export const DocOpenButton: React.FC<string> = (link) => {
export default function DocOpenButton({ link }: { link: string }) {
    const router = useRouter();
    const handleSubmit = async (link: string) => {
        const response = await fetch(link, {
            method: "GET",
        });
        const html = await response.text();
        console.log(html);
        const res = await axios.put('https://httpbin.org/put', { html: html });

        router.push("/newDoc");

    };
    return (
        <button className="mr-4" onClick={() => handleSubmit(link)}>Open</button>

    )
}
