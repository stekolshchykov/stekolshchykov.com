import { useEffect, useState } from 'react';
import { fetchGitHubActivity, GitHubStats } from '../../api/github/githubStats';
import { githubUsername } from '../../content/stekolschikovContent';

export function GithubHeatmap() {
    const [stats, setStats] = useState<GitHubStats | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchGitHubActivity(githubUsername).then(data => {
            setStats(data);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <div className="github-heatmap-loading">Loading Activity...</div>;
    }

    if (!stats) return null;

    return (
        <div className="github-heatmap-container">
            <div className="github-heatmap-header">
                <span className="github-heatmap-total">{stats.totalContributions} contributions in the last year</span>
            </div>
            <div className="github-heatmap-scroll">
                <div className="github-heatmap-grid">
                    {stats.weeks.map((week, wIndex) => (
                        <div key={`week-${wIndex}`} className="github-heatmap-column">
                            {week.map((day, dIndex) => (
                                <div
                                    key={`day-${wIndex}-${dIndex}`}
                                    className={`github-heatmap-cell level-${day.level}`}
                                    title={`${day.count} contributions on ${day.date}`}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div className="github-heatmap-footer">
                <span>Less</span>
                <div className="github-heatmap-legend">
                    <div className="github-heatmap-cell level-0" />
                    <div className="github-heatmap-cell level-1" />
                    <div className="github-heatmap-cell level-2" />
                    <div className="github-heatmap-cell level-3" />
                    <div className="github-heatmap-cell level-4" />
                </div>
                <span>More</span>
            </div>
        </div>
    );
}
