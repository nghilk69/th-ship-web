import React from "react";

// @ts-ignore
const Album = ({ photos }) => {
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-4">Album</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {photos.map((photo: any, index: any) => (
                    <div
                        key={index}
                        className="relative overflow-hidden group"
                        style={{ aspectRatio: "4/3" }}
                    >
                        <img
                            src={photo}
                            alt={`photo-${index}`}
                            className="w-full h-full object-cover transition duration-300 transform group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition duration-300 group-hover:opacity-50 flex items-center justify-center">
                            <p className="text-white text-lg font-bold">Photo {index + 1}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Album;
