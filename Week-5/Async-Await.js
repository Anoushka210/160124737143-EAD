async function test(){
  let data = await Promise.resolve("Loaded");
  console.log(data);
}
test();