import React, { useEffect } from 'react';
import { Block, blockColor, Layout, Wrapper } from '../../styles/variables.js';
import Navbar from '../../components/Navbar/Navbar.jsx';
import { FAQContent, FAQContentRow, FAQHeader } from './FAQ.style.js';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { MdExpandMore } from 'react-icons/md';
import Footer from '../../components/Footer/Footer.jsx';
import { LOAD_FAQS_REQUEST } from '../../store/modules/faq';
import { useDispatch, useSelector } from 'react-redux';

export default function FAQ() {
  const dispatch = useDispatch();
  const { faqs, loadFaqsDone } = useSelector(state => state.faq);
  useEffect(() => {
    dispatch({
      type: LOAD_FAQS_REQUEST,
      data: { page: 1, size: 10 },
    });
  }, [dispatch]);
  const FAQDate = () => {
    return faqs.map((faq, i) => (
      <FAQContentRow key={i}>
        <Accordion>
          <AccordionSummary
            expandIcon={<MdExpandMore />}
            sx={{ fontSize: '1.5em', padding: '10px', paddingLeft: '25px' }}
          >
            <div>{faq.faqTitle}</div>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              borderTop: `2px solid ${blockColor}`,
              fontSize: '1.5em',
              padding: '25px',
              paddingLeft: '25px',
            }}
          >
            <div>{faq.faqContent}</div>
          </AccordionDetails>
        </Accordion>
      </FAQContentRow>
    ));
  };
  return (
    <Layout>
      <Navbar />
      <Wrapper>
        <Block>
          {loadFaqsDone && (
            <>
              <FAQHeader>자주 묻는 질문</FAQHeader>
              <FAQContent>
                <div id="faq">
                  <div id="faq2">{FAQDate()}</div>
                </div>
              </FAQContent>
            </>
          )}
        </Block>
      </Wrapper>
      <Footer />
    </Layout>
  );
}
