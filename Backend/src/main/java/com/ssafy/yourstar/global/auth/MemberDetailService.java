package com.ssafy.yourstar.global.auth;

import com.ssafy.yourstar.domain.member.db.entity.Member;
import com.ssafy.yourstar.domain.member.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;


/** 현재 액세스 토큰으로 부터 인증된 유저의 상세정보(활성화 여부, 만료, 롤 등) 관련 서비스 정의 */
@Component
public class MemberDetailService implements UserDetailsService{
	@Autowired
	MemberService memberService;
	
    @Override
    public UserDetails loadUserByUsername(String memberName) throws UsernameNotFoundException {
    		Member member = memberService.memberLoginByMemberEmail(memberName);
    		if(member != null) {
				List<String> roles = new ArrayList<>();
				if (member.getCode() == 1) {
					roles.add("ROLE_ADMIN");
					roles.add("ROLE_MANAGER");
					roles.add("ROLE_MEMBER");
				} else if (member.getCode() == 2) {
					roles.add("ROLE_MANAGER");
					roles.add("ROLE_MEMBER");
				}
				else roles.add("ROLE_MEMBER");

    			MemberDetails memberDetails = new MemberDetails(member, roles);
    			return memberDetails;
    		}
    		return null;
    }
}
