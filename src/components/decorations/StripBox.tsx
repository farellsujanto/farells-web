import React from 'react';

const StripBox = ({
    text
}: {
    text: string;
}) => {
    return (
        <div className="w-12 h-12 mx-auto mb-4 bg-gray-800/20 border border-gray-700/20 rounded-lg overflow-hidden flex-shrink-0 backdrop-blur-sm">
            {/* Minimalist placeholder */}
            <div className="w-full h-full bg-gray-800/10 flex items-center justify-center">
                <div className="w-6 h-6 bg-gray-700/30 rounded opacity-40 text-xs flex items-center justify-center text-gray-500 font-light">
                    {text}
                </div>
            </div>
        </div>
    );
}

export default React.memo(StripBox);