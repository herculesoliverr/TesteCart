import styled from 'styled-components'

export const Form = styled.div`
  .form-box-large {
    box-sizing: border-box;
    height: 45px;
    width: 100%;
    border-radius: 3px;
    background-color: #fff;
    border: 1px solid #e7e7e7;
    box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.2);
    padding: 10px;
  }

  .form-box-small {
    box-sizing: border-box;
    height: 45px;
    width: 100%;
    border-radius: 3px;
    background-color: #fff;
    border: 1px solid #e7e7e7;
    box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.2);
    padding: 10px;
  }

  & ::placeholder {
    color: #e0e7ee;
    font-size: 16px;
    letter-spacing: 2px;
    line-height: 19px;
  }
  .d-flex {
    display: flex;
    justify-content: space-between;
  }
  .ml {
    margin-left: 10px;
  }
`

export const Formgroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;

  .label-form {
    color: #ccc;
    font-size: 12px;
    font-weight: 700;
    line-height: 14px;
    margin-bottom: 5px;
  }
`
