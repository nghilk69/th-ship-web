import React from "react";
import GR56 from "../../images/gr-56-1.png";
import Field1 from "../../images/field1.jpg"
import Field2 from "../../images/field2.png"
import Field3 from "../../images/field3.jpg"
import Field4 from "../../images/field4.jpg"
import Field5 from "../../images/field5.jpg"
import Field6 from "../../images/field6.jpg"
import {useTranslation} from "react-i18next";


// @ts-ignore
const FieldCard = ({ image, title, detail }) => {
    return (
        <div className="border border-gray-300 p-4 rounded-sm">
            <div className="p-4 flex flex-col items-center">
                <div className="mb-4">
                    <img
                        src={image}
                        alt="placeholder"
                        className="w-full h-48 object-cover rounded-img-letter"
                    />
                </div>
                <div>
                    <p className="text-lg">
                        <span className="font-bold">{title}</span> {detail}
                    </p>
                </div>
            </div>
        </div>
    );
};

const FieldAndNetwork = () => {
    const { t } = useTranslation();
    return (
        <div className="bg-gray-100">
            <div className="container mx-auto p-8">
                <h1 className="text-3xl font-bold mb-4">{t('fieldAndNetwork.field')}</h1>
                <div className="flex flex-col md:flex-row items-center md:space-x-8 bg-blue-500 rounded-img-field">
                    <div className="w-full md:w-1/2 rounded-img-letter bg-gray-100 p-2">
                        <img
                            src={GR56}
                            alt="placeholder"
                            className="rounded-img-letter"
                        />
                    </div>
                    <div className="w-full md:w-1/2 text-white p-2">
                        <p className="text-xl p-4">
                            {t('fieldAndNetwork.field_description')}
                        </p>
                    </div>
                </div>
                <div className="mt-8">
                    <div className="bg-blue-500 text-white pb-8">
                        <div className="m-8 p-4">
                            <p className="text-lg font-bold mb-4">
                                {t('fieldAndNetwork.fieldLabel')}
                            </p>
                            <p className="p-6 text-xl border border-gray-300 rounded-lg">
                                {t('fieldAndNetwork.field_des2')}
                            </p>
                        </div>
                    </div>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <FieldCard
                            image={Field1}
                            title={t('fieldAndNetwork.field1')}
                            detail={t('fieldAndNetwork.field1des')}
                        />
                        <FieldCard
                            image={Field2}
                            title={t('fieldAndNetwork.field2')}
                            detail={t('fieldAndNetwork.field2des')}
                        />
                        <FieldCard
                            image={Field3}
                            title={t('fieldAndNetwork.field3')}
                            detail={t('fieldAndNetwork.field3des')}
                        />
                        <FieldCard
                            image={Field4}
                            title={t('fieldAndNetwork.field4')}
                            detail=""
                        />
                        <FieldCard
                            image={Field5}
                            title={t('fieldAndNetwork.field5')}
                            detail={t('fieldAndNetwork.field5des')}
                        />
                        <FieldCard
                            image={Field6}
                            title={t('fieldAndNetwork.field6')}
                            detail={t('fieldAndNetwork.field6des')}
                        />
                    </div>
                </div>
                <div className="mb-8 mt-8">
                    <h2 className="text-3xl font-bold mb-4">{t('fieldAndNetwork.network')}</h2>
                    <div className="border-2 border-blue-500 rounded-tl-3xl rounded-br-3xl p-8 mb-4">
                        <p className="text-lg font-bold">
                            {t('fieldAndNetwork.network_description')}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            t('fieldAndNetwork.network1'),
                            t('fieldAndNetwork.network2'),
                            t('fieldAndNetwork.network3'),
                            t('fieldAndNetwork.network4'),
                            t('fieldAndNetwork.network5'),
                            t('fieldAndNetwork.network6'),
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="border border-gray-300 rounded-lg p-4"
                            >
                                <p className="text-lg">
                                    <span className="bg-orange-200 rounded-full px-2 mr-2">{index + 1}</span> {item}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FieldAndNetwork;
