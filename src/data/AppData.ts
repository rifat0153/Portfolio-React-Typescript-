export interface AppInfo {
  id: number;
  image1: string;
  image2: string;
  title: string;
  introduction: string;
  technology: string;
  technologyList: string[];
}

const appData: AppInfo[] = [
  {
    id: 99,
    image1:
      'https://firebasestorage.googleapis.com/v0/b/portfolio-6b79f.appspot.com/o/app1_2.png?alt=media&token=ebf4b599-860c-4fe2-85f0-199b97a132e9',
    image2:
      'https://firebasestorage.googleapis.com/v0/b/portfolio-6b79f.appspot.com/o/app1_1.png?alt=media&token=937c37c9-4259-4c1f-b7ab-cd03375e7aa4',
    title: 'The Daily Star - Bangladesh',
    introduction:
      "Bangladesh's leading English newspaper updating 24/7 with latest, breaking, politics, business, technology, world, entertainment, sports, lifestyle and crime news.",
    technology: 'The Daily Star is build with Flutter, Riverpod and Rest API.',
    technologyList: ['Flutter', 'Riverpod', 'Text to Speech'],
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
    technology:
      'Aalokito is build with Flutter, Nodejs and MongoDB with geo-location based system. Firebase for realtime in app notifications. Cloud funtions hosts the node express server and handles the api call from Flutter app.',
    technologyList: [
      'Flutter',
      'Firebase',
      'MongoDB',
      'NodeJs',
      'Flutter',
      'Firebase',
      'Kotlin',
      'NodeJs',
    ],
  },
];

export default appData;
