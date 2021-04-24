function task1()
{ 
    var counter=9
    var inter = setInterval(my_fun,1000)
    let P_id_1 = $("#task1")
    
    function my_fun()
    {
        if(counter==0)
        {
            clearInterval(inter)
        }
        else
        {
            P_id_1.text(counter)

        }
        counter--
    }
}
let text_value=$("#number1")
$("#radios").children().click(function(){
    if(event.target.value==="isEven")
    {
        isEven(parseInt(text_value.val()))
    }
   else if(event.target.value==="isOdd")
    {
        isOdd(parseInt(text_value.val()))
    }
   else if(event.target.value==="isPrime")
    {
        isPrime(parseInt(text_value.val()))
    }

})
function isEven(val)
{
    if(val%2==0)
    {
        alert('true')
        return true
    }
    else
    {
        alert("false")
        return false
    }
}
function isOdd(val)
{
    if(val%2==0)
    {
        alert('false')
        return false
    }
    else
    {
        alert("ture")
        return true
    }
}
function isPrime(val)
{
    if(val==1)
    {
        alert('prime')
    }
    else
    {
        for(let i=2;i<val;i++)
        {
            if(val%i==0)
            {
                alert("NOT PRIME")
                return false
            }
        }
        alert("prime")
        return true
    }
  

}
function task5()
{
    let num_value = $("#text1")
    let operation_1 = $("#text2")
    if(operation_1.val()=="Even" || operation_1.val()=="even")
    {
        isEven(parseInt(num_value.val()))
    }
    else if(operation_1.val()=="odd" || operation_1.val()=="Odd")
    {
        isOdd(parseInt(num_value.val()))
    }
    if(operation_1.val()=="prime" || operation_1.val()=="Prime")
    {
        isPrime(parseInt(num_value.val()))
    }

}
var checkvalue;
 $("#radios2").children().click(function(){
    checkvalue= event.target.value
 })
function task6()
{
   var check=true
    let text_for_find = $("#text_1_find").val().toString()
    let text_for_findindexorvale= $("#text_2_find").val()
    let text_for_i_v=parseInt(text_for_findindexorvale)
   let check_radio_state = $("#radios2").children()
   let array = text_for_find.split(",")
   let arr=[]
   array.forEach(element => {
       arr.push(element)
   });
   if(checkvalue=="findvalue")
   {
    findItem(arr)
   }
   else if(checkvalue=="findindex")
   {
    findIndex(parseInt(arr))
   }
   function findItem(arr)
   {
     alert(arr.find((itm)=>{
           return itm > text_for_i_v
       }))
   }
   function findIndex(arr)
   {
      alert(arr.findIndex((item)=>{
          return itm == text_for_i_v
      }))
   }
}
