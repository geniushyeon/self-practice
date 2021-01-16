package com.java200.intermediate;

public class Temperature {
    public static void main(String[] args) {
        for (int i = 0; i < 101; i++) {
            double fahrenheit = 9.0 / 5 * i + 32;
            System.out.printf("섭씨 %d도 = 화씨 %.2f도\n", i, fahrenheit);
        }
    }
}
