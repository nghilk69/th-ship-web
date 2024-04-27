import {Link} from "react-router-dom";
import React from "react";
import {useTranslation} from "react-i18next";


const Footer: React.FC = () => {
    const { t, i18n } = useTranslation();
    return (
        <footer className="footer bg-blue-900 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">{t('footer.contactus')}</h3>
                        <p>Xóm 2, Xã Xuân Trung, Huyện Xuân Trường, Tỉnh Nam Định</p>
                        <p>truonghungqtship@gmail.com</p>
                        <p>0912.5222.66</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">{t('footer.payment')}</h3>
                        <p>PayPal</p>
                        <p>Visa</p>
                        <p>MasterCard</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">{t('footer.contactus')}</h3>
                        <ul>
                            <li>
                                <Link to="/">{t('header.navigation.home')}</Link>
                            </li>
                            <li>
                                <Link to="/about-us">{t('header.navigation.aboutUs')}</Link>
                            </li>
                            <li>
                                <Link to="/field-network">{t('header.navigation.field-network')}</Link>
                            </li>
                            <li>
                                <Link to="/vision">{t('header.navigation.vision-strengths')}</Link>
                            </li>
                            <li>
                                <Link to="/resources">{t('header.navigation.resources')}</Link>
                            </li>
                            <li>
                                <Link to="/letter">{t('header.navigation.letter')}</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 15s1-1 2-1h2M7 10V7a5 5 0 0110 0v3"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 15s-1 1-2 1h-2M17 10V7a5 5 0 00-10 0v3"
                                    />
                                </svg>
                            </a>
                            <a href="#">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                    />
                                </svg>
                            </a>
                            <a href="#">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 11a9 9 0 0118 0c0 2.686-1.181 5.141-3.055 6.829-1.842 1.675-4.382 2.671-7.145 2.671-2.762 0-5.302-.996-7.145-2.671C4.181 16.141 3 13.686 3 11zm9 0v-1m0 0V8m0 3h3m-3 0H8m7 7a9 9 0 01-7.949-4.676m15.898 0A9 9 0 0112 18"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
