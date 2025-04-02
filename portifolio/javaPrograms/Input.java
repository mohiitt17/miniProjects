import java.lang.*;

import java.util.*;

public class Input {	

	public static void main(String [] args){
	Scanner sc = new Scanner(System.in);

	System.out.print("Enter Employee Name - ");
	String name = sc.nextLine();

	System.out.print("Enter Salary - ");
	int salary = sc.nextInt();

	System.out.print("Enter bonus - ");	
	float bonus = sc.nextFloat();

	System.out.println("Employee Name : " + name);
	System.out.println("Employee Salary : " + salary);
	System.out.println("Employee bonus : " + bonus);
}
}