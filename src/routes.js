export const routes = {
  home: {
    path: '/',
    name: 'Resolution',
    title: 'Resolution - Home'
  },
  company: {
    path: '/company',
    name: 'Company',
    title: 'About Our Company'
  },
  itSolutions: {
    path: '/it-solutions',
    name: 'IT Solutions',
    title: 'IT Solutions'
  },
  elements: {
    path: '/elements',
    name: 'Elements',
    title: 'Elements'
  },
  caseStudies: {
    path: '/case-studies',
    name: 'Case Studies',
    title: 'Case Studies'
  },
  blog: {
    path: '/blog',
    name: 'Blog',
    title: 'Blog'
  }
};

// Helper function to get route path by key
export const getRoutePath = (routeKey) => {
  return routes[routeKey]?.path || '/';
};

// Helper function to get route name by key
export const getRouteName = (routeKey) => {
  return routes[routeKey]?.name || 'Resolution';
};

export default routes;
