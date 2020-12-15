import styled from "styled-components";
import image from "../../media/keyboard.jpg";
import {Hand} from "@styled-icons/entypo/Hand";

const FirstImpresion = styled.div`
    background-image: url(${image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width:100%;
    box-shadow:inset 0 0 0 2000px rgba(17, 17, 17, 0.75);
`

const InfoWrapper= styled.div` 
  position:relative;
  top:10em;
  color:white;
  text-align:center;
`

const Salutation = styled.p`
  font-size:2em;  
`
const Hi = styled(Hand)`
  width:5em;
  height:5em;
  color: white;
`

export {
  FirstImpresion,
  Salutation,
  InfoWrapper,
  Hi
}