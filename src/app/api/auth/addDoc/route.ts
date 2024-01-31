import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import { v4 } from 'uuid';
 
export async function GET(request: Request) {
//   const { searchParams } = new URL(request.url);
  const { name, email, link, access } = await request.json();
  const id = v4();
 
  try {
    if (!email) throw new Error('Log In required');
    await sql`
        INSERT INTO docs (id ,name, email , link, access)
        VALUES ( ${id},${name}, ${email}, ${link}, ${access});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
 
  const docs = await sql `SELECT * FROM docs;`;
  return NextResponse.json({ docs }, { status: 200 });
}