// Format Date
export const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-IN', options);
};

// Truncate Text
export const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return text.substr(0, maxLength) + '...';
};

// Validate Email
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Validate Phone
export const isValidPhone = (phone) => {
  const phoneRegex = /^[6-9]\d{9}$/;
  return phoneRegex.test(phone.replace(/\s+/g, ''));
};

// Generate Slug
export const generateSlug = (text) => {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
};

// Scroll to Section
export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
// Generate inline SVG placeholder
export const getPlaceholderImage = (width, height, text, bgColor = '0C2E5C', textColor = 'FDB813') => {
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${width}" height="${height}" fill="#${bgColor}"/>
      <text x="50%" y="50%" 
            font-family="Arial, sans-serif" 
            font-size="20" 
            fill="#${textColor}" 
            text-anchor="middle" 
            dominant-baseline="middle">
        ${text}
      </text>
    </svg>
  `;
  
  // Convert to data URI
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};
