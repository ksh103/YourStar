import React from 'react';
import { FooterBlock } from './Footer.style';
import { MdEmail } from 'react-icons/md';
export default function Footer() {
  return (
    <FooterBlock>
      <div>COPYRIGHT © 방파주는 사람들. All rights reserved.</div>
      <div className="email">
        <MdEmail /> your_star@naver.com
      </div>
    </FooterBlock>
  );
}
