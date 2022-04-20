import React from 'react'
import {Box, makeStyles} from "@material-ui/core"
import normal from "../../Assets/AraKiwiNormal.png"
import bottle from "../../Assets/AraKiwiFreeBottle.png"
import backstage from "../../Assets/AraKiwiBackstage.png"


const useStyles = makeStyles((theme)=>({
    image : { 
        width : "300px",
        padding: 10, 
     

    },
    box : {
        display:"flex",
        gap: theme.spacing(4),
        justifyContent: "center",
        paddingTop: 40,

    },
    text : {
        //display:"flex",
        //justifyContent: "flex-start",
        //paddingLeft: 115,
        paddingTop: 20,
        paddingBottom: 20,
        color: "#fff3e0" ,
        fontSize: 42,
    },
    color : {
        color: "#e8eaf6",
    },
    padding :{
        paddingBottom:50,
    },


}))

const Info = () => {

    const classes = useStyles()

    return(
        <>
            <h3 className={classes.text}>2022 Edition NFT's</h3>
            <Box className={classes.box}>
                <div>
                    <h3>Pass 1</h3>
                    <img className={classes.image} src={normal} alt=""/>
                    <div className={classes.padding}>
                        <h4>Discounted future editions</h4>
                        <h4>Merch drops</h4>
                    </div>
                    
                </div>
                <div>
                    <h3>Pass 2</h3>
                    <img className={classes.image} src={bottle} alt=""/>
                    <div className={classes.padding}>
                        <h4>Discounted future editions</h4>
                        <h4>Merch drops</h4>
                        <h4>Free Bottle at entry</h4>
                    </div>
                </div>
                <div>
                    <h3>Pass 3</h3>
                    <img className={classes.image} src={backstage} alt=""/>
                    <div className={classes.padding}>
                        <h4>Discounted future editions</h4>
                        <h4>Merch drops</h4>
                        <h4>Special backstage access</h4>
                    </div>
                </div>
            </Box>
            
        </>
    )

}

export default Info