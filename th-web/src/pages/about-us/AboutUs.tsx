// AboutUs.tsx
import React from 'react';
import GCN1 from "../../images/GCN1.png";
import GCN2 from "../../images/GCN2.png";
import {useTranslation} from "react-i18next";

const AboutUs: React.FC = () => {
    const { t, i18n } = useTranslation();
    return (
        <div className="bg-gray-100 container mx-auto py-10">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold text-center mb-5">{t('about_us.company')}</h2>
                <div className="grid md:grid-cols-2 gap-6 p-6 border border-gray-300 rounded-lg">
                    <div className="mb-5">
                        <div className="mb-5">
                            <p className="font-bold text-blue-500"><span className="dot"></span>{t('about_us.company_name')}</p>
                            <p>CÔNG TY TNHH VẬN TẢI QUỐC TẾ TRƯỜNG HƯNG</p>
                        </div>
                        <div className="mb-5">
                            <p className="font-bold text-blue-500"><span className="dot"></span>{t('about_us.international')}</p>
                            <p>TRUONG HUNG INTERNATIONAL TRANSPORT COMPANY LIMITED</p>
                        </div>
                        <div className="mb-5">
                            <p className="font-bold text-blue-500"><span className="dot"></span>{t('about_us.shortName')}</p>
                            <p>TRUONG HUNG INTERNATIONAL TRANSPORT CO., LTD</p>
                        </div>
                        <div className="mb-5">
                            <p className="font-bold text-blue-500"><span className="dot"></span>{t('about_us.address')}</p>
                            <p>Xóm 2, Xã Xuân Trung, Huyện Xuân Trường, Tỉnh Nam Định</p>
                        </div>
                    </div>
                    <div className="mb-5">
                        <div className="mb-5">
                            <p className="font-bold text-blue-500"><span className="dot"></span>{t('about_us.hotline')}</p>
                            <p>0912.5222.66</p>
                        </div>
                        <div className="mb-5">
                            <p className="font-bold text-blue-500"><span className="dot"></span>Email:</p>
                            <p>truonghungqtship@gmail.com</p>
                        </div>
                        <div className="mb-5">
                            <p className="font-bold text-blue-500"><span className="dot"></span>{t('about_us.hotline')}</p>
                            <p>0601051577</p>
                        </div>
                        <div className="mb-5">
                            <p className="font-bold text-blue-500"><span className="dot"></span>{t('about_us.authorizedCapital')}</p>
                            <p>45.000.000.000 đồng</p>
                        </div>
                        <div className="mb-5">
                            <p className="font-bold text-blue-500"><span className="dot"></span>{t('about_us.representative')}</p>
                            <p>Ông Trần Quang Hiển (Giám đốc)</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-3xl mx-auto mt-4">
                <h2 className="text-2xl font-bold text-center mb-5">{t('about_us.legalBase')}</h2>
                <div className="p-6 border border-gray-300 rounded-lg">
                    <p>{t('about_us.detail')}</p>
                    <div className="flex justify-center p-4">
                        <div className="max-w-full">
                            <img src={GCN1} alt="Legal 1" className="w-full h-auto rounded-lg" />
                        </div>
                        <div className="max-w-full">
                            <img src={GCN2} alt="Legal 2" className="w-full h-auto rounded-lg" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutUs;
