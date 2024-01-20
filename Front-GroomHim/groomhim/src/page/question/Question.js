import './Question.css';
import {Link} from 'react-router-dom';

function Question(){
    
    return(
        <div className="community-content">
            <div className="search-filter">
                <form className='search-filter-form'>
                    <div className="searh-item">
                        <div className="searh-text">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"  height="16" viewBox="0 0 50 50" fill="#737373;">
                        <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
                        </svg>
                            <input></input>
                        </div>
                    </div>
                    <div className="searh-item">
                        <div className="searh-tag">
                            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" height="16"><path d="M7.707,9.256c.391,.391,.391,1.024,0,1.414-.391,.391-1.024,.391-1.414,0-.391-.391-.391-1.024,0-1.414,.391-.391,1.024-.391,1.414,0Zm13.852,6.085l-.565,.565c-.027,1.233-.505,2.457-1.435,3.399l-3.167,3.208c-.943,.955-2.201,1.483-3.543,1.487h-.017c-1.335,0-2.59-.52-3.534-1.464L1.882,15.183c-.65-.649-.964-1.542-.864-2.453l.765-6.916c.051-.456,.404-.819,.858-.881l6.889-.942c.932-.124,1.87,.193,2.528,.851l7.475,7.412c.387,.387,.697,.823,.931,1.288,.812-1.166,.698-2.795-.342-3.835L12.531,2.302c-.229-.229-.545-.335-.851-.292l-6.889,.942c-.549,.074-1.052-.309-1.127-.855-.074-.547,.309-1.051,.855-1.126L11.409,.028c.921-.131,1.869,.191,2.528,.852l7.589,7.405c1.946,1.945,1.957,5.107,.032,7.057Zm-3.438-1.67l-7.475-7.412c-.223-.223-.536-.326-.847-.287l-6.115,.837-.679,6.14c-.033,.303,.071,.601,.287,.816l7.416,7.353c.569,.57,1.322,.881,2.123,.881h.01c.806-.002,1.561-.319,2.126-.893l3.167-3.208c1.155-1.17,1.149-3.067-.014-4.229Z"/></svg>
                            <input></input>
                        </div>
                    </div>
                    <button className="search-btn">검색</button>
                </form>
            </div>
            <div className="question-list-container">
                <div className="posts-container-header">
                    <div className="dropdown-sort">
                        <select>
                            <option selected>최신순</option>
                            <option>정확도순</option>
                            <option>답변많은순</option>
                            <option>좋아요순</option>
                        </select>
                    </div>
                    <div className='btn-cover'></div>
                    <button className="write-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="16" height="16"><path d="M23.23,4.51c1.03-1.03,1.03-2.71,0-3.74-1.03-1.03-2.71-1.03-3.74,0L8,12.26v3.74h3.74L23.23,4.51Zm-3.03-3.03c.64-.64,1.68-.64,2.32,0,.64,.64,.64,1.68,0,2.32l-1.5,1.5-2.32-2.32,1.5-1.5ZM9,15v-2.32L17.98,3.69l2.32,2.32L11.32,15h-2.32Zm15,8v1c-1.26,0-1.99-.89-2.64-1.68-.58-.71-1.08-1.32-1.86-1.32s-1.29,.61-1.86,1.32c-.65,.79-1.38,1.68-2.64,1.68s-1.99-.89-2.64-1.68c-.58-.71-1.08-1.32-1.86-1.32-.73,0-1.33,.53-2.03,1.15-.93,.82-2.09,1.84-3.95,1.85h-.02C2.03,23.99,.02,21.97,.02,19.5s2.02-4.5,4.5-4.5h1.48v1h-1.48c-1.93,0-3.5,1.57-3.5,3.5s1.56,3.49,3.49,3.5c1.49,0,2.41-.82,3.3-1.6,.78-.69,1.58-1.4,2.69-1.4,1.26,0,1.99,.89,2.64,1.68,.58,.71,1.08,1.32,1.86,1.32s1.29-.61,1.86-1.32c.65-.79,1.38-1.68,2.64-1.68s1.99,.89,2.64,1.68c.58,.71,1.08,1.32,1.86,1.32Z"/></svg>
                    </button>
                </div>
                
                <ul className="question-list">
                    <li className="question-container">
                        <Link click-post to="/page/question/questionDetail">
                            <div className="question">
                                <div className="question-info">
                                <div className="question-title">
                                    <h3>여드름 피부 고민입니다.</h3>
                                </div>
                                <p className="question-body">제목 그대로 입니다..
                                    몇 년 전부터 여드름이 너무 심하게 올라와서

                                    여드름 자체적으로 손으로 짜기도 하고 압출 도구? 같은 

                                    것으로 압출도 해보았는데도 상태가 호전되질 않네요..

                                    전국의 피부 지식인 분들 사람 하나 살리는 셈치고 도와주

                                    시면 너무 감사하겠습니다..

                                    +매일 아침 저녁으로 독도 제품 클렌징 폼 쓰고 있구요.

                                    폼으로 세수하고 난 이후에는 이니스프리 세럼 바릅니다..

                                    피부가 지성인지 복합성인지는 잘 모르겠습니다..</p>
                                <div className="question-tags">
                                    <button className='tag'>
                                        <span className='tag-name'>여드름</span>
                                    </button>
                                    <button className='tag'>
                                        <span className='tag-name'>지성</span>
                                    </button>
                                </div>
                                <div className="question-footer">
                                    <div className='question-footer-userData'>
                                        <span className='question-userName'>User01</span>
                                        <span>&nbsp;·&nbsp;</span>
                                        <span>2024-01-20</span>
                                    </div>
                                    <div className='question-footer-detail'>
                                        <dl>
                                           <dd className='view-count'>
                                            <span className='text'>0</span>
                                           </dd>
                                           <dd className='comment-count'>
                                            <span className='text'>0</span>

                                           </dd>
                                        </dl>
                                    </div>
                                </div>
                                
                                </div>
                            </div>
                        </Link>
                    </li>
                </ul>

                <ul className="question-list">
                    <li className="question-container">
                        <a click-post href="">
                            <div className="question">
                                <div className="question-info">
                                <div className="question-title">
                                    <h3>여드름 피부 고민입니다.</h3>
                                </div>
                                <p className="question-body">
                                    제목 그대로 입니다..
                                    몇 년 전부터 여드름이 너무 심하게 올라와서

                                    여드름 자체적으로 손으로 짜기도 하고 압출 도구? 같은 

                                    것으로 압출도 해보았는데도 상태가 호전되질 않네요..

                                    전국의 피부 지식인 분들 사람 하나 살리는 셈치고 도와주

                                    시면 너무 감사하겠습니다..

                                    +매일 아침 저녁으로 독도 제품 클렌징 폼 쓰고 있구요.

                                    폼으로 세수하고 난 이후에는 이니스프리 세럼 바릅니다..

                                    피부가 지성인지 복합성인지는 잘 모르겠습니다..</p>
                                <div className="question-tags">
                                    <button className='tag'>
                                        <span className='tag-name'>여드름</span>
                                    </button>
                                    <button className='tag'>
                                        <span className='tag-name'>지성</span>
                                    </button>
                                </div>
                                <div className="question-footer">
                                    <div className='question-footer-userData'>
                                        <span className='question-userName'>User01</span>
                                        <span>&nbsp;·&nbsp;</span>
                                        <span>2024-01-20</span>
                                    </div>
                                    <div className='question-footer-detail'>
                                        <dl>
                                           <dd className='view-count'>
                                            <span className='text'>0</span>
                                           </dd>
                                           <dd className='comment-count'>
                                            <span className='text'>0</span>

                                           </dd>
                                        </dl>
                                    </div>
                                </div>
                                
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
                <ul className="question-list">
                    <li className="question-container">
                        <a click-post href="">
                            <div className="question">
                                <div className="question-info">
                                <div className="question-title">
                                    <h3>여드름 피부 고민입니다.</h3>
                                </div>
                                <p className="question-body">제목 그대로 입니다..
                                    몇 년 전부터 여드름이 너무 심하게 올라와서

                                    여드름 자체적으로 손으로 짜기도 하고 압출 도구? 같은 

                                    것으로 압출도 해보았는데도 상태가 호전되질 않네요..

                                    전국의 피부 지식인 분들 사람 하나 살리는 셈치고 도와주

                                    시면 너무 감사하겠습니다..

                                    +매일 아침 저녁으로 독도 제품 클렌징 폼 쓰고 있구요.

                                    폼으로 세수하고 난 이후에는 이니스프리 세럼 바릅니다..

                                    피부가 지성인지 복합성인지는 잘 모르겠습니다..</p>
                                <div className="question-tags">
                                    <button className='tag'>
                                        <span className='tag-name'>여드름</span>
                                    </button>
                                    <button className='tag'>
                                        <span className='tag-name'>지성</span>
                                    </button>
                                </div>
                                <div className="question-footer">
                                    <div className='question-footer-userData'>
                                        <span className='question-userName'>User01</span>
                                        <span>&nbsp;·&nbsp;</span>
                                        <span>2024-01-20</span>
                                    </div>
                                    <div className='question-footer-detail'>
                                        <dl>
                                           <dd className='view-count'>
                                            <span className='text'>0</span>
                                           </dd>
                                           <dd className='comment-count'>
                                            <span className='text'>0</span>

                                           </dd>
                                        </dl>
                                    </div>
                                </div>
                                
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
                <ul className="question-list">
                    <li className="question-container">
                        <a click-post href="">
                            <div className="question">
                                <div className="question-info">
                                <div className="question-title">
                                    <h3>여드름 피부 고민입니다.</h3>
                                </div>
                                <p className="question-body">제목 그대로 입니다..
                                    몇 년 전부터 여드름이 너무 심하게 올라와서

                                    여드름 자체적으로 손으로 짜기도 하고 압출 도구? 같은 

                                    것으로 압출도 해보았는데도 상태가 호전되질 않네요..

                                    전국의 피부 지식인 분들 사람 하나 살리는 셈치고 도와주

                                    시면 너무 감사하겠습니다..

                                    +매일 아침 저녁으로 독도 제품 클렌징 폼 쓰고 있구요.

                                    폼으로 세수하고 난 이후에는 이니스프리 세럼 바릅니다..

                                    피부가 지성인지 복합성인지는 잘 모르겠습니다..</p>
                                <div className="question-tags">
                                    <button className='tag'>
                                        <span className='tag-name'>여드름</span>
                                    </button>
                                    <button className='tag'>
                                        <span className='tag-name'>지성</span>
                                    </button>
                                </div>
                                <div className="question-footer">
                                    <div className='question-footer-userData'>
                                        <span className='question-userName'>User01</span>
                                        <span>&nbsp;·&nbsp;</span>
                                        <span>2024-01-20</span>
                                    </div>
                                    <div className='question-footer-detail'>
                                        <dl>
                                           <dd className='view-count'>
                                            <span className='text'>0</span>
                                           </dd>
                                           <dd className='comment-count'>
                                            <span className='text'>0</span>

                                           </dd>
                                        </dl>
                                    </div>
                                </div>
                                
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
                <ul className="question-list">
                    <li className="question-container">
                        <a click-post href="">
                            <div className="question">
                                <div className="question-info">
                                <div className="question-title">
                                    <h3>여드름 피부 고민입니다.</h3>
                                </div>
                                <p className="question-body">제목 그대로 입니다..
                                    몇 년 전부터 여드름이 너무 심하게 올라와서

                                    여드름 자체적으로 손으로 짜기도 하고 압출 도구? 같은 

                                    것으로 압출도 해보았는데도 상태가 호전되질 않네요..

                                    전국의 피부 지식인 분들 사람 하나 살리는 셈치고 도와주

                                    시면 너무 감사하겠습니다..

                                    +매일 아침 저녁으로 독도 제품 클렌징 폼 쓰고 있구요.

                                    폼으로 세수하고 난 이후에는 이니스프리 세럼 바릅니다..

                                    피부가 지성인지 복합성인지는 잘 모르겠습니다..</p>
                                <div className="question-tags">
                                    <button className='tag'>
                                        <span className='tag-name'>여드름</span>
                                    </button>
                                    <button className='tag'>
                                        <span className='tag-name'>지성</span>
                                    </button>
                                </div>
                                <div className="question-footer">
                                    <div className='question-footer-userData'>
                                        <span className='question-userName'>User01</span>
                                        <span>&nbsp;·&nbsp;</span>
                                        <span>2024-01-20</span>
                                    </div>
                                    <div className='question-footer-detail'>
                                        <dl>
                                           <dd className='view-count'>
                                            <span className='text'>0</span>
                                           </dd>
                                           <dd className='comment-count'>
                                            <span className='text'>0</span>
                                           </dd>
                                        </dl>
                                    </div>
                                </div>
                                
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            <div className='pagination-area'>
                <ul className='pagination-list'>
                    <li>
                        <a className='pagination-link'>1</a>
                    </li>
                    <li>
                        <a className='pagination-link'>2</a>
                    </li>
                    <li>
                         <a className='pagination-link'>3</a>
                    </li>
                    <li>
                         <a className='pagination-link'>4</a>
                    </li>
                    <li>
                        <a className='pagination-link'>5</a>
                    </li>
                   
                    
                </ul>

            </div>

        </div>
    );
}

export default Question;