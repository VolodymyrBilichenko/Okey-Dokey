import React from 'react';
import ProgramsVideoPreview from "../../../../../../assets/img/index/programs/programs-video-preview-1.jpg";

export const MainProgrammsVideoItem = () => {
    return (
        <li>
            <a href="https://youtu.be/aqz-KE-bpKQ?si=lgEUjxFpAjRaTzPX" data-fancybox="program-@@index">
                <picture>
                    <img src={ProgramsVideoPreview} alt="" width="100" height="100" loading="lazy"/>
                </picture>
            </a>
        </li>
    );
}
