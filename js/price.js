// 총 가격 계산
const checkboxes = document.querySelectorAll('.feature-checkbox');
const totalPriceElement = document.getElementById('total-price');
const inquiryButton = document.getElementById('inquiry-button');

let selectedFeatures = [];
let totalPrice = 0;

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
    const price = parseInt(checkbox.dataset.price, 10);
    const name = checkbox.dataset.name;

    if (checkbox.checked) {
      selectedFeatures.push(name);
      totalPrice += price;
    } else {
      selectedFeatures = selectedFeatures.filter((feature) => feature !== name);
      totalPrice -= price;
    }

    totalPriceElement.textContent = `${totalPrice.toLocaleString()}원`;
  });
});

// 도입 문의 버튼 클릭 이벤트
inquiryButton.addEventListener('click', () => {
  if (selectedFeatures.length === 0) {
    alert('최소 하나 이상의 기능을 선택해주세요.');
    return;
  }

  // 문의 페이지 URL 생성
  const inquiryUrl = new URL('contact', window.location.origin);
  inquiryUrl.searchParams.set('features', selectedFeatures.join(', '));
  inquiryUrl.searchParams.set('totalPrice', totalPrice);

  // 문의 페이지로 이동
  window.location.href = inquiryUrl;
});
