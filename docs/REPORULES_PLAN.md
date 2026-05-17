# RepoRules.dev — Month 1 执行计划（最终版）

> 最后更新：2026-05-17
> 这不是内容站更新计划，是 **Repository System 更新计划**

---

## 核心原则

1. **不更新**：新闻/AI 热点/博客文章/SEO 水文/2026 最好的 AI 工具
2. **NO MORE UI CHANGES**（允许：spacing 微调、subtle blur、wording 最终修正。禁止：新 section、redesign、layout 改变、新 block、hero 重做）
3. **只更新 3 类内容**：Repository Examples / Workflows / Generator Prompt
4. **更新节奏像工程系统，不是博客**
5. **Examples 质量 > 数量**（Month 1 结束：6 个高质量 examples，不是 10 个半成品）
6. **绝不生成 → 直接发布**。所有内容走四步：DeepSeek 生成 → 你 review → ChatGPT（AutoClaw）review → Claude Code 上线

---

## Month 1 总目标

不是：
- 爆流量 / 做账号 / 做订阅 / 做 dashboard

而是：
- **建立 Repository Governance Credibility**

30 天后用户进 reporules.dev，会觉得：**这个东西真的懂 repository engineering。**

---

## 任务分层（重要）

| 类型 | 负责人 | 用途 |
|------|--------|------|
| 内容创作 | **ChatGPT（AutoClaw）** | 写 examples / workflows / docs / governance text 初稿 |
| 内容审核+修改 | **AutoClaw** | 检查 generic wording，提高真实感，确认可发布 |
| UI/TSX 代码 | **Claude Code** | components/ / app/ / layout / routing / export logic / ZIP / refactor |
| Infra/Security | **人工（你）** | CORS / 限流 / 部署 / KV 配置 |
| 最终上线决定 | **你** | review 通过后点头，然后上线 |

---

## 三步发布流程（禁止跳过）

Step 1 → **ChatGPT（AutoClaw）写内容** — examples / workflows / docs / prompt 调整
Step 2 → **AutoClaw 检查+修改** — 去 generic wording，提真实感
Step 3 → **你最终确认** → Claude Code（代码变更）或直接上线

不允许：生成 → 直接发布

---

## Month 1 计划（可执行版）

### ✅ 已完成（Week 1）

| 项目 | 状态 | Commit |
|------|------|--------|
| CursorRules.fun banner + generator 301 | ✅ Completed | 8bec857 |
| Footer / Navigation 重构 | ✅ Completed | 1f0b19c |
| GA4 三站分离 | ✅ Completed | e364e02 / a7f9abd / e7c6cf2 |
| **Security Hardening** | ✅ Completed | 883f99b / e126a04 |

**Security Hardening 详情：**
- CORS allowlist（仅三站域名可调 API）
- 全局日调用上限 300 次
- IP rate limiting (2/h, 10/day)
- Prompt injection filtering
- Request timeout protection (50s abort)

---

### Week 1 — 产品稳定周

**目标：** homepage freeze + examples 基础可信度

**Homepage stabilization（允许范围）：**
- spacing 微调
- subtle blur
- wording 最终修正（CTA 只改最后一次）
- loading/error wording

**禁止：** 新 section / redesign / layout 改变 / 新 block / hero 重做 / Logo 重做

**Examples（不新增，先精修已有的 5 个）：**
- /examples/nextjs-ai-saas
- /examples/ai-agent-monorepo
- /examples/stripe-billing-system
- Turborepo SaaS
- AI coding agent repo / Supabase backend / Multi-tenant SaaS（选 1-2 个精修）

**完成标准：** 每个 example 必须包含：
1. Repository Signals（Detected stack，具体到库名 + 架构模式）
2. Governance Files（rules.md / memory.md / architecture.md / testing-workflow.md / migration-notes.md）
3. Engineering Decisions（为什么选这个方案，不做假的 lorem ipsum）

**负责人：** DeepSeek（内容）+ AutoClaw（审核）+ 你（最终发布决定）

---

### Week 2 — Generator Realism

**目标：** 消除 generic AI 味，生成结果像真实工程团队

**完成标准（退出条件）：** 连续 5 次生成结果中**不出现**以下任何一种：
- "Follow best practices"
- "Ensure maintainability"
- "Write clean code"
- "Keep files organized"
- "Use modular structure"
- 任何不引用具体库的 vague constraints

**正确结果示例：**
- ✅ "All Stripe webhook validation must remain centralized under /lib/billing/webhooks"
- ✅ "Prisma transaction boundaries cannot be split across server actions"

**Detected stack 提升：**
- 从 "React detected" → "Detected: Next.js App Router / Prisma relational schema / Zod validation layer / Stripe billing integration"

**已完成（从计划删除）：**
- 新增 detected stack section（已存在）
- ZIP metadata（推迟到 Month 2）

**负责人：** DeepSeek 迭代 prompt + AutoClaw 审核 wording

---

### Week 3 — Workflow 深化

**目标：** 建立 engineering depth

**新增 workflow pages（1-2 个）：**
- /workflows/nextjs-saas-team
- /workflows/ai-agent-monorepo
- /workflows/database-migration-safety

**每个 workflow 必须包含：**
- Repository Structure（apps/ / packages/ / shared/）
- AI Constraints（如：Agents cannot modify billing layer）
- Migration Rules（All schema changes require migration review）

**负责人：** DeepSeek（结构生成）+ AutoClaw（真实性 review）+ 你（发布）

---

### Week 4 — 可信度 + 数据

**目标：** 从「工具」开始变「系统」

**KV lightweight metrics（不记录用户敏感数据）：**
| 指标 | 示例 |
|------|------|
| total_generations | 2026-05-17 → 43 |
| success_rate | success: 39, fail: 4 |
| detected_stacks | Next.js: 24, React: 8, Python: 5 |

**不记录：** 用户 repo / package.json / prompt / full outputs

**Empty states / Error wording（统一语气为 engineering console feel）：**

| 场景 | 旧 wording | 新 wording |
|------|-----------|-----------|
| Loading | "Generating..." | "Analyzing repository structure..." |
| Rate limit | "Too many requests" | "Generation limit reached for today. Repository analysis quota resets in 24 hours." |
| Error | "Something went wrong" | "Repository governance generation failed. The detected dependency graph may be unsupported." |

**负责人：** Claude Code（TSX wording 改动）+ 你（review）

**新增 examples（最多 2 个）：** 补到 Month 1 目标 6 个

**完成标准：** 当月生成总量日志可查，所有 wording 统一为 engineering tone

---

## Month 1 最终成果

| 项目 | 目标 |
|------|------|
| Generator 稳定 | 连续 5 次无 generic AI filler |
| Examples | 6 个高质量真实 repo |
| Workflows | 1-2 个含 AI Constraints / Migration Rules |
| UI 稳定 | Freeze 完成，仅允许微调 |
| 安全 | CORS + 限流 + 全局 cap 全部上线 |
| 日志 | KV 轻量 metrics 可查 |

---

## Month 2 之前不做

- Share URLs / Repo Diff / AI Constraints Engine
- Accounts / Auth / Billing
- 完整日志分析系统
- ZIP metadata.json / README.md
- 任何「做功能」性质的开发

---

## 核心一句话（非常重要）

你现在不是「做功能」。而是：**建立工程可信度。**
