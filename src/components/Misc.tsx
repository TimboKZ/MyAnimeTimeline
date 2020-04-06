/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */
import React from 'react';

interface LinksProps {
    links: [string, string][];
}

export const Links = React.memo<LinksProps>(({links}) => {
    const linkComponents = [];
    for (let i = 0; i < links.length; ++i) {
        const [url, description] = links[i];
        const isLast = i === links.length - 1;
        linkComponents.push(<React.Fragment key={`link-${i}`}>
            <a href={url}>{description}</a>{isLast ? '' : ', '}
        </React.Fragment>);
    }
    return <p>Links if something is broken: {linkComponents}</p>;
});
