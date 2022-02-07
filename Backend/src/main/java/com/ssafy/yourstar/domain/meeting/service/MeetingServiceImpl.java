package com.ssafy.yourstar.domain.meeting.service;

import com.ssafy.yourstar.domain.meeting.db.entity.Applicant;
import com.ssafy.yourstar.domain.meeting.db.entity.ApplicantID;
import com.ssafy.yourstar.domain.meeting.db.entity.Meeting;
import com.ssafy.yourstar.domain.meeting.db.entity.MeetingImgPath;
import com.ssafy.yourstar.domain.meeting.db.repository.ApplicantRepository;
import com.ssafy.yourstar.domain.meeting.db.repository.MeetingImgPathRepository;
import com.ssafy.yourstar.domain.meeting.db.repository.MeetingRepository;
import com.ssafy.yourstar.domain.meeting.db.repository.MeetingRepositorySpp;
import com.ssafy.yourstar.domain.meeting.request.MeetingApplyByStarPostReq;
import com.ssafy.yourstar.domain.meeting.request.MeetingApplyByUserPostReq;
import com.ssafy.yourstar.domain.member.db.entity.Member;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import javax.swing.filechooser.FileSystemView;
import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.UUID;

@Slf4j
@Service
public class MeetingServiceImpl implements MeetingService {
    @Autowired
    MeetingRepository meetingRepository;

    @Autowired
    MeetingImgPathRepository meetingImgPathRepository;

    @Autowired
    ApplicantRepository applicantRepository;

    @Autowired
    MeetingRepositorySpp meetingRepositorySpp;

    @Value("${app.fileupload.uploadDir}")
    private String uploadFolder;

    @Value("${app.fileupload.uploadPath}")
    private String uploadPath;

    private static final int SUCCESS = 1;
    private static final int FAIL = -1;

    @Override
    public int meetingApplyByStar(MeetingApplyByStarPostReq meetingApplyByStarPostReq, MultipartHttpServletRequest request) throws IOException {
        Meeting meeting = new Meeting();

        meeting.setManagerCode(meetingApplyByStarPostReq.getManagerCode());
        meeting.setMeetingName(meetingApplyByStarPostReq.getMeetingName());
        meeting.setMeetingOpenDate(meetingApplyByStarPostReq.getMeetingOpenDate());
        meeting.setMeetingStartDate(meetingApplyByStarPostReq.getMeetingStartDate());
        meeting.setMeetingEndDate(meetingApplyByStarPostReq.getMeetingEndDate());
        meeting.setMeetingCnt(meetingApplyByStarPostReq.getMeetingCnt());
        meeting.setMeetingPrice(meetingApplyByStarPostReq.getMeetingPrice());
        meeting.setMeetingDescription(meetingApplyByStarPostReq.getMeetingDescription());
        meeting.setApprove(false); // 스타가 신청시에는 관리자 승인 X 상태로 저장

        meetingRepository.save(meeting);

        List<MultipartFile> fileList = request.getFiles("file");
        String rootPath = FileSystemView.getFileSystemView().getHomeDirectory().toString();
        File uploadDir = new File(uploadPath + File.separator + uploadFolder);
        log.warn("FilePath : " + uploadDir.getPath());

        // upload 폴더 존재하지 않으면 생성
        if (!uploadDir.exists()) uploadDir.mkdir();

        for (MultipartFile part : fileList) {

            int meetingId = meeting.getMeetingId();

            String fileName = part.getOriginalFilename();

            // 보안을 위해 이미지 파일명 난수로 변환
            UUID uuid = UUID.randomUUID();

            // 파일 확장자 추출
            String extension = FilenameUtils.getExtension(fileName);

            // 난수로 지정한 파일명 + 확장자
            String savingFileName = uuid + "." + extension;

            File destFile = new File(uploadPath + File.separator, uploadFolder + File.separator + savingFileName);
            log.warn("destFile : " + destFile.getPath());

            // 파일 저장
            part.transferTo(destFile);

            // 파일 정보 DB에 저장
            MeetingImgPath meetingImgPath = new MeetingImgPath();
            meetingImgPath.setMeetingId(meeting);
            meetingImgPath.setFileName(fileName);
            meetingImgPath.setFileSize(part.getSize());
            meetingImgPath.setFileContentType(part.getContentType());

            String meetingFileUrl = "/" + uploadFolder + "/" + savingFileName;
            meetingImgPath.setFileUrl(meetingFileUrl);

            meetingImgPathRepository.save(meetingImgPath);

            return SUCCESS;
        }
        return FAIL;
    }

    @Override
    public int meetingModifyByStar(Meeting meeting, MultipartHttpServletRequest request) throws IOException {
        // 해당 팬미팅이 존재하면 수정
        if (meetingRepository.findById(meeting.getMeetingId()).isPresent()) {

            int meetingId = meetingRepository.findById(meeting.getMeetingId()).get().getMeetingId();

            List<MultipartFile> fileList = request.getFiles("file");

            // 파일 경로 찾기
            File uploadDir = new File(uploadPath + File.separator + uploadFolder);
            if(!uploadDir.exists()) uploadDir.mkdir();

            // 물리 파일 삭제 (다중 파일 첨부 고려)
            List<String> fileUrlList = meetingImgPathRepository.meetingImgFileUrl(meetingId);

            for (String fileUrl : fileUrlList) {
                File file = new File(uploadPath + File.separator, fileUrl);
                if(file.exists()) {
                    file.delete();
                }
            }

            // 다중 파일 업로드를 위해 List로 FileId를 받음
            List<Integer> fileIdList = meetingImgPathRepository.findFileIdBymeetingId(meetingId);

            for (int fileId : fileIdList) {
                // 기존 이미지 첨부 파일 DB 삭제
                meetingImgPathRepository.deleteById(fileId);
            }

            for (MultipartFile part : fileList) {

                String fileName = part.getOriginalFilename();

                // 보안을 위해 이미지 파일명 난수로 변환
                UUID uuid = UUID.randomUUID();

                // 파일 확장자 추출
                String extension = FilenameUtils.getExtension(fileName);

                // 난수로 지정한 파일명 + 확장자
                String savingFileName = uuid + "." + extension;

                File destFile = new File(uploadPath + File.separator, uploadFolder + File.separator + savingFileName);

                // 파일 저장
                part.transferTo(destFile);

                // 파일 정보 DB에 저장
                MeetingImgPath meetingImgPath = new MeetingImgPath();
                meetingImgPath.setMeetingId(meeting);
                meetingImgPath.setFileName(fileName);
                meetingImgPath.setFileSize(part.getSize());
                meetingImgPath.setFileContentType(part.getContentType());

                String meetingFileUrl = "/" + uploadFolder + "/" + savingFileName;
                meetingImgPath.setFileUrl(meetingFileUrl);

                meetingImgPathRepository.save(meetingImgPath);
                meetingRepository.save(meeting);

                return SUCCESS;
            }
        }
        return FAIL;
    }

    @Override
    public int meetingRemoveByStar(int meetingId) {
        // 해당 팬미팅이 존재하면 삭제
        if (meetingRepository.findById(meetingId).isPresent()) {
            int id = meetingRepository.findById(meetingId).get().getMeetingId();

            List<String> fileUrlList = meetingImgPathRepository.meetingImgFileUrl(id);

            for(String fileUrl : fileUrlList) {
                File file = new File(uploadPath + File.separator, fileUrl);
                if(file.exists()) {
                    file.delete();
                }
            }
            meetingRepository.deleteById(meetingId); // 팬미팅 삭제

            return SUCCESS;
        }else return FAIL;
    }

    @Override
    public Page<Meeting> meetingList(Pageable pageable) {return meetingRepository.findAll(pageable);}

    @Override
    public Meeting meetingDetail(int meetingId) {
        if (meetingRepository.findById(meetingId).isPresent()) {
            return meetingRepository.findById(meetingId).get();
        }
        return null;
    }

    @Override
    public Page<Meeting> meetingPendingList(Pageable pageable) {
        return meetingRepository.findAllByIsApproveFalse(pageable);
    }

    @Override
    public Page<Meeting> meetingApproveList(Pageable pageable) {
        return meetingRepository.findAllByIsApproveTrue(pageable);
    }

    @Override
    public Applicant meetingApplyByUser(MeetingApplyByUserPostReq meetingApplyByUserPostReq) {
        Applicant applicant = new Applicant();

        applicant.setMeetingId(meetingApplyByUserPostReq.getMeetingId());
        applicant.setMemberId(meetingApplyByUserPostReq.getMemberId());
        applicant.setApplicantWarnCount(0); // 신청 했을 때 경고 횟수는 0이다.

        return applicantRepository.save(applicant);
    }

    @Override
    public boolean meetingRemoveByUser(int memberId, int meetingId) {
        // 복합키이기 때문에 ID에 내용을 등록 후 사용
        ApplicantID applicantID = new ApplicantID();
        applicantID.setMemberId(memberId);
        applicantID.setMeetingId(meetingId);

        // 해당 팬미팅이 존재하는지 조회 후 있을 때 삭제
        if (applicantRepository.findById(applicantID).isPresent()) {
            applicantRepository.deleteById(applicantID);

            return true;
        }
        return false;
    }

    @Override
    public Page<Meeting> meetingApplyListByUser(int memberId, Pageable pageable) {
        // queryDSL을 사용한 코드
        return meetingRepositorySpp.findAllApplyMeetingByMemberId(memberId, pageable);
//        return applicantRepository.findAllByMemberId(memberId, pageable);
    }

    @Override
    public Page<Member> meetingApplyList(int meetingId, Pageable pageable) {
        return meetingRepositorySpp.findAllApplyMeetingListByMeetingId(meetingId, pageable);
    }

    @Override
    public Applicant applicantDetail(int memberId, int meetingId) {
        ApplicantID applicantID = new ApplicantID();
        applicantID.setMemberId(memberId);
        applicantID.setMeetingId(meetingId);

        // 값이 있다면 리턴 아니면 null
        if (applicantRepository.findById(applicantID).isPresent()) {
            return applicantRepository.findById(applicantID).get();
        } else {
            return null;
        }
    }

    @Override
    public boolean meetingGiveWarnToUser(int memberId, int meetingId) {
        ApplicantID applicantID = new ApplicantID();
        applicantID.setMemberId(memberId);
        applicantID.setMeetingId(meetingId);

        // 값이 있다면 경고 업데이트 아니면 false
        if (applicantRepository.findById(applicantID).isPresent()) {
            Applicant applicant = applicantRepository.findById(applicantID).get();
            applicant.setApplicantWarnCount(applicant.getApplicantWarnCount() + 1); // 현재 경고 횟수에서 +1
            applicantRepository.save(applicant); // 값 업데이트

            return true;
        } else {
            return false;
        }
    }
}
