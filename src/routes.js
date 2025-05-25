export const routes = {
  home: {
    path: '/',
    name: 'Home',
    title: 'Home'
  },
  company: {
    path: '/company',
    name: 'Company',
    title: 'About Our Company'
  },
  servicess: {
    path: '/servicess',
    name: 'Services',
    title: 'Services'
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
