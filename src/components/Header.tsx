import React from 'react';

const Header = () => {
    return (
        <header className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold">Public Library</div>
            <button className="bg-red-500 text-white px-4 py-2 rounded">Login</button>
        </header>
    );
};

export default Header;
