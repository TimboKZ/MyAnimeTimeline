// Type definitions for kuristina
// Project: kuristina
// Definitions by: Timur Kuzhagaliyev <tim.kuzh@gmail.com>

export as namespace kuristina;

export interface IKuristinaAnimeList {
    myanimelist: IMALAnimeList;
}

export interface IKuristinaMangaList {
    myanimelist: IMALMangaList;
}

export interface IMALAnimeList {
    myinfo: IMALAnimeUserInfo;
    anime: IMALAnime[];
}

export interface IMALAnimeUserInfo {
    user_id: string;
    user_name: string;
    user_watching: string;
    user_completed: string;
    user_onhold: string;
    user_dropped: string;
    user_plantowatch: string;
    user_days_spent_watching: string;
}

export interface IMALAnime {
    series_animedb_id: string;
    series_title: string;
    series_synonyms: string;
    series_type: string;
    series_episodes: string;
    series_status: string;
    series_start: string;
    series_end: string;
    series_image: string;
    my_id: string;
    my_watched_episodes: string;
    my_start_date: string;
    my_finish_date: string;
    my_score: string;
    my_status: string;
    my_rewatching: string;
    my_rewatching_ep: string;
    my_last_updated: string;
    my_tags: string;
}

export interface IMALMangaList {
    myinfo: IMALMangaUserInfo;
    manga: IMALManga[];
}

export interface IMALMangaUserInfo {
    user_id: string;
    user_name: string;
    user_reading: string;
    user_completed: string;
    user_onhold: string;
    user_dropped: string;
    user_plantoread: string;
    user_days_spent_watching: string;
}

export interface IMALManga {
    series_mangadb_id: string;
    series_title: string;
    series_synonyms: string;
    series_type: string;
    series_chapters: string;
    series_volumes: string;
    series_status: string;
    series_start: string;
    series_end: string;
    series_image: string;
    my_id: string;
    my_read_chapters: string;
    my_read_volumes: string;
    my_start_date: string;
    my_finish_date: string;
    my_score: string;
    my_status: string;
    my_rereadingg: string;
    my_rereading_chap: string;
    my_last_updated: string;
    my_tags: string;
}

export function fetchAnimeList(username: string): IKuristinaAnimeList;
export function fetchMangaList(username: string): IKuristinaMangaList;