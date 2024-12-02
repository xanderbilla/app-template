import React from 'react';

interface LoadingProps {
    size?: 'small' | 'medium' | 'large';
}

const sizeClasses = {
    small: 'h-8 w-8 border-t-2',
    medium: 'h-16 w-16 border-t-4',
    large: 'h-32 w-32 border-t-8',
};

const Loading: React.FC<LoadingProps> = ({ size = 'small' }) => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className={`animate-spin rounded-full ${sizeClasses[size]} border-gray-900`}></div>
        </div>
    );
};

export default Loading;