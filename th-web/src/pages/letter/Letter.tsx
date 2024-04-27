// Letter.tsx
import React from 'react';
import Letter1 from "../../images/letter1.jpg";
import Letter2 from "../../images/letter2.jpg";
import Letter3 from "../../images/letter3.jpg";
import Letter4 from "../../images/letter4.png";
import {useTranslation} from "react-i18next";

const Letter: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div className="bg-gray-100 container mx-auto py-10">
            <div className="max-w-3xl mx-auto">
                <div className="mb-5">
                    <h2 className="text-2xl font-bold text-center mb-5">{t('letter.title')}</h2>
                    <div className="grid md:grid-cols-2 gap-6 px-4">
                        <div className="mb-5">
                            <div className="flex flex-wrap -mx-2">
                                <img src={Letter1} alt="Letter 1" className="w-1/2 md:w-full px-2 mb-10 rounded-img-letter" />
                                <img src={Letter2} alt="Letter 2" className="w-1/2 md:w-full px-2 mb-10 rounded-img-letter" />
                                <img src={Letter3} alt="Letter 3" className="w-1/2 md:w-full px-2 mb-10 rounded-img-letter" />
                                <img src={Letter4} alt="Letter 4" className="w-1/2 md:w-full px-2 mb-10 rounded-img-letter" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">{t('letter.dear')}</h3>
                            <p className="mb-3 text-gray-800 text-xl">
                                {t('letter.content1')}
                            </p>
                            <p className="mb-3 text-gray-800 text-xl">
                                {t('letter.content2')}
                            </p>
                            <p className="mb-3 text-gray-800 text-xl">
                                {t('letter.content3')}
                            </p>
                            <p className="mb-3 text-gray-800 text-xl">
                                {t('letter.content4')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Letter;
