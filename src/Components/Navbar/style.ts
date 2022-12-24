import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position:fixed;
  /* height: 80px; */
  color: var(--black-300);
  opacity: 0.9;
  z-index: 3;
  display:flex;
  align-items:center;
  /* justify-content:center */
  padding: 26px;
  @media (max-width: 728px) {
    font-size: 15px
    
  }
  
`;
