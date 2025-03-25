document.addEventListener('DOMContentLoaded', () => {
  const circle = document.querySelector('.circle');

  circle.style.border = '5px solid #fefae0';
  circle.style.transition = 'all 0.3s ease-in-out';
  circle.style.borderRadius = '100px';

  circle.addEventListener('mouseenter', () => {
    circle.style.borderWidth = '15px';
    circle.style.width = '170px';
    circle.style.height = '170px';
  });

  circle.addEventListener('mouseleave', () => {
    circle.style.borderWidth = '5px';
    circle.style.width = '150px';
    circle.style.height = '150px';
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const circlebottom = document.querySelector('.circlebottom');

  circlebottom.style.border = '5px solid #fefae0';
  circlebottom.style.transition = 'all 0.3s ease-in-out';
  circlebottom.style.borderRadius = '100px';

  circlebottom.addEventListener('mouseenter', () => {
    circlebottom.style.borderWidth = '15px';
    circlebottom.style.width = '170px';
    circlebottom.style.height = '170px';
  });

  circlebottom.addEventListener('mouseleave', () => {
    circlebottom.style.borderWidth = '5px';
    circlebottom.style.width = '150px';
    circlebottom.style.height = '150px';
  });
});
