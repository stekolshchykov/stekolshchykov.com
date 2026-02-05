import type { Locale } from '../../content/stekolschikovContent';
import { skillsBefore, skillsRecent, sourceTexts, uiTexts } from '../../content/stekolschikovContent';
import { UIBlock, UILead, UIPage, UIPill, UITitle } from '../../ui-kit';

interface SkillsFaceProps {
  locale: Locale;
}

export function SkillsFace({ locale }: SkillsFaceProps) {
  const source = sourceTexts[locale];
  const ui = uiTexts[locale];

  return (
    <UIPage>
      <UIPill>{ui.skills}</UIPill>
      <UITitle>{source.skills_title}</UITitle>
      <UILead>{source.skills_post_title}</UILead>

      <UIBlock>
        <h3>{source.skills_used_recently}</h3>
        <div className="skill-list">
          {skillsRecent.map((skill) => (
            <div key={`${skill.name}-${skill.level}`} className="skill-item">
              <div className="skill-item__head">
                <span>{skill.name}</span>
                <strong>{skill.level}%</strong>
              </div>
              <div className="skill-item__bar">
                <div style={{ width: `${skill.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </UIBlock>

      <UIBlock>
        <h3>{source.skills_used_before}</h3>
        <div className="skill-list">
          {skillsBefore.map((skill) => (
            <div key={`${skill.name}-${skill.level}`} className="skill-item is-soft">
              <div className="skill-item__head">
                <span>{skill.name}</span>
                <strong>{skill.level}%</strong>
              </div>
              <div className="skill-item__bar">
                <div style={{ width: `${skill.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </UIBlock>
    </UIPage>
  );
}
