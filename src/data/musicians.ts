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
    biography: 'Sal Priadi is one of the most distinctive voices in contemporary Indonesian music. Originating from Malang, his works combine poetic storytelling, theatrical performance, and emotionally vulnerable lyricism with modern alternative pop production. His artistic identity often explores intimacy, anxiety, romance, and human fragility through cinematic compositions and expressive visual aesthetics.',
    quote: "I write what my heart fails to say out loud.",
    image: 'https://images.unsplash.com/photo-1520166012956-add9ba0835cb?q=80&w=800',
    songs: [
      { id: '01', title: 'Amin Paling Serius', album: 'Berhati', duration: '7:10', youtubeId: 'tCE9U4D995s' },
      { id: '02', title: 'Mesra-mesraannya kecil-kecilan dulu', album: 'Markers and Such', duration: '3:26', youtubeId: 'aHxxbTq0TXE' },
      { id: '03', title: 'Semua lagu cinta', album: 'Markers and Such', duration: '3:35', youtubeId: 'EQMcH8h74-c' },
      { id: '04', title: 'Ada titik-titik di ujung doa', album: 'Markers and Such', duration: '5:10', youtubeId: '63H7pcUUm6s' },
      { id: '05', title: 'Gala bunga matahari', album: 'Markers and Such', duration: '4:08', youtubeId: 'AQpEIZ8dNcU' },
      { id: '06', title: 'Kita usahakan rumah itu', album: 'Markers and Such', duration: '3:10', youtubeId: '7SqNVv98e8Q' },
      { id: '07', title: 'I’d like to watch you sleeping', album: 'Markers and Such', duration: '5:31', youtubeId: '4OL6d6NZ3I0' },
    ],
    albums: [
      {
        title: 'Berhati',
        year: '2020',
        cover:
          'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=400',
      },
      {
        title: 'Markers and Such Pens Flashdisks',
        year: '2024',
        cover:
          'https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=400',
      },
    ],
    timeline: [
      {
        year: '2015',
        event:
          'Started gaining attention through independent music releases and live performances in Malang and Jakarta.',
      },
      {
        year: '2017',
        event:
          'Released several early singles showcasing his poetic songwriting and theatrical vocal character.',
      },
      {
        year: '2018',
        event:
          'Breakthrough moment after the release of "Kultusan", introducing his distinctive emotional storytelling style to wider audiences.',
      },
      {
        year: '2019',
        event:
          'Collaborated with multiple Indonesian musicians and became recognized as one of the rising alternative pop artists in Indonesia.',
      },
      {
        year: '2020',
        event:
          'Released debut studio album "Berhati", receiving critical acclaim for its cinematic production and lyrical vulnerability.',
      },
      {
        year: '2021',
        event:
          'Expanded his artistic identity through immersive live performances and visual-driven stage concepts.',
      },
      {
        year: '2023',
        event:
          'Became one of the prominent figures in Indonesia’s modern art-pop movement and digital music culture.',
      },
      {
        year: '2024',
        event:
          'Released "Markers and Such Pens Flashdisks", strengthening his reputation for experimental yet emotionally intimate songwriting.',
      },
    ],
  }
];
