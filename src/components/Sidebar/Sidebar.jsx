import React, { useEffect } from 'react';
import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/styles';
import {useDispatch, useSelector} from 'react-redux';
import {useGetGenresQuery} from '../../services/TMDB';
import useStyles from './styles';

const categories = [
  {label: 'Popular', value: 'popular'},
  {label: 'Top Rated', value: 'top_rated'},
  {label: 'Upcoming', value: 'upcoming'},
];

const demoCategories = [
  {label: 'Comedy', value: 'comedy'},
  {label: 'Action', value: 'action'},
  {label: 'Horror', value: 'horror'},
  {label: 'Animation', value: 'animation'},
];

const redLogo = 'https://fontmeme.com/permalink/220604/bf5199df348d9fb19fbddf18098a4825.png';
const blueLogo = 'https://fontmeme.com/permalink/220604/bf5199df348d9fb19fbddf18098a4825.png';

const Sidebar = ({ setMobileOpen }) => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <>
      <Link to='/' className={classes.imageLink}>
      <img
         className={classes.image}
         src={theme.palette.mode === 'light' ? redLogo : blueLogo}
         alt='Movietime logo'
         />
      </Link>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map(( label, value ) => (
          <Link key={value} className={classes.links} to='/'>
          <ListItem onClick={() => {}} button>
            {/*<ListItemIcon>
              <img src={redLogo} className={classes.genreImages} height={30}/>
            </ListItemIcon>*/}
            <ListItemText primary={label}/>
          </ListItem>
          </Link>
        ))}
      </List>
      <Divider/>
      <List>
        <ListSubheader>Genres</ListSubheader>
        {demoCategories.map((label, value) => (
          <Link key={value} className={classes.links} to='/'>
            <ListItem onClick={() => {}} button>
              {/*<ListItemIcon>
              <img src={redLogo} className={classes.genreImages} height={30}/>
            </ListItemIcon>*/}
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
    </>
  );
};

export default Sidebar