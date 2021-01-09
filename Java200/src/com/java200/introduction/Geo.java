package com.java200.introduction;

public class Geo {
    private double latitude = 0.0;
    private double longtitude = 0.0;

    public Geo() {
        // 생성자 오버로딩
    }

    public Geo(double latitude, double longtitude) {
        this.latitude = latitude;
        this.longtitude = longtitude;
    }

    public double getLatitude() {
        return latitude;
    }

    public double getLongtitude() {
        return longtitude;
    }

    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }

    public void setLongtitude(double longtitude) {
        this.longtitude = longtitude;
    }
}
