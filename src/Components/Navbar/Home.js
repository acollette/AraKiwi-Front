import React from 'react';
import arakiwi from '../../Assets/AraKiwiNormal.png'
import {Box, makeStyles} from "@material-ui/core"
import woods from "../../Assets/Into-the-Woods-Festival.jpeg"


const useStyles = makeStyles((theme) => ({
    image : {
        width: "150px",
    },
    wideImage : {
        width: "800px",
        paddingTop: 30,
        paddingBottom:50,
        alignItems:"center"
    },
    container : {
        display:"flex",
        alignItems: "center",
        gap: theme.spacing(4),
        justifyContent: "center",
    },
    title : {
        paddingTop: 30,
    },
   
}))


const Home = () => {

    const classes = useStyles()

  return (
    <div>
      <h4></h4>
      <div className={classes.container}>
         <img className={classes.image} src={arakiwi} alt=""/>
      </div>
      
      <h3 className={classes.title} >Get your exclusive NFT !</h3>
      <Box>
          <img className={classes.wideImage} src={woods} alt=""/>
      </Box>
    </div>
  );
};

export default Home;
