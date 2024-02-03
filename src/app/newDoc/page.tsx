'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import TinymceEditor from './document';

export default function NewDocPage() {
  // debugger;
 const router = useRouter();
 const { id } = router.query;
 const [html, setHtml] = useState('');
 console.log(id);

 useEffect(() => {
  debugger;
    if (id) {
      fetch(`https://utfs.io/f/${id}.html`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.text();
        })
        .then((data) => setHtml(data))
        .catch((error) => {
          console.error('There has been a problem with your fetch operation:', error);
        });
    }
 }, [id]);

 return <TinymceEditor htmlData={html} />;
}