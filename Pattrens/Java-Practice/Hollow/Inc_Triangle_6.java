package Hollow;

/*
        * 
        * * 
        *   * 
        *     * 
        * * * * * 
*/ 
public class Inc_Triangle_6 {
    public static void main(String[] args) {
        int num = 5;
        for (int i = 1; i <= num; i++) {
            for (int j = 1; j <= i; j++) {
                if (j == 1 || i == num || i == j) {
                    System.out.print("* ");
                } else {
                    System.out.print("  ");
                }
            }
            System.out.println();
        }
    }
}
