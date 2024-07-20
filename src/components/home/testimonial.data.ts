import type { Testimonial } from '@/interfaces/testimonial'

export const data: Array<Testimonial> = [
  {
    id: 1,
    title: 'PREM VISHAL ENTERPRISES GAYA',
    content:
      'Deals in Electronics, Jewellery, RO Water Purifier, CCTV Cameras and Security Solutions. ',
    user: {
      id: 1,
      name: 'Gaya, Bihar',
      professional: 'Jain Mandir Road',
      photo: '1.jpg',
    },
  },
  {
    id: 2,
    title: 'SANTOSH ART JEWELLERS',
    content:
      'Santosh Art Jewellers offers exquisite, handcrafted jewellery pieces that blend traditional artistry with modern elegance.',
    user: {
      id: 1,
      name: 'Gaya, Bihar',
      professional: 'Station Road',
      photo: '2.jpg',
    },
  },
  {
    id: 3,
    title: 'PREM VISHAL ENTERPRISES',
    content:
      'Prem Vishal Enterprises provides top-quality security solutions and diverse electronic products, ensuring precision, safety, and efficiency for both personal and business needs.',
    user: {
      id: 1,
      name: 'Patna, Bihar',
      professional: 'Bakerganj Main Road patna',
      photo: '3.jpg',
    },
  },
  {
    id: 4,
    title: 'PREM VISHAL ENTERPRISES WAREHOUSE',
    content:
      'Prem Vishal Enterprises warehouse is a state-of-the-art facility, meticulously organized and equipped with advanced inventory management systems to ensure the secure and efficient storage and distribution of a wide range of security solutions and electronic products.',
    user: {
      id: 1,
      name: 'Patna, Bihar',
      professional: 'Bakerganj patna',
      photo: '3.jpg',
    },
  },
]
