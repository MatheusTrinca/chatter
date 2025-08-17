import { Link } from 'react-router';
import { Link as MuiLink } from '@mui/material';
import Auth from './Auth';
import { useCreateUser } from '../../hooks/useCreateUser';

const Signup = () => {
  const [createUser] = useCreateUser();

  return (
    <Auth
      submitLabel="Signup"
      onSubmit={async ({ email, password }) => {
        await createUser({
          variables: {
            createUserInput: {
              email,
              password,
            },
          },
        });
      }}
    >
      <Link to="/login">
        <MuiLink>Already have an account? Login</MuiLink>
      </Link>
    </Auth>
  );
};

export default Signup;
