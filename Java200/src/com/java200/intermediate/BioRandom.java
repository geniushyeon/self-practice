package com.java200.intermediate;

public class BioRandom {
    public static void main(String[] args) {
        int range = 10;
        int start = 1;
        int a = 0, b = 0, c = 0;

        while(true) {
            a = (int)(range * Math.random() + start);
            b = (int)(range * Math.random() + start);
            c = (int)(range * Math.random() + start);

            if(a != b && b != c && c!= a)
                break;

        }

        System.out.printf("%d, %d, %d", a, b, c);

    }

}
