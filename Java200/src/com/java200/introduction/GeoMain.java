package com.java200.introduction;

public class GeoMain {
    public static void main(String[] args) {

        Geo geo1 = new Geo();
        geo1.setLatitude(37.52127220511242);
        geo1.setLongtitude(127.0074462890623);

        System.out.printf("위도: %f, 경도: %f\n", geo1.getLatitude(), geo1.getLongtitude());

        Geo geo2 = geo1;

        System.out.printf("위도: %f, 경도: %f\n", geo2.getLatitude(), geo2.getLongtitude());
        System.out.println("---------------------------------");
        Geo seoul = new Geo(37.5670, 126.9807);
        Geo austria = new Geo(47.01, 10.2);
        Geo newyork = new Geo(40.714086, -74.228697);
        Geo mexico = new Geo(19.42847, -99.12766);
        Geo china = new Geo(39.9075, 116.39723);
        Geo russia = new Geo(55.75222, 37.61556);

        showGeo(seoul, seoul, newyork);
        System.out.println("---------------------------------");
        showGeo(seoul, seoul, newyork, mexico, china, russia);
    }
        public static void showGeo(Geo ...goose) {
            for(Geo gg : goose) {
                System.out.printf("위도: %f, 경도: %f\n", gg.getLatitude(), gg.getLongtitude());
            }
        }

    }


