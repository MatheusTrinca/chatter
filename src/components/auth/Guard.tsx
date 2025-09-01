import { useGetMe } from '../../hooks/useGetMe';
import excludedRoutes from '../../constants/excluded-routes';

interface GuardProps {
  children: React.ReactNode;
}

const Guard = ({ children }: GuardProps) => {
  const { data: user } = useGetMe();
  const pathname = window.location.pathname;

  return <>{excludedRoutes.includes(pathname) ? children : user && children}</>;
};

export default Guard;
