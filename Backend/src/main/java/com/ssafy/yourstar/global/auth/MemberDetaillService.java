package com.ssafy.yourstar.global.auth;

import com.ssafy.yourstar.member.db.entity.Member;
import com.ssafy.yourstar.member.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;


/** 현재 액세스 토큰으로 부터 인증된 유저의 상세정보(활성화 여부, 만료, 롤 등) 관련 서비스 정의 */
@Component
public class MemberDetaillService implements UserDetailsService{
	@Autowired
	MemberService memberService;
	
    @Override
    public UserDetails loadUserByUsername(String memberName) throws UsernameNotFoundException {
    		Member member = memberService.loginMemberByMemberEmail(memberName);
    		if(member != null) {
    			MemberDetails memberDetails = new MemberDetails(member);
    			return memberDetails;
    		}
    		return null;
    }
}
