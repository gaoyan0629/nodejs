const rl = require('readline');
const chalk = require('chalk')
function prompt(question) {
  const r = rl.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  });
  return new Promise((resolve, error) => {
    r.question(question, answer => {
      r.close()
      resolve(answer)
    });
  })
}


function newTodo() {
  const q = chalk.blue('Type in your todo\n')
  prompt(q).then(todo => {
    console.log(todo)
  })
  console.log('I can see this line')
}

newTodo()
console.log('I cannot see this')
