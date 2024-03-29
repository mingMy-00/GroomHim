package com.him.groomhim.notice.controller;

import com.him.groomhim.notice.entity.Notice;
import com.him.groomhim.notice.service.NoticeService;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.DataAccessException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
public class NoticeController {

    private final NoticeService noticeService;

    @GetMapping("/noticeList")
    public ArrayList<Notice> NoticeList() {
        return noticeService.findAllNotice();
    }

    @PostMapping("/insertNotice")
    public int InsertNotice(@RequestParam("file") Optional<MultipartFile> file,
                            @RequestParam("noticeTitle") String noticeTitle,
                            @RequestParam("noticeContent") String noticeContent) {

        System.out.println("엥");
        // 파일이 존재하는지 여부 확인
        if (file.isPresent() && !file.get().isEmpty()) {
            return noticeService.saveFile(file.get(), noticeTitle, noticeContent);
        } else {
            return noticeService.saveNotice(noticeTitle, noticeContent);
        }
    }

    @GetMapping("/noticeDetail")
    public Notice noticeDetail(@RequestParam(value="noticeNo") long noticeNo) {
        return noticeService.findByNotice(noticeNo);
    }

    @GetMapping("/noticeDelete")
    public int noticeDelete(@RequestParam(value="noticeNo") long noticeNo) {
        try {
            noticeService.deleteByNoticeNo(noticeNo);
            return 1; // 성공적으로 삭제되었음을 나타내는 값
        } catch (EmptyResultDataAccessException e) {
            return 0; // 삭제할 엔티티가 존재하지 않음을 나타내는 값
        } catch (DataAccessException e) {
            return -1; // 다른 이유로 인한 삭제 실패를 나타내는 값
        }
    }

    @PostMapping("/updateNotice")
    public void noticeDetail(@RequestBody final Notice param) {
        long noticeNo = param.getNoticeNo();
        Notice existNotice = noticeService.findByNotice(noticeNo);
        //System.out.println(existNotice);
        existNotice.setNoticeContent(param.getNoticeContent());
        existNotice.setNoticeTitle(param.getNoticeTitle());
        existNotice.setNoticeNo(param.getNoticeNo());
        existNotice = noticeService.save(existNotice);
    }

    @PostMapping("/noticeSearch")
    public ArrayList<Notice> findByNoticeTitleContaining(@RequestParam("keyword")  String keyword){
        return noticeService.findByNoticeTitleContaining(keyword);
    }


}
