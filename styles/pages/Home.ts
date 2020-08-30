import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.background};
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    text: ${(props) => props.theme.text};
    font-size: 54px;
    color: ${(props) => props.theme.primary};
    margin-top: 40px;
  }

  h4 {
    font-size: 24px;
    margin-top: 24px;
    line-height: 32px;
  }
`;

export default Container;
