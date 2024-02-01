import { Editor } from '@tinymce/tinymce-react';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import TinymceEditor from './document';
import axios from 'axios';

export default async function LoginPage() {
  const session = await getServerSession();
  if (!session) {
    redirect('/');
  }
  const res = await axios.get('https://httpbin.org/get');
  console.log(res.data);
  if(res.data){
    return <TinymceEditor htmlData={''} />;
  }
  return <TinymceEditor htmlData={''} />;
}