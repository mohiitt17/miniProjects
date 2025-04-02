import java.lang.*;

import java.util.*;

public class Year {

	public static void main(String [] args) {
	Scanner sc = new Scanner(System.in);

	System.out.print("Enter year to check leap year - ");
	 int num = sc.nextInt();
		
	if(num%4 == 0) {

	System.out.println("this year is a leap year.");

	} else{
		
	System.out.println("this year is not a leap year.");	

	}
	
	}

}