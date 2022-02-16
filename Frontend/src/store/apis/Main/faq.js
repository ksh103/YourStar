import axios from 'axios';
import { BASE_URL } from '../../../utils/contants';

// FAQ 전체 조회
export async function FaqListAPI({ page, size }) {
  const result = await axios.get(`${BASE_URL}faq?page=1&size=10`);
  return result.data.content;
}

// FAQ 등록
export async function FaqRegistAPI(faqContent, faqTitle) {
  const result = await axios.post(`${BASE_URL}faq`, {
    faqContent: faqContent,
    faqTitle: faqTitle,
  });
  return result;
}

// FAQ 수정
export async function FaqUpdateAPI(faqContent, faqId, faqTitle) {
  const result = await axios.put(`${BASE_URL}faq/${faqId}`, {
    faqContent: faqContent,
    faqId: faqId,
    faqTitle: faqTitle,
  });
  return result;
}

// FAQ 삭제
export async function FaqDeleteAPI(faqId) {
  const result = await axios.delete(`${BASE_URL}faq/${faqId}`);
  return result;
}
