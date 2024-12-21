// 커스텀 요금 계산
const checkboxes = document.querySelectorAll('.feature-checkbox');
const totalPriceElement = document.getElementById('total-price');

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    let total = 0;
    checkboxes.forEach(cb => {
      if (cb.checked) {
        total += parseInt(cb.dataset.price, 10);
      }
    });
    totalPriceElement.textContent = total.toLocaleString();
  });
});
