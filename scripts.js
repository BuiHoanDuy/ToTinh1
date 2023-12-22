var check = 0;
document.addEventListener('DOMContentLoaded', function () {
    const questionList = document.getElementById('question-list');
    const questions = document.querySelectorAll('.question');
    const nextBtn = document.getElementById('next-btn');
    let currentIndex = 0;
  
    function showQuestion(index) {
      questions.forEach((question, i) => {
        if (i === index) {
          question.style.display = 'block';
        } else {
          question.style.display = 'none';
        }
      });
    }
  
    nextBtn.addEventListener('click', function () {
      currentIndex = (currentIndex + 1) % questions.length;
      showQuestion(currentIndex);

    });
  
    // Hiển thị câu hỏi đầu tiên khi trang được tải
    showQuestion(currentIndex);
  });

function Check(check){
    if (check === 10){
        alert("Dù kết quả có ra sao thì tớ cũng thích cậu mất rồi !");
    }
  };
  // jQuery
  $(document).ready(function(){
    $("#next-btn").click(function(){
      $(".measure").animate({height: "+=40px", marginTop: "-=40px" });
      check++;
      Check(check);
    });
    $("#khong").click(function(){
      $(".measure").animate({height: "-=40px", marginTop: "+=40px"});
      check++;
      Check(check);
    });
  });

  

  document.addEventListener('DOMContentLoaded', function () {
    const confettiContainer = document.querySelector('.confetti-container');
  
    function createHeart() {
      const heart = document.createElement('div');
      heart.className = 'heart';
      confettiContainer.appendChild(heart);
  
      // Randomize starting position
      const startX = Math.random() * window.innerWidth;
      const startY = window.innerHeight + Math.random() * 100;
  
      heart.style.left = startX + 'px';
      heart.style.top = startY + 'px';
  
      // Remove heart after animation
      heart.addEventListener('animationend', function () {
        confettiContainer.removeChild(heart);
      });
    }
  
    function generateConfetti() {
      setInterval(createHeart, 1000); // Thêm trái tim mỗi giây
    }
  
    generateConfetti();
  });


 

  document.addEventListener('DOMContentLoaded', function () {
    const imageContainer = document.getElementById('image-container');
    const displayedImage = document.getElementById('displayed-image');
    
    // Thay đổi lựa chọn từ id sang class
    const changeImageButtons = document.querySelectorAll('.change-image-btn');
  
    const imageList = [
        'img/emotion_angry1.png',
        'img/emotion_fighting1.png',
        'img/emotion_fun1.png',
        'img/emotion_gaiDau.png',
        'img/emotion_love1.png',
        'img/emotion_normal1.png',
        'img/emotion_sad1.png',
        'img/emotion_wow1.png',
      // Thêm các tên ảnh khác tại đây
    ];
  
    function getRandomImage() {
      const randomIndex = Math.floor(Math.random() * imageList.length);
      const randomImage = imageList[randomIndex];
      return randomImage;
    }
  
    function changeImage() {
      const newImage = getRandomImage();
      displayedImage.src = newImage;
    }
  
    // Sử dụng forEach để gắn sự kiện cho mỗi nút
    changeImageButtons.forEach(function(button) {
      button.addEventListener('click', changeImage);
    });
  });