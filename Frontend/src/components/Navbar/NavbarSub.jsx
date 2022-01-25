import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarSubBlock, SubMenu } from './Navbar.style';

export default function NavbarSub() {
  const role = 0; // 0: 비로그인 ,1:사용자, 2: 스타 ,3:관리자
  return (
    <div>
      <NavbarSubBlock>
        <SubMenu>
          <ul>
            {role === 2 && (
              <li>
                <Link to="/apply">Contact</Link>
              </li>
            )}
            {role === 3 && (
              <li>
                <Link to="/admin">Management</Link>
              </li>
            )}
            <li>
              <Link to="/schedule">Meeting</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            {role === 0 ? (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/signup">Signup</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/mypage">Mypage</Link>
                </li>
                <li>Logout</li>
              </>
            )}
            <li></li>
          </ul>
        </SubMenu>
      </NavbarSubBlock>
      {/* <NavbarWrapper>
        
        
          <RightMenu>
            <ul>
              {role === 0 ? (
                <li>
                  <Link to="login">Login</Link>
                </li>
              ) : (
                <>
                  <li>
                    <Link to="mypage">🧞 ♂️ 지수민 님</Link>
                  </li>
                  <li>
                    <div>Logout</div>
                  </li>
                </>
              )}

              <li>
                <Link to="faq">FAQ</Link>
              </li>
              <li>
                <Link to="schedule">Meeting</Link>
              </li>
              {role === 2 && (
                <li>
                  <Link to="Apply">contact</Link>
                </li>
              )}
              {role === 3 && (
                <li>
                  <Link to="Admin">Management</Link>
                </li>
              )}
            </ul>
          </RightMenu>
        </GridBlock>
      </NavbarWrapper> */}
    </div>
  );
}
