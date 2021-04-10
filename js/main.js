function showModal() {
    $('.bd-example-modal-lg').modal('toggle');

}

var owl = $('.owl-carousel');
owl.owlCarousel({
    items: 4,
    loop: true,
    margin: 20,
    autoHeight: false,
    autoHeightClass: 'owl-height',
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 1,
            nav: false
        },
        1000: {
            items: 4,
            nav: false,
            loop: false
        }
    }
});


const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
 
//Form đăng ký tư vấn

var form = document.getElementById("my-form");

async function handleSubmit(event) {
    
    event.preventDefault();
    var err = document.getElementById("my-form-status");

    var name = event.target.name.value;

    var phone = event.target.phone.value;

    if (!name || !phone ) { 
       err.innerHTML = "Vui lòng nhập đủ thông tin";
       return false;
    }

    $('#cover-spin').show(0);
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        $('#cover-spin').hide(0);
        //status.innerHTML = "Thanks for your submission!";
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Thông tin của bạn đã được đăng ký!',
            showConfirmButton: false,
            timer: 2500
        })
        err.innerHTML = "";
        form.reset()
    }).catch(error => {
        $('#cover-spin').hide(0);
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Có lỗi xảy ra, vui lòng thử lại!',
        })
        // status.innerHTML = "Oops! There was a problem submitting your form"
    });
}
form.addEventListener("submit", handleSubmit);



//Form báo giá

var form2 = document.getElementById("my-form-2");

async function handleSubmit2(event) {
    
    event.preventDefault();
    var err = document.getElementById("my-form-status-2");

    var name = event.target.name.value;

    var phone = event.target.phone.value;

    if (!name || !phone ) { 
       err.innerHTML = "Vui lòng nhập đủ thông tin";
       return false;
    }

    $('#cover-spin').show(0);

    var data = new FormData(event.target);

    fetch(event.target.action, {
        method: form2.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        $('#cover-spin').hide(0);
        //status.innerHTML = "Thanks for your submission!";
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Thông tin của bạn đã được gửi đi',
            showConfirmButton: false,
            timer: 2500
        })
        err.innerHTML = "";
        form2.reset();
        $('.bd-example-modal-lg').modal('hide');

    }).catch(error => {
        $('#cover-spin').hide(0);
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Có lỗi xảy ra, vui lòng thử lại!',
        })
        // status.innerHTML = "Oops! There was a problem submitting your form"
    });
}
form2.addEventListener("submit", handleSubmit2);


//Form đăng ký tham quan


var form3 = document.getElementById("my-form-3");

async function handleSubmit3(event) {
    
    event.preventDefault();
    var err = document.getElementById("my-form-status-3");

    var name = event.target.name.value;

    var phone = event.target.phone.value;

    if (!name || !phone ) { 
       err.innerHTML = "Vui lòng nhập đủ thông tin";
       return false;
    }

    $('#cover-spin').show(0);

    var data = new FormData(event.target);

    fetch(event.target.action, {
        method: form3.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        $('#cover-spin').hide(0);
        //status.innerHTML = "Thanks for your submission!";
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Thông tin của bạn đã được gửi đi',
            showConfirmButton: false,
            timer: 2500
        })
        err.innerHTML = "";
        form3.reset();
        $('.bd-example-modal-lg').modal('hide');

    }).catch(error => {
        $('#cover-spin').hide(0);
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Có lỗi xảy ra, vui lòng thử lại!',
        })
        // status.innerHTML = "Oops! There was a problem submitting your form"
    });
}
form3.addEventListener("submit", handleSubmit3);

 