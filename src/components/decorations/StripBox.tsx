import React from 'react';

const StripBox = ({
    text
}: {
    text: string;
}) => {
    return (
        <div className="w-16 h-16 mx-auto mb-6 bg-gray-600 border border-gray-500 rounded-lg overflow-hidden shadow-md flex-shrink-0">
            {/* Placeholder for photo - you can replace with actual images */}
            <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                <div className="w-8 h-8 bg-gray-300 rounded-md opacity-50 text-xs flex items-center justify-center text-gray-700 font-mono">
                    {text}
                </div>
            </div>
        </div>
    );
}

export default React.memo(StripBox);