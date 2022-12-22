import React, {useEffect, useState} from "react";

import { ProgressContainer } from "./style";

const ProgressBlog: React.FC = () => {
    const [scrollValue, setScrollValue] = useState(0)
  return (
    <ProgressContainer>
      <div className="progress-line" style={{width:`${scrollValue}%`}}></div>
    </ProgressContainer>
  );
};

export default ProgressBlog;
