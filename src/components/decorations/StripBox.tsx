import React from 'react';
import Image from 'next/image';

const StripBox = ({
    imageNumber
}: {
    imageNumber: number;
}) => {
    return (
        <div className="w-12 h-12 mx-auto mb-4 bg-gray-800/20 border border-gray-700/20 rounded-lg overflow-hidden flex-shrink-0 backdrop-blur-sm">
            <div className="w-full h-full relative">
                <Image
                    src={`/strip-images/${imageNumber}.webp`}
                    alt={`Strip image ${imageNumber}`}
                    fill
                    className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                    sizes="48px"
                />
            </div>
        </div>
    );
}

export default React.memo(StripBox);