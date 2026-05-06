export const projects = [
  {
    slug: 'house-of-reservations',
    title: 'House of Reservations',
    category: 'Interaction & Development',
    year: '2024',
    description:
      'A modern reservation system built with the Next.js ecosystem, featuring seamless and secure Stripe payment gateway integration. The platform handles real-time availability, automated confirmation emails, and a comprehensive admin dashboard for managing bookings across multiple properties.',
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1400&q=80&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1000&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1000&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1000&q=80&auto=format&fit=crop',
    ],
    tags: ['Next.js', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
    role: 'Full-Stack Developer',
    client: 'Private',
  },
  {
    slug: 'vision-ocr-integration',
    title: 'Vision OCR Integration',
    category: 'Backend & AI',
    year: '2024',
    description:
      'Architected background processing logic utilizing Google Vision OCR to resolve crucial Purchase Order data accuracy issues. The system processes thousands of documents daily, extracting structured data with 98%+ accuracy and integrating seamlessly with existing ERP workflows.',
    image:
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1400&q=80&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1000&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1000&q=80&auto=format&fit=crop',
    ],
    tags: ['Google Vision API', 'NestJS', 'Redis', 'Docker'],
    role: 'Backend Engineer',
    client: 'Enterprise',
  },
  {
    slug: 'bali-sun-rent-car',
    title: 'Bali Sun Rent Car',
    category: 'Design & Development',
    year: '2023',
    description:
      'A high-performance digital vehicle rental platform built entirely from the ground up using Astro JS. The site achieves near-perfect Lighthouse scores with islands architecture, delivering rich interactive experiences while keeping the initial payload minimal.',
    image:
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1400&q=80&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1000&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?w=1000&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1000&q=80&auto=format&fit=crop',
    ],
    tags: ['Astro JS', 'React', 'Tailwind CSS', 'Vercel'],
    role: 'Frontend Developer',
    client: 'Bali Sun',
  },
  {
    slug: 'app-inspection-fixes',
    title: 'App Inspection & Fixes',
    category: 'Audit & Migration',
    year: '2023',
    description:
      'Led the comprehensive audit, critical bug fixing (including complex routing issues), and data migration for an enterprise-scale inspection management app. Restored system stability, resolved data integrity issues, and established monitoring and alerting infrastructure.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=80&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1000&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1000&q=80&auto=format&fit=crop',
    ],
    tags: ['Laravel', 'MySQL', 'AWS', 'Datadog'],
    role: 'Lead Developer',
    client: 'Enterprise',
  },
]
