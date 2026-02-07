export interface ContributionDay {
    date: string;
    count: number;
    level: 0 | 1 | 2 | 3 | 4;
}

export interface GitHubStats {
    totalContributions: number;
    weeks: ContributionDay[][];
    username: string;
}

const STORAGE_KEY = 'github-private-activity';

/**
 * Generates a consistent pseudo-random pattern of activity based on a seed.
 */
function generateMockActivity(username: string): GitHubStats {
    const seed = username.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const now = new Date();
    const weeks: ContributionDay[][] = [];
    let total = 0;

    // Generate 52 weeks of data
    for (let w = 0; w < 52; w++) {
        const week: ContributionDay[] = [];
        for (let d = 0; d < 7; d++) {
            const date = new Date(now);
            date.setDate(date.getDate() - (52 - w) * 7 + d);

            // Pseudo-random count based on seed, week and day
            const val = Math.sin(seed + w * 0.5 + d * 0.2) * 5 + Math.cos(w * 0.1) * 3 + 2;
            const count = Math.max(0, Math.floor(val));

            let level: 0 | 1 | 2 | 3 | 4 = 0;
            if (count > 8) level = 4;
            else if (count > 5) level = 3;
            else if (count > 2) level = 2;
            else if (count > 0) level = 1;

            week.push({
                date: date.toISOString().split('T')[0],
                count,
                level
            });
            total += count;
        }
        weeks.push(week);
    }

    return {
        totalContributions: total,
        weeks,
        username
    };
}

export async function fetchGitHubActivity(username: string): Promise<GitHubStats> {
    // Sync with localStorage for "persistence"
    const cached = localStorage.getItem(`${STORAGE_KEY}-${username}`);
    if (cached) {
        try {
            return JSON.parse(cached);
        } catch (e) {
            console.error('Failed to parse cached github data', e);
        }
    }

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));

    const stats = generateMockActivity(username);
    localStorage.setItem(`${STORAGE_KEY}-${username}`, JSON.stringify(stats));

    return stats;
}
