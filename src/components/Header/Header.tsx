import styles from './Header.module.scss';
import { Typography } from '@mui/material';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Typography className={styles.label} variant="h4" component="h4">
        {'todo list'}
      </Typography>
    </header>
  );
};
