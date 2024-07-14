import React, { useState } from 'react';
import axios from 'axios';

interface Book {
  title: string;
  author: string;
  year: string;
  image?: string | null;
  description: string;
  type?: string; // Added optional 'type' field for categorization
}

interface SearchBarProps {
  setBooks: React.Dispatch<React.SetStateAction<Book[]>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ setBooks }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`);
      const currentYear = new Date().getFullYear();
      const books = response.data.items.map((item: any) => {
        const year = item.volumeInfo.publishedDate ? parseInt(item.volumeInfo.publishedDate.split('-')[0]) : 0;
        const type = year >= currentYear - 2 ? 'New Arrival' : 'Trending';

        return {
          title: item.volumeInfo.title,
          author: item.volumeInfo.authors ? item.volumeInfo.authors.join(', ') : 'Unknown Author',
          year: item.volumeInfo.publishedDate ? item.volumeInfo.publishedDate.split('-')[0] : 'Unknown Year',
          image: item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : null,
          description: item.volumeInfo.description || 'No description available',
          type,
        };
      });
      setBooks(books);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  return (
    <div className="flex justify-center my-4">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search the books available in library"
        className="border rounded-l px-4 py-2 w-1/2"
      />
      <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 rounded-r">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
