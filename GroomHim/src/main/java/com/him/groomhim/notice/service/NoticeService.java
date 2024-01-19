package com.him.groomhim.notice.service;

import com.him.groomhim.notice.entity.Notice;
import com.him.groomhim.notice.repository.NoticeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
@RequiredArgsConstructor
public class NoticeService {

    private final NoticeRepository noticeRepository;

    public ArrayList<Notice> findAllNotice() {
        return noticeRepository.findAll();
    }

    public Notice save( Notice param) {return noticeRepository.save(param); }
}
