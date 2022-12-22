import React, {useEffect, useState} from "react";

import { ProgressContainer } from "./style";

const ProgressBlog: React.FC = () => {
    const [scrollValue, setScrollValue] = useState(0)
    const showProgress = () => {
        const scrollTop = document.documentElement.scrollTop
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
        const value = (scrollTop - height) * 100
        setScrollValue(value)
    }
    useEffect(() => {
        window.addEventListener('scroll', showProgress)
        return () => window.removeEventListener('scroll', showProgress)
    })
  return (
    <ProgressContainer>
      <div className="progress-line" style={{width:`${scrollValue}%`}}></div>
    </ProgressContainer>
  );
};

export default ProgressBlog;
