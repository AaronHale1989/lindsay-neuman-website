import React from 'react'

import HomepageBanner from '../../components/homepage-banner/homepage-banner.component'
import Footer from '../../components/footer/footer.component';

import '../homepage/homepage.styles.scss';

const HomePage = () => (
    <div className='homepage'>
        <HomepageBanner/>
        <Footer/>
    </div>
);

export default HomePage;
