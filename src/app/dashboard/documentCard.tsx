interface DocumentCardProps {
    title: string;
    description: string;
    date: string;
  }
  
  export const DocumentCardA: React.FC<DocumentCardProps> = ({ title, description, date }) => {
    return (
      <div className="bg-white shadow-md p-4 rounded-md border border-gray-200 mr-4 mb-4 max-w-md">
        <h2 className="text-xl font-bold mb-6 overflow-ellipsis overflow-hidden whitespace-nowrap">{title}</h2>
        <p className="text-gray-500 mb-2">{description}</p>
        <p className="text-gray-500 mb-2">{date}</p>
      </div>
    );
  };