/**
 * Simple hash-based router
 * @param {Object} routes - Map of hash paths to render functions
 */
/**
 * Hash-based router with dynamic route support
 * @param {Object} routes - Map of hash paths to render functions
 */
export function initRouter(routes) {
  const app = document.querySelector('#app');

  function matchRoute(hash) {
    // 1. Exact match
    if (routes[hash]) {
      return { renderFn: routes[hash], params: {} };
    }

    // 2. Dynamic match (e.g., #/projects/:id)
    for (const route in routes) {
      if (route.includes(':')) {
        const routeRegex = new RegExp('^' + route.replace(/:[^\s/]+/, '([^\\s/]+)') + '$');
        const match = hash.match(routeRegex);
        if (match) {
          const paramValue = match[1];
          return { renderFn: routes[route], params: { id: paramValue } };
        }
      }
    }

    // 3. Default
    return { renderFn: routes['#/'], params: {} };
  }

  function handleRoute() {
    const hash = window.location.hash || '#/';
    const { renderFn, params } = matchRoute(hash);
    
    // Return both the render function and the params
    return { renderFn, params };
  }

  // Prevent browser from restoring scroll position
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  return {
    getCurrentRoute: handleRoute,
    subscribe: (callback) => {
      const onHashChange = () => {
        callback(handleRoute());
      };
      
      window.addEventListener('hashchange', onHashChange);
      window.addEventListener('load', onHashChange);
    }
  };
}
