export interface Project {
  id: string;
  title: string;
  client: string;
  category: 'ERP & E-Commerce' | 'Education ERP' | 'Skill Development' | 'Mission Portal' | 'Academy LMS';
  description: string;
  fullOverview: string;
  image: string;
  tags: string[];
  clientRole: string;
  keyFeatures: string[];
  metrics: { label: string; value: string }[];
  liveStatus: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'sakshit-electronics',
    title: 'Sakshit Electronics & Library',
    client: 'Dixit Sharma',
    category: 'ERP & E-Commerce',
    description: 'Stock Management & Billing by Dixit Sharma',
    fullOverview: 'A high-throughput enterprise resource planning suite for Sakshit Electronics & Library. Features real-time multi-warehouse inventory tracking, barcode-enabled point of sale (POS) billing, automated tax invoices, member subscription management, and offline-first data sync.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRWfwDt0EpebCXWTDJr3XzjAvy6uzHZw64nqI5KJQ5TtiBE4g4byrxfHJFnfHOeSYQsyMigF7db4wuloWUiBIIQU-7_XTvYtgEkcJuZtrDWFAMmUO2ynEu6rdP504FbXdpxCtpXVBTBy7YZ0WdXnHDQFpy4AzO8qmoAXjjKemv--oNkqrbU0lV5pjxQDMfaSmjVF_KX-HeA31vkflGDvlIodXCiB4fZYR0qWbQ6Lb5LPR-ZDblfv4',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Tailwind', 'Express'],
    clientRole: 'Managing Director, Sakshit Electronics',
    keyFeatures: [
      'Real-time barcode inventory & SKU tracking',
      'One-click GST & VAT compliant thermal receipt generation',
      'Library seat allocation & subscription tracker',
      'Daily profit/loss and sales analytics dashboards'
    ],
    metrics: [
      { label: 'Billing Speed', value: '< 2.5 sec' },
      { label: 'Stock Accuracy', value: '99.98%' },
      { label: 'Transactions/mo', value: '45,000+' }
    ],
    liveStatus: 'Active & Deployed'
  },
  {
    id: 'bright-eyes-welfare',
    title: 'Bright Eyes Welfare Education Society',
    client: 'Anil Kumar',
    category: 'Education ERP',
    description: 'Education Society Website by Anil Kumar',
    fullOverview: 'Comprehensive educational foundation portal and digital management system. Built for Bright Eyes Welfare Education Society to facilitate student admissions, digital certificate verification, donor management, and event broadcasts.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYluS_oYRpCCEad6wxIggn8THzzVYoIKmCdPEB-NBBtv3NJG44QVNV_F6FnK3T25ZuP78ulyEEQMQCYI13tojnaZS23qr-mwIuy6RiHnzI6QOKFcV-V_B8mjfOwxrq8RofU0nhEmXZ_GMvLd6tdei0YoSqcrLK7JvOPnmiY947aP3Q_bLM1KPFvyprAm9Ox3kwKvj6fcOsQDvd52UnGtq-zKSG1YiiAyQX9s9EV3Ngu5rmuhzCmzM',
    tags: ['Next.js', 'Tailwind', 'MongoDB', 'Node.js', 'Vercel'],
    clientRole: 'General Secretary, Bright Eyes Society',
    keyFeatures: [
      'Digital student admissions & identity cards generation',
      'Online QR-verifiable course completion certificates',
      'Transparent donor ledger & automated 80G tax receipts',
      'Multi-language content support (Hindi & English)'
    ],
    metrics: [
      { label: 'Students Onboarded', value: '12,500+' },
      { label: 'Page Load Speed', value: '0.4s' },
      { label: 'Paperwork Reduction', value: '85%' }
    ],
    liveStatus: 'Active & Deployed'
  },
  {
    id: 'rural-urban-skill',
    title: 'Rural Urban Skill Development Institute',
    client: 'Devender Kaushik',
    category: 'Skill Development',
    description: 'Institute Management ERP by Devender Kaushik',
    fullOverview: 'State-of-the-art vocational skill institute ERP engine managing centers across northern India. Automates student batch allocation, biometric attendance, examination schedules, instructor payroll, and placement tracking.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5f6wQpl-YXZfrieJ5EO9KyhuaGCRrkPKH1JV_6h5tk0rQXMT2Xkni5bD4Snks3peu05S2pBGSO6RUYyxj6jsJWNIip7DSv-3bcepYMGNqjBqTh65s1HLMJmhZkI44UXWXc_lMJnI31pIl7Kt_aJ3dsw90uzZI2dv-BBys7VJxkHzzzpV9Gs_7I0CVkg9LWsYGXdC6b6JawrZ4BhLF4shGBk4Qb9y0ZtZydsPIrppkHhz8U_wtvEI',
    tags: ['TypeScript', 'Express', 'MySQL', 'React', 'Docker'],
    clientRole: 'Director, RUSDI Institute',
    keyFeatures: [
      'Centralized multi-branch administration console',
      'Automated roll-number generation and examination hall tickets',
      'Corporate placement cell with applicant tracking',
      'SMS & WhatsApp automatic alert notifications for fees & exams'
    ],
    metrics: [
      { label: 'Affiliated Centers', value: '28 Centers' },
      { label: 'Annual Registrations', value: '8,200+' },
      { label: 'Uptime SLA', value: '99.95%' }
    ],
    liveStatus: 'Active & Deployed'
  },
  {
    id: 'rajiv-gandhi-csm',
    title: 'Rajiv Gandhi Computer Saksharta Mission',
    client: 'Dr. K. P. Singh',
    category: 'Mission Portal',
    description: 'Institute Landing Page by Dr. K. P. Singh',
    fullOverview: 'National computer literacy awareness and franchise expansion portal. Provides prospective students with syllabus downloads, online franchise affiliation applications, franchise locator maps, and student verification portals.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB38zltnO6IKTsNbyUM0D7EFdWj9nIz5zFd_punVN7rTUut3cf4ybeF1p5R4gNZCCjTPC_zdrCIfrF44OdRELwWn8umD-AnfhK-zli9jnIuFub3q1DJaSgAdkqJbuiH_zm6WvMXWRMH4whUbQRbSUETJYJT6sWnCVj2iV0ixLsrZF6I6SBgauGevkaWopOvg4Wrqrwf05tk-0DRg4R2LF3smnjQOZ7bjxErzJcIz8_3ytnXUclxiuk',
    tags: ['Vue.js', 'PHP', 'MySQL', 'Bootstrap', 'REST APIs'],
    clientRole: 'Program Coordinator, RGCSM',
    keyFeatures: [
      'Interactive national franchise locator with geolocation',
      'Instant online certificate & marksheet verification',
      'Curriculum downloads with digital watermarking',
      'Lead capture for new franchise center authorizations'
    ],
    metrics: [
      { label: 'Monthly Visitors', value: '80,000+' },
      { label: 'Franchise Inquiries', value: '+220%' },
      { label: 'Google Search Rank', value: '#1 Result' }
    ],
    liveStatus: 'Active & Deployed'
  },
  {
    id: 'macs-academy',
    title: 'MACS Academy',
    client: 'Rajesh Kangra',
    category: 'Academy LMS',
    description: 'Academy Website by Rajesh Kangra',
    fullOverview: 'High-speed learning management portal with interactive study modules, online practice tests, video lecture integrations, and student progress metrics for competitive examination aspirants.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBC6be5MACE2VdIs3gAG8AHJdW67mfjUZWaRVtlXdIeeUfS7OFq8CZnyY-EDeyI1k_GhJ2zmPJUiuRF42NpNMviBH-VqUYsM2VH_3eQ3rRpMKo98rwrk6db_mGQBELqDC9ukX1anwlRUL-wQBs9F5sHrGv-d5RnR2JuEzoIRqSrG6tjYatmCvZCTIunhgkt6duxbrR_jQe4i-fMsaldRGrqUS7OPrZorTrFrpYCmthGZZ1Jx1Fdus',
    tags: ['React', 'Firebase', 'Tailwind', 'Cloud Firestore', 'Auth'],
    clientRole: 'Founder & Principal Instructor, MACS',
    keyFeatures: [
      'Timed mock examination engine with instant rank analytics',
      'Gated recorded lecture library with DRM video security',
      'Automated batch fee reminders and online UPI checkout',
      'Mobile-optimized dark mode interface for night study'
    ],
    metrics: [
      { label: 'Active Students', value: '4,500+' },
      { label: 'Tests Conducted', value: '150,000+' },
      { label: 'Student Rating', value: '4.9 / 5.0' }
    ],
    liveStatus: 'Active & Deployed'
  }
];

export const TESTIMONIALS = [
  {
    id: 'test-1',
    name: 'Dixit Sharma',
    role: 'Sakshit Electronics & Library',
    avatar: 'DS',
    city: 'Rewari, Haryana',
    rating: 5,
    quote: 'Dhiman Codes transformed our inventory and library management completely. Their custom ERP solution is fast, robust, and incredibly easy for our staff to use daily. We saved over 15 hours every single week in inventory reconciliation.'
  },
  {
    id: 'test-2',
    name: 'Anil Kumar',
    role: 'Bright Eyes Welfare Education Society',
    avatar: 'AK',
    city: 'New Delhi',
    rating: 5,
    quote: 'The student management portal developed by Dhiman Codes streamlined our admissions and records effortlessly. Outstanding technical support, flawless responsive design, and lightning-quick turnaround on every enhancement.'
  },
  {
    id: 'test-3',
    name: 'Devender Kaushik',
    role: 'Rural Urban Skill Development Institute',
    avatar: 'DK',
    city: 'Hisar, Haryana',
    rating: 5,
    quote: 'Professionalism and precision at its finest. Our vocational training institute platform runs impeccably with zero downtime across 28 satellite centers. Dhiman Codes is our permanent engineering partner.'
  }
];
