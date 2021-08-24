# 깃을 사용하며 그때그때 알게 되는 문제 해결방법에 대해 정리
## 2021.01.21
### 1. commit message 수정하기
#### 가장 최근의 커밋 수정
```text
$ git commit --amend
```
- 가장 최근(=가장 마지막)에 커밋한 내용 수정 가능.
- 수정 완료 후 `esc` -> `:wq` 입력하면 됨 

## 2021.02.19
### pull 잘못 받았을 때 되돌리기
```text
$ git reset --hard ORIG_HEAD
```

## 2021.03.09
### git commit 취소
1. commit 취소 후 staged 상태로 워킹 디렉토리에 보존
```text
$ git reset --soft HEAD^
```
 2. commit 취소 후 unstaged 상태로 워킹 디렉토리에 보존
```text
$ git reset --mixed HEAD^ // 기본 옵션
$ git reset HEAD^ // 위와 동일
$ git reset HEAD~2 // 마지막 2개의 commit 취소
```
3. commit 취소 후 unstaged 상태로 워킹 디렉토리에서 삭제
```text
$ git reset --hard HEAD^
```

## 2021.03.12
### git add 취소
- add한 파일들을 unstaged 상태로 변경
```text
$ git reset HEAD [취소할파일명]
```
- 뒤에 파일명이 없으면 add한 파일 전체를 취소

## 2021.04.12
- 2주 동안 매일🔥
  - [git branching 학습](https://learngitbranching.js.org/?locale=ko)

## 2021.04.14
- [git merge vs git rebase](TIL/../learning-git-branching/20210414.md)

## 2021.04.17
- [About Gitmoji](https://treasurebear.tistory.com/70)

## 2021.06.25
- [특정 브랜치만 클론 받기](20210625.md)

## 2021.08.05
- [리모트 브랜치의 커밋 되돌리기](20210805.md)

## 2021.08.24
- [git stash](20210824.md)