import { useRouter } from "next/navigation";
import { utapi } from "../api/uploadthing";


export default function DocDeleteButton({ link }: { link: string }) {
    const handleSubmit = async (link: string) => {
        
        const response = await fetch(`/api/auth/deleteDoc`, {
            method: "POST",
            body: JSON.stringify({
                link: { link },
            }),
        });
        const router = useRouter();
        router.refresh();
    };
    return (
        <button className="" onClick={() => handleSubmit(link)}>Delete</button>
    )
}