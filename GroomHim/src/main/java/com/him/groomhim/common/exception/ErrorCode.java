package com.him.groomhim.common.exception;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

@Getter
@RequiredArgsConstructor
public enum ErrorCode {
    //BAD_REQUEST
    DISMATCH_ADMIN_TOKEN(HttpStatus.BAD_REQUEST, "관리자 암호가 틀려 등록이 불가능합니다."),
    ALREADY_EXIST(HttpStatus.CONFLICT, "중복된 데이터입니다."),
    DISMATCH_PASSWORD(HttpStatus.BAD_REQUEST,"비밀번호가 일치하지 않습니다."),
    DISMATCH_TOKEN(HttpStatus.BAD_REQUEST,"토큰이 일치하지 않습니다."),
    DISMATCH_TOKEN2(HttpStatus.BAD_REQUEST,"일치하는 토큰이 존재하지 않습니다.");

    private final HttpStatus httpStatus;
    private final String message;
}