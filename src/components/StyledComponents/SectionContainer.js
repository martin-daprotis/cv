import styled from 'styled-components'

const SectionContainer1 = styled.div`
  background-color: ${props => props.isDark ? "#624462" : "#d5e9ff"};
  -ms-transform: skewY(-3deg); /* IE 9 */
  transform: skewY(-3deg);
  padding-top:5em;
  padding-bottom: 5em;
  position: relative; 
  border-radius: 70px 0px 70px 0;

  &:before {
    content: "";
    position: absolute;
    background-color: white;
    top: -120px;
    right: 0;
    height: 120px;
    width: 80px;
    border-bottom-right-radius: 70px;
    background-color: transparent;
    box-shadow: 0 65px 0 0 ${props => props.isDark ? "#624462" : "#d5e9ff"};  
  }

  &:after {
    content: "";
    position: absolute;
    background-color: white;
    bottom: -120px;
    left: 0;
    height: 120px;
    width: 80px;
    border-top-left-radius: 70px;
    background-color: transparent;
    box-shadow: 0 -65px 0 0  ${props => props.isDark ? "#624462" : "#d5e9ff"};
  }
  
  & >div{
    -ms-transform: skewY(3deg); /* IE 9 */
    transform: skewY(3deg);
    position:relative;
  }
`

const SectionContainer2 = styled.div`
  background-color: ${props => props.isDark ? "#624462" : "#d5e9ff"};
  -ms-transform: skewY(3deg); /* IE 9 */
  transform: skewY(3deg);
  padding: 5em 3em;
  position: relative; 
  border-radius: 0px 70px 0px 70px;

  &:before {
    content: "";
    position: absolute;
    background-color: white;
    top: -120px;
    left: 0;
    height: 120px;
    width: 80px;
    border-bottom-left-radius: 70px;
    background-color: transparent;
    box-shadow: 0 65px 0 0  ${props => props.isDark ? "#624462" : "#d5e9ff"};
  }

  &:after {
    content: "";
    position: absolute;
    background-color: white;
    bottom: -120px;
    right: 0;
    height: 120px;
    width: 80px;
    border-top-right-radius: 70px;
    background-color: transparent;
    box-shadow: 0 -65px 0 0  ${props => props.isDark ? "#624462" : "#d5e9ff"};
  }
  
  & >div{
    -ms-transform: skewY(-3deg); /* IE 9 */
    transform: skewY(-3deg);
    position:relative;
  }
`

const SectionLastContainer2 = styled.div`
  background-color: ${props => props.isDark ? "#624462" : "#d5e9ff"};
  -ms-transform: skewY(-3deg); /* IE 9 */
  transform: skewY(-3deg);
  margin-top:5em;
  padding-top: 5em;
  padding-left: 3em;
  padding-right: 3em;
  position: relative; 
  border-radius: 70px 0px 70px 0;

  &:before {
    content: "";
    position: absolute;
    background-color: white;
    top: -120px;
    right: 0;
    height: 120px;
    width: 80px;
    border-bottom-right-radius: 70px;
    background-color: transparent;
    box-shadow: 0 65px 0 0  ${props => props.isDark ? "#624462" : "#d5e9ff"};
  }

  &:after {
    content: "";
    position: absolute;
    background-color: ${props => props.isDark ? "#624462" : "#d5e9ff"};
    bottom: -95px;
    left: 0;
    height: 190px;
    width: 100%;
    border-bottom-left-radius:  70px;
    border-bottom-right-radius:  70px;
    z-index: 2;
    -ms-transform: skewY(3deg); /* IE 9 */
    transform: skewY(3deg);
  }
  
  & >div{
    -ms-transform: skewY(3deg); /* IE 9 */
    transform: skewY(3deg);
    position:relative;
    z-index: 3;
  }
`

// const SectionLastContainer2 = styled.div`
//   background-color: ${props => props.isDark ? "#624462" : "#d5e9ff"};
//   -ms-transform: skewY(3deg); /* IE 9 */
//   transform: skewY(3deg);
//   margin-top:5em;
//   padding: 5em 3em;
//   position: relative; 
//   border-radius: 0px 70px 70px 70px;

//   &:before {
//     content: "";
//     position: absolute;
//     background-color: white;
//     top: -120px;
//     left: 0;
//     height: 120px;
//     width: 80px;
//     border-bottom-left-radius: 70px;
//     background-color: transparent;
//     box-shadow: 0 65px 0 0  ${props => props.isDark ? "#624462" : "#d5e9ff"};
//   }

//   &:after {
//     content: "";
//     position: absolute;
//     background-color: ${props => props.isDark ? "#624462" : "#d5e9ff"};
//     bottom: -30px;
//     left: 0;
//     height: 160px;
//     width: 100%;
//     border-bottom-left-radius:  70px;
//     border-bottom-right-radius:  70px;
//     z-index: 2;
//     -ms-transform: skewY(-3deg); /* IE 9 */
//     transform: skewY(-3deg);
//   }
  
//   & >div{
//     -ms-transform: skewY(-3deg); /* IE 9 */
//     transform: skewY(-3deg);
//     position:relative;
//     z-index: 3;
//   }
// `

export {
  SectionContainer1,
  SectionContainer2,
  SectionLastContainer2
} 