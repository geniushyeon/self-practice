package example.security.salt;

public class UtilsApplication {
	public static void main(String[] args) {
		Utils utils1 = new Utils();
		Utils utils2 = new Utils();
		
		String salt1 = utils1.getSalt();
		String salt2 = utils2.getSalt();
		
		System.out.println(salt1.equals(salt2));
		
		String temp1 = utils1.getEncrypt("1234", salt1);
		String temp2 = utils2.getEncrypt("1234", salt2);
		
		System.out.println(temp1.equals(temp2));
	}

}
