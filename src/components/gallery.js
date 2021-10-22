import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import Gallery from './section-components/gallery';
import Subscribe from './section-components/subscribe';
import Footer from './global-components/footer';

const TourListPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Gallery"  />
        <Gallery />
        <Subscribe />
        <Footer />
    </div>
}

export default TourListPage

