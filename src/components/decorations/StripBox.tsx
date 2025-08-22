import React from 'react';
import Image from 'next/image';

const StripBox = ({
    imageNumber
}: {
    imageNumber: number;
}) => {
    return (
        <div className="w-10 h-10 mx-auto mb-3 border rounded-lg overflow-hidden flex-shrink-0 backdrop-blur-xl hover:border-opacity-70 transition-all duration-500 group" style={{
            background: `linear-gradient(to bottom right, rgba(241, 208, 170, 0.1), rgba(244, 244, 232, 0.05))`,
            borderColor: 'rgba(241, 208, 170, 0.3)'
        }}>
            <div className="w-full h-full relative">
                <Image
                    src={`/strip-images/${imageNumber}.webp`}
                    alt={`Strip image ${imageNumber}`}
                    fill
                    className="object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-500"
                    sizes="40px"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+ZiHHcRt9mhPCFe6bOwCFnwS/a4XP3/D9bF1uZ6Xr8XVj8n8q2ByKBwb8p4FnMBdGw8Y4ZjpQqyZKO3T/8Y="
                />
                {/* Updated overlay effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                    background: `linear-gradient(to top, rgba(241, 208, 170, 0.2), transparent)`
                }}></div>
            </div>
        </div>
    );
}

export default React.memo(StripBox);