document.addEventListener('DOMContentLoaded', () => {
  // 해시에서 데이터를 읽기
  const hash = window.location.hash.substring(1); // '#' 제거
  const params = new URLSearchParams(hash);

  const features = params.get('features');
  const totalPrice = params.get('totalPrice');
  const fromPricing = params.get('source'); // 'source'가 'pricing'인지 확인

  // 문의 종류에서 "도입 문의"를 자동 선택
  const inquiryTypeField = document.getElementById('inquiry-type');
  if (inquiryTypeField) {
    if (fromPricing === 'pricing') {
      inquiryTypeField.value = '도입 문의';
    } if (fromPricing === 'service') {
      inquiryTypeField.value = '서비스 소개서 요청';
    } else {
      inquiryTypeField.value = ''; // 기본 값으로 설정
    }
  }

  // 문의 내용 자동 입력
  if (features && totalPrice) {
    const messageField = document.getElementById('message');
    const defaultMessage = `선택 기능: ${features}\n예상 요금: ${totalPrice}원\n문의 내용:`;
    messageField.value = defaultMessage.trim(); // 불필요한 줄바꿈 및 공백 제거
  }
});
