//package com.him.groomhim.question.service;
//
//import com.him.groomhim.common.dto.MsgResponseDto;
//import com.him.groomhim.member.entity.Member;
//import com.him.groomhim.question.dto.CommentCreateRequest;
//import com.him.groomhim.question.repository.CommentRepository;
//import jakarta.transaction.Transactional;
//import org.assertj.core.api.Assertions;
//import org.junit.Test;
//import org.junit.runner.RunWith;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.test.context.junit4.SpringRunner;
//
//import static org.junit.Assert.*;
//
//
//@RunWith(SpringRunner.class)
//@SpringBootTest
//@Transactional
//public class CommentTest {
//
//    @Autowired
//    CommentService commentService;
//
//    @Test
//    public void 댓글_등록_성공(){
//        // given
//        Long memberNo = 1004L;
//        int questionNo = 1;
//        CommentCreateRequest commentCreateRequest =
//                CommentCreateRequest.builder()
//                        .commentContent("테스트").build();
//
//
//        // when
//        MsgResponseDto result = commentService.save(questionNo,commentCreateRequest);
//
//        // then
//        Assertions.assertThat(result.getMsg()).isEqualTo("게시글 등록 완료");
//    }
//
//    @Test
//    public void 댓글_등록_실패(){
//        // given
//        Long memberNo = null;
//        int questionNo = 100;
//        CommentCreateRequest commentCreateRequest =
//                CommentCreateRequest.builder()
//                        .commentContent("테스트").build();
//
//
//        // when
//        MsgResponseDto result = commentService.save(questionNo, commentCreateRequest);
//
//        // then
//        Assertions.assertThat(result.getMsg()).isEqualTo("내부 서버 오류");
//    }
//
//
//}
//