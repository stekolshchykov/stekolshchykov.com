import type { Locale } from '../../content/stekolschikovContent';
import { githubProfileUrl, githubUsername, uiTexts, workItems } from '../../content/stekolschikovContent';
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

        <div className="work-grid">
          {workItems.map((item) => (
            <a key={item.title} href={item.url} target="_blank" rel="noreferrer noopener" className="work-card">
              <span className="work-card__title">{item.title}</span>
              <span className="work-card__arrow">→</span>
            </a>
          ))}
        </div>
      </div>
    </UIPage>
  );
}
