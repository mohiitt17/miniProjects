import java.lang.*;

import java.util.*;

public class Vowels{

	public static void main(String [] args){

	Scanner v = new Scanner(System.in);

	
	System.out.print("enter alphabat : ");
	String alph = v.nextLine();
	
	if(alph == "a" || alph == "e" || alph == "i" || alph == "o" || alph == "u"){
	System.out.println( alph + " an vowels");
	} else {
	System.out.println( alph + " a constant");
	}
		
	}

}