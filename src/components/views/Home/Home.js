import React from 'react';
import { contentData } from '../../../data/contentData';
import { PageContainer } from '../../atoms';
import ContentCart from '../../molecules/ContentCart/ContentCart';
import { HeroView } from './Home.styles';



const Home = (props) => {
    return (
        <PageContainer>
            <HeroView>
                <ContentCart contentData={contentData} />
            </HeroView>
        </PageContainer>
    );
};

export default Home;