import React from 'react';
import './noticeDetail.css';

const NoticeDetail = () => {
  // Hardcoded data for illustration purposes
  const notice = {
    noticeTitle: '공지사항 제목',
    enrollDate: '2024-01-19T12:34:56',
    noticeContent: '행복하세요~~',
  };

  return (
    <div className="notice-detail">
      <div className="notice-header">
        <h2 className="notice-title">{notice.noticeTitle}</h2>
        <p className="notice-date">{new Date(notice.enrollDate).toLocaleString()}</p>
      </div>
      <div className="notice-content">{notice.noticeContent}</div>
    </div>
  );
};

export default NoticeDetail;