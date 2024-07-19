package com.him.groomhim.question.service;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Arrays;

@Service
@Slf4j
public class QuestionViewService {

    private static final String VIEWED_QUESTIONS_COOKIE_NAME = "viewedQuestions";
    private static final int COOKIE_MAX_AGE = 60 * 60 * 24; // 쿠키 유효 기간: 1일

    public boolean isViewed(HttpServletRequest request, Long questionNo) {
        Cookie[] cookies = request.getCookies();
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if (VIEWED_QUESTIONS_COOKIE_NAME.equals(cookie.getName())) {
                    String viewedQuestions = cookie.getValue();
                    log.info("Viewed questions cookie value: {}", viewedQuestions);
                    return Arrays.asList(viewedQuestions.split(",")).contains(questionNo.toString());
                }
            }
        }
        log.info("No viewed questions cookie found.");
        return false;
    }

    public void markAsViewed(HttpServletRequest request, HttpServletResponse response, Long questionNo) {
        Cookie[] cookies = request.getCookies();
        String viewedQuestions = questionNo.toString();

        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if (VIEWED_QUESTIONS_COOKIE_NAME.equals(cookie.getName())) {
                    viewedQuestions = cookie.getValue() + "," + questionNo;
                    break;
                }
            }
        }

        Cookie cookie = new Cookie(VIEWED_QUESTIONS_COOKIE_NAME, viewedQuestions);
        cookie.setPath("/");
        cookie.setHttpOnly(true);
        cookie.setMaxAge(COOKIE_MAX_AGE);
        response.addCookie(cookie);
        log.info("Marked question {} as viewed. New cookie value: {}", questionNo, viewedQuestions);
        log.info("Cookie set: name={}, value={}", cookie.getName(), cookie.getValue());
    }
}


