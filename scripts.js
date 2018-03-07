$(document).ready(function() {

  $("#myForm").submit(function(event) {
    event.preventDefault();
    $(".response").remove()
    const email = $("#email").val().toLowerCase()
    $.ajax({
    url:   'https://api.fullcontact.com/v3/person.enrich',
    type: 'POST',
    crossDomain: 'true',
    data: JSON.stringify({
      email: email,
    }),
    headers: {
        "Authorization": "Bearer mrduNivtFDdcA4v47KwkjtQm8poDDZvYl"
    },
    success: function (data) {
        console.log(data);
        if(data.linkedin === null){
          $('#myForm').append(`<div class="response">  No Linked in found</div>`)
        } else{
        $('#myForm').append(`<div class="response"> <a href="${data.linkedin}">${data.linkedin}</a></div>`)
      }
    },
          error: function (error){
            $('#myForm').append(`<div class="response">Email Not Found on API</div>`)
          }
        })
  })
  $("#clear").click(function(event){
    event.preventDefault()
    $("#email").val('')
    $(".response").remove()
  })
})
