import swal from 'sweetalert';

export const checkText = text => {
  const words = ['멍청이', '바보', '못생'];
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
