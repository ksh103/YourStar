import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Block, Layout, Wrapper } from '../../styles/variables';
import { MypageContent, MypageHeader, MypageWrapper } from './Mypage.style';
import MypageProfile from '../../components/Mypage/MypageProfile';
import MypageMenu from '../../components/Mypage/MypageMenu';
import MypageCard from '../../components/Mypage/MypageCard';
import Grid from '@mui/material/Grid';
import { MY_PAGE_REQUEST } from '../../store/modules/mypage';
import { useDispatch, useSelector } from 'react-redux';
const data = [
  {
    id: 1,
    name: '김다미 팬미팅1',
  },
  {
    id: 2,
    name: '김다미 팬미팅1',
  },
  {
    id: 3,
    name: '김다미 팬미팅1',
  },
  {
    id: 4,
    name: '김다미 팬미팅1',
  },
];
export default function Mypage() {
  const { menu, me } = useSelector(state => state.mypage);

  const content = () => {
    if (me.code === 2) {
      // 스타(오픈한 팬 미팅)
      return data.map(item => <MypageCard data={item} key={item.id} />);
    } else if (menu === 1) {
      // 팬미팅 신청내역
      return data.map(item => <MypageCard data={item} key={item.id} />);
    } else if (menu === 2) {
      // 추억보관함
      return <div>추억보관함</div>;
    }
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: MY_PAGE_REQUEST,
    });
  }, [dispatch]);

  return (
    <Layout>
      <Navbar />
      <Wrapper>
        <Block>
          <MypageWrapper>
            <MypageHeader>
              <MypageProfile />
            </MypageHeader>
            <MypageContent>
              <MypageMenu />
              <div className="poster">
                <Grid container>{content()}</Grid>
              </div>
            </MypageContent>
          </MypageWrapper>
        </Block>
      </Wrapper>
      <Footer />
    </Layout>
  );
}
