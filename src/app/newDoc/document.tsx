'use client';

import { Editor } from '@tinymce/tinymce-react';
import { useEffect, useRef, useState } from 'react';
import { Editor as TinyMCEEditor } from 'tinymce';
// import { UTApi } from 'uploadthing/server';
import { utapi } from '@/app/api/uploadthing';
import { v4 } from 'uuid';
import { useDropzone } from "@uploadthing/react";
import { generateClientDropzoneAccept } from "uploadthing/client";

import { useUploadThing } from "@/utils/uploadthing";


export default function TinymceEditor() {
  const [urls, seturls] = useState<string[]>([]);

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

  const [text, setText] = useState<string>("<p>New editor.</p>");
  const editorRef = useRef<TinyMCEEditor>();

  const handleSubmit = async () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
      let htmlString = editorRef.current.getContent();
      let blob = new Blob([htmlString], { type: 'text/html' });
      let file = new File([blob], "document.html", {type: blob.type});
      let fileArray = [file];
      await startUpload(fileArray);
    }
  };

  return (
    <div className='mt-20'>
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
      <button onClick={handleSubmit}>Log editor content</button>
    </div>
  );
}
