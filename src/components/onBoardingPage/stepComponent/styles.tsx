import styled from "styled-components";

interface RoundNumberProps {
  $isActive: boolean;
  $isCompleted: boolean;
}

interface LineProps {
  $isCompleted: boolean;
}

const styles = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  StepContainer: styled.div`
    width: 100vw;
    padding-top: 198px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  `,
  RoundNumber: styled.div<RoundNumberProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    font-size: 12px;
    color: ${(props) =>
      props.$isActive ? "white" : props.$isCompleted ? "white" : "#A6A7AC"};
    background-color: ${(props) =>
      props.$isActive ? "#946233" : props.$isCompleted ? "#A7A7A7" : "white"};
    border: ${(props) =>
      props.$isActive
        ? "1px solid white"
        : props.$isCompleted
        ? "0"
        : "1px dashed #A6A7AC"};
    border-radius: 50%;
  `,
  Line: styled.div<LineProps>`
    width: 72px;
    height: 1px;
    background-color: transparent;
    border-top: ${(props) =>
      !props.$isCompleted ? "1px dashed #a6a7ac" : "1px dashed #946233"};
  `,
  PrevButton: styled.img`
    position: fixed;
    bottom: 400px;
    left: 200px;
  `,
  NextButton: styled.img`
    position: fixed;
    bottom: 400px;
    right: 200px;
  `,
};

export default styles;
