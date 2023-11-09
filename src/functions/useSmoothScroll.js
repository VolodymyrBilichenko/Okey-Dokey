import {useEffect} from "react";

export const useSmoothScroll = (hash, pathname) => {
    useEffect(() => {
        const headerNavLink = document.querySelector('.header__nav--list a');

        if (headerNavLink && hash) {
            const targetId = hash.substring(1);

            if (document.querySelector(`#${targetId}`)) {
                document.querySelector(`#${targetId}`).scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
                window.history.pushState('', '', `#${targetId}`);
            }
        }
    }, [pathname, hash]);
}
