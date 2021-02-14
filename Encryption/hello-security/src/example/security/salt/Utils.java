package example.security.salt;

import java.security.MessageDigest;
import java.security.SecureRandom;

public class Utils {
	
	public String getSalt() {
		
		SecureRandom secureRandom = new SecureRandom();
		byte[] salt = new byte[10];
		
		secureRandom.nextBytes(salt);
		
		StringBuffer sb = new StringBuffer();
		
		for (int i=0; i<salt.length; i++) {
			sb.append(String.format("%02x", salt[i])); // 바이트 값을 16진수로 변경 
		}
		
		return sb.toString();
	}
	
	public String getEncrypt(String pwd, String salt) {
		String result = pwd + salt;
		
		try {
			MessageDigest md = MessageDigest.getInstance("SHA-256");
			md.update(result.getBytes());
			
			byte[] b = md.digest();
			
			StringBuffer sb = new StringBuffer();
			
			for (int i=0; i<b.length; i++) {
				sb.append(Integer.toString((b[i] & 0xFF) + 256, 16).substring(1));
				
			}
			result = sb.toString();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}
	
	public String getEncrypt(String pwd) {
		String result = pwd;
		
		try {
			MessageDigest md = MessageDigest.getInstance("SHA-256");
			md.update(result.getBytes());
			
			byte[] b = md.digest();
			
			StringBuffer sb = new StringBuffer();
			
			for (int i=0; i<b.length; i++) {
				sb.append(Integer.toString((b[i] & 0xFF) + 256, 16).substring(1));
				
			}
			result = sb.toString();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}
	
}
