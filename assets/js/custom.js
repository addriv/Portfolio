document.addEventListener('DOMContentLoaded', () => {
  const coinstock = document.querySelector('.coinstock');
  const instadine = document.querySelector('.instadine');
  const hakuna = document.querySelector('.hakuna');

  hakuna.addEventListener('mouseenter', () => {
    document.querySelector('.hakuna-img').src = 'assets/images/hakuna_overview.gif';
  });
  hakuna.addEventListener('mouseleave', () => {
    document.querySelector('.hakuna-img').src = 'assets/images/hakuna.png';
  });
  coinstock.addEventListener('mouseenter', () => {
    document.querySelector('.coinstock-img').src = 'assets/images/coinstock_overview.gif';
  });
  coinstock.addEventListener('mouseleave', () => {
    document.querySelector('.coinstock-img').src = 'assets/images/coinstock.png';
  });
  instadine.addEventListener('mouseenter', () => {
    document.querySelector('.instadine-img').src = 'assets/images/instadine_overview.gif';
  });
  instadine.addEventListener('mouseleave', () => {
    document.querySelector('.instadine-img').src = 'assets/images/instadine.png';
  });
});