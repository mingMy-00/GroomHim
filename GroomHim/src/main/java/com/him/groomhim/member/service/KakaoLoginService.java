package com.him.groomhim.member.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.him.groomhim.member.entity.Member;
import com.him.groomhim.member.repository.MemberRepository;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.sql.Date;
import java.text.SimpleDateFormat;
import java.util.HashMap;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class KakaoLoginService {
    private final MemberRepository memberRepository;
    private final MemberService memberService;

    public String getAccessToken(String authorize_code){
        String access_Token = "";
        String refresh_Token = "";
        String reqURL = "https://kauth.kakao.com/oauth/token";

        try {
            URL url = new URL(reqURL);

            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            // POST 요청을 위해 기본값이 false인 setDoOutput을 true로

            conn.setRequestMethod("POST");
            conn.setDoOutput(true);
            // POST 요청에 필요로 요구하는 파라미터 스트림을 통해 전송

            BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(conn.getOutputStream()));
            StringBuilder sb = new StringBuilder();
            sb.append("grant_type=authorization_code");
            sb.append("&client_id=7e7ac347addcfef31e432e4ed779752a"); // REST_API키 본인이 발급받은 key 넣어주기
            sb.append("&redirect_uri=http://groomhim.s3-website.ap-northeast-2.amazonaws.com/callback/kakao"); // REDIRECT_URI 본인이 설정한 주소 넣어주기

            sb.append("&code=" + authorize_code);
            bw.write(sb.toString());
            bw.flush();

            // 결과 코드가 200이라면 성공
            int responseCode = conn.getResponseCode();
//            System.out.println("responseCode : " + responseCode);

            // 요청을 통해 얻은 JSON타입의 Response 메세지 읽어오기
            BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            String line = "";
            String result = "";

            while ((line = br.readLine()) != null) {
                result += line;
            }
//            System.out.println("response body : " + result);

            // jackson objectmapper 객체 생성
            ObjectMapper objectMapper = new ObjectMapper();
            // JSON String -> Map
            Map<String, Object> jsonMap = objectMapper.readValue(result, new TypeReference<Map<String, Object>>() {
            });

            access_Token = jsonMap.get("access_token").toString();
            refresh_Token = jsonMap.get("refresh_token").toString();

//            System.out.println("access_token : " + access_Token);
//            System.out.println("refresh_token : " + refresh_Token);

            br.close();
            bw.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return access_Token;
    }

    public Member getUserInfo(String access_Token) {
        // 요청하는 클라이언트마다 가진 정보가 다를 수 있기에 HashMap타입으로 선언
        HashMap<String, Object> userInfo = new HashMap<String, Object>();
        Member member = null;
        String reqURL = "https://kapi.kakao.com/v2/user/me";

        try {
            URL url = new URL(reqURL);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");

            // 요청에 필요한 Header에 포함될 내용
            conn.setRequestProperty("Authorization", "Bearer " + access_Token);

            int responseCode = conn.getResponseCode();

            BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));

            String line = "";
            String result = "";

            while ((line = br.readLine()) != null) {
                result += line;
            }
            try {
                // jackson objectmapper 객체 생성
                ObjectMapper objectMapper = new ObjectMapper();
                // JSON String -> Map
                Map<String, Object> jsonMap = objectMapper.readValue(result, new TypeReference<Map<String, Object>>() {
                });


                Map<String, Object> properties = (Map<String, Object>) jsonMap.get("properties");
                Map<String, Object> kakao_account = (Map<String, Object>) jsonMap.get("kakao_account");

                System.out.println("jsonMap = " + jsonMap);
                System.out.println("properties = " + properties);
                System.out.println("kakao_account = " + kakao_account);

                String id = "kakao" + jsonMap.get("id").toString();
                String memberNickname = properties.get("nickname").toString() + jsonMap.get("id").toString();
                String memberEmail = kakao_account.get("email").toString();
                String memberProfile = properties.get("profile_image") != null ? properties.get("profile_image").toString() : "https://ibb.co/D93T247";
                String memberName = kakao_account.get("name") != null ? kakao_account.get("name").toString() : properties.get("nickname").toString();
                String memberPhone = kakao_account.get("phone_number") != null ? "0" + (kakao_account.get("phone_number").toString().split(" ")[1]).replaceAll("-", "") : "00000000000";
                String memberGender = kakao_account.get("gender") != null ? (kakao_account.get("gender").toString().equals("male")) ? "M" : "F" : "NONE";

                java.sql.Date birth;
                if(kakao_account.get("birthyear") != null) {
                    String birthyear = kakao_account.get("birthyear").toString();
                    String birthday = kakao_account.get("birthday").toString();
                    birth = new java.sql.Date(new SimpleDateFormat("yyyyMMdd").parse(birthyear+birthday).getTime());
                } else {
                    birth = new Date(1111,11,11);
                }

                member = new Member(id, null, memberEmail, memberName, memberPhone, memberNickname, memberGender, null, birth,memberProfile);
                Member m = memberService.findMemberEmail(memberEmail);
                if(m == null) { // 회원가입
                    memberRepository.save(member);
                }
                member = memberRepository.findByMemberId(member.getMemberId());
            } catch (Exception e) {
                e.printStackTrace();
            }

        } catch (IOException e) {
            e.printStackTrace();
        }
        return member;
    }
}