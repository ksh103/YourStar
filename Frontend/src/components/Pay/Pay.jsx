import React from 'react';
import { useSelector } from 'react-redux';
import { Block, Layout, Wrapper } from '../../styles/variables';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import { PayWrapper, PayBlock } from './Pay.style';

export default function Pay() {
  const { meeting } = useSelector(state => state.meeting);

  return (
    <Layout>
      <Navbar />
      <Wrapper>
        <Block>
          <PayWrapper>
            <PayBlock>
              <div className="desc">
                <div>미팅 : {meeting.name}</div>
                <div>일정 : {meeting.startDate}</div>
                <div>가격 : {meeting.price}원</div>
              </div>
              <div className="button">
                <Link to={`/schedule/${meeting.id}`}>결제완료</Link>
              </div>
            </PayBlock>
          </PayWrapper>
        </Block>
      </Wrapper>
      <Footer />
    </Layout>
  );
}
