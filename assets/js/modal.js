document.addEventListener('DOMContentLoaded', () => {
    const ajaxSend = async (formData) => {
        const fetchResp = await fetch('assets/forms/form.php', {
            method: 'POST',
            body: formData
        });
        if (! fetchResp.ok) {
            throw new Error(`Ошибка по адресу ${url}, статус ошибки ${
                fetchResp.status
            }`);
        }
        return await fetchResp.text();
    };


const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const formData = new FormData(this);

        ajaxSend(formData)
            .then((response) => {
                console.log(response);
                
                if (document.querySelector("#form_doc").classList.contains("show")) {
                 
                  $.ajax({
                      url: "https://api.apispreadsheets.com/data/yuA08zpvW37aV0XG/",
                      type: "post",
                      data: $("#form").serializeArray(),
                      success: function () {
                          
                      },
                      error: function () {
                          
                      }
                  });
                  form.reset(); // очищаем поля формы 
                  let loginFormModal=Modal.getOrCreateInstance(document.getElementById('form_doc'));
                  loginFormModal.hide(); 
                  let tnks=Modal.getOrCreateInstance(document.getElementById('tnks'));  
                  tnks.show();                             
                } 
                  if (document.querySelector("#review").classList.contains("show")) {
                    form.reset(); // очищаем поля формы 
                    let loginFormModal2=Modal.getOrCreateInstance(document.getElementById('review'));
                    loginFormModal2.hide(); 
                    let tnks_review=Modal.getOrCreateInstance(document.getElementById('tnks_review'));  
                    tnks_review.show();   
                    
                 }
                  })
            .catch((err) => console.error(err))
    });
});

            var clicked = false;
            var a = document.getElementsByTagName('summary')[0];
            
            a.addEventListener('click', function () {
                if (! clicked) {
                    clicked = true;
                    a.innerHTML = "Закрыть";
                    document.getElementById("sm1").style.color = 'rgb(200 200 250)';   
                } else {
                    clicked = false;
                    a.innerHTML = "Читать далее";
                    document.getElementById("sm1").style.color = 'rgb(0 0 0)';   
                       
                }
            }, false);


});

              var date = new Date();

              var day = date.getDate();
              var month = date.getMonth() + 1;
              var year = date.getFullYear();

              if (month < 10) month = "0" + month;
              if (day < 10) day = "0" + day;

              var today = year + "-" + month + "-" + day;       
              document.getElementById("theDate").value = today;

              
              document.getElementById("doc_all").onclick = function(){
                document.getElementById("doc_cor").value = "Врач общей практики";
              }
              document.getElementById("psy").onclick = function(){
                document.getElementById("doc_cor").value = "Психолог";
              }
              document.getElementById("on_help").onclick = function(){
                document.getElementById("doc_cor").value = "Онлайн помощник";
              }
              document.getElementById("law").onclick = function(){
                document.getElementById("doc_cor").value = "Юрист";
              }
              document.getElementById("social").onclick = function(){
                document.getElementById("doc_cor").value = "Соцработник";
              }