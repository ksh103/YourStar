package com.ssafy.yourstar.domain.meeting.response;

import com.ssafy.yourstar.domain.meeting.db.entity.Applicant;
import com.ssafy.yourstar.global.model.response.BaseResponseBody;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel(value = "ApplicantDetailGetRes", description = "팬미팅 신청자 상세정보 보기 응답")
public class ApplicantDetailGetRes extends BaseResponseBody {
    @ApiModelProperty(value = "팬미팅 신청자 정보")
    Applicant applicant;

    public static ApplicantDetailGetRes of (Integer statusCode, String message, Applicant applicant) {
        ApplicantDetailGetRes res = new ApplicantDetailGetRes();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setApplicant(applicant);

        return res;
    }
}
