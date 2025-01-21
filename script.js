function openWin() {
    window.open("index1.html");
  }
  function openPeo() {
    window.open("https://www.zoho.in/people/");
  }
  function openCre() {
    window.open("https://www.zoho.in/creator/");
  }
  function openCrm() {
    window.open("https://www.zoho.in/en-in/crm/");
  }
  function openInv() {
    window.open("https://www.zoho.in/in/inventory/");
  }
  function openBok() {
    window.open("https://www.zoho.in/in/books/");
  }
  function openPro() {
    window.open("https://www.zoho.com/projects/");
  }
$(function() {

    // Menu Responsive
    $(".menu-responsive").toggle();
  
    $(".menu-bars").on("click", function() {
        $(".menu-responsive").toggle("slow");
    });
  
  
    // Scroll click on menu
    $(".scroll").on("click", function() {
        $(this).each(function() {
            const sectionTop = $(this.hash).offset().top;
            $("html, body").animate({
                scrollTop: sectionTop
            }, 1500);
        });
    });
  
  
    // Progress Bar Animate
    window.sr = ScrollReveal();
    sr.reveal(".progress-bar", {
       origin: "left",
       duration: 2000,
       distance: "100%"
    });
  
  
    // Contact Text Animate
    const sentences = ["Web Developer ?","Zoho Developer?"];
    let i = 0;
  
    setInterval(function() {
        $(".text-animate").fadeOut(function() {
            $(this).text(sentences[i = (i + 1) % sentences.length]).fadeIn();
        });
    }, 2500);
  
  });