package com.ssafy.yourstar.global.util;

import com.ssafy.yourstar.domain.member.request.MemberPasswordPostReq;
import org.apache.commons.mail.HtmlEmail;

import java.util.Random;

public class MemberPasswordMailUtil {

    // 비밀번호 랜덤 생성
    public static String getRandomPassword(int len) {

        char[] charSet = new char[] {
                '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
                'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
                'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
                '@', '#', '$', '%', '^', '&', '!', '*'
        };

        StringBuilder sb = new StringBuilder(len);
        Random random = new Random();
        for (int i = 0; i < len; i++) {
            sb.append(charSet[random.nextInt(charSet.length)]);
        }
        return sb.toString();
    }

    // 초기화 된 비밀번호 이메일 전송
    public static boolean sendInitPwEmail(MemberPasswordPostReq memberPasswordPostReq, String newMemberPassword) {

        final String charSet = "utf-8";
        final String hostSMTP = "smtp.naver.com";
        final String hostSMTPid = "yourstar_ssafy";
        final String hostSMTPpwd = "ssafy6th.!";

        final String fromEmail = "yourstar_ssafy@naver.com";
        final String fromName = "Your star";
        final String subject = "Your star 계정 패스워드 초기화 정보입니다.";
        String msg = "<div style='border: 1px solid black; padding: 10px; font-family: verdana;'>";
        msg += "<h2>안녕하세요. <span style='color: blue;'>" + memberPasswordPostReq.getMemberName() + "</span>님.</h2>";
        msg += "<p>초기화된 비밀번호를 전송해 드립니다. 비밀번호를 변경하여 사용하세요.</p>";
        msg += "<p>임시 비밀번호 : <span style='color: blue;'>" + newMemberPassword + "</span></p></div>";

        try {
            HtmlEmail email = new HtmlEmail();
            email.setDebug(true);
            email.setCharset(charSet);
            email.setSSLOnConnect(true);
            email.setHostName(hostSMTP);
            email.setSmtpPort(587);

            email.setAuthentication(hostSMTPid, hostSMTPpwd);
            email.setStartTLSEnabled(true);
            email.addTo(memberPasswordPostReq.getMemberEmail(), memberPasswordPostReq.getMemberName(), charSet);
            email.setFrom(fromEmail, fromName, charSet);
            email.setSubject(subject);
            email.setHtmlMsg(msg);
            email.send();
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}
