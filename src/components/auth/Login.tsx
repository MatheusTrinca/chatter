import { Link } from 'react-router';
import { Link as MuiLink } from '@mui/material';
import Auth from './Auth';

const Login = () => {
  return (
    <Auth submitLabel="Login" onSubmit={async () => {}}>
      <Link to="/signup">
        <MuiLink>Don&apos;t have an account? Signup</MuiLink>
      </Link>
    </Auth>
  );
};

export default Login;
