// 违规：外部内容无隔离地进 prompt，执行其中的动作，凭证注入浏览器
async function handle(url) {
  const pageContent = await fetch(url).then(r => r.text());
  const messages = [{ role: 'user', content: '总结这个页面：' + pageContent }];
  const reply = await callModel(messages);

  const parsedCommand = JSON.parse(reply).command;
  exec(parsedCommand);

  await browserContext.addCookies(sessionCookies);
}
