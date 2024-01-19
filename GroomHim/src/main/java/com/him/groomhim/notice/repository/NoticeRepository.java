package com.him.groomhim.notice.repository;

import com.him.groomhim.notice.entity.Notice;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.ArrayList;

public interface NoticeRepository extends JpaRepository<Notice, Long> {
    ArrayList<Notice> findAll();

    Notice save(Notice param);

    Notice findByNoticeNo(long noticeNo);
}
