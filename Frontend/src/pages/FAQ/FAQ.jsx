import React, { useEffect } from 'react';
import { Block, blockColor, Layout, Wrapper } from '../../styles/variables.js';
import Navbar from '../../components/Navbar/Navbar.jsx';
import { FAQContent, FAQContentRow, FAQHeader } from './FAQ.style.js';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { MdExpandMore } from 'react-icons/md';
import Footer from '../../components/Footer/Footer.jsx';
import axios from 'axios';
const datas = [
  {
    id: 1,
    title: '박동준은 아이돌인가요?',
    content: '아니요. 래퍼 쌈디입니다.',
  },
  {
    id: 2,
    title: '박동준은 아이돌인가요?',
    content: '아니요. 래퍼 쌈디입니다.',
  },
  {
    id: 3,
    title: '박동준은 아이돌인가요?',
    content: '아니요. 래퍼 쌈디입니다.',
  },
  {
    id: 4,
    title: '박동준은 아이돌인가요?',
    content: '아니요. 래퍼 쌈디입니다.',
  },
  {
    id: 5,
    title: '박동준은 아이돌인가요?',
    content: '아니요. 래퍼 쌈디입니다.',
  },
  {
    id: 6,
    title: '박동준은 아이돌인가요?',
    content: '아니요. 래퍼 쌈디입니다.',
  },
  {
    id: 7,
    title: '박동준은 아이돌인가요?',
    content: '아니요. 래퍼 쌈디입니다.',
  },
];
const FAQDate = () => {
  const check = () => {
    const a = axios
      .get('http://i6e204.p.ssafy.io:8080/api/faq?page=1&size=5')
      .then(res => res.status === 200 && console.log(res));
  };
  check();

  return datas.map(faq => (
    <FAQContentRow key={faq.id}>
      <Accordion>
        <AccordionSummary
          expandIcon={<MdExpandMore />}
          sx={{ fontSize: '1.1em' }}
        >
          <div>{faq.title}</div>
        </AccordionSummary>
        <AccordionDetails sx={{ borderTop: `2px solid ${blockColor}` }}>
          <div>{faq.content}</div>
        </AccordionDetails>
      </Accordion>
    </FAQContentRow>
  ));
};
export default function FAQ() {
  return (
    <Layout>
      <Navbar />
      <Wrapper>
        <Block>
          <FAQHeader>자주 묻는 질문</FAQHeader>
          <FAQContent>
            <div id="faq">
              <div id="faq2">{FAQDate()}</div>
            </div>
          </FAQContent>
        </Block>
      </Wrapper>
      <Footer />
    </Layout>
  );
}
