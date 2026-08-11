export const getCategoryBadgeClass = (category: string = ''): string => {
  const cat = category.toLowerCase().trim();
  if (cat.includes('full stack') || cat.includes('fullstack') || cat.includes('full-stack')) {
    return 'category-badge-fullstack';
  }
  if (cat.includes('ai') || cat.includes('machine learning') || cat.includes('ml')) {
    return 'category-badge-aiml';
  }
  if (cat.includes('frontend') || cat.includes('front-end') || cat.includes('ui')) {
    return 'category-badge-frontend';
  }
  if (cat.includes('backend') || cat.includes('back-end') || cat.includes('api')) {
    return 'category-badge-backend';
  }
  if (cat.includes('academic') || cat.includes('education') || cat.includes('research')) {
    return 'category-badge-academic';
  }
  return 'category-badge-default';
};
