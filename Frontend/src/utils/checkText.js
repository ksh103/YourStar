import swal from 'sweetalert';

export const checkText = text => {
  const words = [
    '시발',
    '병신',
    '존나',
    '못생',
    'ㅅㅂ',
    'ㅄ',
    'ㅈㄴ',
    '새끼',
    'ㅅㄲ',
    '지랄',
    'ㅈㄹ',
    '시1발',
    'ㅅ1발',
    '못한다',
    '꺼져',
    'ㄲㅈ',
    '바보',
    '멍청',
  ];
  console.log(words.some(word => text.indexOf(word) !== -1));
  if (words.some(word => text.indexOf(word) !== -1)) {
    swal({
      text: '바른말 고운말을 사용합시다.',
      button: false,
      icon: 'warning',
      timer: 1500,
    });
    return false;
  } else {
    return true;
  }
};
