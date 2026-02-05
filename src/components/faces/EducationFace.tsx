import type { Locale } from '../../content/stekolschikovContent';
import { githubProfileUrl, githubUsername, uiTexts } from '../../content/stekolschikovContent';
import { UILink, UIPage, UIPill, UITitle } from '../../ui-kit';

interface EducationFaceProps {
  locale: Locale;
}

export function EducationFace({ locale }: EducationFaceProps) {
  const ui = uiTexts[locale];

  return (
    <UIPage>
      <UIPill>{ui.work}</UIPill>
      <UITitle>{ui.workTitle}</UITitle>

      <div className="github-feed">
        <UILink className="github-profile-link" href={githubProfileUrl} target="_blank" rel="noreferrer noopener">
          @{githubUsername}
        </UILink>

        <img
          className="github-widget"
          src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&rank_icon=github&hide_border=true&bg_color=00000000&title_color=8cc7ff&text_color=c8dfff&icon_color=5da8ff`}
          alt="GitHub stats widget"
          loading="lazy"
        />
        <img
          className="github-widget"
          src={`https://streak-stats.demolab.com?user=${githubUsername}&theme=transparent&hide_border=true&ring=8cc7ff&fire=8cc7ff&currStreakLabel=8cc7ff&dates=c8dfff&sideNums=c8dfff&currStreakNum=e6eefc`}
          alt="GitHub streak widget"
          loading="lazy"
        />
        <img
          className="github-widget github-widget--graph"
          src={`https://github-readme-activity-graph.vercel.app/graph?username=${githubUsername}&bg_color=0b1220&color=9ec3ef&line=5da8ff&point=9ec3ef&area=true&hide_border=true`}
          alt="GitHub activity graph"
          loading="lazy"
        />
      </div>
    </UIPage>
  );
}
