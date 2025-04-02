import java.lang.*;


public class message {

	public static void main(String [] args){

		int perc = 75;
		if(perc >= 90) {
			System.out.println(" your Grade is A+");
		} else if(perc >= 80 && perc <= 89){
			System.out.println("your Grade is B+");
		} else if( perc >= 70 && perc <= 79) {
			System.out.println(" your Grade is C+");
		}  else if( perc >= 60 && perc <= 69) {
			System.out.println(" your Grade is D+");
		}  else if( perc >= 50 && perc <= 59) {
			System.out.print(" you need to improvement");
		}  else if(perc >= 40 && perc <= 49) {
			System.out.println("your are promoted");
			} else {
		System.out.print(" you Failed");
		}
	}


}



