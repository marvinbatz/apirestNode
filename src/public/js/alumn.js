var urlRest = 'http://localhost:3000/teacher';
var urlRestAlumn = 'http://localhost:3000/alumn';

$(document).ready(function () {
    listTest();
});

function listTest()
{
    $.ajax({
        url: urlRest,
        type: 'GET',
        dataType: 'JSON',
        success: function (response)
        {
            var myItems = response;
            var value = '';
            for (let i = 0; i < myItems.length; i++)
            {
                value +=
                '<tr>'+
                '<td>'+myItems[i].idTest+'</td>'+
                '<td>'+myItems[i].code+'</td>'+
                '<td>'+myItems[i].test+'</td>'+
                '<td>'+myItems[i].cantQuestions+'</td>'+
                '<td><button type="button" class="btn btn-info btn-block" data-bs-toggle="modal" data-bs-target="#exampleModal2" onclick="detailTest('+myItems[i].idTest+')">Ver preguntas</button></td>'+
            '</tr>'
            }
            $('#bodyTest').html(value)
        }
    })
}


function detailTest(idTest)
{
    $.ajax({
        url: urlRestAlumn+ '/'+idTest,
        type: 'GET',
        dataType: 'JSON',
        success: function (response)
        {
            var myItems = response;
            var valueAl = '';
            for (let i = 0; i < myItems.length; i++)
            {
                valueAl += 
                    '<p class="h2">'+myItems[i].question+'</p>'+
                    '<div class="row g-3">'+
                        '<div class="col-sm">'+
                            '<input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" data-on=true data-of=false> '+myItems[i].answer1+'</div>'+
                        '<div class="col-sm">'+
                            '<input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" data-on=true data-of=false> '+myItems[i].answer2+'</div>'+
                        '<div class="col-sm">'+
                            '<input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" data-on=true data-of=false> '+myItems[i].answer3+'</div>'+
                    '</div><br><br>'
            }    
            $('#detailTest').html(valueAl)
        }
    })
}
