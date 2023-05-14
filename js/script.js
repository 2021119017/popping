let brandElements = document.querySelectorAll('.brand_and_name');

function clicked_brand(event) {
  var clickedImage = this.querySelector('img');
  var heartImage = this.querySelector('.heart-image');
  var brandName = this.querySelector('.brand_name');

  if (heartImage) {
    // 이미 하트가 있는 경우 하트와 배경색을 원래대로 되돌립니다.
    heartImage.remove();
    brandName.style.backgroundColor = '';
    this.classList.remove('clicked');
  } else {
    // 하트가 없는 경우 하트를 추가하고 배경색을 변경합니다.
    var heartImage = document.createElement('img');
    heartImage.src = '/img/heart.png';
    heartImage.classList.add('heart-image');
    this.appendChild(heartImage);
    brandName.style.backgroundColor = '#DFFF61';
    this.classList.add('clicked');
  }
}

brandElements.forEach(function(element) {
  element.addEventListener('click', clicked_brand);
});
