public class ArraySortedOrNot {

	public static void main(String[] args) {
		int a[] = {2, 5, 4, 5};
		
		boolean isArraySorted = isArraySorted(a, 4);
		
		System.out.println(isArraySorted);
	}
	
	static boolean isArraySorted(int a[], int n){
		
		/*if(a.length == 0){
			System.out.println("Array not exist");
			return false;
		}else{
			
		}*/
		
		if(n == 1){
			return true;
		}else{
			return (a[n-1] > a[n-2]) ? isArraySorted(a, n-1) : false ;
		}
	}
