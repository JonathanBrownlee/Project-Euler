class evenFibonacciNumbers {  
    public static void main(String args[]){
		int total = 0;
		
		int current = 0;
		int prev1 = 1;
		int prev2 = 1;
		while (current < 4000000) {
			if (current % 2 == 0) {
				total += current;
			}
			current = prev1 + prev2;
			prev1 = current;
			prev2 = prev1;
		}
		System.out.println(total);
    }  

}