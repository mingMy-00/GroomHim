package com.him.groomhim.common.exception;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

@Getter
@RequiredArgsConstructor
public enum SuccessCode {

    //회원 가입 페이지
    SIGN_UP(HttpStatus.OK, "회원가입에 성공했습니다."),
    LOG_IN(HttpStatus.OK, "로그인에 성공했습니다"),
    CHECK_DATA(HttpStatus.OK, "사용 가능한 데이터입니다."),
    SUCCESS_CHANGE(HttpStatus.OK, "데이터 변경 완료"),

    SUCCESS_INSERT(HttpStatus.OK, "게시글 등록 완료");


    private final HttpStatus httpStatus;
    private final String message;
}
