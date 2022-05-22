import React, {FunctionComponent} from 'react';
import {Headline} from "..";

interface Props {
    title?: string,
    img?: string
}

const Loading: FunctionComponent<Props> = ({title = "Загрузка...", img = ""}) => {

    return (
        <>
            <img src={img} alt={''} width={128}/>
            <Headline>{title}</Headline>
        </>
    );
};

export default Loading;
