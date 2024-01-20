import './QuestionDetail.css';

function QuestionDetail(){

    return(
        <div className="question-main">
            <div className="question-detail-header">
                <h1 className="question-detail-title">여드름 피부 고민입니다.</h1>
                <p className="question-detail-info">
                    <span className="question-detail-userName">User01</span>
                    <span className="question-detail-date">2023-01-20</span>
                    <span className="question-detail-view-count">조회수
                        <span>0</span>
                    </span>
                </p>
            </div>
            <div className="question-detail-hr"></div>
            <div className="question-detail-body">
                <div className="question-detail-content">
                    <p>
                        제목 그대로 입니다..
                        몇 년 전부터 여드름이 너무 심하게 올라와서

                        여드름 자체적으로 손으로 짜기도 하고 압출 도구? 같은 

                        것으로 압출도 해보았는데도 상태가 호전되질 않네요..

                        전국의 피부 지식인 분들 사람 하나 살리는 셈치고 도와주

                        시면 너무 감사하겠습니다..

                        +매일 아침 저녁으로 독도 제품 클렌징 폼 쓰고 있구요.

                        폼으로 세수하고 난 이후에는 이니스프리 세럼 바릅니다..

                        피부가 지성인지 복합성인지는 잘 모르겠습니다..
                    </p>
                    <ul className="question-detail-tags">
                        <li className="question-detail-tag">
                            <button className='tag-btn'>
                                <span className="tag-name">여드름</span>
                            </button>
                        </li>
                        <li className="question-detail-tag">
                            <button className='tag-btn'>
                                <span className="tag-name">지성</span>
                            </button>
                           
                        </li>
                    </ul>
                </div>
            </div>

            <div className="question-detail-hr"></div>
            <section className="question-detail-commnet">
                <div className="question-commnet-header">
                    <div className="comment-header">
                        <div className="comment-header-total">
                            <p className="comment-header-title">
                                답변&nbsp;
                                <span className="comment-header-count">2</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="question-commnet-editor">
                    <div className="comment-editor-opener">
                        <input></input>
                        <button className='comment-submit-btn'>등록</button>
                        <button className='comment-cancle-btn'>취소</button>
                    </div>
                </div>
                <div className="question-commnets">
                    <div className="comment-item">
                        <div className="comment-info">
                            <div className="comment-item-layout">
                                <div className="comment-item-header">
                                    <p className="comment-writer">user02</p>
                                    <p className="dot" aria-hidden="true">･</p>
                                    <p className="comment-createData">2024-01-20 13:08</p>
                                </div>
                                <div className="comment-item-body">
                                    <p>
                                        안녕하세요. 여드름을 전문으로 상담하고 치료하고 있는 의학박사 유종호 원장입니다. 
                                        여드름 관련하여 고민이 많으시겠어요.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="comment-item">
                        <div className="comment-info">
                            <div className="comment-item-layout">
                                <div className="comment-item-header">
                                    <p className="comment-writer">user02</p>
                                    <p className="dot" aria-hidden="true">･</p>
                                    <p className="comment-createData">2024-01-20 13:08</p>
                                </div>
                                <div className="comment-item-body">
                                    <p>
                                        유감
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default QuestionDetail;