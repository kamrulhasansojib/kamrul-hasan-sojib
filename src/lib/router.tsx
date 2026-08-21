import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

export interface LocationState {
  pathname: string;
  hash: string;
  search: string;
}

interface RouterContextType {
  location: LocationState;
  navigate: (to: string, options?: { replace?: boolean }) => void;
}

const RouterContext = createContext<RouterContextType | null>(null);

const getCurrentLocation = (): LocationState => ({
  pathname: window.location.pathname || '/',
  hash: window.location.hash || '',
  search: window.location.search || '',
});

export const BrowserRouter: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [location, setLocation] = useState<LocationState>(getCurrentLocation);

  useEffect(() => {
    const handlePopState = () => {
      setLocation(getCurrentLocation());
    };

    const handleHashChange = () => {
      setLocation(getCurrentLocation());
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const navigate = useCallback((to: string, options?: { replace?: boolean }) => {
    // If navigating to pure hash e.g. "#contact" or "/#contact"
    let targetPath = to;
    let targetHash = '';
    let targetSearch = '';

    if (to.includes('#')) {
      const parts = to.split('#');
      targetPath = parts[0] || window.location.pathname;
      targetHash = '#' + parts[1];
    }

    if (targetPath.includes('?')) {
      const parts = targetPath.split('?');
      targetPath = parts[0];
      targetSearch = '?' + parts[1];
    }

    if (!targetPath.startsWith('/')) {
      targetPath = '/' + targetPath;
    }

    const fullUrl = `${targetPath}${targetSearch}${targetHash}`;

    if (options?.replace) {
      window.history.replaceState(null, '', fullUrl);
    } else {
      window.history.pushState(null, '', fullUrl);
    }

    setLocation({
      pathname: targetPath,
      hash: targetHash,
      search: targetSearch,
    });

    if (targetHash) {
      const targetId = targetHash.replace('#', '');
      const el = document.getElementById(targetId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      }
    }
  }, []);

  return (
    <RouterContext.Provider value={{ location, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useLocation = (): LocationState => {
  const ctx = useContext(RouterContext);
  if (!ctx) {
    return getCurrentLocation();
  }
  return ctx.location;
};

export const useNavigate = () => {
  const ctx = useContext(RouterContext);
  if (!ctx) {
    return (to: string) => {
      window.location.href = to;
    };
  }
  return ctx.navigate;
};

export interface RouteProps {
  path: string;
  element: React.ReactNode;
}

export interface RoutesProps {
  children: React.ReactNode;
}

export const Routes: React.FC<RoutesProps> = ({ children }) => {
  const location = useLocation();
  const childrenArray = React.Children.toArray(children) as React.ReactElement<RouteProps>[];

  let matchedElement: React.ReactNode = null;

  for (const child of childrenArray) {
    if (!React.isValidElement(child)) continue;

    const { path, element } = child.props as RouteProps;

    if (path === '*' && !matchedElement) {
      matchedElement = element;
      continue;
    }

    // Normalize path comparison (e.g. "/services" vs "/services/")
    const currentPath = location.pathname.replace(/\/+$/, '') || '/';
    const routePath = (path || '/').replace(/\/+$/, '') || '/';

    if (currentPath === routePath) {
      matchedElement = element;
      break;
    }
  }

  return <>{matchedElement}</>;
};

export const Route: React.FC<RouteProps> = () => null;

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  replace?: boolean;
  children: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({ to, replace, onClick, children, ...rest }) => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);

    // If it's standard left click without modifier keys (cmd/ctrl/shift/alt)
    if (!e.defaultPrevented && e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
      e.preventDefault();
      navigate(to, { replace });
    }
  };

  return (
    <a href={to} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
};
