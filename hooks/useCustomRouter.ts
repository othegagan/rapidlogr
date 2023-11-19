import { useRouter, useSearchParams } from "next/navigation";

interface Query {
    search?: string;
    level?: string;
}

const useCustomRouter = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const query: Query = {};

    let currentSearch = searchParams.get('search');
    let currentLevel = searchParams.get('level');

    if (currentSearch) {
        query.search = currentSearch;
    }
    if (currentLevel) {
        query.level = currentLevel;
    }

    const debounce = (func: any, delay: number | undefined) => {
        let timeoutId: string | number | NodeJS.Timeout | undefined;
        return function (...args: any) {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            timeoutId = setTimeout(() => {
                func(...args);
            }, delay);
        };
    };

    const pushQuery = debounce(({ search, level }: any) => {
        // Update search parameter
        if (search !== undefined) {
            query.search = search === '' ? '' : search;
        }

        // Update level parameter
        if (level !== undefined) {
            query.level = level === '' ? '' : level;
        }

        // Check if both search and level are empty
        if (query.search === '' && query.level === '') {
            router.push('/');
        } else {
            const queryRecord: Record<string, string> = query as Record<string, string>;
            const newQuery = new URLSearchParams(queryRecord).toString();
            // console.log(newQuery);
            router.push(`?${newQuery}`);
        }
    }, 300);



    return {
        pushQuery,
        query,
    };
}

export default useCustomRouter;
