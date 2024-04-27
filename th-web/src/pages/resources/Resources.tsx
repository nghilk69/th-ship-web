import React from "react";
import Album from "../../components/Album";
import { images } from "../../images/albums"; // Import mảng ảnh từ file index.ts

const Resources = () => {
    return <Album photos={images} />;
};

export default Resources;
