import styled from "styled-components";
import React from 'react';
import { v4 as uuidv4 }from 'uuid'


const AnimatedTextWrapper = styled.div` 
  font-size: ${props => props.size};
  color: ${props => props.color};

  & .cssanimation, .cssanimation span {
    animation-duration: 1s;
    animation-fill-mode: both;
  }

  & .cssanimation span { display: inline-block }

  & .leRotateSkateInLeft span { animation-name: leRotateSkateInLeft }
    @keyframes leRotateSkateInLeft {
      from {
          transform: scaleX(0.2) translateX(-100px);
          opacity: 0;
      }
  }

`
const Anim = styled.span`
  animation-delay: ${props => props.delay}; 
  -moz-animation-delay: ${props => props.delay}; 
  -webkit-animation-delay:${props => props.delay};
`

const AnimatedText = ({text,size,color}) => {
    const sentence = text.split('');
    return <AnimatedTextWrapper size={size} color={color}>
              <div className={`cssanimation leRotateSkateInLeft`}>
                {sentence.map((letter,i) => {
                  if(letter!=' '){
                  return <Anim key={uuidv4()} delay={`${(i+1)*100}ms`}>{letter}</Anim>
                  }
                  else{
                    return <>&nbsp;</>
                  }
                }
                )}
              </div>
            </AnimatedTextWrapper>
}

AnimatedText.defaultProps={
  text:'',
  size:"2em",
  color:"white"
}

export default AnimatedText;