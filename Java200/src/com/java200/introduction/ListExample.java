package com.java200.introduction;

import java.util.ArrayList;
import java.util.List;

public class ListExample {
    public static void main(String[] args) {
        List<Geo> geoList = new ArrayList<Geo>();
        geoList.clear();
        geoList.add(new Geo(37.5670, 126.9807));
        geoList.add(new Geo(47.01, 10.2));
        geoList.add(new Geo(40.714086, -74.228697));
        geoList.add(new Geo(19.42847, -99.12766));
        geoList.add(new Geo(39.9075, 116.39723));
        geoList.add(new Geo(55.75222, 37.61556));

        System.out.println(geoList.size());

        Geo geoGet = geoList.get(1);
        System.out.printf("위도: %f, 경도: %f\n", geoGet.getLatitude(), geoGet.getLongtitude());
    }
}
