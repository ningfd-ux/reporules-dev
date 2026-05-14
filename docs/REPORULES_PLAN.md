# RepoRules.dev — 长期更新计划

> 最后更新：2026-05-14
> 这不是内容站更新计划，是 **Repository System 更新计划**。

---

## 核心原则

1. **不更新**：新闻 / AI 热点 / 博客文章 / SEO 水文 / 「2026 最好的 AI 工具」
2. **不继续改 UI**：Homepage、颜色、卡片、按钮、文案、Section 全部冻结
3. **只更新 3 类内容**：Repository Examples / Workflows / Generator Prompt
4. **更新节奏像工程系统，不是博客**

---

## 三阶段路线图

| 阶段 | 时间 | 目标 | 做什么 |
|------|------|------|--------|
| **Phase 1**：稳定期 | 现在 → 4 周后 | 积累 10-15 个真实 repo examples，建立可信度 | 每周 1 example + 每月 1 workflow + prompt 微调 |
| **Phase 2**：Repository Intelligence | 第 2 个月 | Generator 升级为分析引擎 | Analyze、Drift Detection、Governance Audit |
| **Phase 3**：AI Governance Platform | 第 3-6 个月 | 成为 AI coding infra | GitHub Analyze、Repo Diff、AI Constraints Engine |

---

## 更新频率（最终版）

| 类型 | 频率 | 具体内容 |
|------|------|---------|
| **Repository Example** | 每周 1 个 | 真实工程案例：package.json + 6 files + incidents + tech debt |
| **Workflow** | 每月 1 个 | 新增 /workflows 页面 |
| **Generator Prompt 优化** | 每月 1 次 | 增强 repository realism，降低 generic AI wording |
| **真功能更新** | 每季度 1 次 | Share URL → GitHub Analyze → Repo Diff → AI Constraints |

---

## 每周更新流程

```
你 → 说「给我本周的 example」
                    ↓
我 → 5 分钟出完整 data/examples/xxx.ts（含 files + incidents + tech debt）
                    ↓
你 → 复制给 Claude Code
                    ↓
Claude Code → 写入项目 + git commit + git push
                    ↓
你 → 验证页面 / tabs / ZIP / mobile（30 分钟）
                    ↓
Cloudflare → 自动部署（5 分钟）
```

**总耗时：1-2 小时，半天内完成。**

---

## 12 周内容排期

### Weeks 1-4（当前阶段 — Examples 积累期）

| 周 | 内容 | 类型 | 工程主题 |
|----|------|------|---------|
| **Week 1** | Next.js AI SaaS | Example | Stripe billing + auth migration 问题 |
| **Week 2** | AI Agent Monorepo | Example | Agent routing 边界泄漏 |
| **Week 3** | Supabase SaaS | Example | RLS migration 破坏了 admin dashboard |
| **Week 4** | **Supabase SaaS Workflow** | **Workflow** | 月更 workflow，含 repository structure + constraints + incidents |

### Weeks 5-8

| 周 | 内容 | 类型 | 工程主题 |
|----|------|------|---------|
| **Week 5** | Stripe Billing System | Example | webhook retry queue 重复 invoice events |
| **Week 6** | RAG Infrastructure | Example | embedding migration 无效化 vector index |
| **Week 7** | Vercel AI SDK App | Example | edge streaming bypassed validation middleware |
| **Week 8** | **AI Agent Workflow** | **Workflow** | 月更 workflow |

### Weeks 9-12

| 周 | 内容 | 类型 | 工程主题 |
|----|------|------|---------|
| **Week 9** | OpenAI SDK Backend | Example | model routing + fallback + retry systems |
| **Week 10** | Enterprise Monorepo | Example | turborepo + shared contracts + package governance |
| **Week 11** | Claude Code Workspace | Example | AI pair programming + governance prompts |
| **Week 12** | **Enterprise Monorepo Workflow** | **Workflow** | 月更 workflow |

---

## 每月必须做的事

### Generator Prompt 优化

- Claude 修改 `prompts/generator.ts`
- **增强**：repository realism / incidents / migration conflicts / technical debt / architecture drift
- **降低**：generic AI wording（clean code / best practice）

---

## 季度功能计划

| Quarter | 功能 | 说明 |
|---------|------|------|
| **Q1** | Share URLs | `/g/82ksjs` 分享生成的 governance 包 |
| **Q2** | GitHub Analyze | 输入 GitHub URL，自动分析 architecture drift / duplicated validation / migration risks / unsafe AI patterns |
| **Q3** | Repo Diff | 比较应用 governance 前后的变化 |
| **Q4** | AI Constraints Engine | 自动生成 AI-safe repository rules |

---

## Example 内容模板（每个必须包含）

一个合格的 Repository Example 必须包含：

```
📁 example/
├── package.json          # 真实感的依赖
├── rules.md              # AI 约束层
├── memory.md             # AI 上下文层
├── architecture.md       # AI 架构边界层
├── claude.md             # Claude 专用配置
├── .cursorrules          # Cursor 专用配置
├── testing-workflow.md   # 测试工作流
├── migration-notes.md    # 迁移问题
├── incidents.json        # 工程事故日志
│
│  每个 incidents 必须包含：
│  ├── Migration Problems    例：analytics pipeline bypassed migration check
│  ├── Technical Debt        例：duplicated auth hooks across 3 packages
│  └── Incidents             例：billing validation layer disabled during refactor
│
└── data.ts               # 页面数据结构
```

### 内容质量铁律

| ✅ 必须 | ❌ 禁止 |
|---------|--------|
| 「billing service bypassed validation layer during migration」 | 「Always write clean code」 |
| 「shared analytics hooks duplicated during dashboard rewrite」 | 「Use best practices」 |
| 「duplicated zod validators in 3 services」 | 「Avoid duplication」 |
| 真实的 migration 失败案例 | 泛泛的工程建议 |

---

## 当前状态（2026-05-14）

| 维度 | 状态 |
|------|------|
| 产品定位 | ✅ Repository Operating System |
| Generator 功能闭环 | ✅ File tabs + ZIP export |
| Rate limit 保护 | ✅ 2/h, 5/d per IP, KV binding |
| 真实 examples | ✅ 3 个真输出案例 |
| 全站工程感 | ✅ 已达可信水平 |
| Cloudflare KV | ✅ REPORULES_RATE_LIMIT (ID: 191f6503571c4861b8c0b7e752a938d6) |
| Analytics | ✅ GA4 (G-9QVY2VBRN4) + Cloudflare RUM |
| 开源时间 | ⚠️ Generator timeout 未解决（Cloudflare 30s 限制） |
