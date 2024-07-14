'use client'

import React, { useState } from 'react';
import SearchBar from '@/components/SearchBar';
import Results from '@/components/Results';

interface Book {
    title: string;
    author: string;
    year: string;
    image?: string | null;
    description: string;
    type?: string;
}

const Library: React.FC = () => {
    const [books, setBooks] = useState<Book[]>([]);

    return (
        <div className="container mx-auto">
            <SearchBar setBooks={setBooks} />
            <Results books={books} />
        </div>
    );
};

export default Library;
