package Number;
/*
    1 
    1 2
    1 2 3
    1 2 3 4
    1 2 3 4 5

*/ 
public class Inc_Left_P1_3 {
    public static void main(String[] args) {
        int num = 5;
        for (int i = 1; i <= num; i++) {
            int p = 1;
            for (int j = 1; j <= i; j++) {
                System.out.print(p++ + " ");
            }
            System.out.println();
        }
    }
}
