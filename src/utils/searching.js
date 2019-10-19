import { words } from 'lodash';

export const getSearchEntities = (search) => {
    const regexpAnd = /\s+(and|AND)\s+/;
    const regexpOr = /\s+(or|OR)\s+/;
    const matchAnd = search.match(regexpAnd);
    const matchOr = search.match(regexpOr);

    if (matchAnd || matchOr) {
        // let's imagine we have ideal case with search string
        // is equal `lorem and ipsum`
        const searchWords = words(search);

        return {
            search,
            searchOne: searchWords[0],
            searchTwo: searchWords[2] || '',
            condition: matchAnd ? 'and' : 'or'
        };
    }

    return {
        search
    };
};
