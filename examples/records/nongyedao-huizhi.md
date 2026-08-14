# 农业岛 / HUIZHI-nongyeOS-cloud

- Status: `candidate`
- Region / reach: China (national / developer and SI contractor ecosystem on Gitee and GitHub)
- Project: https://gitee.com/dnxt111/wisdom / https://github.com/roinli/HUIZHI-nongyeOS-cloud
- Live docs: http://nongyedao.nxptdn.com/
- Field-guide context: addresses the open-source agricultural IoT, greenhouse telemetry, and high-standard farmland management software layer in China
- Last checked: 2026-08-14

## Problem addressed

Engineering contractors and regional system integrators (SIs) bidding on Chinese municipal smart agriculture, greenhouse monitoring, and "High-Standard Farmland" (高标准农田) projects require full-stack IoT platforms to connect RS485 sensors, weather stations, irrigation solenoids, and video surveillance cameras to centralized management dashboards. Proprietary enterprise platforms charge steep per-device licensing fees.

## Open layer

Full software source code published under the permissive MIT License:
- Backend: Java SpringBoot, Netty, EMQX, MQTT, MySQL, MyBatis Plus.
- Frontend: Vue.js 2.x, Element UI, Uni-app (cross-platform WeChat mini-programs, iOS, Android, H5 mobile).

## What is actually open

- Code: MIT License, repository `roinli/HUIZHI-nongyeOS-cloud` (348 stars, checked 2026-08-14) and Gitee mirrors.
- Features: Real-time telemetry ingestion (weather stations, soil sensors), remote relay actuation, greenhouse climate monitoring, device property models (物模型), and executive visual big-screen dashboards (大屏展示).

## Governance and control

Maintained by commercial enterprise developers (Nongyedao team) as an open-source core with commercial enterprise consulting and customized hardware integration services.

## Evidence of use

- Widely forked and deployed across Gitee as the baseline template for Chinese smart agriculture IoT projects.
- Deployed in municipal greenhouse monitoring, high-standard farmland pilot zones, and agricultural university student engineering projects.

## Maintenance and funding

Commercial open-source business model funded through commercial customization, turnkey hardware integration, and enterprise licensing support.

## Why it belongs

`农业岛` is the primary benchmark for active Chinese open-source agricultural software on Gitee/GitHub. It demonstrates that open software in China predominantly thrives as **system-integrator scaffolding for B2B/B2G smart farm contracts**, contrasting with Western peer-to-peer farmer record-keeping tools like `farmOS`.

## What it does not demonstrate

It is an enterprise/contractor monitoring platform; it does not incorporate farmer-governed cooperative data permissions (like JoinData) or biological crop-growth models (like AquaCrop).

## Sources and verification

- GitHub: https://github.com/roinli/HUIZHI-nongyeOS-cloud (MIT; verified 2026-08-14)
- Gitee: https://gitee.com/dnxt111/wisdom
- Verification pass: research/2026-08-china-open-agrifood-ecosystem-scan.md
- Last checked: 2026-08-14

Not legal advice.
