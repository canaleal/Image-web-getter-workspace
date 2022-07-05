import React from 'react';

interface Props {
    id: number;
    colSpan: string;
    containerlink?: string;
    imglink?: string;
    title?: string;
    isNsfw?: boolean;
}

function ImageCard({
    id, colSpan = '1', containerlink = '', imglink = '', title = '', isNsfw = false,
}: Props) {
    return (
        <>
            <a href={containerlink} target="_blank" rel="noreferrer" aria-label="Github" id={String(id)} className={` col-span-${colSpan} shadow-xl`}>
                
            <div className="img-card img-card-lg ">
                <p>{title}</p>
            </div>
            </a>


        </>
    );
}

export default ImageCard;
