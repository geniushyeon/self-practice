package com.java200.intermediate;

public class Contraction {
    public static int sumEach(int n) {
        int total = 0;
        while(n != 0) {
            total += n % 10;
            n /= 10;
        }
        return total;
    }

    public static void main(String[] args) {
        int number = 1234567;
        int value = sumEach(number);

        System.out.printf("%d에 대한 각 자리의 숫자 합: %d", number, value);

    }
}
