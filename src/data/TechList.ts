import flutterImage from '../static/images/flutter.png';
import reactImage from '../static/images/react.png';
import nodeImage from '../static/images/node.png';

export interface Tech {
  id: number;
  image: string;
  name: string;
  skillPoint: number;
  chips: string[];
  description: string;
}

const techList: Tech[] = [
  {
    id: 1,
    image: flutterImage,
    name: 'Flutter',
    skillPoint: 8.5,
    chips: ['Http', 'Riverpod'],
    description: 'Have production level experience',
  },
  {
    id: 2,
    image: nodeImage,
    name: 'NodeJs',
    skillPoint: 8,
    chips: ['Express', 'RestAPI', 'MongoDB', 'Firebase Admin SDK'],
    description: 'Very Good At it',
  },
  {
    id: 3,
    image: reactImage,
    name: 'ReactJs',
    skillPoint: 7,
    chips: ['Redux Thunk', 'Typescript'],
    description: 'Have basic knowledge of React ecosystem',
  },
  {
    id: 4,
    image: flutterImage,
    name: 'Flutter',
    skillPoint: 8.5,
    chips: ['Http', 'Riverpod'],
    description: 'Have production level experience',
  },
  {
    id: 5,
    image: nodeImage,
    name: 'NodeJs',
    skillPoint: 8,
    chips: ['Express', 'RestAPI', 'MongoDB', 'Firebase Admin SDK'],
    description: 'Very Good At it',
  },
  {
    id: 6,
    image: reactImage,
    name: 'ReactJs',
    skillPoint: 7,
    chips: ['Redux Thunk', 'Typescript'],
    description: 'Have basic knowledge of React ecosystem',
  },
];

export default techList;
