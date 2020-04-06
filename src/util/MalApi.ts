/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */
import Promise from 'bluebird';

export enum ListType {
    Anime = 'anime',
    Manga = 'manga',
}

export const SupportedListTypes = [ListType.Anime, ListType.Manga];

export enum EntryStatus {
    Completed = 'completed',
    PlanToWatch = 'plan_to_watch',
    Watching = 'watching',
}

export interface ListEntry {
    node: {
        id: number;
        title: string;
        main_picture: {
            medium: string;
            large: string;
        };
    };
    list_status: {
        status: string;
        score: number;
        num_episodes_watched: number;
        is_rewatching: boolean;
        updated_at: string;
        start_date?: string;
        finish_date?: string;
    };
}

export const getMalListEntries = (username: string, listType: ListType): Promise<ListEntry[]> => {
    return Promise.resolve(ListEntries);
};

const ListEntries = [
    {
        'node': {
            'id': 32998,
            'title': '91 Days',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/13/80515.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/13/80515l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 6,
            'num_episodes_watched': 12,
            'is_rewatching': false,
            'updated_at': '2017-03-30T21:21:37+00:00',
            'start_date': '2017-03-28',
            'finish_date': '2017-03-30',
        },
    },
    {
        'node': {
            'id': 31580,
            'title': 'Ajin',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/13/77968.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/13/77968l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 0,
            'num_episodes_watched': 13,
            'is_rewatching': false,
            'updated_at': '2018-06-23T10:56:27+00:00',
            'start_date': '2018-06-21',
            'finish_date': '2018-06-22',
        },
    },
    {
        'node': {
            'id': 33253,
            'title': 'Ajin 2nd Season',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/12/81858.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/12/81858l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 0,
            'num_episodes_watched': 13,
            'is_rewatching': false,
            'updated_at': '2018-06-23T10:57:00+00:00',
            'start_date': '2018-06-22',
            'finish_date': '2018-06-22',
        },
    },
    {
        'node': {
            'id': 22199,
            'title': 'Akame ga Kill!',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/1429/95946.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/1429/95946l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 5,
            'num_episodes_watched': 24,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:45+00:00',
            'start_date': '2016-01-31',
            'finish_date': '2016-02-07',
        },
    },
    {
        'node': {
            'id': 19429,
            'title': 'Akuma no Riddle',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/6/60479.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/6/60479l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 0,
            'num_episodes_watched': 12,
            'is_rewatching': false,
            'updated_at': '2018-09-03T12:47:42+00:00',
            'start_date': '2016-06-10',
            'finish_date': '2016-06-15',
        },
    },
    {
        'node': {
            'id': 22147,
            'title': 'Amagi Brilliant Park',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/5/85435.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/5/85435l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 6,
            'num_episodes_watched': 13,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:45+00:00',
            'start_date': '2015-11-19',
            'finish_date': '2015-11-27',
        },
    },
    {
        'node': {
            'id': 6547,
            'title': 'Angel Beats!',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/10/22061.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/10/22061l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 8,
            'num_episodes_watched': 13,
            'is_rewatching': false,
            'updated_at': '2017-03-02T10:59:49+00:00',
            'start_date': '2017-01-01',
            'finish_date': '2017-01-02',
        },
    },
    {
        'node': {
            'id': 2832,
            'title': 'Ani*Kuri15',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/13/62923.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/13/62923l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 5,
            'num_episodes_watched': 15,
            'is_rewatching': false,
            'updated_at': '2017-03-02T10:59:58+00:00',
            'start_date': '2017-01-28',
            'finish_date': '2017-01-28',
        },
    },
    {
        'node': {
            'id': 9989,
            'title': 'Ano Hi Mita Hana no Namae wo Bokutachi wa Mada Shiranai.',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/5/79697.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/5/79697l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 7,
            'num_episodes_watched': 11,
            'is_rewatching': false,
            'updated_at': '2017-03-02T11:00:05+00:00',
            'start_date': '2016-02-04',
            'finish_date': '2016-02-07',
        },
    },
    {
        'node': {
            'id': 11111,
            'title': 'Another',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/4/75509.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/4/75509l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 4,
            'num_episodes_watched': 12,
            'is_rewatching': false,
            'updated_at': '2017-03-02T11:00:15+00:00',
            'start_date': '2016-05-16',
            'finish_date': '2016-05-18',
        },
    },
    {
        'node': {
            'id': 24833,
            'title': 'Ansatsu Kyoushitsu',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/5/75639.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/5/75639l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 6,
            'num_episodes_watched': 22,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:45+00:00',
            'start_date': '2015-07-17',
            'finish_date': '2015-07-24',
        },
    },
    {
        'node': {
            'id': 30654,
            'title': 'Ansatsu Kyoushitsu 2nd Season',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/8/77966.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/8/77966l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 6,
            'num_episodes_watched': 25,
            'is_rewatching': false,
            'updated_at': '2017-03-02T11:00:23+00:00',
            'start_date': '2016-06-08',
            'finish_date': '2016-07-09',
        },
    },
    {
        'node': {
            'id': 7647,
            'title': 'Arakawa Under the Bridge',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/2/59197.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/2/59197l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 0,
            'num_episodes_watched': 13,
            'is_rewatching': false,
            'updated_at': '2018-09-03T12:48:10+00:00',
            'start_date': '2016-01-06',
            'finish_date': '2016-01-10',
        },
    },
    {
        'node': {
            'id': 9074,
            'title': 'Arakawa Under the Bridge x Bridge',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/12/59199.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/12/59199l.jpg',
            },
        },
        'list_status': {
            'status': 'plan_to_watch',
            'score': 0,
            'num_episodes_watched': 0,
            'is_rewatching': false,
            'updated_at': '2016-01-10T11:51:11+00:00',
        },
    },
    {
        'node': {
            'id': 5421,
            'title': 'Ark',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/7/11088.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/7/11088l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 6,
            'num_episodes_watched': 1,
            'is_rewatching': false,
            'updated_at': '2017-12-17T14:42:15+00:00',
            'start_date': '2017-06-11',
            'finish_date': '2017-06-11',
        },
    },
    {
        'node': {
            'id': 37171,
            'title': 'Asobi Asobase',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/1139/95077.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/1139/95077l.jpg',
            },
        },
        'list_status': {
            'status': 'watching',
            'score': 0,
            'num_episodes_watched': 0,
            'is_rewatching': false,
            'updated_at': '2018-07-09T22:58:47+00:00',
        },
    },
    {
        'node': {
            'id': 6166,
            'title': 'Asobi ni Iku yo!',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/7/75583.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/7/75583l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 6,
            'num_episodes_watched': 12,
            'is_rewatching': false,
            'updated_at': '2017-10-04T03:34:09+00:00',
            'start_date': '2016-11-09',
            'finish_date': '2017-02-12',
        },
    },
    {
        'node': {
            'id': 586,
            'title': 'Ayakashi: Japanese Classic Horror',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/2/11746.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/2/11746l.jpg',
            },
        },
        'list_status': {
            'status': 'plan_to_watch',
            'score': 0,
            'num_episodes_watched': 0,
            'is_rewatching': false,
            'updated_at': '2017-01-01T14:04:19+00:00',
        },
    },
    {
        'node': {
            'id': 7817,
            'title': 'B-gata H-kei',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/4/75227.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/4/75227l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 7,
            'num_episodes_watched': 12,
            'is_rewatching': false,
            'updated_at': '2017-03-02T11:00:45+00:00',
            'start_date': '2017-02-13',
            'finish_date': '2017-03-01',
        },
    },
    {
        'node': {
            'id': 36873,
            'title': 'Back Street Girls: Gokudolls',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/1484/93140.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/1484/93140l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 0,
            'num_episodes_watched': 10,
            'is_rewatching': false,
            'updated_at': '2019-06-18T20:56:32+00:00',
            'start_date': '2019-06-18',
            'finish_date': '2019-06-18',
        },
    },
    {
        'node': {
            'id': 5081,
            'title': 'Bakemonogatari',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/11/75274.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/11/75274l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 7,
            'num_episodes_watched': 15,
            'is_rewatching': false,
            'updated_at': '2017-01-22T22:26:37+00:00',
            'start_date': '2017-01-07',
            'finish_date': '2017-01-22',
        },
    },
    {
        'node': {
            'id': 32379,
            'title': 'Berserk',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/10/79352.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/10/79352l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 5,
            'num_episodes_watched': 12,
            'is_rewatching': false,
            'updated_at': '2017-08-02T23:19:57+00:00',
            'start_date': '2017-08-02',
            'finish_date': '2017-08-02',
        },
    },
    {
        'node': {
            'id': 20787,
            'title': 'Black Bullet',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/6/57947.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/6/57947l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 6,
            'num_episodes_watched': 13,
            'is_rewatching': false,
            'updated_at': '2017-03-02T11:00:59+00:00',
            'start_date': '2016-05-07',
            'finish_date': '2016-05-22',
        },
    },
    {
        'node': {
            'id': 32086,
            'title': 'Blame! Movie',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/1976/93666.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/1976/93666l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 7,
            'num_episodes_watched': 1,
            'is_rewatching': false,
            'updated_at': '2017-12-17T14:42:36+00:00',
            'start_date': '2017-10-07',
            'finish_date': '2017-10-07',
        },
    },
    {
        'node': {
            'id': 10490,
            'title': 'Blood-C',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/2/31649.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/2/31649l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 7,
            'num_episodes_watched': 12,
            'is_rewatching': false,
            'updated_at': '2017-12-13T00:36:58+00:00',
            'start_date': '2017-12-12',
            'finish_date': '2017-12-12',
        },
    },
    {
        'node': {
            'id': 31043,
            'title': 'Boku dake ga Inai Machi',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/10/77957.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/10/77957l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 6,
            'num_episodes_watched': 12,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:45+00:00',
            'start_date': '2016-01-12',
            'finish_date': '2016-03-29',
        },
    },
    {
        'node': {
            'id': 31964,
            'title': 'Boku no Hero Academia',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/10/78745.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/10/78745l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 8,
            'num_episodes_watched': 13,
            'is_rewatching': false,
            'updated_at': '2017-12-20T07:43:27+00:00',
            'start_date': '2017-11-25',
            'finish_date': '2017-12-02',
        },
    },
    {
        'node': {
            'id': 33486,
            'title': 'Boku no Hero Academia 2nd Season',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/12/85221.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/12/85221l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 9,
            'num_episodes_watched': 25,
            'is_rewatching': false,
            'updated_at': '2017-12-12T05:29:13+00:00',
            'start_date': '2017-12-09',
            'finish_date': '2017-12-11',
        },
    },
    {
        'node': {
            'id': 36456,
            'title': 'Boku no Hero Academia 3rd Season',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/1319/92084.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/1319/92084l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 0,
            'num_episodes_watched': 25,
            'is_rewatching': false,
            'updated_at': '2018-11-03T01:45:42+00:00',
            'start_date': '2018-08-26',
            'finish_date': '2018-11-03',
        },
    },
    {
        'node': {
            'id': 28755,
            'title': 'Boruto: Naruto the Movie',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/4/78280.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/4/78280l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 6,
            'num_episodes_watched': 1,
            'is_rewatching': false,
            'updated_at': '2017-03-02T11:01:19+00:00',
            'start_date': '2015-12-16',
            'finish_date': '2015-12-16',
        },
    },
    {
        'node': {
            'id': 33080,
            'title': 'Brotherhood: Final Fantasy XV',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/13/79397.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/13/79397l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 5,
            'num_episodes_watched': 5,
            'is_rewatching': false,
            'updated_at': '2017-03-02T11:01:08+00:00',
            'start_date': '2017-01-28',
            'finish_date': '2017-01-28',
        },
    },
    {
        'node': {
            'id': 1689,
            'title': 'Byousoku 5 Centimeter',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/10/79674.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/10/79674l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 7,
            'num_episodes_watched': 3,
            'is_rewatching': false,
            'updated_at': '2017-03-02T11:12:07+00:00',
            'start_date': '2016-04-06',
            'finish_date': '2016-07-17',
        },
    },
    {
        'node': {
            'id': 5356,
            'title': 'Canaan',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/4/75789.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/4/75789l.jpg',
            },
        },
        'list_status': {
            'status': 'plan_to_watch',
            'score': 0,
            'num_episodes_watched': 0,
            'is_rewatching': false,
            'updated_at': '2016-08-18T18:21:57+00:00',
        },
    },
    {
        'node': {
            'id': 28999,
            'title': 'Charlotte',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/12/74683.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/12/74683l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 7,
            'num_episodes_watched': 13,
            'is_rewatching': false,
            'updated_at': '2017-03-02T11:12:23+00:00',
            'start_date': '2016-04-07',
            'finish_date': '2016-07-08',
        },
    },
    {
        'node': {
            'id': 4975,
            'title': 'ChäoS;HEAd',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/13/15443.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/13/15443l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 4,
            'num_episodes_watched': 12,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:45+00:00',
            'start_date': '2015-10-14',
            'finish_date': '2015-11-13',
        },
    },
    {
        'node': {
            'id': 1818,
            'title': 'Claymore',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/3/21834.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/3/21834l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 9,
            'num_episodes_watched': 26,
            'is_rewatching': false,
            'updated_at': '2017-03-02T11:06:59+00:00',
            'start_date': '2016-11-06',
            'finish_date': '2016-11-08',
        },
    },
    {
        'node': {
            'id': 1575,
            'title': 'Code Geass: Hangyaku no Lelouch',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/5/50331.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/5/50331l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 7,
            'num_episodes_watched': 25,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:45+00:00',
            'start_date': '2015-03-31',
            'finish_date': '2015-04-01',
        },
    },
    {
        'node': {
            'id': 12685,
            'title': 'Code Geass: Hangyaku no Lelouch - Nunnally in Wonderland',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/7/36175.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/7/36175l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 3,
            'num_episodes_watched': 1,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:45+00:00',
            'start_date': '2015-04-02',
            'finish_date': '2015-04-02',
        },
    },
    {
        'node': {
            'id': 2904,
            'title': 'Code Geass: Hangyaku no Lelouch R2',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/4/9391.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/4/9391l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 5,
            'num_episodes_watched': 25,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:45+00:00',
            'start_date': '2015-04-01',
            'finish_date': '2015-04-02',
        },
    },
    {
        'node': {
            'id': 15037,
            'title': 'Corpse Party: Tortured Souls - Bougyakusareta Tamashii no Jukyou',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/10/78811.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/10/78811l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 5,
            'num_episodes_watched': 4,
            'is_rewatching': false,
            'updated_at': '2017-03-02T11:01:31+00:00',
            'start_date': '2016-08-14',
            'finish_date': '2016-08-14',
        },
    },
    {
        'node': {
            'id': 1,
            'title': 'Cowboy Bebop',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/4/19644.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/4/19644l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 9,
            'num_episodes_watched': 26,
            'is_rewatching': false,
            'updated_at': '2017-03-02T11:05:58+00:00',
            'start_date': '2016-02-15',
            'finish_date': '2016-04-02',
        },
    },
    {
        'node': {
            'id': 25731,
            'title': 'Cross Ange: Tenshi to Ryuu no Rondo',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/2/67515.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/2/67515l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 10,
            'num_episodes_watched': 25,
            'is_rewatching': false,
            'updated_at': '2017-06-07T02:40:33+00:00',
            'start_date': '2017-06-04',
            'finish_date': '2017-06-07',
        },
    },
    {
        'node': {
            'id': 31636,
            'title': 'Dagashi Kashi',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/1538/95686.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/1538/95686l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 4,
            'num_episodes_watched': 12,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:45+00:00',
            'start_date': '2016-01-07',
            'finish_date': '2016-05-05',
        },
    },
    {
        'node': {
            'id': 11843,
            'title': 'Danshi Koukousei no Nichijou',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/3/33257.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/3/33257l.jpg',
            },
        },
        'list_status': {
            'status': 'watching',
            'score': 0,
            'num_episodes_watched': 0,
            'is_rewatching': false,
            'updated_at': '2017-06-28T01:44:04+00:00',
        },
    },
    {
        'node': {
            'id': 2025,
            'title': 'Darker than Black: Kuro no Keiyakusha',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/5/19570.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/5/19570l.jpg',
            },
        },
        'list_status': {
            'status': 'plan_to_watch',
            'score': 0,
            'num_episodes_watched': 0,
            'is_rewatching': false,
            'updated_at': '2015-11-21T00:48:26+00:00',
        },
    },
    {
        'node': {
            'id': 35849,
            'title': 'Darling in the FranXX',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/1614/90408.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/1614/90408l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 0,
            'num_episodes_watched': 24,
            'is_rewatching': false,
            'updated_at': '2018-07-08T00:13:20+00:00',
            'start_date': '2018-03-21',
            'finish_date': '2018-07-08',
        },
    },
    {
        'node': {
            'id': 15583,
            'title': 'Date A Live',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/13/44844.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/13/44844l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 6,
            'num_episodes_watched': 12,
            'is_rewatching': false,
            'updated_at': '2017-03-02T11:01:42+00:00',
            'start_date': '2017-02-04',
            'finish_date': '2017-02-04',
        },
    },
    {
        'node': {
            'id': 19163,
            'title': 'Date A Live II',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/5/76003.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/5/76003l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 6,
            'num_episodes_watched': 10,
            'is_rewatching': false,
            'updated_at': '2017-03-02T11:01:48+00:00',
            'start_date': '2017-02-05',
            'finish_date': '2017-03-01',
        },
    },
    {
        'node': {
            'id': 17641,
            'title': 'Date A Live: Date to Date',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/3/59777.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/3/59777l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 7,
            'num_episodes_watched': 1,
            'is_rewatching': false,
            'updated_at': '2017-03-02T11:09:03+00:00',
            'start_date': '2017-02-05',
            'finish_date': '2017-02-05',
        },
    },
    {
        'node': {
            'id': 6880,
            'title': 'Deadman Wonderland',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/9/75299.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/9/75299l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 5,
            'num_episodes_watched': 12,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:45+00:00',
            'start_date': '2015-11-27',
            'finish_date': '2016-01-14',
        },
    },
    {
        'node': {
            'id': 14353,
            'title': 'Death Billiards',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/11/48721.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/11/48721l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 0,
            'num_episodes_watched': 1,
            'is_rewatching': false,
            'updated_at': '2018-07-01T01:44:53+00:00',
            'start_date': '2018-07-01',
            'finish_date': '2018-07-01',
        },
    },
    {
        'node': {
            'id': 34497,
            'title': 'Death March kara Hajimaru Isekai Kyousoukyoku',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/4/88911.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/4/88911l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 0,
            'num_episodes_watched': 12,
            'is_rewatching': false,
            'updated_at': '2018-09-02T14:13:01+00:00',
            'start_date': '2018-09-01',
        },
    },
    {
        'node': {
            'id': 1535,
            'title': 'Death Note',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/9/9453.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/9/9453l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 7,
            'num_episodes_watched': 37,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:45+00:00',
            'start_date': '2015-07-05',
            'finish_date': '2015-07-09',
        },
    },
    {
        'node': {
            'id': 28223,
            'title': 'Death Parade',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/5/71553.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/5/71553l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 8,
            'num_episodes_watched': 12,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:45+00:00',
            'start_date': '2016-01-25',
            'finish_date': '2016-01-26',
        },
    },
    {
        'node': {
            'id': 33988,
            'title': 'Demi-chan wa Kataritai',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/8/83417.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/8/83417l.jpg',
            },
        },
        'list_status': {
            'status': 'plan_to_watch',
            'score': 0,
            'num_episodes_watched': 0,
            'is_rewatching': false,
            'updated_at': '2017-03-02T11:13:52+00:00',
        },
    },
    {
        'node': {
            'id': 8086,
            'title': 'Densetsu no Yuusha no Densetsu',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/8/73651.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/8/73651l.jpg',
            },
        },
        'list_status': {
            'status': 'plan_to_watch',
            'score': 0,
            'num_episodes_watched': 0,
            'is_rewatching': false,
            'updated_at': '2017-03-02T11:14:21+00:00',
        },
    },
    {
        'node': {
            'id': 17513,
            'title': 'Diabolik Lovers',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/9/51989.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/9/51989l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 5,
            'num_episodes_watched': 12,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:45+00:00',
            'start_date': '2016-04-22',
            'finish_date': '2016-04-22',
        },
    },
    {
        'node': {
            'id': 32271,
            'title': 'Dies Irae',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/2/89682.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/2/89682l.jpg',
            },
        },
        'list_status': {
            'status': 'watching',
            'score': 0,
            'num_episodes_watched': 3,
            'is_rewatching': false,
            'updated_at': '2018-07-01T02:57:49+00:00',
            'start_date': '2018-07-01',
        },
    },
    {
        'node': {
            'id': 31163,
            'title': 'Dimension W',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/8/86304.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/8/86304l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 6,
            'num_episodes_watched': 12,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:45+00:00',
            'start_date': '2016-01-12',
            'finish_date': '2016-04-08',
        },
    },
    {
        'node': {
            'id': 28121,
            'title': 'Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/2/70187.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/2/70187l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 6,
            'num_episodes_watched': 13,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:45+00:00',
        },
    },
    {
        'node': {
            'id': 6746,
            'title': 'Durarara!!',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/10/71772.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/10/71772l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 7,
            'num_episodes_watched': 24,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:45+00:00',
            'start_date': '2015-11-30',
            'finish_date': '2015-12-07',
        },
    },
    {
        'node': {
            'id': 27833,
            'title': 'Durarara!!x2 Ketsu',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/6/77838.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/6/77838l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 6,
            'num_episodes_watched': 12,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:46+00:00',
            'start_date': '2016-04-12',
            'finish_date': '2016-04-16',
        },
    },
    {
        'node': {
            'id': 23199,
            'title': 'Durarara!!x2 Shou',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/12/67743.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/12/67743l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 6,
            'num_episodes_watched': 12,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:46+00:00',
            'start_date': '2015-12-07',
            'finish_date': '2016-04-12',
        },
    },
    {
        'node': {
            'id': 27831,
            'title': 'Durarara!!x2 Ten',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/8/74981.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/8/74981l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 5,
            'num_episodes_watched': 12,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:46+00:00',
            'start_date': '2016-04-12',
            'finish_date': '2016-04-12',
        },
    },
    {
        'node': {
            'id': 226,
            'title': 'Elfen Lied',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/10/6883.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/10/6883l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 9,
            'num_episodes_watched': 13,
            'is_rewatching': false,
            'updated_at': '2017-06-07T23:55:16+00:00',
            'start_date': '2016-07-27',
            'finish_date': '2016-07-27',
        },
    },
    {
        'node': {
            'id': 376,
            'title': 'Elfen Lied: Tooriame nite Arui wa, Shoujo wa Ikani Shite Sono Shinjou ni Itatta ka? - Regenschauer',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/7/80498.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/7/80498l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 6,
            'num_episodes_watched': 1,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:46+00:00',
            'start_date': '2016-08-18',
            'finish_date': '2016-08-18',
        },
    },
    {
        'node': {
            'id': 790,
            'title': 'Ergo Proxy',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/11/6259.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/11/6259l.jpg',
            },
        },
        'list_status': {
            'status': 'watching',
            'score': 0,
            'num_episodes_watched': 1,
            'is_rewatching': false,
            'updated_at': '2018-09-01T23:23:25+00:00',
            'start_date': '2018-09-02',
        },
    },
    {
        'node': {
            'id': 2759,
            'title': 'Evangelion: 1.0 You Are (Not) Alone',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/7/74975.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/7/74975l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 8,
            'num_episodes_watched': 1,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:46+00:00',
            'start_date': '2016-06-10',
            'finish_date': '2016-06-10',
        },
    },
    {
        'node': {
            'id': 3784,
            'title': 'Evangelion: 2.0 You Can (Not) Advance',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/5/74983.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/5/74983l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 8,
            'num_episodes_watched': 1,
            'is_rewatching': false,
            'updated_at': '2017-03-02T11:06:09+00:00',
            'start_date': '2016-06-10',
            'finish_date': '2016-06-10',
        },
    },
    {
        'node': {
            'id': 3785,
            'title': 'Evangelion: 3.0 You Can (Not) Redo',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/9/43201.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/9/43201l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 7,
            'num_episodes_watched': 1,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:46+00:00',
            'start_date': '2016-06-10',
            'finish_date': '2016-06-10',
        },
    },
    {
        'node': {
            'id': 22297,
            'title': 'Fate/stay night: Unlimited Blade Works',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/12/67333.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/12/67333l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 7,
            'num_episodes_watched': 12,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:46+00:00',
            'start_date': '2016-01-01',
            'finish_date': '2016-01-04',
        },
    },
    {
        'node': {
            'id': 28701,
            'title': 'Fate/stay night: Unlimited Blade Works 2nd Season',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/11/72863.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/11/72863l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 6,
            'num_episodes_watched': 13,
            'is_rewatching': false,
            'updated_at': '2017-03-02T11:02:31+00:00',
            'start_date': '2016-01-07',
            'finish_date': '2016-01-08',
        },
    },
    {
        'node': {
            'id': 10087,
            'title': 'Fate/Zero',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/2/73249.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/2/73249l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 7,
            'num_episodes_watched': 13,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:46+00:00',
            'start_date': '2015-12-09',
            'finish_date': '2015-12-13',
        },
    },
    {
        'node': {
            'id': 11741,
            'title': 'Fate/Zero 2nd Season',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/8/41125.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/8/41125l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 7,
            'num_episodes_watched': 12,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:46+00:00',
        },
    },
    {
        'node': {
            'id': 227,
            'title': 'FLCL',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/7/77356.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/7/77356l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 6,
            'num_episodes_watched': 6,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:46+00:00',
            'start_date': '2016-04-20',
            'finish_date': '2016-04-20',
        },
    },
    {
        'node': {
            'id': 33010,
            'title': 'FLCL Progressive',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/1499/93700.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/1499/93700l.jpg',
            },
        },
        'list_status': {
            'status': 'plan_to_watch',
            'score': 0,
            'num_episodes_watched': 1,
            'is_rewatching': false,
            'updated_at': '2016-04-19T14:10:40+00:00',
        },
    },
    {
        'node': {
            'id': 9367,
            'title': 'Freezing',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/10/28535.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/10/28535l.jpg',
            },
        },
        'list_status': {
            'status': 'plan_to_watch',
            'score': 0,
            'num_episodes_watched': 0,
            'is_rewatching': false,
            'updated_at': '2015-08-23T11:15:43+00:00',
        },
    },
    {
        'node': {
            'id': 121,
            'title': 'Fullmetal Alchemist',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/10/75815.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/10/75815l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 6,
            'num_episodes_watched': 51,
            'is_rewatching': false,
            'updated_at': '2017-03-02T11:02:41+00:00',
            'start_date': '2016-09-24',
            'finish_date': '2016-09-28',
        },
    },
    {
        'node': {
            'id': 5114,
            'title': 'Fullmetal Alchemist: Brotherhood',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/1223/96541.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/1223/96541l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 5,
            'num_episodes_watched': 64,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:46+00:00',
            'start_date': '2015-03-26',
            'finish_date': '2015-03-30',
        },
    },
    {
        'node': {
            'id': 4725,
            'title': 'Ga-Rei: Zero',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/9/11355.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/9/11355l.jpg',
            },
        },
        'list_status': {
            'status': 'plan_to_watch',
            'score': 0,
            'num_episodes_watched': 0,
            'is_rewatching': false,
            'updated_at': '2015-12-28T08:44:25+00:00',
        },
    },
    {
        'node': {
            'id': 24765,
            'title': 'Gakkougurashi!',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/1798/91548.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/1798/91548l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 7,
            'num_episodes_watched': 12,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:46+00:00',
            'start_date': '2015-11-02',
            'finish_date': '2015-11-03',
        },
    },
    {
        'node': {
            'id': 384,
            'title': 'Gantz',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/13/5998.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/13/5998l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 6,
            'num_episodes_watched': 13,
            'is_rewatching': false,
            'updated_at': '2017-11-05T03:55:31+00:00',
            'start_date': '2017-03-21',
            'finish_date': '2017-03-21',
        },
    },
    {
        'node': {
            'id': 395,
            'title': 'Gantz 2nd Stage',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/10/23247.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/10/23247l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 4,
            'num_episodes_watched': 13,
            'is_rewatching': false,
            'updated_at': '2017-03-22T03:54:06+00:00',
            'start_date': '2017-03-22',
            'finish_date': '2017-03-22',
        },
    },
    {
        'node': {
            'id': 18229,
            'title': 'Gatchaman Crowds',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/7/52471.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/7/52471l.jpg',
            },
        },
        'list_status': {
            'status': 'plan_to_watch',
            'score': 0,
            'num_episodes_watched': 0,
            'is_rewatching': false,
            'updated_at': '2017-03-02T11:18:42+00:00',
        },
    },
    {
        'node': {
            'id': 28907,
            'title': 'Gate: Jieitai Kanochi nite, Kaku Tatakaeri',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/8/76222.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/8/76222l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 7,
            'num_episodes_watched': 12,
            'is_rewatching': false,
            'updated_at': '2017-12-17T14:41:46+00:00',
            'start_date': '2016-11-04',
            'finish_date': '2016-11-05',
        },
    },
    {
        'node': {
            'id': 31637,
            'title': 'Gate: Jieitai Kanochi nite, Kaku Tatakaeri 2nd Season',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/8/77382.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/8/77382l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 7,
            'num_episodes_watched': 12,
            'is_rewatching': false,
            'updated_at': '2017-03-02T11:02:55+00:00',
            'start_date': '2016-11-06',
            'finish_date': '2016-11-06',
        },
    },
    {
        'node': {
            'id': 23289,
            'title': 'Gekkan Shoujo Nozaki-kun',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/5/66083.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/5/66083l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 7,
            'num_episodes_watched': 12,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:46+00:00',
            'start_date': '2015-09-18',
            'finish_date': '2015-10-13',
        },
    },
    {
        'node': {
            'id': 27633,
            'title': 'Gekkan Shoujo Nozaki-kun Specials',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/9/66871.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/9/66871l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 6,
            'num_episodes_watched': 6,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:45+00:00',
            'start_date': '2015-10-13',
            'finish_date': '2015-10-13',
        },
    },
    {
        'node': {
            'id': 1571,
            'title': 'Ghost Hunt',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/11/73908.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/11/73908l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 6,
            'num_episodes_watched': 25,
            'is_rewatching': false,
            'updated_at': '2017-03-02T11:03:01+00:00',
            'start_date': '2016-01-14',
            'finish_date': '2016-02-14',
        },
    },
    {
        'node': {
            'id': 14131,
            'title': 'Girls & Panzer',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/9/40969.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/9/40969l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 6,
            'num_episodes_watched': 12,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:46+00:00',
            'start_date': '2016-03-05',
            'finish_date': '2016-04-14',
        },
    },
    {
        'node': {
            'id': 37349,
            'title': 'Goblin Slayer',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/1719/95621.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/1719/95621l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 0,
            'num_episodes_watched': 12,
            'is_rewatching': false,
            'updated_at': '2019-01-15T01:29:02+00:00',
            'start_date': '2018-10-31',
            'finish_date': '2019-01-02',
        },
    },
    {
        'node': {
            'id': 27631,
            'title': 'God Eater',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/7/73852.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/7/73852l.jpg',
            },
        },
        'list_status': {
            'status': 'plan_to_watch',
            'score': 0,
            'num_episodes_watched': 0,
            'is_rewatching': false,
            'updated_at': '2015-08-11T11:16:37+00:00',
        },
    },
    {
        'node': {
            'id': 21431,
            'title': 'Gokukoku no Brynhildr',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/5/61433.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/5/61433l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 6,
            'num_episodes_watched': 13,
            'is_rewatching': false,
            'updated_at': '2017-03-02T11:11:23+00:00',
            'start_date': '2016-08-14',
            'finish_date': '2016-08-17',
        },
    },
    {
        'node': {
            'id': 24695,
            'title': 'Gokukoku no Brynhildr: Kara Sawagi',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/9/68045.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/9/68045l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 7,
            'num_episodes_watched': 1,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:45+00:00',
            'start_date': '2016-08-18',
            'finish_date': '2016-08-18',
        },
    },
    {
        'node': {
            'id': 4039,
            'title': 'Golgo 13 (TV)',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/9/25423.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/9/25423l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 6,
            'num_episodes_watched': 50,
            'is_rewatching': false,
            'updated_at': '2017-03-02T11:03:16+00:00',
            'start_date': '2016-10-08',
            'finish_date': '2016-10-24',
        },
    },
    {
        'node': {
            'id': 37105,
            'title': 'Grand Blue',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/1302/94882.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/1302/94882l.jpg',
            },
        },
        'list_status': {
            'status': 'watching',
            'score': 0,
            'num_episodes_watched': 1,
            'is_rewatching': false,
            'updated_at': '2018-08-11T01:00:20+00:00',
            'start_date': '2018-08-11',
        },
    },
    {
        'node': {
            'id': 245,
            'title': 'Great Teacher Onizuka',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/13/11460.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/13/11460l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 8,
            'num_episodes_watched': 43,
            'is_rewatching': false,
            'updated_at': '2017-03-30T16:51:43+00:00',
            'start_date': '2017-03-22',
            'finish_date': '2017-03-30',
        },
    },
    {
        'node': {
            'id': 17729,
            'title': 'Grisaia no Kajitsu',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/10/73591.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/10/73591l.jpg',
            },
        },
        'list_status': {
            'status': 'plan_to_watch',
            'score': 0,
            'num_episodes_watched': 0,
            'is_rewatching': false,
            'updated_at': '2017-03-02T11:14:04+00:00',
        },
    },
    {
        'node': {
            'id': 10793,
            'title': 'Guilty Crown',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/8/33713.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/8/33713l.jpg',
            },
        },
        'list_status': {
            'status': 'plan_to_watch',
            'score': 0,
            'num_episodes_watched': 0,
            'is_rewatching': false,
            'updated_at': '2015-11-24T22:42:08+00:00',
        },
    },
    {
        'node': {
            'id': 10417,
            'title': 'Gyo',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/9/31905.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/9/31905l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 6,
            'num_episodes_watched': 1,
            'is_rewatching': false,
            'updated_at': '2017-12-17T14:43:17+00:00',
            'start_date': '2017-10-27',
            'finish_date': '2017-10-27',
        },
    },
    {
        'node': {
            'id': 31859,
            'title': 'Hai to Gensou no Grimgar',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/13/77976.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/13/77976l.jpg',
            },
        },
        'list_status': {
            'status': 'plan_to_watch',
            'score': 0,
            'num_episodes_watched': 0,
            'is_rewatching': false,
            'updated_at': '2017-03-02T11:35:47+00:00',
        },
    },
    {
        'node': {
            'id': 11785,
            'title': 'Haiyore! Nyaruko-san',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/6/49081.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/6/49081l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 8,
            'num_episodes_watched': 12,
            'is_rewatching': false,
            'updated_at': '2018-02-12T01:59:11+00:00',
            'start_date': '2018-02-04',
            'finish_date': '2018-02-11',
        },
    },
    {
        'node': {
            'id': 39030,
            'title': 'Hataage! Kemono Michi',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/1736/103512.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/1736/103512l.jpg',
            },
        },
        'list_status': {
            'status': 'watching',
            'score': 0,
            'num_episodes_watched': 0,
            'is_rewatching': false,
            'updated_at': '2019-10-10T21:02:49+00:00',
        },
    },
    {
        'node': {
            'id': 15809,
            'title': 'Hataraku Maou-sama!',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/3/50177.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/3/50177l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 6,
            'num_episodes_watched': 13,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:46+00:00',
            'start_date': '2015-07-12',
            'finish_date': '2015-07-12',
        },
    },
    {
        'node': {
            'id': 270,
            'title': 'Hellsing',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/10/19956.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/10/19956l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 7,
            'num_episodes_watched': 13,
            'is_rewatching': false,
            'updated_at': '2016-11-05T05:42:32+00:00',
            'start_date': '2015-11-02',
            'finish_date': '2016-10-02',
        },
    },
    {
        'node': {
            'id': 777,
            'title': 'Hellsing Ultimate',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/6/7333.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/6/7333l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 8,
            'num_episodes_watched': 10,
            'is_rewatching': false,
            'updated_at': '2017-04-06T06:17:09+00:00',
            'start_date': '2017-04-05',
            'finish_date': '2017-04-06',
        },
    },
    {
        'node': {
            'id': 15225,
            'title': 'Hentai Ouji to Warawanai Neko.',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/3/75788.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/3/75788l.jpg',
            },
        },
        'list_status': {
            'status': 'plan_to_watch',
            'score': 0,
            'num_episodes_watched': 0,
            'is_rewatching': false,
            'updated_at': '2016-04-24T19:43:57+00:00',
        },
    },
    {
        'node': {
            'id': 2002,
            'title': 'Heroic Age',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/12/50435.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/12/50435l.jpg',
            },
        },
        'list_status': {
            'status': 'watching',
            'score': 0,
            'num_episodes_watched': 0,
            'is_rewatching': false,
            'updated_at': '2017-06-10T11:56:06+00:00',
        },
    },
    {
        'node': {
            'id': 8630,
            'title': 'Hidan no Aria',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/9/30095.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/9/30095l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 7,
            'num_episodes_watched': 12,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:46+00:00',
            'start_date': '2016-03-31',
            'finish_date': '2016-04-03',
        },
    },
    {
        'node': {
            'id': 10604,
            'title': 'Hidan no Aria: Butei ga Kitarite Onsen Kenshuu',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/2/29138.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/2/29138l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 2,
            'num_episodes_watched': 1,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:46+00:00',
            'start_date': '2016-04-03',
            'finish_date': '2016-04-03',
        },
    },
    {
        'node': {
            'id': 11617,
            'title': 'High School DxD',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/2/32527.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/2/32527l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 6,
            'num_episodes_watched': 12,
            'is_rewatching': false,
            'updated_at': '2016-10-24T09:02:07+00:00',
            'start_date': '2015-11-30',
            'finish_date': '2015-12-02',
        },
    },
    {
        'node': {
            'id': 12729,
            'title': 'High School DxD OVA',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/13/63561.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/13/63561l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 5,
            'num_episodes_watched': 2,
            'is_rewatching': false,
            'updated_at': '2016-10-24T09:02:18+00:00',
            'start_date': '2015-12-02',
            'finish_date': '2015-12-02',
        },
    },
    {
        'node': {
            'id': 934,
            'title': 'Higurashi no Naku Koro ni',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/12/19634.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/12/19634l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 5,
            'num_episodes_watched': 26,
            'is_rewatching': false,
            'updated_at': '2017-12-17T14:42:02+00:00',
            'start_date': '2016-09-08',
            'finish_date': '2016-09-13',
        },
    },
    {
        'node': {
            'id': 22835,
            'title': 'Himegoto',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/8/75226.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/8/75226l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 6,
            'num_episodes_watched': 13,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:47+00:00',
            'start_date': '2016-01-06',
            'finish_date': '2016-03-31',
        },
    },
    {
        'node': {
            'id': 20853,
            'title': 'Hitsugi no Chaika',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/4/61781.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/4/61781l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 6,
            'num_episodes_watched': 12,
            'is_rewatching': false,
            'updated_at': '2017-03-02T11:03:33+00:00',
            'start_date': '2016-10-24',
            'finish_date': '2016-10-25',
        },
    },
    {
        'node': {
            'id': 24231,
            'title': 'Hitsugi no Chaika: Avenging Battle',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/3/67797.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/3/67797l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 6,
            'num_episodes_watched': 10,
            'is_rewatching': false,
            'updated_at': '2017-03-02T11:03:42+00:00',
            'start_date': '2016-10-25',
            'finish_date': '2016-10-30',
        },
    },
    {
        'node': {
            'id': 256,
            'title': 'Hoshi no Koe',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/1/2389.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/1/2389l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 6,
            'num_episodes_watched': 1,
            'is_rewatching': false,
            'updated_at': '2016-08-29T12:32:32+00:00',
            'start_date': '2016-08-27',
            'finish_date': '2016-08-27',
        },
    },
    {
        'node': {
            'id': 10408,
            'title': 'Hotarubi no Mori e',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/8/38229.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/8/38229l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 7,
            'num_episodes_watched': 1,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:47+00:00',
            'start_date': '2016-03-29',
            'finish_date': '2016-03-29',
        },
    },
    {
        'node': {
            'id': 8277,
            'title': 'Hyakka Ryouran: Samurai Girls',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/9/27705.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/9/27705l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 6,
            'num_episodes_watched': 12,
            'is_rewatching': false,
            'updated_at': '2017-03-02T11:05:26+00:00',
            'start_date': '2016-10-08',
            'finish_date': '2016-12-16',
        },
    },
    {
        'node': {
            'id': 12189,
            'title': 'Hyouka',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/13/50521.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/13/50521l.jpg',
            },
        },
        'list_status': {
            'status': 'plan_to_watch',
            'score': 0,
            'num_episodes_watched': 0,
            'is_rewatching': false,
            'updated_at': '2016-02-21T14:42:05+00:00',
        },
    },
    {
        'node': {
            'id': 35413,
            'title': 'Imouto sae Ireba Ii.',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/10/88472.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/10/88472l.jpg',
            },
        },
        'list_status': {
            'status': 'watching',
            'score': 0,
            'num_episodes_watched': 0,
            'is_rewatching': false,
            'updated_at': '2017-12-24T06:59:32+00:00',
        },
    },
    {
        'node': {
            'id': 17831,
            'title': 'Inu to Hasami wa Tsukaiyou',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/13/56313.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/13/56313l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 5,
            'num_episodes_watched': 12,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:46+00:00',
            'start_date': '2015-06-24',
            'finish_date': '2015-07-01',
        },
    },
    {
        'node': {
            'id': 34542,
            'title': 'Inuyashiki',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/7/88471.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/7/88471l.jpg',
            },
        },
        'list_status': {
            'status': 'watching',
            'score': 0,
            'num_episodes_watched': 0,
            'is_rewatching': false,
            'updated_at': '2017-11-05T03:59:22+00:00',
        },
    },
    {
        'node': {
            'id': 9041,
            'title': 'IS: Infinite Stratos',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/3/74045.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/3/74045l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 6,
            'num_episodes_watched': 12,
            'is_rewatching': false,
            'updated_at': '2017-03-02T11:03:49+00:00',
            'start_date': '2015-08-17',
            'finish_date': '2015-08-31',
        },
    },
    {
        'node': {
            'id': 18247,
            'title': 'IS: Infinite Stratos 2',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/12/49359.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/12/49359l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 5,
            'num_episodes_watched': 12,
            'is_rewatching': false,
            'updated_at': '2017-03-02T11:03:57+00:00',
            'start_date': '2015-09-01',
            'finish_date': '2015-09-06',
        },
    },
    {
        'node': {
            'id': 37210,
            'title': 'Isekai Maou to Shoukan Shoujo no Dorei Majutsu',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/1649/93412.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/1649/93412l.jpg',
            },
        },
        'list_status': {
            'status': 'watching',
            'score': 0,
            'num_episodes_watched': 0,
            'is_rewatching': false,
            'updated_at': '2018-09-01T11:15:49+00:00',
        },
    },
    {
        'node': {
            'id': 34012,
            'title': 'Isekai Shokudou',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/3/86666.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/3/86666l.jpg',
            },
        },
        'list_status': {
            'status': 'watching',
            'score': 0,
            'num_episodes_watched': 3,
            'is_rewatching': false,
            'updated_at': '2018-09-21T11:49:38+00:00',
            'start_date': '2017-08-05',
        },
    },
    {
        'node': {
            'id': 25429,
            'title': 'Isuca',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/3/71767.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/3/71767l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 5,
            'num_episodes_watched': 10,
            'is_rewatching': false,
            'updated_at': '2016-10-31T19:21:36+00:00',
            'start_date': '2016-10-01',
            'finish_date': '2016-10-02',
        },
    },
    {
        'node': {
            'id': 570,
            'title': 'Jin-Rou',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/1323/103343.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/1323/103343l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 7,
            'num_episodes_watched': 1,
            'is_rewatching': false,
            'updated_at': '2017-03-02T11:07:53+00:00',
            'start_date': '2016-07-17',
            'finish_date': '2016-07-17',
        },
    },
    {
        'node': {
            'id': 31405,
            'title': 'Joker Game',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/9/77523.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/9/77523l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 7,
            'num_episodes_watched': 12,
            'is_rewatching': false,
            'updated_at': '2017-03-27T04:44:34+00:00',
            'start_date': '2017-03-27',
            'finish_date': '2017-03-27',
        },
    },
    {
        'node': {
            'id': 28387,
            'title': 'Joukamachi no Dandelion',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/11/82559.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/11/82559l.jpg',
            },
        },
        'list_status': {
            'status': 'plan_to_watch',
            'score': 0,
            'num_episodes_watched': 0,
            'is_rewatching': false,
            'updated_at': '2016-10-16T13:59:04+00:00',
        },
    },
    {
        'node': {
            'id': 34933,
            'title': 'Kakegurui',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/3/86578.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/3/86578l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 9,
            'num_episodes_watched': 12,
            'is_rewatching': false,
            'updated_at': '2018-08-29T23:36:39+00:00',
            'start_date': '2018-08-27',
            'finish_date': '2018-08-29',
        },
    },
    {
        'node': {
            'id': 37086,
            'title': 'Kakegurui××',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/1496/96519.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/1496/96519l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 0,
            'num_episodes_watched': 12,
            'is_rewatching': false,
            'updated_at': '2019-06-17T20:04:52+00:00',
            'start_date': '2019-06-14',
            'finish_date': '2019-06-15',
        },
    },
    {
        'node': {
            'id': 3503,
            'title': 'Kanokon',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/11/9490.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/11/9490l.jpg',
            },
        },
        'list_status': {
            'status': 'watching',
            'score': 0,
            'num_episodes_watched': 0,
            'is_rewatching': false,
            'updated_at': '2019-01-15T01:30:08+00:00',
        },
    },
    {
        'node': {
            'id': 21511,
            'title': 'Kantai Collection: KanColle',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/4/73954.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/4/73954l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 5,
            'num_episodes_watched': 12,
            'is_rewatching': false,
            'updated_at': '2017-03-02T11:04:06+00:00',
            'start_date': '2015-09-20',
            'finish_date': '2016-01-18',
        },
    },
    {
        'node': {
            'id': 35860,
            'title': 'Karakai Jouzu no Takagi-san',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/1591/95091.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/1591/95091l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 0,
            'num_episodes_watched': 12,
            'is_rewatching': false,
            'updated_at': '2018-09-01T10:20:37+00:00',
            'start_date': '2018-08-30',
            'finish_date': '2018-08-31',
        },
    },
    {
        'node': {
            'id': 33089,
            'title': 'Kemono Friends',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/2/83518.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/2/83518l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 7,
            'num_episodes_watched': 12,
            'is_rewatching': false,
            'updated_at': '2017-11-05T03:55:24+00:00',
            'start_date': '2017-04-13',
            'finish_date': '2017-04-13',
        },
    },
    {
        'node': {
            'id': 33,
            'title': 'Kenpuu Denki Berserk',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/12/18520.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/12/18520l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 8,
            'num_episodes_watched': 25,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:45+00:00',
            'start_date': '2016-07-27',
            'finish_date': '2016-08-05',
        },
    },
    {
        'node': {
            'id': 18679,
            'title': 'Kill la Kill',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/8/75514.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/8/75514l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 7,
            'num_episodes_watched': 24,
            'is_rewatching': false,
            'updated_at': '2017-10-04T03:59:50+00:00',
            'start_date': '2015-03-05',
            'finish_date': '2015-03-20',
        },
    },
    {
        'node': {
            'id': 21659,
            'title': 'Kill la Kill Specials',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/12/73654.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/12/73654l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 6,
            'num_episodes_watched': 1,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:46+00:00',
            'start_date': '2015-03-25',
            'finish_date': '2015-03-25',
        },
    },
    {
        'node': {
            'id': 32281,
            'title': 'Kimi no Na wa.',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/5/87048.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/5/87048l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 8,
            'num_episodes_watched': 1,
            'is_rewatching': false,
            'updated_at': '2017-03-02T11:06:19+00:00',
            'start_date': '2016-10-14',
            'finish_date': '2016-10-14',
        },
    },
    {
        'node': {
            'id': 33082,
            'title': 'Kingsglaive: Final Fantasy XV',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/12/79392.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/12/79392l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 7,
            'num_episodes_watched': 1,
            'is_rewatching': false,
            'updated_at': '2017-03-02T11:08:14+00:00',
            'start_date': '2017-01-26',
            'finish_date': '2017-01-26',
        },
    },
    {
        'node': {
            'id': 22535,
            'title': 'Kiseijuu: Sei no Kakuritsu',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/3/73178.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/3/73178l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 8,
            'num_episodes_watched': 24,
            'is_rewatching': false,
            'updated_at': '2017-12-17T14:41:22+00:00',
            'start_date': '2017-02-05',
            'finish_date': '2017-02-05',
        },
    },
    {
        'node': {
            'id': 7593,
            'title': 'Kiss x Sis (TV)',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/3/25518.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/3/25518l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 5,
            'num_episodes_watched': 12,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:46+00:00',
            'start_date': '2015-08-19',
            'finish_date': '2015-09-19',
        },
    },
    {
        'node': {
            'id': 31798,
            'title': 'Kiznaiver',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/6/78466.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/6/78466l.jpg',
            },
        },
        'list_status': {
            'status': 'plan_to_watch',
            'score': 0,
            'num_episodes_watched': 0,
            'is_rewatching': false,
            'updated_at': '2016-05-22T08:19:21+00:00',
        },
    },
    {
        'node': {
            'id': 9260,
            'title': 'Kizumonogatari I: Tekketsu-hen',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/11/80621.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/11/80621l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 7,
            'num_episodes_watched': 1,
            'is_rewatching': false,
            'updated_at': '2017-03-02T11:08:06+00:00',
            'start_date': '2016-11-23',
            'finish_date': '2016-11-23',
        },
    },
    {
        'node': {
            'id': 8876,
            'title': 'Koe de Oshigoto! The Animation',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/5/25524.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/5/25524l.jpg',
            },
        },
        'list_status': {
            'status': 'watching',
            'score': 0,
            'num_episodes_watched': 0,
            'is_rewatching': false,
            'updated_at': '2018-04-15T00:47:12+00:00',
        },
    },
    {
        'node': {
            'id': 28851,
            'title': 'Koe no Katachi',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/1122/96435.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/1122/96435l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 8,
            'num_episodes_watched': 1,
            'is_rewatching': false,
            'updated_at': '2017-06-07T23:55:11+00:00',
            'start_date': '2017-03-15',
            'finish_date': '2017-03-15',
        },
    },
    {
        'node': {
            'id': 30831,
            'title': 'Kono Subarashii Sekai ni Shukufuku wo!',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/8/77831.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/8/77831l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 7,
            'num_episodes_watched': 10,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:45+00:00',
            'start_date': '2016-03-11',
            'finish_date': '2016-03-20',
        },
    },
    {
        'node': {
            'id': 35241,
            'title': 'Konohana Kitan',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/3/88431.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/3/88431l.jpg',
            },
        },
        'list_status': {
            'status': 'watching',
            'score': 0,
            'num_episodes_watched': 0,
            'is_rewatching': false,
            'updated_at': '2018-01-13T22:48:42+00:00',
        },
    },
    {
        'node': {
            'id': 43,
            'title': 'Koukaku Kidoutai',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/10/82594.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/10/82594l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 6,
            'num_episodes_watched': 1,
            'is_rewatching': false,
            'updated_at': '2017-03-02T10:59:14+00:00',
            'start_date': '2017-02-09',
            'finish_date': '2017-02-09',
        },
    },
    {
        'node': {
            'id': 467,
            'title': 'Koukaku Kidoutai: Stand Alone Complex',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/11/50857.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/11/50857l.jpg',
            },
        },
        'list_status': {
            'status': 'watching',
            'score': 0,
            'num_episodes_watched': 7,
            'is_rewatching': false,
            'updated_at': '2018-08-10T23:13:28+00:00',
            'start_date': '2018-08-11',
        },
    },
    {
        'node': {
            'id': 32245,
            'title': 'Kuromukuro',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/12/82281.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/12/82281l.jpg',
            },
        },
        'list_status': {
            'status': 'watching',
            'score': 0,
            'num_episodes_watched': 0,
            'is_rewatching': false,
            'updated_at': '2016-09-18T09:12:07+00:00',
        },
    },
    {
        'node': {
            'id': 32949,
            'title': 'Kuzu no Honkai',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/5/83937.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/5/83937l.jpg',
            },
        },
        'list_status': {
            'status': 'watching',
            'score': 0,
            'num_episodes_watched': 0,
            'is_rewatching': false,
            'updated_at': '2017-01-22T21:05:29+00:00',
        },
    },
    {
        'node': {
            'id': 18153,
            'title': 'Kyoukai no Kanata',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/3/85468.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/3/85468l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 7,
            'num_episodes_watched': 12,
            'is_rewatching': false,
            'updated_at': '2017-07-31T22:45:14+00:00',
            'start_date': '2017-07-29',
            'finish_date': '2017-07-31',
        },
    },
    {
        'node': {
            'id': 14349,
            'title': 'Little Witch Academia',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/2/42989.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/2/42989l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 8,
            'num_episodes_watched': 1,
            'is_rewatching': false,
            'updated_at': '2017-07-30T19:42:15+00:00',
            'start_date': '2017-07-25',
            'finish_date': '2017-07-25',
        },
    },
    {
        'node': {
            'id': 33489,
            'title': 'Little Witch Academia (TV)',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/13/83934.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/13/83934l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 9,
            'num_episodes_watched': 25,
            'is_rewatching': false,
            'updated_at': '2017-12-17T07:16:06+00:00',
            'start_date': '2017-07-26',
            'finish_date': '2017-12-16',
        },
    },
    {
        'node': {
            'id': 194,
            'title': 'Macross Zero',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/12/76289.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/12/76289l.jpg',
            },
        },
        'list_status': {
            'status': 'watching',
            'score': 0,
            'num_episodes_watched': 0,
            'is_rewatching': false,
            'updated_at': '2017-11-25T01:49:42+00:00',
        },
    },
    {
        'node': {
            'id': 24455,
            'title': 'Madan no Ou to Vanadis',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/3/64911.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/3/64911l.jpg',
            },
        },
        'list_status': {
            'status': 'plan_to_watch',
            'score': 0,
            'num_episodes_watched': 0,
            'is_rewatching': false,
            'updated_at': '2016-01-08T03:39:23+00:00',
        },
    },
    {
        'node': {
            'id': 9756,
            'title': 'Mahou Shoujo Madoka★Magica',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/11/55225.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/11/55225l.jpg',
            },
        },
        'list_status': {
            'status': 'dropped',
            'score': 1,
            'num_episodes_watched': 1,
            'is_rewatching': false,
            'updated_at': '2017-10-04T03:35:23+00:00',
            'start_date': '2017-01-29',
        },
    },
    {
        'node': {
            'id': 20785,
            'title': 'Mahouka Koukou no Rettousei',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/11/61039.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/11/61039l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 9,
            'num_episodes_watched': 26,
            'is_rewatching': false,
            'updated_at': '2017-12-25T15:59:48+00:00',
            'start_date': '2017-12-18',
            'finish_date': '2017-12-25',
        },
    },
    {
        'node': {
            'id': 32900,
            'title': 'Mahouka Koukou no Rettousei Movie: Hoshi wo Yobu Shoujo',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/8/85524.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/8/85524l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 0,
            'num_episodes_watched': 1,
            'is_rewatching': false,
            'updated_at': '2019-06-17T20:05:21+00:00',
            'start_date': '2019-06-17',
            'finish_date': '2019-06-17',
        },
    },
    {
        'node': {
            'id': 35062,
            'title': 'Mahoutsukai no Yome',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/3/88476.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/3/88476l.jpg',
            },
        },
        'list_status': {
            'status': 'watching',
            'score': 0,
            'num_episodes_watched': 0,
            'is_rewatching': false,
            'updated_at': '2017-10-07T18:42:22+00:00',
        },
    },
    {
        'node': {
            'id': 32902,
            'title': 'Mahoutsukai no Yome: Hoshi Matsu Hito',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/4/80587.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/4/80587l.jpg',
            },
        },
        'list_status': {
            'status': 'watching',
            'score': 0,
            'num_episodes_watched': 1,
            'is_rewatching': false,
            'updated_at': '2017-02-04T13:09:39+00:00',
            'start_date': '2017-01-18',
        },
    },
    {
        'node': {
            'id': 10465,
            'title': 'Manyuu Hikenchou',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/9/75184.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/9/75184l.jpg',
            },
        },
        'list_status': {
            'status': 'watching',
            'score': 0,
            'num_episodes_watched': 4,
            'is_rewatching': false,
            'updated_at': '2019-02-26T02:19:52+00:00',
            'start_date': '2019-02-26',
        },
    },
    {
        'node': {
            'id': 10110,
            'title': 'Mayo Chiki!',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/13/29971.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/13/29971l.jpg',
            },
        },
        'list_status': {
            'status': 'plan_to_watch',
            'score': 0,
            'num_episodes_watched': 0,
            'is_rewatching': false,
            'updated_at': '2017-03-02T11:14:36+00:00',
        },
    },
    {
        'node': {
            'id': 32438,
            'title': 'Mayoiga',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/4/79413.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/4/79413l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 6,
            'num_episodes_watched': 12,
            'is_rewatching': false,
            'updated_at': '2017-03-02T11:20:46+00:00',
            'start_date': '2017-02-19',
            'finish_date': '2017-02-27',
        },
    },
    {
        'node': {
            'id': 10620,
            'title': 'Mirai Nikki',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/13/33465.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/13/33465l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 6,
            'num_episodes_watched': 26,
            'is_rewatching': false,
            'updated_at': '2017-12-20T07:42:24+00:00',
            'start_date': '2015-06-07',
            'finish_date': '2015-06-09',
        },
    },
    {
        'node': {
            'id': 8460,
            'title': 'Mirai Nikki OVA',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/10/22971.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/10/22971l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 7,
            'num_episodes_watched': 1,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:47+00:00',
            'start_date': '2015-07-22',
            'finish_date': '2015-07-22',
        },
    },
    {
        'node': {
            'id': 16762,
            'title': 'Mirai Nikki: Redial',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/3/53247.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/3/53247l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 6,
            'num_episodes_watched': 1,
            'is_rewatching': false,
            'updated_at': '2017-03-02T11:11:14+00:00',
            'start_date': '2015-07-22',
            'finish_date': '2015-07-22',
        },
    },
    {
        'node': {
            'id': 3342,
            'title': 'Mnemosyne: Mnemosyne no Musume-tachi',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/10/10918.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/10/10918l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 9,
            'num_episodes_watched': 6,
            'is_rewatching': false,
            'updated_at': '2016-09-06T03:45:53+00:00',
            'start_date': '2016-09-02',
            'finish_date': '2016-09-06',
        },
    },
    {
        'node': {
            'id': 30307,
            'title': 'Monster Musume no Iru Nichijou',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/9/75104.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/9/75104l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 6,
            'num_episodes_watched': 12,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:46+00:00',
            'start_date': '2015-07-17',
            'finish_date': '2015-09-23',
        },
    },
    {
        'node': {
            'id': 9181,
            'title': 'Motto To LOVE-Ru',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/4/59875.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/4/59875l.jpg',
            },
        },
        'list_status': {
            'status': 'plan_to_watch',
            'score': 0,
            'num_episodes_watched': 0,
            'is_rewatching': false,
            'updated_at': '2017-03-02T11:18:57+00:00',
        },
    },
    {
        'node': {
            'id': 31442,
            'title': 'Musaigen no Phantom World',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/4/78339.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/4/78339l.jpg',
            },
        },
        'list_status': {
            'status': 'plan_to_watch',
            'score': 0,
            'num_episodes_watched': 0,
            'is_rewatching': false,
            'updated_at': '2016-01-07T23:24:31+00:00',
        },
    },
    {
        'node': {
            'id': 457,
            'title': 'Mushishi',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/2/73862.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/2/73862l.jpg',
            },
        },
        'list_status': {
            'status': 'plan_to_watch',
            'score': 0,
            'num_episodes_watched': 0,
            'is_rewatching': false,
            'updated_at': '2016-10-09T11:09:29+00:00',
        },
    },
    {
        'node': {
            'id': 26351,
            'title': 'Nagato Yuki-chan no Shoushitsu',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/3/73527.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/3/73527l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 5,
            'num_episodes_watched': 16,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:46+00:00',
            'start_date': '2015-04-27',
            'finish_date': '2015-04-27',
        },
    },
    {
        'node': {
            'id': 23755,
            'title': 'Nanatsu no Taizai',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/8/65409.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/8/65409l.jpg',
            },
        },
        'list_status': {
            'status': 'plan_to_watch',
            'score': 0,
            'num_episodes_watched': 0,
            'is_rewatching': false,
            'updated_at': '2017-03-02T11:19:19+00:00',
        },
    },
    {
        'node': {
            'id': 20,
            'title': 'Naruto',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/13/17405.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/13/17405l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 6,
            'num_episodes_watched': 220,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:47+00:00',
            'start_date': '2015-11-13',
            'finish_date': '2015-11-29',
        },
    },
    {
        'node': {
            'id': 1735,
            'title': 'Naruto: Shippuuden',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/5/17407.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/5/17407l.jpg',
            },
        },
        'list_status': {
            'status': 'on_hold',
            'score': 0,
            'num_episodes_watched': 67,
            'is_rewatching': false,
            'updated_at': '2016-05-14T20:46:30+00:00',
            'start_date': '2016-01-31',
        },
    },
    {
        'node': {
            'id': 30,
            'title': 'Neon Genesis Evangelion',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/12/21418.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/12/21418l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 2,
            'num_episodes_watched': 26,
            'is_rewatching': false,
            'updated_at': '2016-07-09T14:57:35+00:00',
            'start_date': '2015-12-21',
            'finish_date': '2015-12-29',
        },
    },
    {
        'node': {
            'id': 32,
            'title': 'Neon Genesis Evangelion: The End of Evangelion',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/12/39305.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/12/39305l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 6,
            'num_episodes_watched': 1,
            'is_rewatching': false,
            'updated_at': '2017-03-02T11:07:12+00:00',
            'start_date': '2016-03-12',
            'finish_date': '2016-03-12',
        },
    },
    {
        'node': {
            'id': 31404,
            'title': 'Netoge no Yome wa Onnanoko ja Nai to Omotta?',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/3/79414.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/3/79414l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 7,
            'num_episodes_watched': 12,
            'is_rewatching': false,
            'updated_at': '2017-03-02T11:04:58+00:00',
            'start_date': '2017-01-29',
            'finish_date': '2017-01-30',
        },
    },
    {
        'node': {
            'id': 31953,
            'title': 'New Game!',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/9/80417.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/9/80417l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 7,
            'num_episodes_watched': 12,
            'is_rewatching': false,
            'updated_at': '2016-11-08T12:46:50+00:00',
            'start_date': '2016-10-11',
            'finish_date': '2016-11-01',
        },
    },
    {
        'node': {
            'id': 34277,
            'title': 'New Game!: Watashi, Shain Ryokou tte Hajimete nano de...',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/10/86507.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/10/86507l.jpg',
            },
        },
        'list_status': {
            'status': 'plan_to_watch',
            'score': 0,
            'num_episodes_watched': 0,
            'is_rewatching': false,
            'updated_at': '2016-10-24T16:46:12+00:00',
        },
    },
    {
        'node': {
            'id': 1210,
            'title': 'NHK ni Youkoso!',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/3/52675.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/3/52675l.jpg',
            },
        },
        'list_status': {
            'status': 'watching',
            'score': 0,
            'num_episodes_watched': 0,
            'is_rewatching': false,
            'updated_at': '2016-10-16T14:36:03+00:00',
        },
    },
    {
        'node': {
            'id': 31414,
            'title': 'Nijiiro Days',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/8/76691.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/8/76691l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 7,
            'num_episodes_watched': 24,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:47+00:00',
            'start_date': '2016-01-12',
            'finish_date': '2016-07-02',
        },
    },
    {
        'node': {
            'id': 11597,
            'title': 'Nisemonogatari',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/1044/103654.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/1044/103654l.jpg',
            },
        },
        'list_status': {
            'status': 'watching',
            'score': 0,
            'num_episodes_watched': 4,
            'is_rewatching': false,
            'updated_at': '2017-04-06T06:17:26+00:00',
            'start_date': '2017-03-30',
        },
    },
    {
        'node': {
            'id': 19815,
            'title': 'No Game No Life',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/5/65187.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/5/65187l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 6,
            'num_episodes_watched': 12,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:47+00:00',
            'start_date': '2015-07-12',
            'finish_date': '2015-07-16',
        },
    },
    {
        'node': {
            'id': 17549,
            'title': 'Non Non Biyori',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/2/51581.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/2/51581l.jpg',
            },
        },
        'list_status': {
            'status': 'plan_to_watch',
            'score': 0,
            'num_episodes_watched': 0,
            'is_rewatching': false,
            'updated_at': '2015-11-24T23:32:43+00:00',
        },
    },
    {
        'node': {
            'id': 28819,
            'title': 'Okusama ga Seitokaichou!',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/12/75012.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/12/75012l.jpg',
            },
        },
        'list_status': {
            'status': 'watching',
            'score': 0,
            'num_episodes_watched': 0,
            'is_rewatching': false,
            'updated_at': '2016-10-16T14:07:48+00:00',
        },
    },
    {
        'node': {
            'id': 30276,
            'title': 'One Punch Man',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/12/76049.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/12/76049l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 7,
            'num_episodes_watched': 12,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:47+00:00',
            'start_date': '2016-01-09',
            'finish_date': '2016-05-05',
        },
    },
    {
        'node': {
            'id': 2966,
            'title': 'Ookami to Koushinryou',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/5/59401.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/5/59401l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 7,
            'num_episodes_watched': 13,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:47+00:00',
            'start_date': '2015-12-21',
            'finish_date': '2015-12-21',
        },
    },
    {
        'node': {
            'id': 5341,
            'title': 'Ookami to Koushinryou II',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/6/59399.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/6/59399l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 7,
            'num_episodes_watched': 12,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:47+00:00',
            'start_date': '2015-12-22',
            'finish_date': '2015-12-25',
        },
    },
    {
        'node': {
            'id': 853,
            'title': 'Ouran Koukou Host Club',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/2/71992.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/2/71992l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 6,
            'num_episodes_watched': 26,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:47+00:00',
            'start_date': '2016-01-29',
            'finish_date': '2016-03-25',
        },
    },
    {
        'node': {
            'id': 26243,
            'title': 'Owari no Seraph',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/5/73474.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/5/73474l.jpg',
            },
        },
        'list_status': {
            'status': 'plan_to_watch',
            'score': 0,
            'num_episodes_watched': 0,
            'is_rewatching': false,
            'updated_at': '2017-03-02T11:20:19+00:00',
        },
    },
    {
        'node': {
            'id': 36023,
            'title': 'Persona 5 the Animation',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/1829/92056.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/1829/92056l.jpg',
            },
        },
        'list_status': {
            'status': 'watching',
            'score': 0,
            'num_episodes_watched': 0,
            'is_rewatching': false,
            'updated_at': '2019-02-26T02:19:34+00:00',
            'start_date': '2019-02-22',
        },
    },
    {
        'node': {
            'id': 329,
            'title': 'Planetes',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/8/50463.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/8/50463l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 10,
            'num_episodes_watched': 26,
            'is_rewatching': false,
            'updated_at': '2016-08-26T19:48:11+00:00',
            'start_date': '2016-08-18',
            'finish_date': '2016-08-26',
        },
    },
    {
        'node': {
            'id': 10711,
            'title': 'Plastic Neesan',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/13/76583.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/13/76583l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 5,
            'num_episodes_watched': 12,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:45+00:00',
            'start_date': '2015-07-14',
            'finish_date': '2015-07-14',
        },
    },
    {
        'node': {
            'id': 6201,
            'title': 'Princess Lover!',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/7/75519.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/7/75519l.jpg',
            },
        },
        'list_status': {
            'status': 'plan_to_watch',
            'score': 0,
            'num_episodes_watched': 0,
            'is_rewatching': false,
            'updated_at': '2017-03-02T11:14:53+00:00',
        },
    },
    {
        'node': {
            'id': 13601,
            'title': 'Psycho-Pass',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/5/43399.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/5/43399l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 8,
            'num_episodes_watched': 22,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:48+00:00',
            'start_date': '2015-07-10',
            'finish_date': '2016-04-15',
        },
    },
    {
        'node': {
            'id': 23281,
            'title': 'Psycho-Pass 2',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/1197/100616.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/1197/100616l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 6,
            'num_episodes_watched': 11,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:45+00:00',
            'start_date': '2016-08-12',
            'finish_date': '2016-08-14',
        },
    },
    {
        'node': {
            'id': 21339,
            'title': 'Psycho-Pass Movie',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/8/71793.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/8/71793l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 8,
            'num_episodes_watched': 1,
            'is_rewatching': false,
            'updated_at': '2017-10-04T03:55:12+00:00',
            'start_date': '2017-06-03',
            'finish_date': '2017-06-03',
        },
    },
    {
        'node': {
            'id': 33926,
            'title': 'Quanzhi Gaoshou',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/7/81892.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/7/81892l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 8,
            'num_episodes_watched': 12,
            'is_rewatching': false,
            'updated_at': '2017-12-17T14:41:00+00:00',
            'start_date': '2017-04-30',
            'finish_date': '2017-12-17',
        },
    },
    {
        'node': {
            'id': 23309,
            'title': 'Rail Wars!',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/13/65671.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/13/65671l.jpg',
            },
        },
        'list_status': {
            'status': 'watching',
            'score': 0,
            'num_episodes_watched': 0,
            'is_rewatching': false,
            'updated_at': '2018-10-15T17:14:49+00:00',
        },
    },
    {
        'node': {
            'id': 30296,
            'title': 'Rakudai Kishi no Cavalry',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/9/76493.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/9/76493l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 7,
            'num_episodes_watched': 12,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:46+00:00',
            'start_date': '2015-11-29',
            'finish_date': '2015-12-22',
        },
    },
    {
        'node': {
            'id': 34561,
            'title': 'Re:Creators',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/11/85469.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/11/85469l.jpg',
            },
        },
        'list_status': {
            'status': 'watching',
            'score': 0,
            'num_episodes_watched': 2,
            'is_rewatching': false,
            'updated_at': '2017-12-11T09:52:01+00:00',
            'start_date': '2017-12-09',
        },
    },
    {
        'node': {
            'id': 31240,
            'title': 'Re:Zero kara Hajimeru Isekai Seikatsu',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/11/79410.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/11/79410l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 5,
            'num_episodes_watched': 25,
            'is_rewatching': false,
            'updated_at': '2016-10-07T20:20:27+00:00',
            'start_date': '2016-09-30',
            'finish_date': '2016-10-07',
        },
    },
    {
        'node': {
            'id': 13599,
            'title': 'Robotics;Notes',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/10/42013.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/10/42013l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 5,
            'num_episodes_watched': 22,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:47+00:00',
            'start_date': '2016-04-16',
            'finish_date': '2016-04-18',
        },
    },
    {
        'node': {
            'id': 64,
            'title': 'Rozen Maiden',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/2/15728.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/2/15728l.jpg',
            },
        },
        'list_status': {
            'status': 'plan_to_watch',
            'score': 0,
            'num_episodes_watched': 0,
            'is_rewatching': false,
            'updated_at': '2016-08-14T08:05:02+00:00',
        },
    },
    {
        'node': {
            'id': 21561,
            'title': 'Ryuugajou Nanana no Maizoukin (TV)',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/3/60475.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/3/60475l.jpg',
            },
        },
        'list_status': {
            'status': 'plan_to_watch',
            'score': 0,
            'num_episodes_watched': 0,
            'is_rewatching': false,
            'updated_at': '2015-09-18T11:50:45+00:00',
        },
    },
    {
        'node': {
            'id': 23277,
            'title': 'Saenai Heroine no Sodatekata',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/7/68783.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/7/68783l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 5,
            'num_episodes_watched': 12,
            'is_rewatching': false,
            'updated_at': '2017-03-02T11:11:34+00:00',
            'start_date': '2015-12-04',
            'finish_date': '2016-04-05',
        },
    },
    {
        'node': {
            'id': 33255,
            'title': 'Saiki Kusuo no Ψ-nan',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/11/80167.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/11/80167l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 0,
            'num_episodes_watched': 120,
            'is_rewatching': false,
            'updated_at': '2019-01-27T15:32:10+00:00',
            'start_date': '2019-01-26',
            'finish_date': '2019-01-27',
        },
    },
    {
        'node': {
            'id': 32542,
            'title': 'Sakamoto Desu ga?',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/4/79468.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/4/79468l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 6,
            'num_episodes_watched': 12,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:47+00:00',
            'start_date': '2016-05-07',
            'finish_date': '2016-07-06',
        },
    },
    {
        'node': {
            'id': 20047,
            'title': 'Sakura Trick',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/2/56189.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/2/56189l.jpg',
            },
        },
        'list_status': {
            'status': 'plan_to_watch',
            'score': 0,
            'num_episodes_watched': 0,
            'is_rewatching': false,
            'updated_at': '2016-10-16T13:26:50+00:00',
        },
    },
    {
        'node': {
            'id': 13759,
            'title': 'Sakura-sou no Pet na Kanojo',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/4/43643.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/4/43643l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 7,
            'num_episodes_watched': 24,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:47+00:00',
            'start_date': '2015-06-02',
            'finish_date': '2015-06-14',
        },
    },
    {
        'node': {
            'id': 30187,
            'title': 'Sakurako-san no Ashimoto ni wa Shitai ga Umatteiru',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/7/76116.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/7/76116l.jpg',
            },
        },
        'list_status': {
            'status': 'watching',
            'score': 0,
            'num_episodes_watched': 0,
            'is_rewatching': false,
            'updated_at': '2016-08-13T18:18:24+00:00',
        },
    },
    {
        'node': {
            'id': 14515,
            'title': 'Sasami-san@Ganbaranai',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/4/53951.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/4/53951l.jpg',
            },
        },
        'list_status': {
            'status': 'plan_to_watch',
            'score': 0,
            'num_episodes_watched': 0,
            'is_rewatching': false,
            'updated_at': '2016-07-11T19:36:49+00:00',
        },
    },
    {
        'node': {
            'id': 2476,
            'title': 'School Days',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/8/86373.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/8/86373l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 6,
            'num_episodes_watched': 12,
            'is_rewatching': false,
            'updated_at': '2017-03-02T11:07:35+00:00',
            'start_date': '2016-04-05',
            'finish_date': '2016-04-06',
        },
    },
    {
        'node': {
            'id': 30806,
            'title': 'Schwarzesmarken',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/13/77386.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/13/77386l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 8,
            'num_episodes_watched': 12,
            'is_rewatching': false,
            'updated_at': '2017-03-02T11:11:49+00:00',
            'start_date': '2016-10-30',
            'finish_date': '2016-10-31',
        },
    },
    {
        'node': {
            'id': 6500,
            'title': 'Seikon no Qwaser',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/9/67771.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/9/67771l.jpg',
            },
        },
        'list_status': {
            'status': 'plan_to_watch',
            'score': 0,
            'num_episodes_watched': 0,
            'is_rewatching': false,
            'updated_at': '2017-03-02T11:17:09+00:00',
        },
    },
    {
        'node': {
            'id': 1827,
            'title': 'Seirei no Moribito',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/4/50337.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/4/50337l.jpg',
            },
        },
        'list_status': {
            'status': 'plan_to_watch',
            'score': 0,
            'num_episodes_watched': 0,
            'is_rewatching': false,
            'updated_at': '2015-12-02T14:45:24+00:00',
        },
    },
    {
        'node': {
            'id': 33836,
            'title': 'Seiren',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/1295/95681.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/1295/95681l.jpg',
            },
        },
        'list_status': {
            'status': 'plan_to_watch',
            'score': 0,
            'num_episodes_watched': 0,
            'is_rewatching': false,
            'updated_at': '2017-01-07T07:23:47+00:00',
        },
    },
    {
        'node': {
            'id': 8675,
            'title': 'Seitokai Yakuindomo',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/4/75550.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/4/75550l.jpg',
            },
        },
        'list_status': {
            'status': 'watching',
            'score': 0,
            'num_episodes_watched': 1,
            'is_rewatching': false,
            'updated_at': '2018-07-01T03:30:27+00:00',
            'start_date': '2018-07-01',
        },
    },
    {
        'node': {
            'id': 5277,
            'title': 'Sekirei: Pure Engagement',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/10/75178.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/10/75178l.jpg',
            },
        },
        'list_status': {
            'status': 'watching',
            'score': 0,
            'num_episodes_watched': 0,
            'is_rewatching': false,
            'updated_at': '2019-02-04T17:42:30+00:00',
        },
    },
    {
        'node': {
            'id': 31540,
            'title': 'Sekkou Boys',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/5/77840.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/5/77840l.jpg',
            },
        },
        'list_status': {
            'status': 'plan_to_watch',
            'score': 0,
            'num_episodes_watched': 0,
            'is_rewatching': false,
            'updated_at': '2015-12-03T18:27:08+00:00',
        },
    },
    {
        'node': {
            'id': 34240,
            'title': 'Shelter',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/5/82388.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/5/82388l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 7,
            'num_episodes_watched': 1,
            'is_rewatching': false,
            'updated_at': '2017-03-02T11:08:51+00:00',
            'start_date': '2017-02-26',
            'finish_date': '2017-02-26',
        },
    },
    {
        'node': {
            'id': 23273,
            'title': 'Shigatsu wa Kimi no Uso',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/3/67177.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/3/67177l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 7,
            'num_episodes_watched': 22,
            'is_rewatching': false,
            'updated_at': '2017-03-02T11:09:33+00:00',
            'start_date': '2015-08-04',
            'finish_date': '2016-04-10',
        },
    },
    {
        'node': {
            'id': 7724,
            'title': 'Shiki',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/8/21343.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/8/21343l.jpg',
            },
        },
        'list_status': {
            'status': 'watching',
            'score': 0,
            'num_episodes_watched': 0,
            'is_rewatching': false,
            'updated_at': '2016-09-07T21:00:17+00:00',
        },
    },
    {
        'node': {
            'id': 16498,
            'title': 'Shingeki no Kyojin',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/10/47347.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/10/47347l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 7,
            'num_episodes_watched': 25,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:46+00:00',
            'start_date': '2015-08-07',
            'finish_date': '2015-08-12',
        },
    },
    {
        'node': {
            'id': 18397,
            'title': 'Shingeki no Kyojin OVA',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/9/59221.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/9/59221l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 7,
            'num_episodes_watched': 3,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:47+00:00',
            'start_date': '2015-08-13',
            'finish_date': '2015-08-13',
        },
    },
    {
        'node': {
            'id': 25777,
            'title': 'Shingeki no Kyojin Season 2',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/4/84177.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/4/84177l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 7,
            'num_episodes_watched': 12,
            'is_rewatching': false,
            'updated_at': '2018-03-24T07:35:02+00:00',
            'start_date': '2017-05-01',
            'finish_date': '2018-03-24',
        },
    },
    {
        'node': {
            'id': 35760,
            'title': 'Shingeki no Kyojin Season 3',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/1173/92110.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/1173/92110l.jpg',
            },
        },
        'list_status': {
            'status': 'watching',
            'score': 0,
            'num_episodes_watched': 4,
            'is_rewatching': false,
            'updated_at': '2018-09-21T09:29:21+00:00',
            'start_date': '2018-09-20',
        },
    },
    {
        'node': {
            'id': 25781,
            'title': 'Shingeki no Kyojin: Kuinaki Sentaku',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/8/69497.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/8/69497l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 7,
            'num_episodes_watched': 2,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:47+00:00',
            'start_date': '2015-08-14',
            'finish_date': '2015-08-16',
        },
    },
    {
        'node': {
            'id': 13125,
            'title': 'Shinsekai yori',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/12/36775.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/12/36775l.jpg',
            },
        },
        'list_status': {
            'status': 'watching',
            'score': 0,
            'num_episodes_watched': 0,
            'is_rewatching': false,
            'updated_at': '2018-01-08T23:37:43+00:00',
        },
    },
    {
        'node': {
            'id': 28735,
            'title': 'Shouwa Genroku Rakugo Shinjuu',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/2/77907.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/2/77907l.jpg',
            },
        },
        'list_status': {
            'status': 'watching',
            'score': 0,
            'num_episodes_watched': 1,
            'is_rewatching': false,
            'updated_at': '2016-01-12T19:25:24+00:00',
            'start_date': '2016-01-12',
        },
    },
    {
        'node': {
            'id': 33502,
            'title': 'Shuumatsu Nani Shitemasu ka? Isogashii Desu ka? Sukutte Moratte Ii Desu ka?',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/4/85260.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/4/85260l.jpg',
            },
        },
        'list_status': {
            'status': 'watching',
            'score': 0,
            'num_episodes_watched': 0,
            'is_rewatching': false,
            'updated_at': '2018-03-28T09:51:27+00:00',
        },
    },
    {
        'node': {
            'id': 19775,
            'title': 'Sidonia no Kishi',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/12/53257.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/12/53257l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 0,
            'num_episodes_watched': 12,
            'is_rewatching': false,
            'updated_at': '2018-08-25T23:13:56+00:00',
            'start_date': '2018-08-10',
            'finish_date': '2018-08-11',
        },
    },
    {
        'node': {
            'id': 24893,
            'title': 'Sidonia no Kishi: Daikyuu Wakusei Seneki',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/11/72712.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/11/72712l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 0,
            'num_episodes_watched': 12,
            'is_rewatching': false,
            'updated_at': '2018-08-12T02:32:13+00:00',
            'start_date': '2018-08-11',
            'finish_date': '2018-08-12',
        },
    },
    {
        'node': {
            'id': 5958,
            'title': 'Sora no Otoshimono',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/5/50307.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/5/50307l.jpg',
            },
        },
        'list_status': {
            'status': 'watching',
            'score': 0,
            'num_episodes_watched': 0,
            'is_rewatching': false,
            'updated_at': '2018-09-01T11:12:43+00:00',
        },
    },
    {
        'node': {
            'id': 35839,
            'title': 'Sora yori mo Tooi Basho',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/6/89879.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/6/89879l.jpg',
            },
        },
        'list_status': {
            'status': 'watching',
            'score': 0,
            'num_episodes_watched': 0,
            'is_rewatching': false,
            'updated_at': '2018-01-23T21:23:40+00:00',
        },
    },
    {
        'node': {
            'id': 36194,
            'title': 'Starship Troopers: Red Planet',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/10/89860.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/10/89860l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 0,
            'num_episodes_watched': 1,
            'is_rewatching': false,
            'updated_at': '2018-08-27T21:27:01+00:00',
            'start_date': '2018-08-27',
            'finish_date': '2018-08-27',
        },
    },
    {
        'node': {
            'id': 9253,
            'title': 'Steins;Gate',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/5/73199.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/5/73199l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 8,
            'num_episodes_watched': 24,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:47+00:00',
            'start_date': '2015-07-02',
            'finish_date': '2015-07-04',
        },
    },
    {
        'node': {
            'id': 11577,
            'title': 'Steins;Gate Movie: Fuka Ryouiki no Déjà vu',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/3/50317.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/3/50317l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 7,
            'num_episodes_watched': 1,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:47+00:00',
            'start_date': '2015-07-04',
            'finish_date': '2015-07-04',
        },
    },
    {
        'node': {
            'id': 10863,
            'title': 'Steins;Gate: Oukoubakko no Poriomania',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/7/36531.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/7/36531l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 7,
            'num_episodes_watched': 1,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:48+00:00',
            'start_date': '2015-07-04',
            'finish_date': '2015-07-04',
        },
    },
    {
        'node': {
            'id': 27957,
            'title': 'Steins;Gate: Soumei Eichi no Cognitive Computing',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/10/71319.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/10/71319l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 7,
            'num_episodes_watched': 4,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:47+00:00',
            'start_date': '2015-09-20',
            'finish_date': '2015-09-20',
        },
    },
    {
        'node': {
            'id': 5681,
            'title': 'Summer Wars',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/10/15796.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/10/15796l.jpg',
            },
        },
        'list_status': {
            'status': 'watching',
            'score': 0,
            'num_episodes_watched': 0,
            'is_rewatching': false,
            'updated_at': '2017-01-09T07:05:45+00:00',
        },
    },
    {
        'node': {
            'id': 25,
            'title': 'Sunabouzu',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/6/75536.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/6/75536l.jpg',
            },
        },
        'list_status': {
            'status': 'dropped',
            'score': 0,
            'num_episodes_watched': 1,
            'is_rewatching': false,
            'updated_at': '2017-10-04T03:35:28+00:00',
            'start_date': '2015-07-14',
        },
    },
    {
        'node': {
            'id': 7311,
            'title': 'Suzumiya Haruhi no Shoushitsu',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/2/73842.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/2/73842l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 3,
            'num_episodes_watched': 1,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:47+00:00',
            'start_date': '2015-05-05',
            'finish_date': '2015-05-05',
        },
    },
    {
        'node': {
            'id': 849,
            'title': 'Suzumiya Haruhi no Yuuutsu',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/5/75901.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/5/75901l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 4,
            'num_episodes_watched': 14,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:47+00:00',
            'start_date': '2015-05-01',
            'finish_date': '2015-05-03',
        },
    },
    {
        'node': {
            'id': 4382,
            'title': 'Suzumiya Haruhi no Yuuutsu (2009)',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/8/75377.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/8/75377l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 3,
            'num_episodes_watched': 14,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:48+00:00',
            'start_date': '2015-05-06',
            'finish_date': '2015-05-08',
        },
    },
    {
        'node': {
            'id': 11757,
            'title': 'Sword Art Online',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/11/39717.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/11/39717l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 6,
            'num_episodes_watched': 25,
            'is_rewatching': false,
            'updated_at': '2017-03-02T11:07:18+00:00',
            'start_date': '2015-10-16',
            'finish_date': '2015-10-19',
        },
    },
    {
        'node': {
            'id': 21881,
            'title': 'Sword Art Online II',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/11/65185.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/11/65185l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 5,
            'num_episodes_watched': 24,
            'is_rewatching': false,
            'updated_at': '2017-12-20T07:42:58+00:00',
            'start_date': '2015-10-28',
            'finish_date': '2015-11-12',
        },
    },
    {
        'node': {
            'id': 31765,
            'title': 'Sword Art Online Movie: Ordinal Scale',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/4/83811.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/4/83811l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 9,
            'num_episodes_watched': 1,
            'is_rewatching': false,
            'updated_at': '2017-06-07T23:54:56+00:00',
            'start_date': '2017-04-19',
            'finish_date': '2017-04-19',
        },
    },
    {
        'node': {
            'id': 20021,
            'title': 'Sword Art Online: Extra Edition',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/6/64747.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/6/64747l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 7,
            'num_episodes_watched': 1,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:46+00:00',
            'start_date': '2016-02-15',
            'finish_date': '2016-02-15',
        },
    },
    {
        'node': {
            'id': 35790,
            'title': 'Tate no Yuusha no Nariagari',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/1490/101365.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/1490/101365l.jpg',
            },
        },
        'list_status': {
            'status': 'watching',
            'score': 0,
            'num_episodes_watched': 6,
            'is_rewatching': false,
            'updated_at': '2019-02-26T02:20:07+00:00',
        },
    },
    {
        'node': {
            'id': 2001,
            'title': 'Tengen Toppa Gurren Lagann',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/4/5123.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/4/5123l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 7,
            'num_episodes_watched': 27,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:47+00:00',
            'start_date': '2015-07-16',
            'finish_date': '2015-07-27',
        },
    },
    {
        'node': {
            'id': 22687,
            'title': 'Terra Formars',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/2/67117.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/2/67117l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 7,
            'num_episodes_watched': 13,
            'is_rewatching': false,
            'updated_at': '2017-11-05T03:54:55+00:00',
            'start_date': '2017-09-24',
            'finish_date': '2017-09-24',
        },
    },
    {
        'node': {
            'id': 22689,
            'title': 'Terra Formars: Bugs 2-hen',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/1149/97842.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/1149/97842l.jpg',
            },
        },
        'list_status': {
            'status': 'watching',
            'score': 0,
            'num_episodes_watched': 0,
            'is_rewatching': false,
            'updated_at': '2017-10-04T03:53:26+00:00',
        },
    },
    {
        'node': {
            'id': 31430,
            'title': 'Terra Formars: Revenge',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/9/78566.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/9/78566l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 7,
            'num_episodes_watched': 13,
            'is_rewatching': false,
            'updated_at': '2017-11-05T03:55:10+00:00',
            'start_date': '2017-09-24',
            'finish_date': '2017-09-25',
        },
    },
    {
        'node': {
            'id': 6213,
            'title': 'Toaru Kagaku no Railgun',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/8/53581.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/8/53581l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 8,
            'num_episodes_watched': 24,
            'is_rewatching': false,
            'updated_at': '2018-03-25T21:43:57+00:00',
            'start_date': '2015-04-09',
            'finish_date': '2015-04-11',
        },
    },
    {
        'node': {
            'id': 16049,
            'title': 'Toaru Kagaku no Railgun S',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/7/75610.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/7/75610l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 7,
            'num_episodes_watched': 24,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:46+00:00',
            'start_date': '2015-04-12',
            'finish_date': '2015-04-12',
        },
    },
    {
        'node': {
            'id': 4654,
            'title': 'Toaru Majutsu no Index',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/2/75533.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/2/75533l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 6,
            'num_episodes_watched': 24,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:47+00:00',
            'start_date': '2015-04-03',
            'finish_date': '2015-04-03',
        },
    },
    {
        'node': {
            'id': 8937,
            'title': 'Toaru Majutsu no Index II',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/9/75612.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/9/75612l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 7,
            'num_episodes_watched': 24,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:48+00:00',
            'start_date': '2015-04-13',
            'finish_date': '2015-04-15',
        },
    },
    {
        'node': {
            'id': 11743,
            'title': 'Toaru Majutsu no Index Movie: Endymion no Kiseki',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/1885/93861.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/1885/93861l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 7,
            'num_episodes_watched': 1,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:47+00:00',
            'start_date': '2015-04-15',
            'finish_date': '2015-04-15',
        },
    },
    {
        'node': {
            'id': 2236,
            'title': 'Toki wo Kakeru Shoujo',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/1/2432.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/1/2432l.jpg',
            },
        },
        'list_status': {
            'status': 'watching',
            'score': 0,
            'num_episodes_watched': 0,
            'is_rewatching': false,
            'updated_at': '2017-01-09T07:05:10+00:00',
        },
    },
    {
        'node': {
            'id': 22319,
            'title': 'Tokyo Ghoul',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/5/64449.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/5/64449l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 7,
            'num_episodes_watched': 12,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:47+00:00',
            'start_date': '2016-01-08',
            'finish_date': '2016-01-08',
        },
    },
    {
        'node': {
            'id': 27899,
            'title': 'Tokyo Ghoul √A',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/13/71777.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/13/71777l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 8,
            'num_episodes_watched': 12,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:47+00:00',
            'start_date': '2016-01-09',
            'finish_date': '2016-01-09',
        },
    },
    {
        'node': {
            'id': 30458,
            'title': 'Tokyo Ghoul: "Jack"',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/13/76048.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/13/76048l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 7,
            'num_episodes_watched': 1,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:45+00:00',
            'start_date': '2016-01-10',
            'finish_date': '2016-01-10',
        },
    },
    {
        'node': {
            'id': 31297,
            'title': 'Tokyo Ghoul: "Pinto"',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/3/78666.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/3/78666l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 6,
            'num_episodes_watched': 1,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:46+00:00',
            'start_date': '2016-01-10',
            'finish_date': '2016-01-10',
        },
    },
    {
        'node': {
            'id': 36511,
            'title': 'Tokyo Ghoul:re',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/1063/95086.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/1063/95086l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 0,
            'num_episodes_watched': 12,
            'is_rewatching': false,
            'updated_at': '2018-09-01T17:03:14+00:00',
            'start_date': '2018-09-01',
            'finish_date': '2018-09-01',
        },
    },
    {
        'node': {
            'id': 26443,
            'title': 'Triage X',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/8/73682.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/8/73682l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 6,
            'num_episodes_watched': 10,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:48+00:00',
            'start_date': '2015-11-24',
            'finish_date': '2016-04-23',
        },
    },
    {
        'node': {
            'id': 25157,
            'title': 'Trinity Seven',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/12/67795.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/12/67795l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 8,
            'num_episodes_watched': 12,
            'is_rewatching': false,
            'updated_at': '2017-12-17T14:42:58+00:00',
            'start_date': '2017-12-15',
            'finish_date': '2017-12-17',
        },
    },
    {
        'node': {
            'id': 34902,
            'title': 'Tsurezure Children',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/12/86676.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/12/86676l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 7,
            'num_episodes_watched': 12,
            'is_rewatching': false,
            'updated_at': '2017-10-12T07:16:28+00:00',
            'start_date': '2017-10-07',
            'finish_date': '2017-10-07',
        },
    },
    {
        'node': {
            'id': 1650,
            'title': 'Uchuu Senkan Yamato',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/1908/94946.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/1908/94946l.jpg',
            },
        },
        'list_status': {
            'status': 'watching',
            'score': 0,
            'num_episodes_watched': 0,
            'is_rewatching': false,
            'updated_at': '2016-09-02T16:47:29+00:00',
        },
    },
    {
        'node': {
            'id': 4896,
            'title': 'Umineko no Naku Koro ni',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/10/17709.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/10/17709l.jpg',
            },
        },
        'list_status': {
            'status': 'watching',
            'score': 0,
            'num_episodes_watched': 0,
            'is_rewatching': false,
            'updated_at': '2016-08-13T18:10:49+00:00',
        },
    },
    {
        'node': {
            'id': 30385,
            'title': 'Valkyrie Drive: Mermaid',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/13/75528.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/13/75528l.jpg',
            },
        },
        'list_status': {
            'status': 'plan_to_watch',
            'score': 0,
            'num_episodes_watched': 0,
            'is_rewatching': false,
            'updated_at': '2015-11-29T12:17:10+00:00',
        },
    },
    {
        'node': {
            'id': 33352,
            'title': 'Violet Evergarden',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/1795/95088.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/1795/95088l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 9,
            'num_episodes_watched': 13,
            'is_rewatching': false,
            'updated_at': '2018-09-03T13:27:13+00:00',
            'start_date': '2018-09-03',
            'finish_date': '2018-09-03',
        },
    },
    {
        'node': {
            'id': 16742,
            'title': 'Watashi ga Motenai no wa Dou Kangaetemo Omaera ga Warui!',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/12/51619.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/12/51619l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 6,
            'num_episodes_watched': 12,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:46+00:00',
            'start_date': '2015-12-29',
            'finish_date': '2016-01-06',
        },
    },
    {
        'node': {
            'id': 861,
            'title': 'xxxHOLiC',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/5/21858.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/5/21858l.jpg',
            },
        },
        'list_status': {
            'status': 'plan_to_watch',
            'score': 0,
            'num_episodes_watched': 0,
            'is_rewatching': false,
            'updated_at': '2017-03-02T11:15:08+00:00',
        },
    },
    {
        'node': {
            'id': 14813,
            'title': 'Yahari Ore no Seishun Love Comedy wa Machigatteiru.',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/11/49459.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/11/49459l.jpg',
            },
        },
        'list_status': {
            'status': 'watching',
            'score': 0,
            'num_episodes_watched': 0,
            'is_rewatching': false,
            'updated_at': '2018-10-15T19:40:00+00:00',
        },
    },
    {
        'node': {
            'id': 8861,
            'title': 'Yosuga no Sora: In Solitude, Where We Are Least Alone.',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/5/76216.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/5/76216l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 7,
            'num_episodes_watched': 12,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:47+00:00',
            'start_date': '2016-03-29',
            'finish_date': '2016-03-31',
        },
    },
    {
        'node': {
            'id': 32615,
            'title': 'Youjo Senki',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/5/82890.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/5/82890l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 8,
            'num_episodes_watched': 12,
            'is_rewatching': false,
            'updated_at': '2017-10-29T08:54:53+00:00',
            'start_date': '2017-10-28',
            'finish_date': '2017-10-29',
        },
    },
    {
        'node': {
            'id': 4548,
            'title': 'Yozakura Quartet',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/11/74266.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/11/74266l.jpg',
            },
        },
        'list_status': {
            'status': 'plan_to_watch',
            'score': 0,
            'num_episodes_watched': 0,
            'is_rewatching': false,
            'updated_at': '2016-01-24T05:23:27+00:00',
        },
    },
    {
        'node': {
            'id': 18677,
            'title': 'Yuusha ni Narenakatta Ore wa Shibushibu Shuushoku wo Ketsui Shimashita.',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/13/54389.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/13/54389l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 5,
            'num_episodes_watched': 12,
            'is_rewatching': false,
            'updated_at': '2017-06-25T23:29:03+00:00',
            'start_date': '2017-06-24',
            'finish_date': '2017-06-26',
        },
    },
    {
        'node': {
            'id': 23283,
            'title': 'Zankyou no Terror',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/4/64447.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/4/64447l.jpg',
            },
        },
        'list_status': {
            'status': 'completed',
            'score': 8,
            'num_episodes_watched': 11,
            'is_rewatching': false,
            'updated_at': '2016-08-19T13:48:46+00:00',
            'start_date': '2016-04-07',
            'finish_date': '2016-04-08',
        },
    },
    {
        'node': {
            'id': 14075,
            'title': 'Zetsuen no Tempest',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/7/42453.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/7/42453l.jpg',
            },
        },
        'list_status': {
            'status': 'plan_to_watch',
            'score': 0,
            'num_episodes_watched': 0,
            'is_rewatching': false,
            'updated_at': '2016-04-04T23:24:23+00:00',
        },
    },
    {
        'node': {
            'id': 31245,
            'title': 'Zutto Mae kara Suki deshita.: Kokuhaku Jikkou Iinkai',
            'main_picture': {
                'medium': 'https://api-cdn.myanimelist.net/images/anime/3/82121.jpg',
                'large': 'https://api-cdn.myanimelist.net/images/anime/3/82121l.jpg',
            },
        },
        'list_status': {
            'status': 'plan_to_watch',
            'score': 0,
            'num_episodes_watched': 0,
            'is_rewatching': false,
            'updated_at': '2017-05-08T20:37:21+00:00',
        },
    },
];
