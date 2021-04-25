var c =1
function add()
{
    let text_field = $("#element1").val()
    if(text_field==="")
    {
        alert("Add something")
    }
    else
    {
        let val = `<tr id="id_${c}"><td>${text_field}</td><td><button type="button" onclick="myfunction()" id="id_${c}">Delete</button></td><td><button type="button" onclick="complete()" id="id_${c}">Complete</button></td></tr>`
        $("#tbody").append(val)
        localStorage.setItem(c,text_field)
    }
    c++
}
function complete()
{
        let elem = $("#tbody") //event.target.id
        for(let i=0;i<elem[0].rows.length;i++)
        {
            if(elem[0].rows[i].id==event.target.id)
            {
               // alert(elem[0].rows[i].cells[0].innerHTML)
                let val1 = `<tr><td>${elem[0].rows[i].cells[0].innerHTML}</td><td><button type="button">Delete</button></td></tr>`
                $("#tbody1").append(val1)
                elem[0].rows[i].remove()
            }
            
        }
        

}