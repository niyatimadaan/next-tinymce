import { DocumentCardA } from "./documentCard";

export interface DocumentA {
  title: string;
  description: string;
  date: string;
}

interface DocumentsListProps {
  documents: DocumentA[];
}

export const DocList: React.FC<DocumentsListProps> = ({ documents }) => {
  return (
    <div className="flex flex-wrap">
      {documents.map((document) => (
        <DocumentCardA key={document.title} {...document} />
      ))}
    </div>
  );
};