import React from 'react';
import { Modal, Typography, Button, ButtonGroup, Grid, Box, CircularProgress, useMediaQuery, Rating } from '@mui/material';
import { Movie as MovieIcon, Theaters, Language, PlusOne, Favorite, FavoriteBorderOutline, Remove, ArrowBack } from '@mui/icons-material';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useGetMovieQuery } from '../../services/TMDB';
import {ClassNames} from '@emotion/react';

import useStyles from './styles';
const MovieInformation = () => {
const {id} = useParams();
const { data, isFetching, error} = useGetMovieQuery(id);
const classes = useStyles();

  if(isFetching) {
    return (
      <Box display='flex' justifyContent='center' alignItems='center'>
      <CircularProgress size='8rem' />
      </Box>
    );
  }
  if (error) {
    return (
      <Box display='flex' justifyContent='center' alignItems='center'>
        <Link to='/'>Something went wrong - Go Back</Link>
      </Box>
    );
  }

    return (
    <Grid container className={classes.containerSpaceAround}>
    <Grid item sm>

    </Grid>
    </Grid>
  );
};

export default MovieInformation