'use client';

import { DocList, DocumentA } from "./docList";
import { FormEvent, useEffect } from "react";

export default async function DashboardPage() {

    
    useEffect(() => {
        const fetchUserSession = async () => {
            const response = await fetch(`/api/auth/dashboard`, {
                method: "GET",
            });
            // console.log({ response });
        };
        fetchUserSession().catch(console.error);
    }, []);

    const documents: DocumentA[] = [
        {
            title: 'Document 1',
            description: 'This is the first document.',
            date: 'January 1, 2023',
        },
        {
            title: 'Document 2',
            description: 'This is the second document.',
            date: 'January 2, 2023',
        },
        {
            title: 'Document 3',
            description: 'This is the third document.',
            date: 'January 3, 2023',
        },
        {
            title: 'Document DocumentDocument DocumentDocumentDocumentDocumentDocumentDocument',
            description: 'This is the third document.',
            date: 'January 3, 2023',
        },
    ];

    return (
        <div className="flex flex-col min-h-screen py-2 pt-24 px-5">
            <p className="text-4xl font-bold mb-4">My Documents</p>
            <DocList documents={documents} />
        </div>
    );
}