import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';


import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';

import Prof from '../blocks/peopleCard/Prof'
import ProfData from '../data/people/prof.json'

import News from '../blocks/news/News'
import NewsInfoData from '../data/news/newsinfo.json';

import PublicationTable from '../blocks/publicationTable/PublicationTable';

import Exp from "../blocks/experience/Exp"
import ExpInfoData from '../data/experiment/expInfo.json';

import Edu from "../blocks/education/Edu"
import EduInfoData from '../data/education/eduInfo.json';

import Ind from "../blocks/industry/Ind"
import IndInfoData from '../data/industry/indInfo.json';

const Home = () => {
    document.body.classList.add( 'home' );
    document.body.classList.add( 'bg-fixed' );
    document.body.classList.add( 'bg-line' );
    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>SeungHeon Doh | MIR, ML/DL Researcher</title>
                <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎹</text></svg>"></link>
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
                <meta name="description" content="Music informational retrieval, Machine learning, Deep learning" />
                <meta name="keywords" content="music information retrieval, MIR, machine learning, ML, deep learning, DL, SeungHeon Doh" />
                <meta name="robots" content="index, follow" />
                <meta name="googlebot" content="index, follow" />
                <meta name="google" content="notranslate" />
                <meta name="format-detection" content="telephone=no" />
            </MetaTags>

            <Header />

            <main id="main" className="site-main">
                <Prof ProfData={ProfData}/>
                <News NewsInfoData = {NewsInfoData}/>
                <PublicationTable/>
                <Ind IndInfoData = {IndInfoData}/>
                <Edu EduInfoData = {EduInfoData}/>
                <Exp ExpInfoData = {ExpInfoData}/>
            </main>

            <Footer />
        </Fragment>
    );
};

export default Home;
