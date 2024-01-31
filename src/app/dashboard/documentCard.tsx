interface DocumentCardProps {
  access: string;
  docname: string;
  email: string;
  id: string;
  link: string;
}

export const DocumentCardA: React.FC<DocumentCardProps> = ({ access, docname, email, id, link }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-md border border-gray-200 mr-4 mb-4 max-w-md">
      <h2 className="text-xl font-bold mb-6 overflow-ellipsis overflow-hidden whitespace-nowrap">{docname}</h2>
      <p className="text-gray-500 mb-2">{access}</p>
      <p className="text-gray-500 mb-2">{id}</p>
    </div>
  );
};