Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEnventListener('mouseleave', Swal.resumeTimer)
        }
    })
let resmsg
$("#copy").click(function(){
	triggerExample("copy")
	Toast.fire({
                icon: 'success',
                title: resmsg
            })
});


function triggerExample(id) {
  const element = document.querySelector('#' + id);
  element.select();
  element.setSelectionRange(0, 99999);
  document.execCommand('copy');
  return resmsg = 'URL COPIED SUCCESS'
}