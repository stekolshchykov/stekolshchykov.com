import { Helmet } from 'react-helmet-async';
import { useMemo } from 'react';
import { Locale, uiTexts, sourceTexts } from '../content/stekolschikovContent';

interface SEOHeadProps {
    locale: Locale;
    activeFace?: string; // We might map 'welcome', 'about' etc.
}

export function SEOHead({ locale, activeFace }: SEOHeadProps) {
    const ui = uiTexts[locale];
    const source = sourceTexts[locale];

    const { title, description } = useMemo(() => {
        const baseTitle = `${ui.personName} - ${ui.personRole}`;

        let pageTitle = baseTitle;
        let pageDesc = source.hi_post_title; // Default desc

        if (activeFace) {
            // Logic to map activeFace to specific titles
            // This depends on how we track activeFace in App.tsx
            // For now, let's use a mapping if we can, or fallback to base
            switch (activeFace) {
                case 'welcome': pageTitle = `${ui.welcome} | ${baseTitle}`; break;
                case 'about': pageTitle = `${ui.about} | ${baseTitle}`; pageDesc = source.about_me_info_full.slice(0, 150) + '...'; break;
                case 'skills': pageTitle = `${ui.skills} | ${baseTitle}`; pageDesc = source.skills_post_title; break;
                case 'cooperation': pageTitle = `${ui.cooperation} | ${baseTitle}`; break;
                case 'contacts': pageTitle = `${ui.contacts} | ${baseTitle}`; break;
                case 'work': pageTitle = `${ui.workTitle} | ${baseTitle}`; break;
            }
        }

        return { title: pageTitle, description: pageDesc };
    }, [activeFace, ui, source]);

    const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://stekolshchykov.com';
    const imageUrl = 'https://stekolshchykov.com/me.jpg'; // We can use the public URL or the local one if deployed

    return (
        <Helmet htmlAttributes={{ lang: locale }}>
            <title>{title}</title>
            <meta name="description" content={description} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={imageUrl} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={currentUrl} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={imageUrl} />
        </Helmet>
    );
}
