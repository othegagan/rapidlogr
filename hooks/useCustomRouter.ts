import { useRouter, useSearchParams } from "next/navigation";
import { format } from "date-fns";

interface Query {
    search?: string;
    level?: string;
    from?: string;
    to?: string;
}

const useCustomRouter = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const query: Query = {};

    let currentSearch = searchParams.get("search");
    let currentLevel = searchParams.get("level");
    let currentFrom = searchParams.get("from");
    let currentTo = searchParams.get("to");

    if (currentSearch) {
        query.search = currentSearch;
    }
    if (currentLevel) {
        query.level = currentLevel;
    }
    if (currentFrom) {
        query.from = currentFrom;
    }
    if (currentTo) {
        query.to = currentTo;
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

    const pushQuery = debounce(({ search, level, from, to }: any) => {
        if (search !== undefined) {
            query.search = search === "" ? "" : search;
        }

        if (level !== undefined) {
            query.level = level === "" ? "" : level;
        }

        if (from !== undefined) {
            query.from = from === "" ? "" : format(new Date(from), "yyyy-MM-dd");
        }

        if (to !== undefined) {
            query.to = to === "" ? "" : format(new Date(to), "yyyy-MM-dd");
        }

        if (
            query.search === "" &&
            query.level === "" &&
            query.from === "" &&
            query.to === ""
        ) {
            router.push("/");
        } else {
            const queryRecord: Record<string, string> = query as Record<string, string>;
            const newQuery = new URLSearchParams(queryRecord).toString();
            console.log(newQuery);
            router.push(`?${newQuery}`);
        }
    }, 300);

    return {
        pushQuery,
        query,
    };
};

export default useCustomRouter;
