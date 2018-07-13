const readline = require('readline')

const completer = (line) => {
  const command = 'npm';
  const subCommand = ['help', 'init', 'install'];
  // 小于Command时，line是command 一部分 补全一下
  if (line.length < command.length) {
    return [command.indexOf(line) === 0 ? [command] : [], line]
  }
  let hints = subCommand.filter(subCommand => {
    const lineTrippedCommand = line.replace(command, '').trim();
    return lineTrippedCommand && subCommand.indexOf(lineTrippedCommand) === 0
  });
  if (hints.length === 1) {
    hints = hints.map(function (hit) {
      return [command, hit].join(' ');
    })
  }
  // 匹配到多个或者没有匹配到
  return [hints.length ? hints : subCommand, line]
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  completer: completer
})
rl.prompt();