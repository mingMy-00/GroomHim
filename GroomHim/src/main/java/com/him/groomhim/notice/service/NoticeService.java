package com.him.groomhim.notice.service;

import com.him.groomhim.notice.entity.Notice;
import com.him.groomhim.notice.repository.NoticeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ResourceLoader;
import org.springframework.dao.DataAccessException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Paths;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;

@Service
@RequiredArgsConstructor
public class NoticeService {

    //Repository를 주입받은 것.
    private final NoticeRepository noticeRepository;
    //사진 경로를 받아온 것 => application.properties에 있어용
    @Value("${upload.path}")
    private String uploadPath;
    private final ResourceLoader resourceLoader;

    /***
     * 전체 공지사항을 가져오기 위한 method
     */
    public ArrayList<Notice> findAllNotice() {
        return noticeRepository.findAll();
    }

    /**
     * 공지사항 글 작성을 위한 method
     * */
    public Notice save( Notice param) {return noticeRepository.save(param); }

    /**
     * 공지사항 상세조회를 위함.
     * */
    public Notice findByNotice(long noticeNo) {return noticeRepository.findByNoticeNo(noticeNo); }

    /**
     * 공지사항 작성 중, 오직 파일을 저장하기 위한 method
     * */
    //파일을 저장하기 위한 method
    public int saveFile(MultipartFile file, String noticeTitle, String noticeContent) {
        if (file.isEmpty()) {
            //파일이 없을 때!
            return 0;
        }
        //원래 파일 이름, 현재 시간, 랜덤 숫자, 확장자명, 바뀐 파일 이름
        String originName  = file.getOriginalFilename();
        String currentTime = new SimpleDateFormat("yyyyMMddHHmmss").format(new Date());
        int ranNum 		   = (int)(Math.random() * 90000 + 10000);
        String ext 		   = originName.substring(originName.lastIndexOf("."));
        String changeName  = currentTime + ranNum + ext;

        try {
            String absolutePath = Paths.get(uploadPath).toAbsolutePath().toString();

            // 파일 경로 저장
            String filePath = absolutePath + File.separator + changeName;
            // 이거는 위에서 생성한 파일경로로 저장할 파일 위치를 이관시켜주겠다는 뜻.
            file.transferTo(new File(filePath));

            // 파일 DB에 저장하기.
            Notice notice = new Notice(noticeTitle, noticeContent, originName,  changeName );
            noticeRepository.save(notice);
            return 1; // 성공이라면 1
        } catch (IOException e) {
            e.printStackTrace();
            return 0; // 아니라면 0
        }
    }

    //게시글 삭제를 위한 method
    public int deleteByNoticeNo(long noticeNo) {
        try {
            noticeRepository.deleteById(noticeNo);
            return 1; // 성공적으로 삭제되었음을 나타내는 값
        } catch (EmptyResultDataAccessException e) {
            return 0; // 삭제할 엔티티가 존재하지 않음을 나타내는 값
        } catch (DataAccessException e) {
            return -1; // 다른 이유로 인한 삭제 실패를 나타내는 값
        }
    }
}
