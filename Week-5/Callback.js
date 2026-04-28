function greet(name, cb) {
  console.log("Hello " + name);
  cb();
}

function bye() {
  console.log("Bye!");
}

greet("Rahul", bye);