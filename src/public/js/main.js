var urlRest = 'http://localhost:3000/teacher';

var checkbox1 = document.getElementById('inlineRadio1');
var checkbox2 = document.getElementById('inlineRadio2');
var checkbox3 = document.getElementById('inlineRadio3');
var checkbox4 = document.getElementById('inlineRadio4');
var checkbox5 = document.getElementById('inlineRadio5');

var selection = 1;
var code = Math.floor(Math.random() * 99999999) + 1;

checkbox1.addEventListener('click', function() {
    selection = checkbox1.value;
    console.log(selection)
})

checkbox2.addEventListener('click', function() {
    selection = checkbox2.value;
})

checkbox3.addEventListener('click', function() {
    selection = checkbox3.value;  
})

checkbox4.addEventListener('click', function() {
    selection = checkbox4.value;
})

checkbox5.addEventListener('click', function() {
    selection = checkbox5.value;  
})


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
                '<td><button type="button" class="btn btn-info btn-block" data-bs-toggle="modal" data-bs-target="#exampleModal2" onclick="detailTest('+myItems[i].idTest+')">Modificar</button></td>'+
                '<td><button class="btn btn-danger btn-block" onclick="deleteTest('+myItems[i].idTest+')">Borrar</button></td>'+
                '<td><a href="questions.html?idTest='+myItems[i].idTest+'&cant='+myItems[i].cantQuestions+'"><button class="btn btn-success btn-block" onclick="questionsTest('+myItems[i].idTest+')">Agregar Preguntas</button></a></td>'+
            '</tr>'
            }
            $('#bodyTest').html(value)
        }
    })
}

function createTest()
{
    var dataForm =
    {
        code: code,
        test: $('#test').val(),
        cantQuestions: selection
    };

    var dataFormJson = JSON.stringify(dataForm);

    $.ajax({
        url: urlRest,
        type: 'POST',
        data: dataFormJson,
        dataType: 'JSON',
        contentType: 'application/json',
        success: function(response)
        {
            console.log(response);
        }
    });
}

function deleteTest(idTest)
{
    var dataForm =
    {
        idTest: idTest
    };

    var dataFormJson = JSON.stringify(dataForm);

    $.ajax({
        url: urlRest + '/'+idTest,
        type: 'DELETE',
        data: dataFormJson,
        dataType: 'JSON',
        contentType: 'application/json',
        success: function(response)
        {
            console.log(response);
            listTest();
        }
    });
}

function detailTest(idTest)
{
    $.ajax({
        url: urlRest+ '/'+idTest,
        type: 'GET',
        dataType: 'JSON',
        success: function (response)
        {
            var myItems = response[0];
            var value = 
                    '<form id="formTest">'+
                        '<div class="mb-3">'+
                            '<input type="text" class="form-control" id="testUpdate" value="'+myItems.test+'">'+
                        '</div>'+
                        '<div class="modal-footer">'+
                            '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>'+
                            '<button type="submit" class="btn btn-primary" id="btn-create" onclick="updateTest('+myItems.idTest+')">Guardar</button>'+
                            '</tbody>'+
                        '</div>'+
                    '</form>'

            $('#detailTest').html(value)
        }
    })
}


function updateTest(idTest)
{
    var dataForm =
    {
        test: $('#testUpdate').val()
    };

    var dataFormJson = JSON.stringify(dataForm);

    $.ajax({
        url: urlRest+ '/'+idTest,
        type: 'PUT',
        data: dataFormJson,
        dataType: 'JSON',
        contentType: 'application/json',
        success: function(response)
        {
            console.log(response);
            listTest();
        }
    });
}
