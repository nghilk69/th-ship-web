import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Services from './components/Services';
import Home from './components/Home';

import Header from './components/Header';
import Description from "./components/Description";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardList from './components/CardList';
import Footer from "./components/Footer";
import LanguageProvider from "./LanguageProvider";
import {useTranslation} from "react-i18next";
import AboutUs from "./pages/about-us/AboutUs";
import Letter from "./pages/letter/Letter";
import FieldAndNetwork from "./pages/field-network/FieldAndNetwork";
import VisionMission from "./pages/vision-mission/VIsionMission";

function App() {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    };
  return (
      <Router>
          <LanguageProvider>
          <div className="min-h-screen flex flex-col bg-gray-100">
              <div
                  className="header header-bg bg-cover bg-center wrapper"
              >
                  <Header changeLanguage={changeLanguage} />
                  {/*<Description />*/}
              </div>
              <div className="relative">
                  {/*<CardList />*/}
                  <Route path="/" exact component={Home} />
                  <Route path="/about-us" component={AboutUs} />
                  <Route path="/field-network" component={FieldAndNetwork} />
                  <Route path="/vision" component={VisionMission} />
                  {/*<Route path="/resources" component={Resources} />*/}
                  <Route path="/letter" component={Letter} />
                  {/*<Route path="/company" component={Company} />*/}
                  <Footer/>
              </div>
          </div>
          </LanguageProvider>
      </Router>
  );
}

export default App;
