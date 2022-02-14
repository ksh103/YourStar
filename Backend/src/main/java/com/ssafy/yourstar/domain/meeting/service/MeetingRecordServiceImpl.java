package com.ssafy.yourstar.domain.meeting.service;

import com.ssafy.yourstar.domain.meeting.db.entity.Meeting;
import com.ssafy.yourstar.domain.meeting.db.entity.MeetingRecordImgPath;
import com.ssafy.yourstar.domain.meeting.db.repository.MeetingRecordImgPathRepository;
import com.ssafy.yourstar.domain.meeting.db.repository.MeetingRepository;
import com.ssafy.yourstar.domain.meeting.db.repository.MeetingRepositorySpp;
import com.ssafy.yourstar.domain.meeting.request.MeetingRecordImgPathPostReq;
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

@Service
public class MeetingRecordServiceImpl implements MeetingRecordService {

    @Autowired
    MeetingRepository meetingRepository;

    @Autowired
    MeetingRecordImgPathRepository meetingRecordImgPathRepository;

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
    public int meetingRecordImgSave(MeetingRecordImgPathPostReq meetingRecordImgPathPostReq) throws IOException {
        MeetingRecordImgPath meetingRecordImgPath = new MeetingRecordImgPath();

        if(meetingRepository.findById(meetingRecordImgPathPostReq.getMeetingId()).isPresent()){

//            int meetingId = meetingRepository.findById(meetingRecordImgPathPostReq.getMeetingId()).get().getMeetingId();

            String fileBase64 = meetingRecordImgPathPostReq.getFileUrl();

            File uploadDir = new File(uploadPath + File.separator + uploadFolder);
            if(!uploadDir.exists()) uploadDir.mkdir();

            byte[] decodedBytes = Base64.getDecoder().decode(fileBase64.split(",")[1]);

//            String decodedFileUrl = new String(decodedBytes);

            // 파일 저장 ? 되나?
            FileOutputStream fileOutputStream = new FileOutputStream(uploadDir);
            fileOutputStream.write(decodedBytes);
            fileOutputStream.close(); // 안 된다


//            String meetingFileUrl = "/" + uploadFolder + "/" + decodedFileUrl;

//            meetingRecordImgPath.setMeetingId(meetingId);
//            meetingRecordImgPath.setMemberId(meetingRecordImgPathPostReq.getMemberId());
//            meetingRecordImgPath.setFileUrl(meetingFileUrl);
//            meetingRecordImgPath.setFileName(decodedFileUrl);

            return SUCCESS;
        }
        return FAIL;
    }

    @Override
    public List<MeetingRecordImgPath> meetingRecordImgDetail(int meetingId, int memberId) {

        if(!meetingRecordImgPathRepository.findAllByMeetingIdAndMemberId(meetingId, memberId).isEmpty()){
            return meetingRecordImgPathRepository.findAllByMeetingIdAndMemberId(meetingId, memberId);
        }
        return null;
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
