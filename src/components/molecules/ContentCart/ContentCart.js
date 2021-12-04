import React from 'react'
import { BackgroundImage, Content, ContentCartContainer, Text, Title } from './ContentCart.styles'

export default function ContentCart({ contentData }) {
    return (
        <>
            {
                contentData.map((data, index) => (
                    <ContentCartContainer key={index}>
                        <Content>
                            <Title>{data.category}</Title>
                            <Text>{data.point}</Text>
                        </Content>
                        <BackgroundImage src={data.image} alt={data.imageAlt} />
                    </ContentCartContainer>
                ))
            }
        </>
    )

}
