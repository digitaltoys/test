var result = undefined;
function onRunClick() {
  result = undefined;
  let param = document.getElementById("param").value || '';
  eval('param = '+param);
  let func = eval('(param)=>{'+document.getElementById("func").value+'}');
  result = func(param);
  document.getElementById("resultmsg").innerHTML = (result == eval(document.getElementById("require").innerText))? 'Success':'Fail';
  document.getElementById("result").innerHTML = result || '';
}
