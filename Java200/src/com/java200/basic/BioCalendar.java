package com.java200.basic;

public class BioCalendar {
    public static final int PHYSICHAL = 23;

    public static void main(String[] args) {
        int index = PHYSICHAL;
        int days = 1200;

        double vals = (days % index) * 2 * Math.PI / index;
        System.out.println(Math.toDegrees(vals)  + "도");
    }

}
