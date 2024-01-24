package com.him.groomhim.question.service;

import com.him.groomhim.common.dto.MsgResponseDto;
import com.him.groomhim.common.exception.CustomException;
import com.him.groomhim.common.exception.ErrorCode;
import com.him.groomhim.common.exception.SuccessCode;
import com.him.groomhim.member.entity.Member;
import com.him.groomhim.member.repository.MemberRepository;
import com.him.groomhim.question.dto.CommentCreateRequest;
import com.him.groomhim.question.entity.Comment;
import com.him.groomhim.question.entity.Question;
import com.him.groomhim.question.repository.CommentRepository;
import com.him.groomhim.question.repository.QuestionRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Slf4j
public class CommentService {

    private final CommentRepository commentRepository;
    private final QuestionRepository questionRepository;
    private final MemberRepository memberRepository;

    public MsgResponseDto save(Long questionNo,CommentCreateRequest commentCreateRequest){
        try {
            Question findQuestion = questionRepository.findByQuestionNo(questionNo);
            commentRepository.save(commentCreateRequest.toEntity(findQuestion));
        }catch (Exception e){
            return new MsgResponseDto(new CustomException(ErrorCode.INTERNAL_SERVER_ERROR));
        }
        return new MsgResponseDto(SuccessCode.SUCCESS_INSERT);
    }


}
