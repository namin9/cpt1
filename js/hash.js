document.addEventListener('DOMContentLoaded', () => {
  // 해시에서 데이터를 읽기
  const hash = window.location.hash.substring(1); // '#' 제거
  const params = new URLSearchParams(hash);

  const features = params.get('features');
  const totalPrice = params.get('totalPrice');

  // 폼에 데이터 삽입
  if (features && totalPrice) {
    const messageField = document.getElementById('message');
    const defaultMessage = `
      도입 문의
      선택된 기능: ${features}
      예상 총 요금: ${totalPrice}원
      문의 내용 :
    `;
    messageField.value = defaultMessage.trim();
  }
});
