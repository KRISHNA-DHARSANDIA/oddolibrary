import React from 'react';

interface Book {
    title: string;
    author: string;
    year: string;
    image?: string | null;
    description: string;
    type?: string; // Added optional 'type' field for categorization
}

interface ResultsProps {
    books: Book[];
}

const Results: React.FC<ResultsProps> = ({ books }) => {
    const newArrivals = books.filter(book => book.type === 'New Arrival');
    const trending = books.filter(book => book.type === 'Trending');

    return (
        <div className="flex flex-col md:flex-row justify-between">
            <div className="w-full md:w-1/2 pr-4">
                <h2 className="text-xl font-bold mb-2">New Arrivals</h2>
                {newArrivals.map((book, index) => (
                    <div key={index} className="border rounded p-4 my-2 flex">
                        <div className="w-1/4">
                            {book.image ? <img src={book.image} alt={book.title} className="w-full" /> : 'No Image'}
                        </div>
                        <div className="w-3/4 pl-4">
                            <h3 className="font-semibold">{book.title}</h3>
                            <p className="text-sm text-gray-600">{book.author}</p>
                            <p className="text-sm text-gray-600">{book.year}</p>
                            <p className="text-sm">{book.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-full md:w-1/2 pl-4">
                <h2 className="text-xl font-bold mb-2">Trending</h2>
                {trending.map((book, index) => (
                    <div key={index} className="border rounded p-4 my-2 flex">
                        <div className="w-1/4">
                            {book.image ? <img src={book.image} alt={book.title} className="w-full" /> : 'No Image'}
                        </div>
                        <div className="w-3/4 pl-4">
                            <h3 className="font-semibold">{book.title}</h3>
                            <p className="text-sm text-gray-600">{book.author}</p>
                            <p className="text-sm text-gray-600">{book.year}</p>
                            <p className="text-sm">{book.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Results;
