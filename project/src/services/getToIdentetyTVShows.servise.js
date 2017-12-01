export class IdentityTVShow {
    constructor (identity) {
        this.id = identity.id || '';
        this.genre_ids = identity.genre_ids || [];
        this.title = identity.name || '';
        this.overview = identity.overview || '';
        this.poster_path = identity.poster_path || '';
        this.adult = identity.adult || false;
        this.vote_average = identity.vote_average || '';
        this.popularity = identity.popularity || '';
        this.type = 'tv';
    }
}