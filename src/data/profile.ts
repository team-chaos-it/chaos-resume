import profileImage from './profile.jpg'

export const profile = {
  useUnderConstructionPage: true,
  personal: {
    name: 'John Doe',
    jobTitle: 'Senior Smartass',
    image: profileImage,
  },
  contact: {
    phone: '0123 1234567',
    email: 'info@example.org',
    xing: 'xing.com/profile/John_Doe',
    city: 'Barcelona',
  },
  competencies: {
    Area1: [
      { title: 'Competency 1', level: 100 },
      { title: 'Competency 2', level: 80 },
    ],
    Area2: [
      { title: 'Competency 3', level: 70 },
      { title: 'Competency 4', level: 60 },
    ],
  },
  education: [
    {
      title: 'Master of Disaster',
      subtitle: 'Chaos University',
      from: '2012',
      to: '2015',
    },
    {
      title: 'Bachelor of Disaster',
      subtitle: 'Chaos University',
      from: '2009',
      to: '2012',
    },
  ],
  certifications: [
    {
      title: 'Extended Professional Smartass',
      subtitle: 'PSA II',
      authority: 'chaos.org',
      date: '03/2018',
    },
    {
      title: 'Professional Smartass',
      subtitle: 'PSA I',
      authority: 'chaos.org',
      date: '02/2015',
    },
  ],
}
