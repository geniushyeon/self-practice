package example.security.member.controller;

import example.security.member.model.service.MemberService;
import example.security.member.model.vo.MemberVo;
import example.security.salt.Utils;

public class MemberController {

	public static void main(String[] args) {
		MemberVo memberVo = new MemberVo();
		Utils utils = new Utils();
		MemberService memberService = new MemberService();
		
//		memberVo.setMemberId("jhlee2");
//		memberVo.setMemberPwdSalt(utils.getSalt());
//		memberVo.setMemberPwd(utils.getEncrypt("1234", memberVo.getMemberPwdSalt()));
		
//		memberService.signup(memberVo);
		
		String result = utils.getEncrypt("1234", "3891c9104e6fa5ca2367");
		System.out.println(result);
		memberService.signin("jhlee", result);
	}
}
