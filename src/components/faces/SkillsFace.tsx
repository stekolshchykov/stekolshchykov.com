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
      <UITitle className="terminal-typewriter">{source.skills_title}</UITitle>
      <UILead>{source.skills_post_title}</UILead>

      <UIBlock>
        <h3>{source.skills_used_recently}</h3>
        <div className="skill-list">
          {skillsRecent.map((skill, index) => {
            const barLength = 20;
            const filledLength = Math.round((skill.level / 100) * barLength);
            const bar = '█'.repeat(filledLength) + '.'.repeat(barLength - filledLength);

            return (
              <div key={`${skill.name}-${skill.level}-${index}`} className="skill-item">
                <div className="terminal-row" style={{ whiteSpace: 'pre' }}>
                  <span className="terminal-col-name">{skill.name.padEnd(12, ' ')}</span>
                  <span className="terminal-col-bar">[{bar}]</span>
                  <span className="terminal-col-val">{skill.level}%</span>
                </div>
              </div>
            )
          })}
        </div>
      </UIBlock>

      <UIBlock>
        <h3>{source.skills_used_before}</h3>
        <div className="skill-list">
          {skillsBefore.map((skill, index) => {
            const barLength = 15;
            const filledLength = Math.round((skill.level / 100) * barLength);
            const bar = 'x'.repeat(filledLength) + '-'.repeat(barLength - filledLength);

            return (
              <div key={`${skill.name}-${skill.level}-${index}`} className="skill-item is-soft">
                <div className="terminal-row">
                  <span className="terminal-col-name">{skill.name.padEnd(12, ' ')}</span>
                  <span className="terminal-col-bar">[{bar}]</span>
                  <span className="terminal-col-val">{skill.level}%</span>
                </div>
              </div>
            )
          })}
        </div>
      </UIBlock>
    </UIPage>
  );
}
