import styled from 'styled-components';

const styles = {
  Background: styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(4px);
    z-index: 1000;
  `,

  Modal: styled.div`
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 25%;
    height: 20%;
  `,

  TitleContainer: styled.div`
    display: flex;
    flex-direction: column;
    padding: 8px;
    margin-bottom: 12px;
  `,
  Title: styled.div`
    font-size: 18px;
    font-weight: 600;
    color: #444444;
  `,

  SubTitle: styled.div`
    font-size: 14px;
    color: #8d8d8d;
    font-weight: 400;
  `,

  ButtonContainer: styled.div`
    display: flex;
    flex-direction: row;
  `,

  DeleteButton: styled.div`
    display: flex;
    padding: 8px 16px;
    background-color: #e02626;
    color: #ffffff;
    border-radius: 8px;
    margin: 0 4px;
    cursor: pointer;
  `,

  CancelButton: styled.div`
    display: flex;
    padding: 8px 16px;
    background-color: #8a8e99;
    color: #ffffff;
    border-radius: 8px;
    margin: 0 4px;
    cursor: pointer;
  `,
};

export default styles;
