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
    image: '',
    name: 'Flutter',
    skillPoint: 8.5,
    chips: ['Http', 'Riverpod'],
    description: 'Have production level experience',
  },
  {
    id: 2,
    image: '',
    name: 'NodeJs',
    skillPoint: 8,
    chips: ['Express', 'RestAPI', 'MongoDB', 'Firebase Admin SDK'],
    description: 'Very Good At it',
  },
  {
    id: 3,
    image: '',
    name: 'ReactJs',
    skillPoint: 7,
    chips: ['Redux Thunk', 'Typescript'],
    description: 'Have basic knowledge of React ecosystem',
  },
  {
    id: 4,
    image: '',
    name: 'Flutter',
    skillPoint: 8.5,
    chips: ['Http', 'Riverpod'],
    description: 'Have production level experience',
  },
  {
    id: 5,
    image: '',
    name: 'NodeJs',
    skillPoint: 8,
    chips: ['Express', 'RestAPI', 'MongoDB', 'Firebase Admin SDK'],
    description: 'Very Good At it',
  },
  {
    id: 6,
    image: '',
    name: 'ReactJs',
    skillPoint: 7,
    chips: ['Redux Thunk', 'Typescript'],
    description: 'Have basic knowledge of React ecosystem',
  },
];

export default techList;
