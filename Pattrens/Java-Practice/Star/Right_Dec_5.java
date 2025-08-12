/*
    Right - aligned Triangle --- inc(space) + dec(star)
    space - i to <=num
        A * * * * *
        A A * * * *
        A A A * * *
        A A A A * *
        A A A A A *

    space - 1 to <i    
        
        * * * * * 
        A * * * * 
        A A * * * 
        A A A * * 
        A A A A * 

*/

public class Right_Dec_5 {
    public static void main(String[] args) {
        int num = 5;
        for (int i = 1; i <= num; i++) {
            for (int space = 1; space < i; space++) {
                System.out.print("A ");
            }
            for (int star = i; star <= num; star++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}
