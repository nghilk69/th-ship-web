// components/Home.js
import React from 'react';
import CardList from "./CardList";
import Services from "./Services";

const Home = () => {
    return (
        <main className="container mx-auto p-4">
            <CardList/>
            <Services/>
        </main>
    );
}

export default Home;
