import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Brian',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'john@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
    {
      name: 'Sally',
      email: 'sally@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      //ids commented out to accomodate mongoDb
      //_id: '1',
      name: 'Wedding',
      slug: 'wedding',
      category: 'celebration',
      price: 56.78,
      image: '/images/rose_bouqet.jpeg',
      rating: 5,
      numReviews: 11,
      description: 'for your special day',
      countInStock: 7,
    },
    {
      //_id: '2',
      name: 'Funeral',
      slug: 'funeral',
      category: 'sympathy',
      price: 24.48,
      image: '/images/sunflowers.jpg',
      rating: 2,
      numReviews: 9,
      description: 'Bummer!',
      countInStock: 0,
    },
    {
      //_id: '3',
      name: 'Quinceñera',
      slug: 'quincenera',
      category: 'celebration',
      price: 46.78,
      image: '/images/pink_daisy.jpg',
      rating: 4,
      numReviews: 6,
      description: 'go get em',
      countInStock: 5,
    },
    {
      //_id: '4',
      name: 'Bar mitzvah',
      slug: 'bar_mitzvah',
      category: 'celebration',
      price: 36.78,
      image: '/images/mitz.jpg',
      rating: 5,
      numReviews: 5,
      description: 'Big boy!',
      countInStock: 5,
    },
  ],
};

export default data;
