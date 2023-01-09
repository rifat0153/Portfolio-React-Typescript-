export interface Project {
  id: number;
  image1: string;
  image2: string;
  title: string;
  introduction: string;
  description?: string;
  technologyList: string[];
  links?: ProjectLink[];
}

export interface ProjectLink {
  title: string;
  icon: string;
  url: string;
}

const projectList: Project[] = [
  {
    id: 98,
    image1:
      'https://firebasestorage.googleapis.com/v0/b/portfolio-6b79f.appspot.com/o/spotlas_1.webp?alt=media&token=a745fd92-bcdf-4613-bef3-223fac97a74e',
    image2:
      'https://firebasestorage.googleapis.com/v0/b/portfolio-6b79f.appspot.com/o/spotlas_2.webp?alt=media&token=64793897-074b-4030-9375-49e57c527200',
    title: 'Spotlas',
    introduction:
      'Spotlas is the social network revolutionising the way people discover, choose and experience spots around the world – from cafes, restaurants, bars and nightclubs to hotels, museums, shops and beaches...Any spot. Any time. Anywhere.',
    // description: 'The Daily Star is build with Flutter, Riverpod and Rest API.',
    technologyList: ['Flutter'],
    links: [
      {
        icon: 'fab fa-android',
        title: 'PLAY STORE',
        url: 'https://play.google.com/store/apps/details?id=co.uk.wotspot.indigo.ios.stage',
      },
      {
        icon: 'fab fa-apple',
        title: 'APP STORE',
        url: 'https://apps.apple.com/gb/app/spotlas/id1464125251',
      },
    ],
  },
  {
    id: 99,
    image1:
      'https://firebasestorage.googleapis.com/v0/b/portfolio-6b79f.appspot.com/o/daily_start_1.webp?alt=media&token=ba2a2563-84ac-402d-a552-0c2533dfc8c5',
    image2:
      'https://firebasestorage.googleapis.com/v0/b/portfolio-6b79f.appspot.com/o/daily_star_2.webp?alt=media&token=65a64fd1-7f3b-45b7-91fe-297fed99dad0',
    title: 'The Daily Star - Bangladesh',
    introduction:
      "Bangladesh's leading English newspaper updating 24/7 with latest, breaking, politics, business, technology, world, entertainment, sports, lifestyle and crime news.",
    // description: 'The Daily Star is build with Flutter, Riverpod and Rest API.',
    technologyList: ['Flutter', 'Riverpod', 'Text to Speech'],
    links: [
      {
        icon: 'fab fa-android',
        title: 'PLAY STORE',
        url: 'https://play.google.com/store/apps/details?id=com.mcc.thedailystar&hl=en_US&gl=US',
      },
      {
        icon: 'fab fa-apple',
        title: 'APP STORE',
        url: 'https://apps.apple.com/us/app/the-daily-star/id589009555',
      },
    ],
  },
  {
    id: 100,
    image1:
      'https://firebasestorage.googleapis.com/v0/b/portfolio-6b79f.appspot.com/o/app1_2.png?alt=media&token=ebf4b599-860c-4fe2-85f0-199b97a132e9',
    image2:
      'https://firebasestorage.googleapis.com/v0/b/portfolio-6b79f.appspot.com/o/app1_1.png?alt=media&token=937c37c9-4259-4c1f-b7ab-cd03375e7aa4',
    title: 'Aalokito',
    introduction:
      'An android application for sharing meal and other necessary things',
    description:
      'Aalokito is build with Flutter, Nodejs and MongoDB with geo-location based system. Firebase for realtime in app notifications. Cloud funtions hosts the node express server and handles the api call from Flutter app.',
    technologyList: ['Flutter', 'Firebase', 'MongoDB', 'NodeJs', 'Flutter'],
  },
];

export default projectList;
