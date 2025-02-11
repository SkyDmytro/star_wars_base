import { FilmType } from '../types/films';
import { StarShipType } from '../types/starship';
import { CharacterType } from '../types/character';
import { Node } from '../types/reactFlow';

export const mockCharacter: CharacterType = {
  id: 1,
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  birth_year: '19BBY',
  gender: 'male',
  homeworld: 1,
  films: [1, 2, 3, 6],
  species: [1],
  vehicles: [14, 30],
  starships: [12, 22],
  created: '2014-12-09T13:50:51.644000Z',
  edited: '2014-12-20T21:17:56.891000Z',
  url: 'https://sw-api.starnavi.io/people/1/',
};
export const mockFilms: FilmType[] = [
  {
    id: 1,
    title: 'A New Hope',
    episode_id: 4,
    opening_crawl:
      "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
    director: 'George Lucas',
    producer: 'Gary Kurtz, Rick McCallum',
    release_date: '1977-05-25',
    characters: [10, 12, 13, 14, 15, 16, 18, 19, 1, 2, 3, 4, 5, 6, 7, 8, 9, 81],
    planets: [1, 2, 3],
    starships: [2, 3, 5, 9, 10, 11, 12, 13],
    vehicles: [4, 6, 7, 8],
    species: [1, 2, 3, 4, 5],
    created: '2014-12-10T14:23:31.880000Z',
    edited: '2014-12-20T19:49:45.256000Z',
    url: 'https://sw-api.starnavi.io/films/1/',
  },
  {
    id: 2,
    title: 'The Empire Strikes Back',
    episode_id: 5,
    opening_crawl:
      'It is a dark time for the\r\nRebellion. Although the Death\r\nStar has been destroyed,\r\nImperial troops have driven the\r\nRebel forces from their hidden\r\nbase and pursued them across\r\nthe galaxy.\r\n\r\nEvading the dreaded Imperial\r\nStarfleet, a group of freedom\r\nfighters led by Luke Skywalker\r\nhas established a new secret\r\nbase on the remote ice world\r\nof Hoth.\r\n\r\nThe evil lord Darth Vader,\r\nobsessed with finding young\r\nSkywalker, has dispatched\r\nthousands of remote probes into\r\nthe far reaches of space....',
    director: 'Irvin Kershner',
    producer: 'Gary Kurtz, Rick McCallum',
    release_date: '1980-05-17',
    characters: [10, 13, 14, 18, 20, 21, 22, 23, 24, 25, 26, 1, 2, 3, 4, 5],
    planets: [4, 5, 6, 27],
    starships: [3, 10, 11, 12, 15, 17, 21, 22, 23],
    vehicles: [8, 14, 16, 18, 19, 20],
    species: [1, 2, 3, 6, 7],
    created: '2014-12-12T11:26:24.656000Z',
    edited: '2014-12-15T13:07:53.386000Z',
    url: 'https://sw-api.starnavi.io/films/2/',
  },
  {
    id: 3,
    title: 'Return of the Jedi',
    episode_id: 6,
    opening_crawl:
      'Luke Skywalker has returned to\r\nhis home planet of Tatooine in\r\nan attempt to rescue his\r\nfriend Han Solo from the\r\nclutches of the vile gangster\r\nJabba the Hutt.\r\n\r\nLittle does Luke know that the\r\nGALACTIC EMPIRE has secretly\r\nbegun construction on a new\r\narmored space station even\r\nmore powerful than the first\r\ndreaded Death Star.\r\n\r\nWhen completed, this ultimate\r\nweapon will spell certain doom\r\nfor the small band of rebels\r\nstruggling to restore freedom\r\nto the galaxy...',
    director: 'Richard Marquand',
    producer: 'Howard G. Kazanjian, George Lucas, Rick McCallum',
    release_date: '1983-05-25',
    characters: [
      10, 13, 14, 16, 18, 20, 21, 22, 25, 27, 28, 29, 30, 31, 1, 2, 3, 4, 5, 45,
    ],
    planets: [1, 5, 7, 8, 9],
    starships: [27, 2, 3, 10, 11, 12, 15, 17, 22, 23, 28, 29],
    vehicles: [26, 8, 16, 18, 19, 24, 25, 30],
    species: [10, 15, 1, 2, 3, 5, 6, 8, 9],
    created: '2014-12-18T10:39:33.255000Z',
    edited: '2014-12-20T09:48:37.462000Z',
    url: 'https://sw-api.starnavi.io/films/3/',
  },
  {
    id: 6,
    title: 'Revenge of the Sith',
    episode_id: 3,
    opening_crawl:
      'War! The Republic is crumbling\r\nunder attacks by the ruthless\r\nSith Lord, Count Dooku.\r\nThere are heroes on both sides.\r\nEvil is everywhere.\r\n\r\nIn a stunning move, the\r\nfiendish droid leader, General\r\nGrievous, has swept into the\r\nRepublic capital and kidnapped\r\nChancellor Palpatine, leader of\r\nthe Galactic Senate.\r\n\r\nAs the Separatist Droid Army\r\nattempts to flee the besieged\r\ncapital with their valuable\r\nhostage, two Jedi Knights lead a\r\ndesperate mission to rescue the\r\ncaptive Chancellor....',
    director: 'George Lucas',
    producer: 'Rick McCallum',
    release_date: '2005-05-19',
    characters: [
      10, 12, 13, 20, 21, 33, 35, 1, 2, 3, 4, 5, 6, 7, 46, 11, 51, 52, 53, 54,
      55, 56, 58, 63, 64, 67, 68, 75, 78, 79, 80, 81, 82, 83,
    ],
    planets: [1, 2, 5, 8, 9, 12, 13, 14, 15, 16, 17, 18, 19],
    starships: [48, 59, 61, 63, 64, 65, 66, 68, 2, 32, 74, 75],
    vehicles: [50, 53, 56, 60, 62, 67, 69, 70, 71, 72, 73, 33, 76],
    species: [
      15, 19, 20, 1, 2, 3, 6, 28, 29, 30, 33, 34, 35, 36, 37, 23, 24, 25, 26,
      27,
    ],
    created: '2014-12-20T18:49:38.403000Z',
    edited: '2014-12-20T20:47:52.073000Z',
    url: 'https://sw-api.starnavi.io/films/6/',
  },
];
export const mockStarships: StarShipType[] = [
  {
    id: 2,
    name: 'CR90 corvette',
    model: 'CR90 corvette',
    manufacturer: 'Corellian Engineering Corporation',
    cost_in_credits: '3500000',
    length: '150',
    max_atmosphering_speed: '950',
    crew: '30-165',
    passengers: '600',
    cargo_capacity: '3000000',
    consumables: '1 year',
    hyperdrive_rating: '2.0',
    MGLT: '60',
    starship_class: 'corvette',
    pilots: [],
    films: [1, 3, 6],
    created: '2014-12-10T14:20:33.369000Z',
    edited: '2014-12-20T21:23:49.867000Z',
    url: 'https://sw-api.starnavi.io/starships/2/',
  },
  {
    id: 3,
    name: 'Star Destroyer',
    model: 'Imperial I-class Star Destroyer',
    manufacturer: 'Kuat Drive Yards',
    cost_in_credits: '150000000',
    length: '1,600',
    max_atmosphering_speed: '975',
    crew: '47,060',
    passengers: 'n/a',
    cargo_capacity: '36000000',
    consumables: '2 years',
    hyperdrive_rating: '2.0',
    MGLT: '60',
    starship_class: 'Star Destroyer',
    pilots: [],
    films: [1, 2, 3],
    created: '2014-12-10T15:08:19.848000Z',
    edited: '2014-12-20T21:23:49.870000Z',
    url: 'https://sw-api.starnavi.io/starships/3/',
  },
  {
    id: 5,
    name: 'Sentinel-class landing craft',
    model: 'Sentinel-class landing craft',
    manufacturer: 'Sienar Fleet Systems, Cyngus Spaceworks',
    cost_in_credits: '240000',
    length: '38',
    max_atmosphering_speed: '1000',
    crew: '5',
    passengers: '75',
    cargo_capacity: '180000',
    consumables: '1 month',
    hyperdrive_rating: '1.0',
    MGLT: '70',
    starship_class: 'landing craft',
    pilots: [],
    films: [1],
    created: '2014-12-10T15:48:00.586000Z',
    edited: '2014-12-20T21:23:49.873000Z',
    url: 'https://sw-api.starnavi.io/starships/5/',
  },
  {
    id: 9,
    name: 'Death Star',
    model: 'DS-1 Orbital Battle Station',
    manufacturer:
      'Imperial Department of Military Research, Sienar Fleet Systems',
    cost_in_credits: '1000000000000',
    length: '120000',
    max_atmosphering_speed: 'n/a',
    crew: '342,953',
    passengers: '843,342',
    cargo_capacity: '1000000000000',
    consumables: '3 years',
    hyperdrive_rating: '4.0',
    MGLT: '10',
    starship_class: 'Deep Space Mobile Battlestation',
    pilots: [],
    films: [1],
    created: '2014-12-10T16:36:50.509000Z',
    edited: '2014-12-20T21:26:24.783000Z',
    url: 'https://sw-api.starnavi.io/starships/9/',
  },
  {
    id: 10,
    name: 'Millennium Falcon',
    model: 'YT-1300 light freighter',
    manufacturer: 'Corellian Engineering Corporation',
    cost_in_credits: '100000',
    length: '34.37',
    max_atmosphering_speed: '1050',
    crew: '4',
    passengers: '6',
    cargo_capacity: '100000',
    consumables: '2 months',
    hyperdrive_rating: '0.5',
    MGLT: '75',
    starship_class: 'Light freighter',
    pilots: [13, 14, 25, 31],
    films: [1, 2, 3],
    created: '2014-12-10T16:59:45.094000Z',
    edited: '2014-12-20T21:23:49.880000Z',
    url: 'https://sw-api.starnavi.io/starships/10/',
  },
  {
    id: 11,
    name: 'Y-wing',
    model: 'BTL Y-wing',
    manufacturer: 'Koensayr Manufacturing',
    cost_in_credits: '134999',
    length: '14',
    max_atmosphering_speed: '1000km',
    crew: '2',
    passengers: '0',
    cargo_capacity: '110',
    consumables: '1 week',
    hyperdrive_rating: '1.0',
    MGLT: '80',
    starship_class: 'assault starfighter',
    pilots: [],
    films: [1, 2, 3],
    created: '2014-12-12T11:00:39.817000Z',
    edited: '2014-12-20T21:23:49.883000Z',
    url: 'https://sw-api.starnavi.io/starships/11/',
  },
  {
    id: 12,
    name: 'X-wing',
    model: 'T-65 X-wing',
    manufacturer: 'Incom Corporation',
    cost_in_credits: '149999',
    length: '12.5',
    max_atmosphering_speed: '1050',
    crew: '1',
    passengers: '0',
    cargo_capacity: '110',
    consumables: '1 week',
    hyperdrive_rating: '1.0',
    MGLT: '100',
    starship_class: 'Starfighter',
    pilots: [18, 19, 1, 9],
    films: [1, 2, 3],
    created: '2014-12-12T11:19:05.340000Z',
    edited: '2014-12-20T21:23:49.886000Z',
    url: 'https://sw-api.starnavi.io/starships/12/',
  },
  {
    id: 13,
    name: 'TIE Advanced x1',
    model: 'Twin Ion Engine Advanced x1',
    manufacturer: 'Sienar Fleet Systems',
    cost_in_credits: 'unknown',
    length: '9.2',
    max_atmosphering_speed: '1200',
    crew: '1',
    passengers: '0',
    cargo_capacity: '150',
    consumables: '5 days',
    hyperdrive_rating: '1.0',
    MGLT: '105',
    starship_class: 'Starfighter',
    pilots: [4],
    films: [1],
    created: '2014-12-12T11:21:32.991000Z',
    edited: '2014-12-20T21:23:49.889000Z',
    url: 'https://sw-api.starnavi.io/starships/13/',
  },
  {
    id: 15,
    name: 'Executor',
    model: 'Executor-class star dreadnought',
    manufacturer: 'Kuat Drive Yards, Fondor Shipyards',
    cost_in_credits: '1143350000',
    length: '19000',
    max_atmosphering_speed: 'n/a',
    crew: '279,144',
    passengers: '38000',
    cargo_capacity: '250000000',
    consumables: '6 years',
    hyperdrive_rating: '2.0',
    MGLT: '40',
    starship_class: 'Star dreadnought',
    pilots: [],
    films: [2, 3],
    created: '2014-12-15T12:31:42.547000Z',
    edited: '2014-12-20T21:23:49.893000Z',
    url: 'https://sw-api.starnavi.io/starships/15/',
  },
  {
    id: 17,
    name: 'Rebel transport',
    model: 'GR-75 medium transport',
    manufacturer: 'Gallofree Yards, Inc.',
    cost_in_credits: 'unknown',
    length: '90',
    max_atmosphering_speed: '650',
    crew: '6',
    passengers: '90',
    cargo_capacity: '19000000',
    consumables: '6 months',
    hyperdrive_rating: '4.0',
    MGLT: '20',
    starship_class: 'Medium transport',
    pilots: [],
    films: [2, 3],
    created: '2014-12-15T12:34:52.264000Z',
    edited: '2014-12-20T21:23:49.895000Z',
    url: 'https://sw-api.starnavi.io/starships/17/',
  },
];

export const mockInitialNodes: Node[] = [
  {
    id: '1',
    type: 'charNode',
    data: mockCharacter,
    position: { x: 0, y: 0 },
  },
  {
    id: '2',
    data: mockFilms[0],
    position: { x: 250, y: 0 },
    type: 'filmNode',
  },
  {
    id: '3',
    data: mockFilms[1],
    position: { x: 0, y: 250 },
    type: 'filmNode',
  },
  {
    id: '4',
    data: mockFilms[2],
    position: { x: -250, y: 0 },
    type: 'filmNode',
  },
  {
    id: '5',
    data: mockFilms[3],
    position: { x: -0, y: -250 },
    type: 'filmNode',
  },
  {
    id: '6',
    data: mockStarships[0],
    position: { x: 500, y: 0 },
    type: 'starShipsNode',
  },
  {
    id: '7',
    data: mockStarships[1],
    position: { x: 405, y: 294 },
    type: 'starShipsNode',
  },
  {
    id: '8',
    data: mockStarships[2],
    position: { x: 155, y: 476 },
    type: 'starShipsNode',
  },
  {
    id: '9',
    data: mockStarships[3],
    position: { x: -155, y: 476 },
    type: 'starShipsNode',
  },
  {
    id: '10',
    data: mockStarships[4],
    position: { x: -405, y: 294 },
    type: 'starShipsNode',
  },
  {
    id: '11',
    data: mockStarships[5],
    position: { x: -500, y: 0 },
    type: 'starShipsNode',
  },
  {
    id: '12',
    data: mockStarships[6],
    position: { x: -405, y: -294 },
    type: 'starShipsNode',
  },
  {
    id: '13',
    data: mockStarships[7],
    position: { x: -155, y: -476 },
    type: 'starShipsNode',
  },
  {
    id: '14',
    data: mockStarships[8],
    position: { x: 155, y: -476 },
    type: 'starShipsNode',
  },
  {
    id: '15',
    data: mockStarships[9],
    position: { x: 405, y: -294 },
    type: 'starShipsNode',
  },
];

export const initialEdges = [
  { id: 'e2-1', source: '1', target: '2', animated: true },
  { id: 'e3-1', source: '1', target: '3', animated: true },
  { id: 'e4-1', source: '1', target: '4', animated: true },
  { id: 'e5-1', source: '1', target: '5', animated: true },
];
