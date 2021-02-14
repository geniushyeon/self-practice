package example.security.member.model.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import example.security.member.JdbcTemplate;
import example.security.member.model.vo.MemberVo;

public class MemberDao {

	public int signup(Connection conn, MemberVo memberVo) {
		PreparedStatement pstmt = null;
		int affectedRows = 0;

		try {
			String sql = "INSERT INTO member_temp VALUES(?, ?, ?)";

			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, memberVo.getMemberId());
			pstmt.setString(2, memberVo.getMemberPwd());
			pstmt.setString(3, memberVo.getMemberPwdSalt());

			affectedRows = pstmt.executeUpdate();
			System.out.println(affectedRows);
			
			if (affectedRows < 1) {
				System.out.println("회원가입 실패");
				JdbcTemplate.rollback(conn);
			}
			
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			JdbcTemplate.close(pstmt);
		}

		return affectedRows;
	}

	public int signin(Connection conn, String memberId, String memberPwd) {
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		
		int affectedRows = 0;
		try {
			String sql = "SELECT COUNT(*) FROM member_temp WHERE member_id = ? AND member_pwd = ?";

			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, memberId);
			pstmt.setString(2, memberPwd);
			rs = pstmt.executeQuery();

			while(rs.next()) {
				affectedRows = rs.getInt(1);
			}
			System.out.println(affectedRows);
			
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			JdbcTemplate.close(pstmt);
			JdbcTemplate.close(rs);
		}

		return affectedRows;
	}
}
