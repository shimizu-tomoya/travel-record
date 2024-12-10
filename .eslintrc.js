module.exports = {
  extends: [
    // 基本的なルールが記載されているため必要
    "eslint:recommended",
    // nextの推奨ルールのため必要
    "next/core-web-vitals",
    // ESLintにはコードの書式設定ルールも含まれており、競合する可能性があるため必要。
    "prettier",
  ],
};
