package example.security.member.model.service;

import java.sql.Connection;

import example.security.member.Application;
import example.security.member.JdbcTemplate;
import example.security.member.model.dao.MemberDao;
import example.security.member.model.vo.MemberVo;

public class MemberService {
	
	public int signup(MemberVo memberVo) {
		int affectedRows = 0;
		
		try {
			Connection conn = new Application().getConn();
			affectedRows = new MemberDao().signup(conn, memberVo);
			JdbcTemplate.close(conn);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return affectedRows;
	}
	
	public int signin(String memberId, String memberPwd) {
		int affectedRows = 0;
		
		try {
			Connection conn = new Application().getConn();
			affectedRows = new MemberDao().signin(conn, memberId, memberPwd);
			JdbcTemplate.close(conn);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return affectedRows;
	}
	
}
