package com.java200.intermediate;

public class LeapYearCalendar {

    public boolean isLeapYear(int year) {
        boolean b = false;
        if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
            b = true;
        }

        return b;
    }

    public static void main(String[] args) {
        LeapYearCalendar leapYearCalendar = new LeapYearCalendar();
        System.out.println(leapYearCalendar.isLeapYear(2021));
    }
}
