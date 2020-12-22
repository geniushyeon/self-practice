# 1. 봉투 html 만들기
익숙하지 않은 css 정리
## 1.1. box-shadow
박스에 그림자를 줌
```css
.rtan {
    border: 5px solid white;
    box-shadow: 0 0 10px white

}
```

1. 앞에 두 숫자: 그림자가 가로로 얼마나 치우칠 건지 정해줌
2. 세번째 숫자: 얼마나 뿌옇게 할 건지 정해줌
3. 네번째 숫자: 얼마나 길게 뿌옇게 할 건지 정해줌

# 2. 모바일 버전 처리
```@media screen and (max-width: 최대가로길이)```
- 넣어준 후 그 안에서 css 적용
```css
 /*mobile ver.*/ 
@media screen and (max-width: 760px) {
    .messagebox {
        width: 300px;
        padding: 20px;
    }

    .rtan {
        width: 150px;
        height: 150px;
        margin: 70px auto 0 auto;
        border-radius: 100%;
        border: 5px solid white;
        box-shadow: 0 0 10px 0 white;
    }

    .h1 {
        font-size: 28px;
    }

    .envelope {
        margin: 150px auto 0 auto;
    }
}
```