var produk = {
    "Produk1": {
      "detail": "Barang ini dibuat dengan bahan bermacam - macam"
    },
    "cabinet": {
      "top drawer": { 
        "folder1": "a file",
        "folder2": "secrets"
      },
      "bottom drawer": "soda"
    }
  };




  
$(function() {
    $('.navbar a').on('click', function (e) {
        if (this.hash !== '') {
            e.preventDefault();

            const hash = this.hash;

            $('html, body').animate(
                {
                    scrollTop: $(hash).offset().top
                },
                800
            );
            
        }
        

      })
      
    
});




