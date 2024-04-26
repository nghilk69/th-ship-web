// components/Services.js
import React from 'react';
import ImageShip from '../images/shipImage.png'
import {useTranslation} from "react-i18next";


const ServiceCard: React.FC<{ title: string; image: string; detail: string }> = ({ title, image, detail }) => {
    return (
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
            <div className="bg-blue-100 rounded-lg shadow-lg overflow-hidden relative">
                <h3 className="text-xl font-bold p-4">{title}</h3>
                <div className="aspect-w-16 aspect-h-9">
                    <img src={image} alt={title} className="object-cover object-center w-full h-full" />
                </div>
                <div className="p-4">
                    <p className="text-gray-600">{detail}</p>
                </div>
            </div>
        </div>
    );
};
const Services = () => {
    const { t } = useTranslation();
    return (
        <div className="bg-gray-100 py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-8 text-center">{t('our_services')}</h2>
                <p className="text-lg text-gray-700 mb-8 text-center">
                    {t('services_des')}
                </p>
                <div className="flex flex-wrap justify-center -mx-4">
                    <ServiceCard
                        title={t('cargo_transportation')}
                        image={ImageShip}
                        detail={t('detail_cargo')}
                    />
                    <ServiceCard
                        title={t('oil_transportation')}
                        image={ImageShip}
                        detail={t('oil_detail')}
                    />
                </div>
            </div>
        </div>
    );
}

export default Services;
