package com.ssafy.yourstar.global.util;

import org.apache.commons.mail.HtmlEmail;

public class MemberRegisterMailUtil {

    // 초기화 된 비밀번호 이메일 전송
    public static boolean sendApproveEmail(String memberEmail) {
        final String charSet = "utf-8";
        final String hostSMTP = "smtp.naver.com";
        final String hostSMTPid = "yourstar_ssafy";
        final String hostSMTPpwd = "ssafy6th.!";

        final String fromEmail = "yourstar_ssafy@naver.com";
        final String fromName = "Your star";
        final String subject = "Your star 회원 가입 인증";
        String msg = "<div style=\"font-family: 'Apple SD Gothic Neo', 'sans-serif' !important; width: 540px; height: 600px; border-top: 4px solid #212121; margin: 100px auto; padding: 30px 0; box-sizing: border-box;\">";
        msg += "<h1 style=\"margin: 0; padding: 0 5px; font-size: 28px; font-weight: 400;\">";
        msg += "<span style=\"font-size: 15px; margin: 0 0 10px 3px;\">Your Star</span><br />";
        msg += "<span style=\"color: #212121;\">메일인증</span> 안내입니다. </h1>";
        msg += "<p style=\"font-size: 16px; line-height: 26px; margin-top: 50px; padding: 0 5px;\">";
        msg += "안녕하세요.<br />";
        msg += "Your Start에 가입해 주셔서 진심으로 감사드립니다.<br />";
        msg += "아래 <b style=\"color: #212121;\">'메일 인증'</b> 버튼을 클릭하여 회원가입을 완료해 주세요.<br />\n" + "감사합니다.\n" + "</p>";
        msg += "<a style=\"color: #FFF; text-decoration: none; text-align: center;\" href=\"https://i6e204.p.ssafy.io/api/members/register/approve/" + memberEmail +
                "\" target=\"_blank\"><p style=\"display: inline-block; width: 210px; height: 45px; margin: 30px 5px 40px; background: #212121; line-height: 45px; vertical-align: middle; font-size: 16px;\">메일 인증</p></a>\n" + "</div>";

        try {
            HtmlEmail email = new HtmlEmail();
            email.setDebug(true);
            email.setCharset(charSet);
            email.setSSLOnConnect(true);
            email.setHostName(hostSMTP);
            email.setSmtpPort(587);

            email.setAuthentication(hostSMTPid, hostSMTPpwd);
            email.setStartTLSEnabled(true);
            email.addTo(memberEmail, charSet);
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
