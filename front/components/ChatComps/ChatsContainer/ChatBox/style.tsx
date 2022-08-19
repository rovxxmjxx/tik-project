import styled from '@emotion/styled';

export const ChatArea = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  padding-top: 0;
`;

export const Form = styled.form`
  color: rgb(29, 28, 29);
  font-size: 15px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid lightgray;
  overflow: hidden;
`;

export const MentionsTextarea = styled.textarea`
  & strong {
    background-color: skyblue;
  }

  font-family: Poppins, sans-serif;
  width: 100%;
  height: 44px;
  outline: none !important;
  line-height: 22px;
  border: none;
  padding: 9px 10px;
  resize: none;
  font-size: 15px;

  & ul {
    border: 1px solid lightgray;
    max-height: 200px;
    overflow-y: auto;
    padding: 9px 10px;
    background-color: #fff;
    border-radius: 4px;
    width: 150px;
  }
`;

export const Toolbox = styled.div`
  position: relative;
  background-color: rgb(248, 248, 248);
  height: 41px;
  display: flex;
  border-top: 1px solid rgb(221, 221, 221);
  align-items: center;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

export const SendButton = styled.button<{ disabled: boolean }>`
  position: absolute;
  right: 5px;
  top: 5px;
  font-size: 20px;
  padding: 5px 10px;
  border: none;
  background-color: transparent;
  color: ${({ disabled }) => (disabled ? 'gray' : '#000')};
  cursor: ${({ disabled }) => (disabled ? 'text' : 'pointer')};
`;

export const EachMention = styled.button<{ focus: boolean }>`
  padding: 4px 20px;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  color: rgb(28, 29, 28);
  width: 100%;

  & img {
    margin-right: 5px;
  }

  ${({ focus }) => focus && `background-color: "#1264a3; color: #fff`}
`;
