import { Editor } from '@tinymce/tinymce-react';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import TinymceEditor from './document';

export default async function LoginPage() {
  const session = await getServerSession();
  if (!session) {
    redirect('/');
  }
  return <TinymceEditor />;
}