package com.him.groomhim.member.repository;

import com.him.groomhim.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Long> {
    Member findByMemberIdAndMemberPwd(final String memberId, final String memberPwd);
    Member findByMemberEmail(String memberEmail);
    boolean existsByMemberId(String memberId);
    boolean existsByMemberEmail(String memberEmail);
    boolean existsByMemberNickname(String memberNickName);
}
