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
        String msg = "<div style=\"font-family: 'Apple SD Gothic Neo', 'sans-serif' !important; width: 540px; height: 600px; border-top: 4px solid #212121; margin: 100px auto; padding: 30px 0; box-sizing: border-box;\">";
        msg += "<h1 style=\"margin: 0; padding: 0 5px; font-size: 28px; font-weight: 400;\">";
        msg += "<span style=\"font-size: 15px; margin: 0 0 10px 3px;\">Your Star</span><br />";
        msg += "안녕하세요. <span style=\"color: #212121;\">"+ memberPasswordPostReq.getMemberName() +"</span>님. </h1> ";
        msg += "<p style=\"font-size: 16px; line-height: 26px; margin-top: 50px; padding: 0 5px;\">";
        msg += "아래 <b style=\"color: #212121;\">'초기화 된 비밀번호'</b> 를 전송해드립니다.<br />\n" + "비밀번호를 변경하여 사용하세요.<br/>";
        msg += "임시 비밀번호 : <span style='color: blue;'>" + newMemberPassword + "</span></p></a>\n" + "</div>";

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
