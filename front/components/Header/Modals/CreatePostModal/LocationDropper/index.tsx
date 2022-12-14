import React, { useCallback } from 'react';
import styled from '@emotion/styled';
import { IoCloseOutline } from 'react-icons/io5';
import { MdAddToPhotos } from 'react-icons/md';
import Modal from '@components/Modal';
import ModalContent from '@components/Header/ModalContent';
import PrevModalContent from '@components/Header/PrevModalContent';
interface IProps {
  show: boolean;
  onCloseModal: () => void;
  register: any;
  onClickOption: any;
}

export const Base = styled.div`
  width: 100%;
  height: 200px;
  border: 1px solid #dfdfdf;
  border-radius: 4px;
  padding: 10px;
  position: relative;
  margin-top: 20px;

  > .close-button {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    border: 1px solid #dfdfdf;
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: #fff;
    cursor: pointer;
  }

  > .container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f6f8fa;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.2s;
  }
`;
const LocationDropper = ({ show, onCloseModal, register, onClickOption }: IProps) => {
  if (!show) return null;

  return (
    <PrevModalContent title={'위치 검색'} show={show} onCloseModal={onCloseModal}>
      <Base>
        <button className="close-button" onClick={onCloseModal}>
          <IoCloseOutline />
        </button>
        <div className={'container'}>
          <input type={'text'} {...register} />
          <button type={'button'} onClick={() => onClickOption('isLocationSelected')}>
            검색
          </button>
        </div>
      </Base>
    </PrevModalContent>
  );
};

export default LocationDropper;
