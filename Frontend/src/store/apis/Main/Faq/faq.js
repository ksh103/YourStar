import axios from 'axios';

// FAQ 전체 조회
export async function axiosFaqList(page, size) {
  try {
    const response = await axios.get(
      `https://i6e204.p.ssafy.io/api/faq?page=${page}&size=${size}`
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

// FAQ 등록
export async function axiosFaqRegist(faqContent, faqTitle) {
  try {
    const response = await axios.post('https://i6e204.p.ssafy.io/api/faq', {
      faqContent: faqContent,
      faqTitle: faqTitle,
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

// FAQ 수정
export async function axiosFaqUpdate(faqContent, faqId, faqTitle) {
  try {
    const response = await axios.put(
      `https://i6e204.p.ssafy.io/api/faq/${faqId}`,
      {
        faqContent: faqContent,
        faqId: faqId,
        faqTitle: faqTitle,
      }
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

// FAQ 삭제
export async function axiosFaqDelete(faqId) {
  try {
    const response = await axios.delete(
      `https://i6e204.p.ssafy.io/api/faq/${faqId}`
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
