import React from 'react';
import ContentLoader from 'react-content-loader';

const LoadingBlock = (props: any) => (
    <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}>
        <circle cx="125" cy="125" r="125"/>
        <rect x="0" y="287" rx="3" ry="3" width="280" height="26"/>
        <rect x="0" y="330" rx="6" ry="6" width="280" height="84"/>
        <rect x="0" y="426" rx="3" ry="3" width="63" height="31"/>
        <rect x="124" y="426" rx="30" ry="30" width="152" height="31"/>
    </ContentLoader>
);

export default LoadingBlock;
