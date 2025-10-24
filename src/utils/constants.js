// College Information
export const COLLEGE_INFO = {
  name: 'Anglo Sanskrit Inter College',
  location: 'Mawana (Meerut)',
  hindiName: 'एंग्लो संस्कृत इण्टर कॉलिज मवाना (मेरठ)',
  phone: '+91-708 8264 764',
  email: 'asicmawana@gmail.com',
  address: 'MAWANA, MEERUT (U.P.)',
  established: '1916'
};

// Social Media Links
export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/asicmawana',
  twitter: 'https://twitter.com/asicmawana',
  youtube: 'https://youtube.com/@asicmawana',
  instagram: 'https://instagram.com/asicmawana'
};

// Navigation Menu Items
export const NAV_ITEMS = [
  { label: 'HOME', path: '/' },
  { 
    label: 'ABOUT US', 
    path: '/about' 
  },
  { 
    label: 'STAFF DETAILS', 
    path: '/staff-details',
    dropdown: [
      { label: 'Teaching', path: '/staff-details?type=teaching' },
      { label: 'Non-Teaching', path: '/staff-details?type=non-teaching' }
    ]
  },
  { 
    label: 'MANAGEMENT', 
    path: '/management',
    dropdown: [
      { label: 'College Committee', path: '/management?section=committee' },
      { label: 'Management Committee', path: '/management?section=management-committee' },
      { label: "President's Message", path: '/management?section=president' },
      { label: "Secretary's Message", path: '/management?section=secretary' },
      { label: "Principal's Message", path: '/management?section=principal' }
    ]
  },
  { label: 'COURSE', path: '/course' },
  { 
    label: 'ACTIVITIES', 
    path: '/activities',
    dropdown: [
      { label: 'All Activities', path: '/activities?type=all' }
    ]
  },
  { label: 'GALLERY', path: '/gallery' },
  { label: 'CONTACT', path: '/contact' }
];

// Stats Data
export const STATS = [
  { number: '2500+', label: 'Students', icon: 'FaUserGraduate' },
  { number: '20', label: 'Courses', icon: 'FaBook' },
  { number: '50+', label: 'Certified Teachers', icon: 'FaChalkboardTeacher' },
  { number: '100+', label: 'Award Winning', icon: 'FaTrophy' }
];

// Gallery Filters
export const GALLERY_FILTERS = [
  'All', 'Farewell', 'NCC', 'Scout', 'Events', 'English Mediam', 
  'Parents Meeting', 'Amrit Mohatsav', 'Exam', 'Games', 'Science', 
  'Sadan', 'News Paper', 'School', 'PTA', 'Traning', 'Day', 
  'Eco Club', 'Cultural', 'Social Media', 'Road Safety'
];

// Courses/Streams
export const COURSES = [
  {
    title: 'SCIENCE GROUP',
    subjects: '(PHYSICS, CHEMISTRY, MATHEMATICS, BIOLOGY)'
  },
  {
    title: 'COMMERCE',
    subjects: ''
  },
  {
    title: 'HUMANITIES',
    subjects: '(HINDI, ENGLISH, GEOGRAPHY, HISTORY, CIVICS, ECONOMICS, EDUCATION, DRAWING, HOME SCIENCE, SANSKRIT)'
  },
  {
    title: 'TRADITIONAL - COLOURED PHOTOGRAPHY, AUDIT',
    subjects: ''
  },
  {
    title: 'AGRICALTLURE',
    subjects: ''
  },
  {
    title: 'DIPLOMA AND WORKSHOP IN SPACE SCIENCE',
    subjects: ''
  }
];
