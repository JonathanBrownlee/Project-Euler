class multiplesOf3and5 {  
    public static void main(String args[]){
		int num = 1000;
		int total = 0;
		for (int i = 0; i < num; i++) {
			if (i % 3 == 0 || i % 5 == 0) {
				total += i;
			}
		}
		System.out.println(total);
    }  

}