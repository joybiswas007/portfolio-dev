import React from 'react';
import { Link } from 'react-router-dom';
import MatrixEffect from './MatrixEffect';

const Matrix = () => {
    return (
        <div className="relative min-h-screen">
            <MatrixEffect />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
                <Link to="/about" className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 transition duration-300 font-mono">
                    Escape the matrix?
                </Link>
            </div>
        </div>
    );
};

export default Matrix;