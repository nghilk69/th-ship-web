// components/Home.js
import React, {useState} from 'react';
import flagVietnam from "../images/vnFlag.png";
import flagUK from "../images/enflag.png";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

// @ts-ignore
const Header = ({ changeLanguage }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { t, i18n } = useTranslation();
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="bg-blue-500 py-4 relative bg-opacity-0">
            <div className="px-4 flex justify-between items-center">
                <div className="flex items-center">
                    <Link to="/" className="text-white text-2xl font-bold">
                        Logo
                    </Link>
                    <span className="text-white ml-2 hidden md:inline-block">
            Company Name
          </span>
                </div>
                <div className="flex items-center">
                    <nav className="hidden md:flex items-center">
                        <ul className="flex text-white">
                            <li className="mr-4 font-bold text-xl">
                                <Link to="/">{t('header.navigation.home')}</Link>
                            </li>
                            <li className="mr-4 font-bold text-xl">
                                <Link to="/about-us">{t('header.navigation.aboutUs')}</Link>
                            </li>
                            <li className="mr-4 font-bold text-xl">
                                <Link to="/field-network">{t('header.navigation.field-network')}</Link>
                            </li>
                            <li className="mr-4 font-bold text-xl">
                                <Link to="/vision">{t('header.navigation.vision-strengths')}</Link>
                            </li>
                            <li className="mr-4 font-bold text-xl">
                                <Link to="/resources">{t('header.navigation.resources')}</Link>
                            </li>
                            <li className="mr-4 font-bold text-xl">
                                <Link to="/letter">{t('header.navigation.letter')}</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="flex ml-5 mr-2">
                        <img
                            src={flagVietnam}
                            alt="Vietnam Flag"
                            className="w-6 h-auto cursor-pointer mr-2"
                            onClick={() => changeLanguage("vi")}
                        />
                        <img
                            src={flagUK}
                            alt="UK Flag"
                            className="w-6 h-auto cursor-pointer"
                            onClick={() => changeLanguage("en")}
                        />
                    </div>
                    <button
                        className="text-white block md:hidden"
                        onClick={toggleMenu}
                    >
                        <svg
                            className="w-6 h-6 fill-current"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
                            />
                        </svg>
                    </button>
                </div>
                {menuOpen && (
                    <nav className="md:hidden absolute bg-blue-500 w-full text-center top-16">
                        <ul className="text-white">
                            <li className="py-2">
                                <Link to="/" onClick={toggleMenu}>
                                    {t('header.navigation.home')}
                                </Link>
                            </li>
                            <li className="py-2 md:block">
                                <Link to="/about-us" onClick={toggleMenu}>
                                    {t('header.navigation.aboutUs')}
                                </Link>
                            </li>
                            <li className="py-2 md:block">
                                <Link to="/field-network" onClick={toggleMenu}>
                                    {t('header.navigation.field-network')}
                                </Link>
                            </li>
                            <li className="py-2 md:block">
                                <Link to="/vision" onClick={toggleMenu}>
                                    {t('header.navigation.vision-strengths')}
                                </Link>
                            </li>
                            <li className="py-2 md:block">
                                <Link to="/resources" onClick={toggleMenu}>
                                    {t('header.navigation.resources')}
                                </Link>
                            </li>
                            <li className="py-2 md:block">
                                <Link to="/support" onClick={toggleMenu}>
                                    {t('header.navigation.letter')}
                                </Link>
                            </li>
                        </ul>
                    </nav>
                )}
            </div>
        </header>
    );
}

export default Header;
