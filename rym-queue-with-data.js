(() => {
  // CSV embedded from letterboxd.csv
  const csvText = `Date,Name,Year,Letterboxd URI,Rating
2022-06-18,The Ballad of Narayama,1983,https://boxd.it/XI6,5
2022-06-18,Akira,1988,https://boxd.it/2b1i,5
2022-06-18,Beyond the Infinite Two Minutes,2020,https://boxd.it/ujVk,5
2022-06-18,Stalker,1979,https://boxd.it/28PO,5
2022-06-18,The Host,2006,https://boxd.it/28ZY,4.5
2022-06-18,In the Mood for Love,2000,https://boxd.it/29tE,5
2022-06-18,Oldboy,2003,https://boxd.it/29R2,5
2022-06-18,Lost Highway,1997,https://boxd.it/29Wc,5
2022-06-18,Rashomon,1950,https://boxd.it/2a9K,5
2022-06-18,Reservoir Dogs,1992,https://boxd.it/2agc,4.5
2022-06-18,High and Low,1963,https://boxd.it/1RSc,5
2022-06-18,Yojimbo,1961,https://boxd.it/1SRY,5
2022-06-18,Suzhou River,2000,https://boxd.it/1Tsq,5
2022-06-18,Fallen Angels,1995,https://boxd.it/1UkW,5
2022-06-18,Chungking Express,1994,https://boxd.it/1UDa,5
2022-06-18,Ghost in the Shell,1995,https://boxd.it/1YYc,5
2022-06-18,Paprika,2006,https://boxd.it/23wW,4.5
2022-06-18,Ghost Dog: The Way of the Samurai,1999,https://boxd.it/23Ne,5
2022-06-18,Sympathy for Mr. Vengeance,2002,https://boxd.it/23WU,5
2022-06-18,Lone Wolf and Cub: Baby Cart in the Land of Demons,1973,https://boxd.it/ZgI,4.5
2022-06-18,Uncle Boonmee Who Can Recall His Past Lives,2010,https://boxd.it/168Q,5
2022-06-18,Millennium Actress,2001,https://boxd.it/1fK0,4.5
2022-06-18,Samurai I: Musashi Miyamoto,1954,https://boxd.it/1jfg,5
2022-06-18,3:10 to Yuma,1957,https://boxd.it/1OCU,4.5
2022-06-18,Good Time,2017,https://boxd.it/fcFu,5
2022-06-18,Uncut Gems,2019,https://boxd.it/gXGc,5
2022-06-18,Burning,2018,https://boxd.it/hHUa,5
2022-06-18,"The French Dispatch of the Liberty, Kansas Evening Sun",2021,https://boxd.it/jLP8,4.5
2022-06-18,Everything Everywhere All at Once,2022,https://boxd.it/jUk4,5
2022-06-18,Dwelling in the Fuchun Mountains,2019,https://boxd.it/m00y,5
2022-06-18,Drive My Car,2021,https://boxd.it/sv94,5
2022-06-18,Baby Assassins,2021,https://boxd.it/vXei,5
2022-12-31,The Last Duel,2021,https://boxd.it/mQbe,4
2022-12-31,Irezumi,1966,https://boxd.it/1cXg,4
2022-12-31,Blue Bayou,2021,https://boxd.it/nUwi,4.5
2022-12-31,Decision to Leave,2022,https://boxd.it/qp9e,4.5
2022-12-31,Sailor Suit and Machine Gun,1981,https://boxd.it/7km,4
2022-12-31,The Rescue,2021,https://boxd.it/pmto,4.5
2022-12-31,Nope,2022,https://boxd.it/sDCe,3.5
2022-12-31,Days of Being Wild,1990,https://boxd.it/1HbC,4.5
2022-12-31,The Funeral,1984,https://boxd.it/XL0,4.5
2022-12-31,Lady Vengeance,2005,https://boxd.it/248G,4.5
2023-01-09,Triangle of Sadness,2022,https://boxd.it/hXlq,4.5
2023-01-09,See How They Run,2022,https://boxd.it/sNVq,0.5
2023-02-21,Microhabitat,2017,https://boxd.it/hn9o,4
2023-02-21,Onibaba,1964,https://boxd.it/252a,5
2023-02-21,Train to Busan,2016,https://boxd.it/dSQU,5
2023-02-21,The Menu,2022,https://boxd.it/lScm,4
2023-02-21,Memories of Murder,2003,https://boxd.it/1TSo,5
2023-02-21,Knives Out,2019,https://boxd.it/jWEA,5
2023-02-21,The Roundup,2022,https://boxd.it/mVnO,4
2023-02-21,Official Competition,2021,https://boxd.it/oUKm,4
2023-02-21,Postmen in the Mountains,1999,https://boxd.it/3FLM,5
2023-02-27,Sleep,2020,https://boxd.it/oIhM,4
2023-03-08,Ghost in the Shell 2.0,2008,https://boxd.it/1OLW,5
2023-03-12,65,2023,https://boxd.it/qbus,2
2023-03-19,Mandy,2018,https://boxd.it/gtti,4.5
2023-04-10,Ryuichi Sakamoto: Coda,2017,https://boxd.it/gZV4,5
2023-04-10,The Super Mario Bros. Movie,2023,https://boxd.it/i8C8,1
2023-04-18,Dungeons & Dragons: Honor Among Thieves,2023,https://boxd.it/hN1A,3
2023-05-28,"Goodbye, Dragon Inn",2003,https://boxd.it/oFG,5
2023-06-24,Asteroid City,2023,https://boxd.it/s3ds,5
2023-07-02,Scream VI,2023,https://boxd.it/zdfW,1
2023-07-24,Barbie,2023,https://boxd.it/bCLK,4
2023-07-24,Oppenheimer,2023,https://boxd.it/wUow,5
2023-08-10,Rush Hour,1998,https://boxd.it/27pU,3.5
2023-08-12,They Cloned Tyrone,2023,https://boxd.it/rE7a,4.5
2023-08-19,Nam June Paik: Moon Is the Oldest TV,2023,https://boxd.it/ywfa,5
2023-08-20,Jiro Dreams of Sushi,2011,https://boxd.it/2ONU,5
2023-08-21,The 36th Chamber of Shaolin,1978,https://boxd.it/1SXC,5
2023-08-27,Satan Wants You,2023,https://boxd.it/EYpO,4.5
2023-09-01,Jane B. by Agnès V.,1988,https://boxd.it/xxw,5
2023-09-04,Dune,1984,https://boxd.it/29tY,4
2023-09-04,Wild at Heart,1990,https://boxd.it/2aii,5
2023-09-07,Lynch/Oz,2022,https://boxd.it/ArIK,3.5
2023-09-09,Cure,1997,https://boxd.it/1blA,5
2023-09-22,Sorcerer,1977,https://boxd.it/14J6,5
2023-09-28,The Exorcist,1973,https://boxd.it/1Yoo,5
2023-10-07,Stop Making Sense,1984,https://boxd.it/1ygo,5
2023-10-12,The Swan,2023,https://boxd.it/Is80,5
2023-10-23,House,1977,https://boxd.it/1vsm,5
2023-10-23,Jennifer's Body,2009,https://boxd.it/1Efw,0.5
2023-10-23,The Wicker Man,1973,https://boxd.it/1KnG,5
2023-11-18,Humanist Vampire Seeking Consenting Suicidal Person,2023,https://boxd.it/Blzk,5
2023-11-18,Transylvanie,2023,https://boxd.it/HINm,5
2023-11-20,Piaffe,2022,https://boxd.it/BFRS,5
2023-11-23,River,2023,https://boxd.it/H1sK,5
2023-11-24,Sleep,2023,https://boxd.it/Aqmo,5
2023-12-02,Blow Out,1981,https://boxd.it/1TlE,4
2023-12-16,The Boy and the Heron,2023,https://boxd.it/ipeM,5
2023-12-17,Ugetsu,1953,https://boxd.it/1NyM,5
2023-12-21,Fanny and Alexander,1982,https://boxd.it/22go,5
2024-01-01,Godzilla Minus One,2023,https://boxd.it/zu4c,5
2024-01-06,Past Lives,2023,https://boxd.it/oNB8,5
2024-01-08,Happy Together,1997,https://boxd.it/1Ha0,5
2024-01-19,Poor Things,2023,https://boxd.it/tNWU,5
2024-01-27,La Chinoise,1967,https://boxd.it/28rC,3.5
2024-01-27,Godard Cinema,2022,https://boxd.it/BZLg,3.5
2024-01-27,Breathless,1960,https://boxd.it/2aIK,4.5
2024-01-27,Detroit Rock City,1999,https://boxd.it/1XPe,1.5
2024-02-04,The Zone of Interest,2023,https://boxd.it/gJsA,4
2024-02-12,Rouge,1987,https://boxd.it/2cdk,5
2024-02-19,Godzilla,1954,https://boxd.it/28kc,5
2024-02-19,Destroy All Monsters,1968,https://boxd.it/25IK,5
2024-02-19,Solaris,1972,https://boxd.it/2a2Y,5
2024-02-25,Mean Girls,2024,https://boxd.it/p6nO,2
2024-02-26,Drive-Away Dolls,2024,https://boxd.it/A8vi,4
2024-03-10,Dune: Part Two,2024,https://boxd.it/pUfA,4.5
2024-03-21,Being There,1979,https://boxd.it/1WxS,4.5
2024-03-24,Love Lies Bleeding,2024,https://boxd.it/zN4q,3.5
2024-03-24,Paddington 2,2017,https://boxd.it/bCF8,2.5
2024-04-01,Repo Man,1984,https://boxd.it/1Plg,3.5
2024-04-07,Late Night with the Devil,2023,https://boxd.it/zo6G,3
2024-04-10,Perfect Days,2023,https://boxd.it/ATh8,5
2024-04-15,Better Luck Tomorrow,2002,https://boxd.it/1On6,3
2024-04-16,The Street Fighter,1974,https://boxd.it/10Tc,3
2024-04-18,Videodrome,1983,https://boxd.it/29uC,5
2024-04-22,The Return of the Living Dead,1985,https://boxd.it/1V3W,3.5
2024-04-26,"Paris, Texas",1984,https://boxd.it/29Ts,5
2024-05-01,Pickpocket,1959,https://boxd.it/29O8,4
2024-05-01,Civil War,2024,https://boxd.it/z1jW,3
2024-05-05,Double Indemnity,1944,https://boxd.it/297I,4
2024-05-27,The Contestant,2023,https://boxd.it/HKUa,4
2024-05-31,Evil Does Not Exist,2023,https://boxd.it/HJrc,5
2024-06-02,Exhuma,2024,https://boxd.it/vCu0,3.5
2024-06-24,Ghost in the Shell 2: Innocence,2004,https://boxd.it/1SrG,3.5
2024-06-29,Fire of Love,2022,https://boxd.it/yoPY,4
2024-07-01,eXistenZ,1999,https://boxd.it/27Ni,5
2024-07-03,Kinds of Kindness,2024,https://boxd.it/CWPw,5
2024-07-07,Harakiri,1962,https://boxd.it/1NTU,5
2024-07-22,Longlegs,2024,https://boxd.it/KzLM,4
2024-07-22,The Magnificent Seven,1960,https://boxd.it/29bA,4
2024-07-27,Seven Samurai,1954,https://boxd.it/2axi,5
2024-07-27,A Brighter Summer Day,1991,https://boxd.it/1Luy,5
2024-08-05,Anyone But You,2023,https://boxd.it/EzA8,0.5
2024-08-09,I Saw the TV Glow,2024,https://boxd.it/woVe,3.5
2024-08-09,Furiosa: A Mad Max Saga,2024,https://boxd.it/tABk,4
2024-08-09,Suspiria,1977,https://boxd.it/1SNW,5
2024-08-09,Riddle of Fire,2023,https://boxd.it/GamO,4.5
2024-08-18,Rebels of the Neon God,1992,https://boxd.it/mp2,5
2024-08-21,Alien: Romulus,2024,https://boxd.it/zGqO,3.5
2024-08-25,Caligula: The Ultimate Cut,2023,https://boxd.it/MeNQ,4
2024-08-26,RoboCop,1987,https://boxd.it/22Wu,3.5
2024-08-28,Between the Temples,2024,https://boxd.it/Gy1U,3.5
2024-08-30,Nostalgia,1983,https://boxd.it/28Qi,5
2024-09-01,Mishima: A Life in Four Chapters,1985,https://boxd.it/1sBA,5
2024-09-02,Once Upon a Time in the West,1968,https://boxd.it/2az4,4
2024-09-06,Come and See,1985,https://boxd.it/1w9q,5
2024-09-08,Tokyo Story,1953,https://boxd.it/1HuY,5
2024-09-12,"Mother, Couch",2023,https://boxd.it/D45w,3.5
2024-09-14,A Woman Under the Influence,1974,https://boxd.it/1myg,5
2024-09-15,Dìdi (弟弟),2024,https://boxd.it/HQOW,3.5
2024-09-28,The Substance,2024,https://boxd.it/zanS,4.5
2024-10-04,The Fly,1986,https://boxd.it/1YIe,3
2024-10-04,Mobile Suit Gundam I,1981,https://boxd.it/14bo,3
2024-10-06,Trap,2024,https://boxd.it/D4nK,1
2024-10-08,Big Trouble in Little China,1986,https://boxd.it/21em,3.5
2024-10-10,Kwaidan,1964,https://boxd.it/1kbY,5
2024-10-12,Saw,2004,https://boxd.it/2aWW,3.5
2024-10-14,Saturday Night,2024,https://boxd.it/Gpfo,3.5
2024-10-24,Jacob's Ladder,1990,https://boxd.it/270g,4
2024-10-24,The Others,2001,https://boxd.it/27Po,3.5
2024-10-30,It Follows,2014,https://boxd.it/87wo,4
2024-11-01,The Lair of the White Worm,1988,https://boxd.it/1U4u,3
2024-11-03,Tokyo Fist,1995,https://boxd.it/Z2m,3.5
2024-11-03,The Wailing,2016,https://boxd.it/9fLy,4
2024-11-13,Monster,2023,https://boxd.it/DJEM,5
2024-11-16,Rear Window,1954,https://boxd.it/2a6Q,5
2024-11-16,Dial M for Murder,1954,https://boxd.it/2adW,5
2024-11-17,Yi Yi,2000,https://boxd.it/1vCw,5
2024-11-18,A Different Man,2024,https://boxd.it/BoEC,3
2024-11-25,Demolition Man,1993,https://boxd.it/1XVm,2.5
2024-12-03,Bullet Train,2022,https://boxd.it/qW26,3
2024-12-03,Gladiator,2000,https://boxd.it/2b9m,3.5
2024-12-07,Ocean's Twelve,2004,https://boxd.it/2aZ2,4
2024-12-07,Conclave,2024,https://boxd.it/AO8q,4.5
2024-12-17,Dim Sum: A Little Bit of Heart,1985,https://boxd.it/4mU8,5
2024-12-21,Dreams,1990,https://boxd.it/1ROu,5
2024-12-23,Brazil,1985,https://boxd.it/2be2,3.5
2024-12-28,Nosferatu,2024,https://boxd.it/f5eG,4
2024-12-31,Babygirl,2024,https://boxd.it/Fvai,4
2025-01-05,Mind Game,2004,https://boxd.it/1Bv2,4
2025-01-08,Anora,2024,https://boxd.it/Egcw,5
2025-01-13,Flow,2024,https://boxd.it/v1Ei,5
2025-01-13,The Searchers,1956,https://boxd.it/25HC,3
2025-01-18,Pulp Fiction,1994,https://boxd.it/29Pq,5
2025-01-22,Godzilla vs. Destoroyah,1995,https://boxd.it/1RHy,3.5
2025-01-22,Society,1989,https://boxd.it/1ARc,3
2025-01-23,Gladiator II,2024,https://boxd.it/kqQQ,2
2025-01-24,Nosferatu the Vampyre,1979,https://boxd.it/21J0,5
2025-01-24,Nosferatu,1922,https://boxd.it/29TM,3.5
2025-01-25,Sing Sing,2023,https://boxd.it/HIBA,5
2025-01-27,Blue Velvet,1986,https://boxd.it/29BI,5
2025-01-30,The Brutalist,2024,https://boxd.it/k4BO,4.5
2025-01-30,Vermiglio,2024,https://boxd.it/HxDK,4.5
2025-02-02,Mothra vs. Godzilla,1964,https://boxd.it/28jy,4.5
2025-02-04,Woman in the Dunes,1964,https://boxd.it/1JNS,5
2025-02-05,September 5,2024,https://boxd.it/JYsI,3.5
2025-02-06,Universal Language,2024,https://boxd.it/BlwA,5
2025-02-08,Happiness,1998,https://boxd.it/1VEe,3
2025-02-10,I'm Still Here,2024,https://boxd.it/BPEO,3.5
2025-02-13,Buffalo '66,1998,https://boxd.it/1YC6,5
2025-02-13,The Umbrellas of Cherbourg,1964,https://boxd.it/22fK,5
2025-02-16,Bram Stoker's Dracula,1992,https://boxd.it/223a,3
2025-02-16,Whisper of the Heart,1995,https://boxd.it/17uy,3.5
2025-02-20,Soundtrack to a Coup d'Etat,2024,https://boxd.it/K5gk,4
2025-02-20,All We Imagine as Light,2024,https://boxd.it/yXaQ,5
2025-02-23,The Piano Teacher,2001,https://boxd.it/2886,5
2025-02-24,The Thing,1982,https://boxd.it/294O,5
2025-02-26,The Apprentice,2024,https://boxd.it/IPqG,3.5
2025-02-27,The Straight Story,1999,https://boxd.it/2ass,4.5
2025-02-28,Twin Peaks: Fire Walk with Me,1992,https://boxd.it/27Qw,5
2025-03-01,Mulholland Drive,2001,https://boxd.it/297o,5
2025-03-02,Mongrels,2024,https://boxd.it/Q86Y,3
2025-03-05,The Girl with the Needle,2024,https://boxd.it/KQ3M,5
2025-03-09,Seven Veils,2023,https://boxd.it/EZHO,4
2025-03-13,Foxy Brown,1974,https://boxd.it/1B8i,5
2025-03-13,Jackie Brown,1997,https://boxd.it/2aVO,5
2025-03-14,Mickey 17,2025,https://boxd.it/q1Dk,3
2025-03-15,Shoplifters,2018,https://boxd.it/ifY6,5
2025-03-22,Fish Tank,2009,https://boxd.it/1xBg,5
2025-03-22,First Cow,2019,https://boxd.it/krga,4
2025-03-22,Gummo,1997,https://boxd.it/1H0Y,3.5
2025-03-23,The Breadwinner,2017,https://boxd.it/frLs,3
2025-03-23,No Other Land,2024,https://boxd.it/KOTG,5
2025-03-23,Terrorizers,1986,https://boxd.it/2IRG,3.5
2025-03-24,Black Bag,2025,https://boxd.it/KRbM,2.5
2025-03-27,The French Connection,1971,https://boxd.it/296g,5
2025-03-28,Parthenope,2024,https://boxd.it/FWo2,4
2025-03-30,Pale Flower,1964,https://boxd.it/dGS,4
2025-03-30,I Saw the Devil,2010,https://boxd.it/FaK,3
2025-03-31,Unforgiven,1992,https://boxd.it/6Z4,5
2025-04-03,The Sacrifice,1986,https://boxd.it/1xg8,5
2025-04-04,Opus,2025,https://boxd.it/JBMA,3
2025-04-04,Blink Twice,2024,https://boxd.it/vIOg,2
2025-04-07,Babes,2024,https://boxd.it/BMCU,3
2025-04-07,Blade Runner 2049,2017,https://boxd.it/b8wK,4
2025-04-10,Vampire Hunter D,1985,https://boxd.it/1YCg,5
2025-04-12,Misericordia,2024,https://boxd.it/Efxy,5
2025-04-12,Heaven Knows What,2014,https://boxd.it/8P1a,3.5
2025-04-13,Predator,1987,https://boxd.it/2b84,3
2025-04-17,The Saddest Music in the World,2003,https://boxd.it/18NG,4
2025-04-17,The Twentieth Century,2019,https://boxd.it/lqNE,3
2025-05-09,Eastern Promises,2007,https://boxd.it/275q,5
2025-05-09,A History of Violence,2005,https://boxd.it/2bfa,4
2025-05-10,Millennium Mambo,2001,https://boxd.it/1Tzw,4.5
2025-05-10,Crash,1996,https://boxd.it/29n2,4.5
2025-05-11,Thunderbolts*,2025,https://boxd.it/BfbQ,3
2025-05-15,Dead Ringers,1988,https://boxd.it/1Yqk,4
2025-05-17,The Seed of the Sacred Fig,2024,https://boxd.it/MKo4,4.5
2025-05-18,Where Is the Friend's House?,1987,https://boxd.it/ELg,5
2025-05-19,The Luckiest Man in America,2024,https://boxd.it/N8aq,3.5
2025-05-21,The Shrouds,2024,https://boxd.it/AEZa,3
2025-05-25,The Witch: Part 1. The Subversion,2018,https://boxd.it/jhIm,2
2025-05-26,Heat,1995,https://boxd.it/2bg8,5
2025-06-04,Caught by the Tides,2024,https://boxd.it/GZ4Q,5
2025-06-07,The Phoenician Scheme,2025,https://boxd.it/H0Ca,4.5
2025-06-08,The Florida Project,2017,https://boxd.it/dMG0,5
2025-06-18,Mission: Impossible – The Final Reckoning,2025,https://boxd.it/l7A2,3.5
2025-06-21,28 Days Later,2002,https://boxd.it/2aXU,4
2025-06-22,The Emperor's Naked Army Marches On,1987,https://boxd.it/AeC,5
2025-06-24,28 Years Later,2025,https://boxd.it/FEGM,3
2025-06-26,Friendship,2024,https://boxd.it/L6Dc,5
2025-06-27,Việt and Nam,2024,https://boxd.it/vVyg,5
2025-06-28,Pink Flamingos,1972,https://boxd.it/29NO,4.5
2025-06-29,F1,2025,https://boxd.it/yjVM,3
2025-06-29,The Surfer,2024,https://boxd.it/GFEE,3.5
2025-07-04,Ran,1985,https://boxd.it/1Tlu,4.5
2025-07-11,Superman,2025,https://boxd.it/E9IU,3.5
2025-07-13,Drowning by Numbers,1988,https://boxd.it/1rYe,4
2025-07-14,Jurassic World Rebirth,2025,https://boxd.it/KUeE,3
2025-07-16,Allen Sunshine,2024,https://boxd.it/CSbs,3
2025-07-18,Clerks,1994,https://boxd.it/2706,4
2025-07-19,The Doom Generation,1995,https://boxd.it/1PVe,5
2025-07-20,The Lobster,2015,https://boxd.it/7tnw,4
2025-07-20,Dogtooth,2009,https://boxd.it/158K,5
2025-07-21,Karate Kid: Legends,2025,https://boxd.it/CeNc,1.5
2025-07-21,Pulse,2001,https://boxd.it/1s3y,3.5
2025-07-21,Cloud,2024,https://boxd.it/LhR0,3.5
2025-07-23,Eddington,2025,https://boxd.it/o6MC,5
2025-07-25,The Fantastic 4: First Steps,2025,https://boxd.it/mP6C,3.5
2025-08-01,Koyaanisqatsi,1982,https://boxd.it/1U9E,5
2025-08-02,Mermaid Legend,1984,https://boxd.it/5bGc,4.5
2025-08-03,Cinema Paradiso,1988,https://boxd.it/1UlA,4
2025-08-09,Persona,1966,https://boxd.it/29B4,5
2025-08-09,Mother,2009,https://boxd.it/1m9g,4
2025-08-13,Sharp Corner,2024,https://boxd.it/Lliy,3.5
2025-08-15,Shin Godzilla,2016,https://boxd.it/a9lm,3.5
2025-08-16,Blue Sun Palace,2024,https://boxd.it/MAAO,4.5
2025-08-17,Weapons,2025,https://boxd.it/EMTM,4
2025-08-18,Pat Garrett & Billy the Kid,1973,https://boxd.it/1TvE,3.5
2025-08-23,La Haine,1995,https://boxd.it/2as8,5
2025-08-24,Bonjour Tristesse,2024,https://boxd.it/GDYs,4
2025-08-25,Zodiac,2007,https://boxd.it/27MO,4.5
2025-08-25,Drunken Master,1978,https://boxd.it/1Ujk,3
2025-08-28,Exit Through the Gift Shop,2010,https://boxd.it/13E0,3.5
2025-08-30,Touki Bouki,1973,https://boxd.it/2H44,4
2025-08-30,The Holy Mountain,1973,https://boxd.it/20mu,3.5
2025-09-04,The Hidden Fortress,1958,https://boxd.it/295M,5
2025-09-12,Winter Kept Us Warm,1965,https://boxd.it/5f5Y,4
2025-09-13,Honey Don't!,2025,https://boxd.it/Hurc,2.5
2025-09-15,Highest 2 Lowest,2025,https://boxd.it/LcIC,2
2025-09-19,Collective,2019,https://boxd.it/mRVi,5
2025-09-21,The Toxic Avenger,2023,https://boxd.it/bgbq,3
2025-09-21,Harlan County U.S.A.,1976,https://boxd.it/1fJw,5
2025-09-22,Caught Stealing,2025,https://boxd.it/LnyS,3
2025-09-26,One Battle After Another,2025,https://boxd.it/DUHM,4.5
2025-09-27,Dragon Inn,1967,https://boxd.it/3xGa,4
2025-10-03,The Smashing Machine,2025,https://boxd.it/syUC,4
2025-10-05,The Hateful Eight,2015,https://boxd.it/8gw8,4
2025-10-05,Hideaway,1995,https://boxd.it/1s6i,1
2025-10-10,Hereditary,2018,https://boxd.it/hNVe,5
2025-10-11,Challengers,2024,https://boxd.it/zld0,4
2025-10-12,Hard Boiled,1992,https://boxd.it/1T6a,3.5
2025-10-13,Under the Skin,2013,https://boxd.it/3mDa,5
2025-10-16,Throne of Blood,1957,https://boxd.it/251w,5
2025-10-18,The Skin I Live In,2011,https://boxd.it/99A,4
2025-10-18,Possession,1981,https://boxd.it/1BPm,4
2025-10-22,Perfect Blue,1997,https://boxd.it/1W7A,5
2025-10-23,Eyes Without a Face,1960,https://boxd.it/1j9i,5
2025-11-01,Ghostwatch,1992,https://boxd.it/MIO,4
2025-11-02,Street of Shame,1956,https://boxd.it/UWO,4
2025-11-07,Stray Dog,1949,https://boxd.it/1ltu,5
2025-11-08,Good Fortune,2025,https://boxd.it/GavG,3.5
2025-11-08,Quest,1984,https://boxd.it/3OPI,5
2025-11-20,Sanjuro,1962,https://boxd.it/1TaQ,5
2025-11-23,If I Had Legs I'd Kick You,2025,https://boxd.it/HUtS,4
2025-11-25,The Great Escape,1963,https://boxd.it/22kA,5
2025-11-26,Roofman,2025,https://boxd.it/LcIW,3.5
2025-11-27,Secret Mall Apartment,2024,https://boxd.it/L2S8,4
2025-11-27,Battle Royale,2000,https://boxd.it/25zS,5
2025-11-27,Bugonia,2025,https://boxd.it/qeWY,5
2025-11-28,An American Werewolf in London,1981,https://boxd.it/29yk,3
2025-11-28,Frankenstein,2025,https://boxd.it/Ecsg,3.5
2025-11-29,Happyend,2024,https://boxd.it/rnUa,5
2025-11-30,Angel's Egg,1985,https://boxd.it/1LeA,5
2025-12-04,Dead Calm,1989,https://boxd.it/1W7K,4
2025-12-05,The Visitor,1979,https://boxd.it/vdO,3.5
2025-12-07,The Cat,1992,https://boxd.it/3TZe,3
2025-12-07,Prince of Broadway,2008,https://boxd.it/36oo,4
2025-12-11,Ikiru,1952,https://boxd.it/251c,5
2025-12-14,Chainsaw Man – The Movie: Reze Arc,2025,https://boxd.it/Kgyu,5
2025-12-14,Chainsaw Man,2022,https://boxd.it/J6t8,4
2025-12-14,TÁR,2022,https://boxd.it/uNIA,3.5
2025-12-16,Lurker,2025,https://boxd.it/McHG,4
2025-12-18,Presence,2024,https://boxd.it/H88i,3.5
2025-12-20,Operation Condor,1991,https://boxd.it/1UX0,4
2025-12-20,Wake Up Dead Man,2025,https://boxd.it/uAKS,3.5
2025-12-22,Armour of God,1986,https://boxd.it/1UXa,2.5
2025-12-22,Police Story,1985,https://boxd.it/1Zhe,4
2025-12-23,Warfare,2025,https://boxd.it/LbRo,4
2025-12-25,Left-Handed Girl,2025,https://boxd.it/BLDW,5
2025-12-25,Eleanor the Great,2025,https://boxd.it/JZLm,3
2025-12-27,Marty Supreme,2025,https://boxd.it/Off0,4
2025-12-29,Train Dreams,2025,https://boxd.it/LdDo,4
2025-12-29,American Fiction,2023,https://boxd.it/DYHm,3.5
2025-12-31,Nouvelle Vague,2025,https://boxd.it/LLLQ,4
2026-01-01,Contempt,1963,https://boxd.it/2aJe,3.5
2026-01-07,Licorice Pizza,2021,https://boxd.it/qTKY,3.5
2026-01-10,"Detective Bureau 2-3: Go to Hell, Bastards!",1963,https://boxd.it/38gm,3
2026-01-11,Police Story 2,1988,https://boxd.it/1VtU,4
2026-01-14,Keep Rolling,2020,https://boxd.it/rO1c,5
2026-01-14,The Secret,1979,https://boxd.it/5pjc,4
2026-01-15,The Secret Agent,2025,https://boxd.it/KkUE,5
2026-01-16,The Tale of Zatoichi,1962,https://boxd.it/1JMq,5
2026-01-16,Demon City Shinjuku,1988,https://boxd.it/SBk,3
2026-01-17,Branded to Kill,1967,https://boxd.it/1HSQ,5
2026-01-17,Bad Lieutenant,1992,https://boxd.it/1Src,4
2026-01-19,Rental Family,2025,https://boxd.it/JQOw,3
2026-01-19,Vengeance Is Mine,1979,https://boxd.it/XyU,5
2026-01-20,The Tale of Zatoichi Continues,1962,https://boxd.it/1JMg,3.5
2026-01-20,Resurrection,2025,https://boxd.it/x9DG,4.5
2026-01-22,Long Day's Journey Into Night,2018,https://boxd.it/hw1I,4.5
2026-01-22,Gate of Flesh,1964,https://boxd.it/35fK,4
2026-01-24,The Eel,1997,https://boxd.it/1Dna,5
2026-01-26,The Crazy Family,1984,https://boxd.it/2gie,3.5
2026-01-27,Charisma,1999,https://boxd.it/2ogU,4
2026-01-27,Suit Yourself or Shoot Yourself: The Heist,1995,https://boxd.it/9Zb2,3
2026-01-31,Bumpkin Soup,1985,https://boxd.it/15K,4
2026-01-31,Notes of a Crocodile,2024,https://boxd.it/OFyM,3.5
2026-01-31,Tellurian Drama,2020,https://boxd.it/sziO,4.5
2026-01-31,Untitled 77-A,1977,https://boxd.it/unvU,5
2026-02-01,The Running Man,2025,https://boxd.it/u36A,2
2026-02-04,Kamikaze Taxi,1995,https://boxd.it/4X28,3.5
2026-02-07,Battles Without Honor and Humanity,1973,https://boxd.it/1e0q,3.5
2026-02-08,The Moment,2026,https://boxd.it/SCkg,3
2026-02-10,Labyrinth of Dreams,1997,https://boxd.it/2EuS,5
`;

  if (!csvText.trim()) {
    alert('CSV is empty.');
    return;
  }

  // Robust CSV parser (handles quoted fields + commas inside quotes)
  function parseCSV(text) {
    const rows = [];
    let row = [];
    let field = '';
    let inQuotes = false;

    const pushField = () => {
      row.push(field);
      field = '';
    };
    const pushRow = () => {
      // ignore completely empty trailing lines
      if (row.length === 1 && row[0] === '') return;
      rows.push(row);
      row = [];
    };

    // Normalize line endings but keep parsing char-by-char
    const s = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n');

    for (let i = 0; i < s.length; i++) {
      const c = s[i];

      if (inQuotes) {
        if (c === '"') {
          // Escaped quote: ""
          if (s[i + 1] === '"') {
            field += '"';
            i++;
          } else {
            inQuotes = false;
          }
        } else {
          field += c;
        }
        continue;
      }

      if (c === '"') {
        inQuotes = true;
      } else if (c === ',') {
        pushField();
      } else if (c === '\n') {
        pushField();
        pushRow();
      } else {
        field += c;
      }
    }

    // Final field/row
    pushField();
    pushRow();

    const headers = (rows.shift() || []).map(h => (h ?? '').trim());
    const out = [];
    for (const r of rows) {
      if (!r || r.length === 0) continue;
      const obj = {};
      headers.forEach((h, idx) => {
        obj[h] = (r[idx] ?? '').toString().trim();
      });
      out.push(obj);
    }
    return out;
  }

  const items = parseCSV(csvText).filter(x => (x.Name || '').trim());

  if (!items.length) {
    alert('No rows parsed. Double-check that your CSV has a header row and data rows.');
    return;
  }

  const div = document.createElement('div');
  div.style.position = 'fixed';
  div.style.top = '0';
  div.style.left = '0';
  div.style.right = '0';
  div.style.zIndex = '99999';
  div.style.padding = '12px';
  div.style.background = '#111';
  div.style.color = '#fff';
  div.style.fontFamily = 'system-ui, sans-serif';
  div.style.boxShadow = '0 2px 6px rgba(0,0,0,.6)';
  div.innerHTML = `
    <div style="display:flex; gap:10px; align-items:baseline; flex-wrap:wrap;">
      <div><b>RYM film rating queue</b> <span id="pos"></span></div>
      <div style="font-size:12px; color:#bbb;">(Search opens in a new tab)</div>
    </div>
    <div style="margin-top:8px" id="content"></div>
    <div style="margin-top:8px; display:flex; gap:8px; flex-wrap:wrap;">
      <button id="prev">Prev</button>
      <button id="open">Open film search</button>
      <button id="copy">Copy title + year</button>
      <button id="next">Next</button>
      <button id="close">Close</button>
    </div>
    <div style="margin-top:6px; font-size:12px; color:#bbb;">
      Tip: rate it on the film page, then click <b>Next</b>.
    </div>
  `;
  document.body.appendChild(div);

  const posEl = div.querySelector('#pos');
  const contentEl = div.querySelector('#content');

  let i = 0;

  // ✅ Forces the Film category (uppercase F)
  const searchBase = 'https://rateyourmusic.com/search?searchtype=F&searchterm=';

  function safeStr(v) {
    return (v ?? '').toString().trim();
  }

  function render() {
    const item = items[i];
    const name = safeStr(item.Name);
    const year = safeStr(item.Year);
    const rating = safeStr(item.Rating);

    posEl.textContent = `(${i + 1} / ${items.length})`;
    contentEl.innerHTML = `
      <div style="font-size:14px;"><b>${name || '(missing title)'}</b>${year ? ` (${year})` : ''}</div>
      <div style="margin-top:4px;">Rating: ${rating || '(missing rating)'}</div>
    `;
  }

  div.querySelector('#prev').onclick = () => { i = (i - 1 + items.length) % items.length; render(); };
  div.querySelector('#next').onclick = () => { i = (i + 1) % items.length; render(); };
  div.querySelector('#close').onclick = () => div.remove();

  div.querySelector('#open').onclick = () => {
    const item = items[i];
    const name = safeStr(item.Name);
    const q = `${name}`.trim();
    window.open(searchBase + encodeURIComponent(q), '_blank');
  };

  div.querySelector('#copy').onclick = async () => {
    const item = items[i];
    const name = safeStr(item.Name);
    const year = safeStr(item.Year);
    const q = `${name}${year ? ` (${year})` : ''}`.trim();
    try {
      await navigator.clipboard.writeText(q);
      div.querySelector('#copy').textContent = 'Copied!';
      setTimeout(() => (div.querySelector('#copy').textContent = 'Copy title + year'), 900);
    } catch {
      alert(q);
    }
  };

  render();
})();
