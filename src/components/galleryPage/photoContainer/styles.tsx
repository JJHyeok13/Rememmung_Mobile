import styled from "styled-components";

const styles = {
  Container: styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 29px;
    grid-row-gap: 32px;
    margin-bottom: 48px;
    place-items: center;
  `,
  PhotoContainer: styled.div`
    position: relative;
    width: 180px;
    height: 180px;
  `,
  Photo: styled.img`
    width: 180px;
    height: 180px;
    border-radius: 12px;
  `,
  HoveredData: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.47);
    backdrop-filter: blur(2px);

    padding: 17px 18px;
    box-sizing: border-box;
    border-radius: 12px;
  `,
  Title: styled.div`
    font-size: 16px;
    font-weight: 600;
    color: #ffffff;
  `,
  Content: styled.div`
    font-size: 14px;
    font-weight: 500;
    color: #c5c5c5;
  `,
};

export default styles;
