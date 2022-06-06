var urlRest = 'http://localhost:3000/questions';
var urlRestAns = 'http://localhost:3000/answer';
const valores = window.location.search;

//Creamos la instancia
const urlParams = new URLSearchParams(valores);

//Accedemos a los valores
var idTest = urlParams.get('idTest');
var cantQuestions = urlParams.get('cant');

//Mostramos los valores en consola:
console.log(idTest, cantQuestions);

// Checks en False
var check1 = 0;
var check2 = 0;
var check3 = 0;

var finalId = 0;


// Estrayendo ulimo id de las preguntas
$(document).ready(function () {
    questionNum();
});

function questionNum()
{
    $.ajax({
        url: urlRest,
        type: 'GET',
        dataType: 'JSON',
        success: function (response)
        {
            var myQues = response;
            positionQues = myQues.length-1;
            finalId = myQues[positionQues].idQuestion;
            prueba(finalId);
        }
    })
}

function prueba(number)
{
    finalId = number+1;
}

var value = '';
for (let i = 0; i < cantQuestions; i++)
{
    value +=
    '<label for="formGroupExampleInput" class="form-label">Agregar Pregunta '+(i+1)+'</label>'+
    '<input type="text" class="form-control" id="question'+i+'"></input> <br>'+
    '<div class="row g-3">'+
        '<label class="col-sm-2 col-form-label">Respuesta '+((i*3)+1)+':</label>'+
        '<div class="col-sm-7">'+
            '<input id="answer'+((i*3)+1)+'" type="text" class="form-control">'+
        '</div>'+
        '<div class="col-sm">'+
            '<input class="valores" type="radio" name="gridRadios'+i+'" id="check1"> Correcta'+
        '</div>'+
    '</div>'+
    '<div class="row g-3">'+
        '<label class="col-sm-2 col-form-label">Respuesta '+((i*3)+2)+':</label>'+
        '<div class="col-sm-7">'+
            '<input id="answer'+((i*3)+2)+'" type="text" class="form-control">'+
        '</div>'+
        '<div class="col-sm">'+
            '<input class="valores" type="radio" name="gridRadios'+i+'" id="check2"> Correcta'+
        '</div>'+
    '</div>'+
    '<div class="row g-3">'+
        '<label class="col-sm-2 col-form-label">Respuesta '+((i*3)+3)+':</label>'+
        '<div class="col-sm-7">'+
            '<input id="answer'+((i*3)+3)+'" type="text" class="form-control">'+
        '</div>'+
        '<div class="col-sm">'+
            '<input class="valores" type="radio" name="gridRadios'+i+'" id="check3"> Correcta'+
        '</div>'+
    '</div><br><br>'
}

$('#inputFor').html(value)


// var boton = document.getElementById('boton');
// var lista = document.getElementById('lista');
// var checks = document.querySelectorAll('.valores');

// boton.addEventListener('click', function()
// {
//     checks.forEach((e)=>{
//         console.log(e.value)
//     });
// });

//validando checkbox
// var checkbox1 = document.getElementById('check1');
// checkbox1.addEventListener("change", validarCheckbox1);
// function validarCheckbox1()
// {
// if(checkbox1.checked){
//     check1 = 1;
//     check2 = 0;
//     check3 = 0;
//     }
//     console.log(check1, check2, check3)
// }

// var checkbox2 = document.getElementById('check2');
// checkbox2.addEventListener("change", validarCheckbox2);
// function validarCheckbox2()
// {
// if(checkbox2.checked){
//     check1 = 0;
//     check2 = 1;
//     check3 = 0;
//     console.log(check1, check2, check3)
//     }
// }

// var checkbox3 = document.getElementById('check3');
// checkbox3.addEventListener("change", validarCheckbox3);
// function validarCheckbox3()
// {
// if(checkbox3.checked){
//     check1 = 0;
//     check2 = 0;
//     check3 = 1;
//     console.log(check1, check2, check3)
//     }
// }


function questionsTest()
{
    for (let i = 0; i < cantQuestions; i++)
    {
        var dataForm =
        {
            question: $('#question'+i).val(),
            idTest: idTest
        };

        var dataFormJson = JSON.stringify(dataForm);

        // Guardando respuestas
        var ans1 = $('#answer'+((i*3)+1)).val();
        var ans2 = $('#answer'+((i*3)+2)).val();
        var ans3 = $('#answer'+((i*3)+3)).val();

        //validando checkbox
        // var checkbox1 = document.getElementById('check1');
        // checkbox1.addEventListener("change", validarCheckbox1);
        // function validarCheckbox1()
        // {
        // if(checkbox1.checked){
        //     check1 = 1;
        //     check2 = 0;
        //     check3 = 0;
        //     }
        //     console.log(check1, check2, check3)
        // }

        // var checkbox2 = document.getElementById('check2');
        // checkbox2.addEventListener("change", validarCheckbox2);
        // function validarCheckbox2()
        // {
        // if(checkbox2.checked){
        //     check1 = 0;
        //     check2 = 1;
        //     check3 = 0;
        //     console.log(check1, check2, check3)
        //     }
        // }

        // var checkbox3 = document.getElementById('check3');
        // checkbox3.addEventListener("change", validarCheckbox3);
        // function validarCheckbox3()
        // {
        // if(checkbox3.checked){
        //     check1 = 0;
        //     check2 = 0;
        //     check3 = 1;
        //     console.log(check1, check2, check3)
        //     }
        // }

        $.ajax({
            url: urlRest,
            type: 'POST',
            data: dataFormJson,
            dataType: 'JSON',
            contentType: 'application/json',
            success: function (response) {
                console.log(response)
            }
        })

        // var idQuest = (finalId + 1) + i;

        var dataForm2 =
            {
                answer1: ans1,
                answer2: ans2,
                answer3: ans3,
                // correctIncorrect1: check1,
                // correctIncorrect2: check2,
                // correctIncorrect3: check3,
                idQuestion: finalId+i
            };
    
        var dataFormJson2 = JSON.stringify(dataForm2);

        $.ajax({
            url: urlRestAns,
            type: 'POST',
            data: dataFormJson2,
            dataType: 'JSON',
            contentType: 'application/json',
            success: function(response)
            {
                console.log(response);
            }
        });
    }
}