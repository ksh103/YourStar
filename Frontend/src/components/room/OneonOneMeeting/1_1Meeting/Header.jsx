import React, { useState } from 'react';
import Timer from '../../Timer/Timer';
import styled from 'styled-components';
import { IoIosAlarm, IoMdCreate, IoIosAperture } from 'react-icons/io';
import { pointColor } from '../../../../styles/variables';

const HeaderBox = styled.div`
  /* border: solid red; */
  margin-bottom: 3vh;
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UserBox = styled.div`
  font-size: 3vw;
  width: 12vw;
`;

const StarBox = styled.div`
  font-size: 3vw;
  width: 12vw;
`;

const SignIcon = styled.div`
  position: absolute;
  left: 67.7vw;
  font-size: 2vw;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: 0.5s;
    color: ${pointColor};
  }
`;
const CaptureIcon = styled.div`
  position: absolute;
  left: 1350px;
  font-size: 2vw;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: 0.5s;
    color: ${pointColor};
  }
`;

export default function Header() {
  const [user, setUser] = useState('스타');
  return (
    <>
      <div>
        {user === '사용자' && (
          <HeaderBox>
            <UserBox>
              <div>
                <IoIosAlarm
                  style={{
                    float: 'left',
                    marginRight: '20px',
                    marginTop: '12px',
                  }}
                />
                <Timer style={{ float: 'left' }} />
              </div>
            </UserBox>
          </HeaderBox>
        )}
        {user === '스타' && (
          <HeaderBox>
            <StarBox>
              <div>
                <IoIosAlarm
                  style={{
                    float: 'left',
                    marginRight: '20px',
                    marginTop: '12px',
                  }}
                />
                <Timer style={{ float: 'left' }} />
              </div>
            </StarBox>
            <SignIcon>
              <IoMdCreate />
            </SignIcon>
            <CaptureIcon>
              <IoIosAperture />
            </CaptureIcon>
          </HeaderBox>
        )}
      </div>
    </>
  );
}
