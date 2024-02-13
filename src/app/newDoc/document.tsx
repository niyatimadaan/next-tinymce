'use client';

import { Editor } from '@tinymce/tinymce-react';
import { useEffect, useRef, useState } from 'react';
import { Editor as TinyMCEEditor } from 'tinymce';
import { useUploadThing } from "@/utils/uploadthing";
import DeleteFunction from '../dashboard/deleteFunction';


export default function TinymceEditor({ htmlData , id }: { htmlData: string , id : string}) {
  const [urls, seturls] = useState<string[]>([]);
  const [text, setText] = useState<string>(htmlData);
  const editorRef = useRef<TinyMCEEditor>();
  // debugger;

  useEffect(() => {
    if (urls.length > 0) {
      fetch(`/api/auth/addDoc`, {
        method: "POST",
        body: JSON.stringify({
          name: "Document",
          email: "email",
          link: urls[0],
          access: "auth"
        }),
      });
    }
  }, [urls]);


  const { startUpload, permittedFileInfo } = useUploadThing(
    "textUploader",
    {
      onClientUploadComplete: (responses) => {
        responses.forEach((response) => {
          // seturls(prevUrls => [...prevUrls, response.serverData.fileUrl]);
          seturls([response.url]);
        });
      },
      onUploadError: () => {
        alert("error occurred while uploading");
      },
      onUploadBegin: () => {
        // alert("upload has begun");
      },
    },
  );



  const handleSubmit = async () => {
    if(id != ""){
      const link = "https://utfs.io/f/"+ id +".html";
      console.log(link);
      DeleteFunction(id);
    }
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
      let htmlString = editorRef.current.getContent();
      let blob = new Blob([htmlString], { type: 'text/html' });
      let file = new File([blob], "document.html", { type: blob.type });
      let fileArray = [file];
      await startUpload(fileArray);
    } 
  };

  return (
    <p className='mt-20'>
      <Editor
        apiKey="ebtmhhfkthrnkh4pgg688wablf9s5g49rei5p64zsxc66t3d"
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue={text}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "code",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
      <button onClick={handleSubmit}  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Save</button>
    </p>
  );
}
