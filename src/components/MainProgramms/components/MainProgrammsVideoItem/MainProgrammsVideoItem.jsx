import React from 'react';
import ProgramsVideoPreview from "../../../../assets/img/index/programs/programs-video-preview-1.jpg";

export const MainProgrammsVideoItem = ({interviews}) => {
    return (
        <li>
            <a href={interviews.url} data-fancybox="program-index">
                <picture>
                    <img src={ProgramsVideoPreview} alt="" width="100" height="100" loading="lazy"/>
                </picture>
            </a>
        </li>
    );
}
