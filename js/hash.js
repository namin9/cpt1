document.addEventListener('DOMContentLoaded', () => {
  // 해시에서 데이터를 읽기
  const hash = window.location.hash.substring(1); // '#' 제거
  const params = new URLSearchParams(hash);

  const features = params.get('features');
  const totalPrice = params.get('totalPrice');

  // 문의 종류에서 "도입 문의"를 자동 선택
  const inquiryTypeField = document.getElementById('inquiry-type');
  if (inquiryTypeField) {
    inquiryTypeField.value = '도입 문의'; // "도입 문의" 옵션 선택
  }

  // 문의 내용 자동 입력
  if (features && totalPrice) {
    const messageField = document.getElementById('message');
    const defaultMessage = `도입 문의\n선택된 기능: ${features}\n예상 총 요금: ${totalPrice}원\n문의 내용:`;
    messageField.value = defaultMessage.trim(); // 불필요한 줄바꿈 및 공백 제거
  }
});
