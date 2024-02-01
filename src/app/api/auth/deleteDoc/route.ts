import { sql } from "@vercel/postgres";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { v4 } from "uuid";
import { utapi } from "../../uploadthing";

export async function DELETE(request: Request) {
    let { link } = await request.json();
    await utapi.deleteFiles(link);
    try {
       if (!link) throw new Error("link required");
   
       await sql`
           DELETE FROM docs WHERE link = ${link};`;
    } catch (error) {
       return NextResponse.json({ error }, { status: 500 });
    }
   
    const docs = await sql`SELECT * FROM docs;`;
    return NextResponse.json({ docs }, { status: 200 });
   }
   