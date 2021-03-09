# 깃을 사용하며 그때그때 알게 되는 문제 해결방법에 대해 정리
## 20210121
### 1. commit message 수정하기
#### 가장 최근의 커밋 수정
```text
$ git commit --amend
```
- 가장 최근(=가장 마지막)에 커밋한 내용 수정 가능.
- 수정 완료 후 `esc` -> `:wq` 입력하면 됨 

## 20210219
### pull 잘못 받았을 때 되돌리기
```text
$ git reset --hard ORIG_HEAD
```

## 20210309
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