package com.ssafy.yourstar.domain.meeting.service;

import com.ssafy.yourstar.domain.meeting.db.entity.Meeting;
import com.ssafy.yourstar.domain.meeting.db.entity.MeetingRecordImgPath;
import com.ssafy.yourstar.domain.meeting.db.repository.MeetingRecordImgPathRepository;
import com.ssafy.yourstar.domain.meeting.db.repository.MeetingRecordVideoPathRepository;
import com.ssafy.yourstar.domain.meeting.db.repository.MeetingRepository;
import com.ssafy.yourstar.domain.meeting.db.repository.MeetingRepositorySpp;
import com.ssafy.yourstar.domain.meeting.request.MeetingRecordImgPathPostReq;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Base64;
import java.util.List;

@Slf4j
@Service
public class MeetingRecordServiceImpl implements MeetingRecordService {

    @Autowired
    MeetingRepository meetingRepository;

    @Autowired
    MeetingRecordImgPathRepository meetingRecordImgPathRepository;

    @Autowired
    MeetingRecordVideoPathRepository meetingRecordVideoPathRepository;

    @Autowired
    MeetingRepositorySpp meetingRepositorySpp;

    @Value("${app.fileupload.uploadDir}")
    private String uploadFolder;

    @Value("${app.fileupload.uploadPath}")
    private String uploadPath;

    private static final int SUCCESS = 1;
    private static final int FAIL = -1;

    @Override
    public Page<Meeting> meetingRecordList(int memberId, Pageable pageable) {
        return meetingRepositorySpp.findMeetingRecordListByMemberId(memberId, pageable);
    }

    @Override
    public String getSignImgPath(int fileId) {
        return meetingRecordImgPathRepository.findById(fileId).get().getFileUrl();
    }

    @Override
    public int meetingRecordImgSave(MeetingRecordImgPathPostReq meetingRecordImgPathPostReq) throws IOException {
        MeetingRecordImgPath meetingRecordImgPath = new MeetingRecordImgPath();

        if(meetingRepository.findById(meetingRecordImgPathPostReq.getMeetingId()).isPresent()){
            String fileBase64 = meetingRecordImgPathPostReq.getFileUrl();
            String fileName = meetingRecordImgPathPostReq.getMeetingId() + "_" + meetingRecordImgPathPostReq.getMemberId() + "_.jpg";
            File uploadDir = new File(uploadPath + File.separator + uploadFolder);
            if(!uploadDir.exists()) uploadDir.mkdir();

            File file = new File(uploadPath + File.separator + uploadFolder + File.separator + fileName);


            byte[] decodedBytes = Base64.getDecoder().decode(fileBase64.split(",")[1]);

            FileOutputStream fileOutputStream = new FileOutputStream(file);
            fileOutputStream.write(decodedBytes);
            fileOutputStream.close();

            meetingRecordImgPath.setMeetingId(meetingRecordImgPathPostReq.getMeetingId());
            meetingRecordImgPath.setMemberId(meetingRecordImgPathPostReq.getMemberId());
            meetingRecordImgPath.setFileUrl(uploadPath + File.separator + uploadFolder + File.separator + fileName);
            meetingRecordImgPath.setFileName(fileName);
            meetingRecordImgPathRepository.save(meetingRecordImgPath);

            return SUCCESS;
        }
        return FAIL;
    }

    @Override
    public List<MeetingRecordImgPath> meetingRecordImgDetail(int meetingId, int memberId) {

        if(!meetingRecordImgPathRepository.findAllByMeetingIdAndMemberId(meetingId, memberId).isEmpty()){
            return meetingRecordImgPathRepository.findAllByMeetingIdAndMemberId(meetingId, memberId);
        }else return null;
    }

    @Override
    public String meetingRecordVideoFileUrl(int meetingId, int memberId) {
        if(!meetingRecordVideoPathRepository.findFileUrlByMeetingIdAndMemberId(meetingId, memberId).isEmpty()) {
            return meetingRecordVideoPathRepository.findFileUrlByMeetingIdAndMemberId(meetingId, memberId);
        }else return null;
    }

    @Override
    public int meetingRecordImgRemove(int fileId) {
        if(meetingRecordImgPathRepository.findById(fileId).isPresent()) {

            List<String> recordImgFileUrl = meetingRecordImgPathRepository.meetingRecordImgFileUrl(fileId);

            // 물리 파일 삭제
            for(String fileUrl : recordImgFileUrl) {
                File file = new File(uploadPath + File.separator, fileUrl);
                if(file.exists()) {
                    file.delete();
                }
            }
            meetingRecordImgPathRepository.deleteById(fileId); // 팬미팅 삭제

            return SUCCESS;
        }
        return FAIL;
    }
}
