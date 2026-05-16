import { Musician } from '../types';

export const MUSICIANS: Musician[] = [
  {
    id: 'ian-antono',
    name: 'IAN ANTONO',
    genre: 'ROCK LEGEND',
    origin: 'MALANG, ID',
    activeSince: '1970',
    biography: 'Ian Antono is a titan of Indonesian rock. As the legendary lead guitarist of God Bless, his riffs helped define the sound of an era. Known for his technical precision and melodic sensibility, he is often cited as the most influential guitarist in Indonesian history.',
    quote: "Rock is not just music, it is an attitude and a soul that never dies.",
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800',
    songs: [
      { id: '01', title: 'Rumah Kita', album: 'Semut Hitam', duration: '4:48', youtubeId: '_E2S0_GZ6M0' },
      { id: '02', title: 'Semut Hitam', album: 'Semut Hitam', duration: '5:45', youtubeId: 'pQfU88_QeSw' },
      { id: '03', title: 'Panggung Sandiwara', album: 'Cermin', duration: '4:12', youtubeId: '9G_7P_76_Z4' },
      { id: '04', title: 'Maret 1989', album: 'Raksasa', duration: '5:20', youtubeId: 'X7-m3D_y10I' },
      { id: '05', title: 'Syair Kehidupan', album: 'Single', duration: '3:55', youtubeId: '6qG1S2p6TDU' },
      { id: '06', title: 'Bus Kota', album: 'Single', duration: '4:05', youtubeId: 'm4J2W-J9xQY' },
      { id: '07', title: 'Menjilat Matahari', album: 'Raksasa', duration: '4:50', youtubeId: '7P-j8_M1V5s' },
      { id: '08', title: 'Selamat Pagi Indonesia', album: 'Semut Hitam', duration: '5:12', youtubeId: 'B-jS9_B1V5s' },
    ],
    albums: [
      { title: 'Semut Hitam', year: '1988', cover: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=400' },
      { title: 'Cermin', year: '1980', cover: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=400' },
    ],
    timeline: [
      { year: '1974', event: 'Joined God Bless, changing the landscape of Indonesian rock.' },
      { year: '1988', event: 'Released "Semut Hitam", the highest-selling rock album in ID.' },
    ]
  },
  {
    id: 'toto-tewel',
    name: 'TOTO TEWEL',
    genre: 'BLUES ROCK',
    origin: 'MALANG, ID',
    activeSince: '1980',
    biography: 'Known for his work with Elpamas and as a session virtuoso for Iwan Fals and Kantata Takwa, Toto Tewel is the master of Indonesian blues-rock expression. His stage presence and raw energy are unmatched.',
    quote: "Every note should tell a story of life and struggle.",
    image: 'https://images.unsplash.com/photo-1525994886773-b205b8556617?q=80&w=800',
    songs: [
      { id: '01', title: 'Pak Tua', album: 'Dinding-Dinding Kota', duration: '5:10', youtubeId: 'fV06sVp06fE' },
      { id: '02', title: 'Dinding-Dinding Kota', album: 'Dinding-Dinding Kota', duration: '4:55', youtubeId: 'n7-m3D_y10I' },
      { id: '03', title: 'Bumi Perkemahan', album: 'Elpamas 2', duration: '4:30', youtubeId: 'j8_M1V5sB-j' },
      { id: '04', title: 'Tato', album: 'Elpamas 3', duration: '5:05', youtubeId: '7P-j8_M1V5s' },
    ],
    albums: [
      { title: 'Dinding-Dinding Kota', year: '1989', cover: 'https://images.unsplash.com/photo-1619983081563-430f63602796?q=80&w=400' },
    ],
    timeline: [
      { year: '1983', event: 'Founded Elpamas, bringing a new energy to the local scene.' },
      { year: '1990', event: 'Collaborated on the historic Kantata Takwa project.' },
    ]
  },
  {
    id: 'sylvia-saartje',
    name: 'SYLVIA SAARTJE',
    genre: 'LADY ROCK',
    origin: 'ARNHEM, NL',
    activeSince: '1970',
    biography: 'The "Lady Rocker" of Indonesia. Sylvia Saartje was a trailblazer for women in the male-dominated rock scene of the 70s and 80s. Her powerful voice and rebellious spirit paved the way for generations of female artists.',
    quote: "Rock has no gender. It only has truth.",
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=800',
    songs: [
      { id: '01', title: 'Biarkan', album: 'Biar Semua Hilang', duration: '4:20', youtubeId: 'v16N2F9XUoU' },
      { id: '02', title: 'Jakarta Blue Jeans', album: 'Single', duration: '3:50', youtubeId: 'B-jS9_B1V5s' },
      { id: '03', title: 'Ooh... Jakarta', album: 'Single', duration: '4:15', youtubeId: '7P-j8_M1V5s' },
      { id: '04', title: 'Biar Semua Hilang', album: 'Biar Semua Hilang', duration: '5:00', youtubeId: 'm4J2W-J9xQY' },
    ],
    albums: [
      { title: 'Biar Semua Hilang', year: '1981', cover: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400' },
    ],
    timeline: [
      { year: '1970', event: 'Started her career with Tornado group.' },
      { year: '1981', event: 'Iconic performance at the first National Rock Festival.' },
    ]
  },
  {
    id: 'sal-priadi',
    name: 'SAL PRIADI',
    genre: 'ALT POP',
    origin: 'MALANG, ID',
    activeSince: '2015',
    biography: 'A modern icon of Indonesian alternative music. Sal Priadi blends poetic lyricism with eccentric pop sensibilities, creating a theatrical experience that resonates with the modern generation.',
    quote: "I write what my heart fails to say out loud.",
    image: 'https://images.unsplash.com/photo-1520166012956-add9ba0835cb?q=80&w=800',
    songs: [
      { id: '01', title: 'Amin Paling Serius', album: 'Berhati', duration: '7:05', youtubeId: 'tCE9U4D995s' },
      { id: '02', title: 'Mesra-mesraannya kecil-kecilan dulu', album: 'Markers and Such', duration: '4:15', youtubeId: 'u4J2W-J9xQY' },
      { id: '03', title: 'Kultusan', album: 'Single', duration: '4:45', youtubeId: 'B-jS9_B1V5s' },
      { id: '04', title: 'Irama La Laut', album: 'Berhati', duration: '4:30', youtubeId: '7P-j8_M1V5s' },
      { id: '05', title: 'Nyala', album: 'Berhati', duration: '3:50', youtubeId: 'm4J2W-J9xQY' },
      { id: '06', title: 'Dalam Diam', album: 'Berhati', duration: '5:10', youtubeId: 'X7-m3D_y10I' },
      { id: '07', title: 'Zuzuzaza', album: 'Markers and Such', duration: '3:40', youtubeId: 'pQfU88_QeSw' },
    ],
    albums: [
      { title: 'Berhati', year: '2020', cover: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=400' },
    ],
    timeline: [
      { year: '2018', event: 'Breakthrough with the single "Kultusan".' },
      { year: '2020', event: 'Released the critically acclaimed album "Berhati".' },
    ]
  }
];
