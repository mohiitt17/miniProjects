import java.lang.*;

public class Compare {

	public static void main(String [] args){

		int a = 9;

		int b = 10;

		int c = 11;
		
		if(a > b && a > c) {
		System.out.println("A is grater then B and C");
		} else if (b > c && b > a ) {
		System.out.println("B is grater than A and C ");
		} else if(c > a &&  c > b) {
		System.out.println("C is greater than A and B ");
		} else {
		System.out.println("All numbers are equals");
		}

	}

}