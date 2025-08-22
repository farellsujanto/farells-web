import React from 'react';
import Image from 'next/image';

const StripBox = ({
    imageNumber
}: {
    imageNumber: number;
}) => {
    return (
        <div className="w-10 h-10 mx-auto mb-3 bg-gradient-to-br from-amber-400/10 to-amber-600/10 border border-amber-400/30 rounded-lg overflow-hidden flex-shrink-0 backdrop-blur-xl hover:border-amber-400/50 transition-all duration-500 group">
            <div className="w-full h-full relative">
                <Image
                    src={`/strip-images/${imageNumber}.webp`}
                    alt={`Strip image ${imageNumber}`}
                    fill
                    className="object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-500"
                    sizes="40px"
                />
                {/* Luxury overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-amber-400/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
        </div>
    );
}

export default React.memo(StripBox);