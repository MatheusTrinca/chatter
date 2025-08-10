import { Link } from 'react-router';
import { Link as MuiLink } from '@mui/material';
import Auth from './Auth';

const Signup = () => {
  return (
    <Auth submitLabel="Signup" onSubmit={async () => {}}>
      <Link to="/login">
        <MuiLink>Already have an account? Login</MuiLink>
      </Link>
    </Auth>
  );
};

export default Signup;
