package com.java200.introduction;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class DateConversion {
    public static void main(String[] args) {
        long millis = System.currentTimeMillis();
        int days = (int)(millis/1000/24/60/60); // 1970.1.1부터 며칠?

        System.out.println(days);

        Date date = new Date(); // 오늘
        Date date2 = new Date(date.getTime() + 24 * 60 * 60* 1000); // 내일

        Calendar calendar = Calendar.getInstance();
        calendar.set(1970, 1-1, 1);

        Calendar today = Calendar.getInstance();
        long minus = today.getTimeInMillis() - calendar.getTimeInMillis();

        SimpleDateFormat sdf = new                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          SimpleDateFormat("yyyy-MM-dd");
        String tomorrow = sdf.format(date2);

        System.out.println(tomorrow);

    }

}
