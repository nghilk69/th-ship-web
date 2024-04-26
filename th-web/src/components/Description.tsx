import {useEffect} from "react";
import {useTranslation} from "react-i18next";

const Description = () => {
    const { t } = useTranslation();
    useEffect(() => {

    }, []);

    return (
        <div className=" bg-cover bg-center py-16 text-white h-full flex flex-col justify-center description">
            <div className="container mx-auto px-4 text-xl">
                <h2 className="text-4xl font-bold mb-4">{t('about_us.title')}</h2>
                <p>
                    {t('about_us.description')}
                </p>
            </div>
        </div>
    );
};

export default Description;
