package com.ssafy.yourstar.global.util;

import com.ssafy.yourstar.domain.admin.request.NewAccountRes;
import org.apache.commons.mail.HtmlEmail;

import java.util.List;

public class ManagerRegisterMailUtil {

    public static String managerAccount (List<NewAccountRes> list) {
        StringBuilder sb = new StringBuilder();

        for (NewAccountRes item : list) {
            sb.append("아이디 : ").append(item.getEmail()).append(", 비밀번호 : ")
                    .append(item.getPassword()).append("<br />");
        }
        return sb.toString();
    }

    // 관계자 계정 생성 후 이메일 전송
    public static boolean sendManagerAccountEmail(String managerEmail, List<NewAccountRes> managerAccountList) {

        final String charSet = "utf-8";
        final String hostSMTP = "smtp.naver.com";
        final String hostSMTPid = "";
        final String hostSMTPpwd = "";

        final String fromEmail = "";
        final String fromName = "Your star";
        final String subject = "Your star 관계자 계정";
        String msg = "<div style=\"font-family: 'Apple SD Gothic Neo', 'sans-serif' !important; width: 540px; height: 600px; border-top: 4px solid #212121; margin: 100px auto; padding: 30px 0; box-sizing: border-box;\">";
        msg += "<h1 style=\"margin: 0; padding: 0 5px; font-size: 28px; font-weight: 400;\">";
        msg += "<span style=\"font-size: 15px; margin: 0 0 10px 3px;\">Your Star</span><br />";
        msg += "<span style=\"color: #212121;\">관계자 계정 정보</span> 안내입니다. </h1>";
        msg += "<p style=\"font-size: 16px; line-height: 26px; margin-top: 50px; padding: 0 5px;\">";
        msg += "안녕하세요.<br />";
        msg += "Your Star 팬미팅 시, 다음과 같은 계정을 사용해주세요!<br /><br />"
                + managerAccount(managerAccountList) +
                "<br />감사합니다.\n" + "</p> </div>";

        try {
            HtmlEmail email = new HtmlEmail();
            email.setDebug(true);
            email.setCharset(charSet);
            email.setSSLOnConnect(true);
            email.setHostName(hostSMTP);
            email.setSmtpPort(587);

            email.setAuthentication(hostSMTPid, hostSMTPpwd);
            email.setStartTLSEnabled(true);
            email.addTo(managerEmail, charSet);
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
