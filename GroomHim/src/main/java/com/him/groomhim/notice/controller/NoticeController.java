package com.him.groomhim.notice.controller;

import com.him.groomhim.notice.entity.Notice;
import com.him.groomhim.notice.service.NoticeService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@CrossOrigin(origins = "*")
@RestController
@RequiredArgsConstructor
public class NoticeController {

    private final NoticeService noticeService;
    @GetMapping("/noticeList")
    public ArrayList<Notice> NoticeList() {
        return noticeService.findAllNotice();
    }

    @PostMapping("/insertNotice")
    public int InsertNotice(@RequestBody final Notice param) {
        Notice notice = new Notice();
        notice = noticeService.save(param);
        return 1;
    }

    @GetMapping("/noticeDetail")
    public Notice noticeDetail(@RequestParam(value="noticeNo") long noticeNo) {
        return noticeService.findByNotice(noticeNo);
    }

}
