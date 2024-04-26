import Ship1 from '../images/ship1.jpg';
import Ship2 from '../images/ship2.jpg';
import Ship3 from '../images/ship3.jpg';
import Ship4 from '../images/ship4.jpg';
import React, {useState} from "react";
import Slider from "react-slick";
import {useTranslation} from "react-i18next";

// @ts-ignore
const NextArrow: React.FC<any> = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className + " absolute right-0 top-1/2 transform -translate-y-1/2 mr-3 bg-blue-500"}
            style={{ ...style, zIndex: 1, cursor: "pointer" }}
            onClick={onClick}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                />
            </svg>
        </div>
    );
};

const PrevArrow: React.FC<any> = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className + " absolute left-0 top-1/2 transform -translate-y-1/2 ml-3 bg-blue-500 rounded-full p-2"}
            style={{ ...style, zIndex: 1, cursor: "pointer" }}
            onClick={onClick}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                />
            </svg>
        </div>
    );
};

// @ts-ignore

const Card = ({ imageUrl, title, description }) => {
    return (
        <div className="px-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden h-full card">
                <div className="bg-blue-100 h-full flex flex-col justify-between relative">
                    <img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="p-4 absolute bottom-0 left-0 right-0">
                        <h3 className="text-2xl font-bold mb-1 text-white">{title}</h3>
                    </div>
                </div>
            </div>
        </div>
    );

};
const CardList = () => {
    const { t } = useTranslation();
    const cardInfo = [
        { imageUrl: Ship1, title: "Trường Hưng 18", description: "Description 1" },
        { imageUrl: Ship2, title: "Grand Family 56", description: "Description 2" },
        { imageUrl: Ship3, title: "Grand Family 66", description: "Description 3" },
        { imageUrl: Ship4, title: "Grand Family 156", description: "Description 4" },
        { imageUrl: Ship1, title: "Grand Family 68", description: "Description 5" },
        { imageUrl: Ship4, title: "Huy Hoàng 66", description: "Description 6" },
        { imageUrl: Ship3, title: "Grand Family 168", description: "Description 7" }
    ];


    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 768, // Độ rộng tối đa của màn hình di động
                settings: {
                    slidesToShow: 2 // Hiển thị 2 card trên mỗi dòng trên màn hình di động
                }
            }
        ]
    };

    return (
        <div className="bg-gray-100 py-8 border-b-blue-200 border-b-2">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-8 text-center">{t('our_products')}</h2>
                <Slider {...settings}>
                    {cardInfo.map((card, index) => (
                        <Card key={index} {...card} />
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default CardList;
