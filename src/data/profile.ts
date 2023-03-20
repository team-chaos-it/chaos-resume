import profileImage from './profile.jpg'

export const contact = {
  phone: '0123 1234567',
  email: 'info@example.org',
  xing: 'xing.com/profile/John_Doe',
  address: { street: 'Hauptstraße', zip: '12345', city: 'Birbenhausen' },
}

export const profile = {
  useUnderConstructionPage: false,
  personal: {
    name: 'John Doe',
    jobTitle: 'Senior Smartass',
    image: profileImage,
    company: 'Team Chaos GmbH',
    insurance: {
      name: 'Hiscox SA',
      address: { street: ' Arnulfstraße 31', city: '80636 München' },
      scope: 'Germany',
    },
    vatId: 'DE999999999',
  },
  contact: {
    phone: contact.phone,
    email: contact.email,
    xing: contact.xing,
    address: contact.address.city,
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
