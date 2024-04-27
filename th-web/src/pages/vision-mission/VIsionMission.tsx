// VisionMission.tsx
import React from 'react';
import VisionImage from "../../images/vision1.svg";
import MissionImage from "../../images/mission.svg";
import CoreValueImage from "../../images/core1.svg";
import {useTranslation} from "react-i18next";

const VisionMission: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div className="bg-gray-100 container mx-auto py-10">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-5 uppercase">{t('visionAndStrengths.title')}</h2>
                <div className="grid md:grid-cols-2 gap-6 p-6">
                    <div className="p-4 bg-blue-500 rounded-2xl">
                        <div className="p-4 mb-4">
                            <div className="flex items-center mb-2 pb-6 border-b-2 border-b-white">
                                <img src={VisionImage} alt="Vision" className="w-16 h-auto mr-4" />
                                <h3 className="text-3xl font-semibold text-white uppercase">{t('visionAndStrengths.vision')}</h3>
                            </div>
                            <p className="border border-gray-500 rounded-2xl p-4 text-white text-xl">{t('visionAndStrengths.vision_description')}</p>
                        </div>
                        <div className="p-4 mb-4">
                            <div className="flex items-center mb-2 pb-6 border-b-2 border-b-white">
                                <img src={MissionImage} alt="Vision" className="w-16 h-auto mr-4" />
                                <h3 className="text-3xl font-semibold text-white uppercase">{t('visionAndStrengths.mission')}</h3>
                            </div>
                            <p className="border border-gray-500 rounded-2xl p-4 text-white text-xl">{t('visionAndStrengths.mission_description')}</p>
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="p-4 mb-4">
                            <div className="flex items-center mb-2 pb-6 border-b-2 border-b-gray-600">
                                <img src={CoreValueImage} alt="Vision" className="w-16 h-auto mr-4" />
                                <h3 className="text-3xl font-semibold text-blue-500 uppercase">{t('visionAndStrengths.core_values')}</h3>
                            </div>
                            <p className="border border-gray-500 rounded-2xl px-4 py-6 text-gray-700 text-2xl mt-3">{t('visionAndStrengths.core_values_description')}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="p-4">
                        <div className="border border-gray-300 rounded-lg p-6 mb-4">
                            <div className="flex items-center mb-2">
                                <h3 className="text-3xl font-semibold text-center uppercase text-blue-500">{t('visionAndStrengths.strengths')}</h3>
                            </div>
                            <p className="text-gray-700 text-2xl mt-8">{t('visionAndStrengths.strengths_description')}</p>
                            <ul className="list-disc ml-8 text-gray-700 text-2xl">
                                <li className="mb-2"> {t('visionAndStrengths.strength1')}</li>
                                <li className="mb-2"> {t('visionAndStrengths.strength2')}</li>
                                <li className="mb-2"> {t('visionAndStrengths.strength3')}</li>
                                <li className="mb-2"> {t('visionAndStrengths.strength4')}</li>
                                <li className="mb-2"> {t('visionAndStrengths.strength5')}</li>
                            </ul>
                            <p className="text-gray-700 text-2xl mt-8">{t('visionAndStrengths.strengths_description2')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisionMission;
