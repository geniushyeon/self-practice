package com.java200.intermediate;

public class FruitApplication {
    public static void main(String[] args) {
        FRUIT pineapple = FRUIT.APPLE;
        FRUIT applemango = FRUIT.MANGO;
        System.out.println(pineapple);
        System.out.println(pineapple.name());
        System.out.println(applemango.name());
        System.out.println(pineapple.ordinal());
        System.out.println(applemango.ordinal());

        FRUIT[] fruits = FRUIT.values();
        System.out.println(fruits[0]);
    }

}
