package Number;

/*
    1 2 3 4 5 
    1 2 3 4 
    1 2 3 
    1 2 
    1 
*/
public class Dec_Left_P1_4 {
    public static void main(String[] args) {
        int num = 5;
        for (int i = 1; i <= num; i++) {
            int p = 1;
            for (int j = i; j <= num; j++) {
                System.out.print(p++ + " ");
            }
            System.out.println();
        }
    }
}
