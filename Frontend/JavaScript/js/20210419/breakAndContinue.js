for (let i = 0; i < 10; i++) {
	if (i === 2) continue; // 건너뛰고 다음 루프를 실행
	console.log(i);
	if (i === 5) break; // 반복문 탈출
}