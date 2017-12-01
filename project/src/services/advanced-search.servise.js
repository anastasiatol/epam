export function advancedSearchServise (collection, filter) {

    let filteredArr = collection.filter((item) =>{
        return item.title.toLowerCase().indexOf(filter.title.toLowerCase()) !== -1;
    });
    filteredArr = filteredArr.filter((item) =>{
        return item.overview.toLowerCase().indexOf(filter.overview.toLowerCase()) !== -1;
    });

    var isGenre = function (genreSearch, genreFilm) {
        for (let i=0; i<genreSearch.length; i++) {
            for (let j=0; j<genreFilm.length; j++) {
                if (genreSearch[i] === genreFilm[j]) {
                    return true;
                }
            }
        }
        return false;
    };

    if (filter.genre_ids.length > 0 ) {
        for (let i=0; i<filteredArr.length; i++) {
            if (!isGenre(filter.genre_ids, filteredArr[i].genre_ids)) {
                filteredArr.splice(i,1);
                i = i-1;
            }
        }
    }

    filteredArr = filteredArr.filter((item) => item.adult === filter.adult);

    return filteredArr;
}