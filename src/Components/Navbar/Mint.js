import React, {useState, useEffect} from "react"
import {Box, Button, makeStyles} from "@material-ui/core"
import normal from "../../Assets/AraKiwiNormal.png"
import bottle from "../../Assets/AraKiwiFreeBottle.png"
import backstage from "../../Assets/AraKiwiBackstage.png"
import {ethers} from 'ethers'
import AraKiwiJSON from "../../SmartContracts/AraKiwiNFT.json"

const contractAddress = "0xBa50AFf0D0c0CE38BA18a69262f85E531BF6c96F"
const provider = new ethers.providers.Web3Provider(window.ethereum)
const signer = provider.getSigner()
const contract = new ethers.Contract(contractAddress, AraKiwiJSON.abi, signer)




const images = [normal, bottle, backstage]

const useStyles = makeStyles((theme)=>({
    image: {
        width: "300px",
    },
    box: {
        padding: 25,
    },
    button1:{
        backgroundColor: "#80cbc4",
    
    },
    button2:{
        backgroundColor: "#fff3e0",
    
    },
    balance:{
        paddingTop: 15,
    }
    

    
}))


const Mint = () => {

        const [index, setIndex] = useState(0);
        const classes = useStyles()
        const [balance, setBalance] = useState("")
        const [totalMinted, setTotalMinted] = useState(0)
        

        const getBalance = async () =>{
            const [account] = await window.ethereum.request({method: "eth_requestAccounts"})
            const balance = await provider.getBalance(account)
            //balance will be in Big Number, we have to format it:
            setBalance(ethers.utils.formatEther(balance))
            
        }

        const mintToken = async () => {
            //const provider = new ethers.providers.Web3Provider(window.ethereum)
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts"
            })

            const addr = accounts[0]

            const CID = "QmRPXFVb5vu13GWaEQNGwckGsJGFjoHjWL4ce6UZMMn5MU"
            //parseMint count
            const getTokenId = async () => {
                const count = await contract.count()
                console.log(count)
                const countId = parseInt(count)
                return countId
            }

            const tokenId = await getTokenId()


            const metadataURI = `${CID}/${tokenId}.json`
            

            const result = await contract.payToMint(addr, metadataURI, {
                value: ethers.utils.parseEther("0.01"),
            })

            await result.wait()

        }


        const getCount = async () =>{
            const count = await contract.count()
            setTotalMinted(parseInt(count))
        }


        useEffect(() => {
          const interval = setInterval(() => {
              if(index === images.length - 1  ){
                  setIndex(0)
              }
              else{
                setIndex(index +1)
              }
          }, 3500);

          return () => {
              clearInterval(interval)
          }
          
        },);

        useEffect(() => {
            getCount();
          }, []);


        const getMintedStatus = async () => {
            const tokenURI = await contract.tokenURI(1)
            console.log(tokenURI)
        }

      
        return(
            <>
                <Box className={classes.box}>
                    <img className={classes.image} src={images[index]}/>
                </Box>
                <Button className={classes.button1} onClick = {()=> mintToken()}>
                Mint yours!
                </Button>
                <h4 className= {classes.balance}>Your Balance: {balance}</h4>
                <Button size ="small" className={classes.button2} onClick={() => getBalance()}>
                Show my balance
                </Button>
                <Box className={classes.box}>
                Total Minted: {totalMinted-1}/500
                </Box>

            </>
         )

   

}

export default Mint