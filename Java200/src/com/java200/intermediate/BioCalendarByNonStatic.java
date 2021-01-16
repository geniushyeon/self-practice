package com.java200.intermediate;


public class BioCalendarByNonStatic {
    public static final int PHYSICAL = 23;

    public double getBioRhythm(long days, int index, int max) {
        return max * Math.sin((days % index) * 2 * Math.PI / index);
    }

    public static void main(String[] args) {
        int days = 1200;
        BioCalendarByNonStatic bioCalendarByNonStatic = new BioCalendarByNonStatic();

        double phyval = bioCalendarByNonStatic.getBioRhythm(days, PHYSICAL, 100);
        System.out.printf("나의 신체 지수는 %1$.2f입니다.", phyval);
    }

}
