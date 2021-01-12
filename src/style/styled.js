import styled from 'styled-components';

const breakPoints = {
  tablet: 768,
};

const tablet = `@media (min-width: ${breakPoints.tablet}px)`;

const darkFontColor = '#b9b9b9';
const lightFontColor = '#eee';
const darkBackgroundColor = '#00282a';
const lightBackgroundColor = '#03595e';
const transparentBackgroundColor = 'rgba(43, 43, 43, 0.4)';
const shadowColor = 'rgba(20,20,20,0.68)';

const flexCenter = `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center
  `;

export const Main = styled.main`
  font-family: "Courier New", Courier, monospace;
  background: ${darkBackgroundColor};
  height: 100vh;
  width: 100%;
  ${flexCenter};
`;

export const Central = styled.div`
  background-color: ${lightBackgroundColor};
  ${flexCenter};
  color: ${lightFontColor};
  width: 100%;
  height: 100vh;
  border-radius: 8px;
  -webkit-box-shadow: 0px 20px 20px 5px ${shadowColor};
  box-shadow: 0px 20px 20px 5px ${shadowColor};
  ${tablet} {
    width: 80%;
    height: 82vh;
  };
`;

export const Nav = styled.nav`
  font-family: "Courier New", Courier, monospace;
  color: ${darkFontColor};
  width: 100%;
  position: fixed;
  ${flexCenter};
  background-color: ${darkBackgroundColor};
  ${tablet} {
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 20px;
    background-color: transparent;
  };
  & p {
    text-align: center;
    width: 100%;
    border-bottom: 1px solid grey;
    padding: 15px;
    ${tablet} {
      width: auto;
      text-align: initial;
      border-bottom: none;
      padding: 0;
    };
  };
`;

export const Photo = styled.div`
  width: 250px;
  height: 250px;
  background-color: darkgray;
  `;

export const CenteredBox = styled.div`
  ${flexCenter};
`;

export const InputBox = styled.div`
  padding: 20px 40px;
  margin: 10px;
  display: flex;
  justify-content: center;
  background-color: ${transparentBackgroundColor};
  border-radius: 5px;
  background-size: contain;
  -webkit-box-shadow: 0px 2px 6px 1px ${shadowColor};
  box-shadow: 0px 2px 6px 1px ${shadowColor};
`;

export const DetectButton = styled.button`
  color: ${lightFontColor};
  padding: 5px 10px;
  background-color: ${darkBackgroundColor};
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const PBigger = styled.p`
  font-size: 1.5em;
  margin: 5px;
`;

export const PSmaller = styled.p`
  font-size: 0.8em;
  margin: 5px;
  color: ${darkFontColor};
`;
