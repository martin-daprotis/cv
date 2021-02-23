import React from 'react';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  image: {
    margin: '10px',
    width: '350px',
    height: '200px',
    borderRadius: '2px',
    objectFit: 'cover',
    cursor: 'pointer',
  },
}))

const vidExt = ['.mov','.avi','.mp4','.mkv']

const MediaWrapper = ({src,alt}) => {
  const classes = useStyles()
  return (
    <>
      {vidExt.some(ext => src.toLowerCase().includes(ext)) ?
        <video className={classes.image} src={require(`../media/${src}`)} autoPlay="true" loop />
      :
      <img
        className={classes.image}
        src={require(`../media/${src}`)}
        alt={alt}
      />
      }
    </>
  );
};
 
export default MediaWrapper;