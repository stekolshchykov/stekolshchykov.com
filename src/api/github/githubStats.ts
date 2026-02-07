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
const CACHE_TTL_MS = 1000 * 60 * 60 * 6; // 6 hours

type GitHubApiResponse = {
    total?: { lastYear?: number };
    contributions?: Array<{ date: string; count: number; level?: number }>;
};

function clampLevel(level: number): 0 | 1 | 2 | 3 | 4 {
    if (level <= 0) return 0;
    if (level === 1) return 1;
    if (level === 2) return 2;
    if (level === 3) return 3;
    return 4;
}

function normalizeContributions(username: string, data: GitHubApiResponse): GitHubStats {
    const contributions = data.contributions ?? [];
    const weeks: ContributionDay[][] = [];
    let total = 0;

    for (let i = 0; i < contributions.length; i += 7) {
        const slice = contributions.slice(i, i + 7).map((day) => {
            const count = Math.max(0, Math.floor(day.count ?? 0));
            const level = day.level === undefined ? clampLevel(count === 0 ? 0 : count <= 2 ? 1 : count <= 5 ? 2 : count <= 8 ? 3 : 4) : clampLevel(day.level);
            total += count;
            return {
                date: day.date,
                count,
                level,
            } as ContributionDay;
        });
        if (slice.length > 0) {
            weeks.push(slice);
        }
    }

    const totalFromApi = data.total?.lastYear;
    return {
        totalContributions: typeof totalFromApi === 'number' ? totalFromApi : total,
        weeks,
        username,
    };
}

export async function fetchGitHubActivity(username: string): Promise<GitHubStats> {
    const cacheKey = `${STORAGE_KEY}-${username}`;
    const now = Date.now();
    let cachedStats: GitHubStats | null = null;
    let cachedAt: number | null = null;

    if (typeof localStorage !== 'undefined') {
        const cached = localStorage.getItem(cacheKey);
        if (cached) {
            try {
                const parsed = JSON.parse(cached) as { stats?: GitHubStats; cachedAt?: number } | GitHubStats;
                if ('stats' in parsed) {
                    cachedStats = parsed.stats ?? null;
                    cachedAt = typeof parsed.cachedAt === 'number' ? parsed.cachedAt : null;
                } else {
                    cachedStats = parsed as GitHubStats;
                }
            } catch (e) {
                console.error('Failed to parse cached github data', e);
            }
        }
    }

    if (cachedStats && cachedAt && now - cachedAt < CACHE_TTL_MS) {
        return cachedStats;
    }

    const url = `https://github-contributions-api.jogruber.de/v4/${encodeURIComponent(username)}?y=last`;
    try {
        const response = await fetch(url, { headers: { Accept: 'application/json' } });
        if (!response.ok) {
            throw new Error(`GitHub activity request failed (${response.status})`);
        }
        const data = (await response.json()) as GitHubApiResponse;
        const stats = normalizeContributions(username, data);
        if (typeof localStorage !== 'undefined') {
            localStorage.setItem(cacheKey, JSON.stringify({ stats, cachedAt: now }));
        }
        return stats;
    } catch (error) {
        if (cachedStats) return cachedStats;
        throw error;
    }
}
