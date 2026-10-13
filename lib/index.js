import { createPlugin, pkgRootFrom } from '@deepwhale-cn/dsh-guard-core/plugin';

export const { name, inject, apply } = createPlugin({
  name: 'content-trust',
  pkgRoot: pkgRootFrom(import.meta.url),
  skillFile: 'skill/content-trust.md',
  binFile: 'bin/cli.mjs',
  description: '查 agent 有没有把外部内容（网页/文件/邮件）当指令信 —— 间接提示注入的入口',
  whenToUse: 'TODO：写清什么时候该用（用户会说的话也列上）',
});
