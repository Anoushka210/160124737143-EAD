let p = new Promise((res, rej)=>{
  let ok = true;
  ok ? res("Done") : rej("Error");
});

p.then(r => console.log(r))
 .catch(e => console.log(e));