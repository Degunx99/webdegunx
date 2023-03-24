
$('#btn_login').on("click", () => {
    var username = $('#username').val();
    var password = $('#password').val();
    
    if(!username || !password){
        Swal.fire({
            text: "Username OR Password Not Found!",
            icon: "error"
        });
    }else{
        Swal.fire({
            title: '<strong>Welome!!</strong>',
            icon: 'success',
            html: 'Selamat Anda Berhasil Login',
            focusConfirm: false,
            confirmButtonText:
                '<i class="fa fa-thumbs-up"></i> Great!',
        }).then((result) => {
            location.href = "product_list.php";
        })
    }
});