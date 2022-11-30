import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

const Dd = styled.div`
  position: relative;
  height: 10px;
  overflow: visible;
  display: flex;
  flex-direction: column;
  gap: 5px;
`

function Dropdown({visibility, children}) {
  const [visibilityAnimation, setVisibilityAnimation] = useState(false);
  const [repeat, setRepeat] = useState(null);
  
  useEffect(()=>{
    if(visibility) {
      clearTimeout(repeat);
      setRepeat(null);
      setVisibilityAnimation(true);
    } else {
      setRepeat(setTimeout(()=>{
        setVisibilityAnimation(false)
      },400));
    }
  },[visibility]);

  return ( 
    <Dd>
      {visibilityAnimation && children}
    </Dd>
   );
}

export default Dropdown;