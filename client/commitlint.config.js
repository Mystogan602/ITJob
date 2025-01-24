module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat", // Tính năng mới
        "fix", // Sửa lỗi
        "docs", // Tài liệu
        "style", // Style, format code
        "refactor", // Tái cấu trúc code
        "perf", // Cải thiện hiệu suất
        "test", // Thêm test
        "chore", // Công việc thường xuyên
        "revert", // Hoàn tác commit
        "build", // Build
        "ci", // CI
      ],
    ],
  },
};
