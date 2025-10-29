# 🚀 GitHub Pages 部署指南

您的宝可梦GBA对战应用已经准备好部署到GitHub Pages了！

## ✅ 已完成的配置

- ✅ 安装了 `gh-pages` 部署工具
- ✅ 配置了 `package.json` 部署脚本
- ✅ 初始化了 Git 仓库
- ✅ 创建了 `.gitignore` 文件
- ✅ 完成了初始提交

## 📋 接下来的步骤

### 步骤1: 在GitHub上创建仓库

1. 访问 https://github.com/new
2. 仓库名称填写：`react-native-web-app`
3. 设置为 **Public**（公开）
4. **不要**勾选 "Add a README file"
5. 点击 "Create repository"

### 步骤2: 连接到GitHub仓库

打开命令行，在项目目录执行：

```bash
cd C:\Users\kychen\react-native-web-app

# 设置远程仓库（替换YOUR_GITHUB_USERNAME为你的用户名）
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/react-native-web-app.git

# 推送到GitHub
git branch -M main
git push -u origin main
```

### 步骤3: 修改 homepage 配置

打开 `package.json`，找到第6行：

```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/react-native-web-app",
```

**替换 `YOUR_GITHUB_USERNAME` 为你的GitHub用户名**

例如，如果你的用户名是 `pikachu123`，改为：
```json
"homepage": "https://pikachu123.github.io/react-native-web-app",
```

保存文件并提交：
```bash
git add package.json
git commit -m "Update homepage URL"
git push
```

### 步骤4: 部署到GitHub Pages

在项目目录执行：

```bash
npm run deploy
```

这个命令会：
1. 自动构建生产版本（`npm run build`）
2. 将 `dist` 文件夹部署到 `gh-pages` 分支
3. 自动推送到GitHub

### 步骤5: 启用GitHub Pages

1. 访问你的仓库页面：`https://github.com/YOUR_GITHUB_USERNAME/react-native-web-app`
2. 点击 **Settings** (设置)
3. 左侧菜单找到 **Pages**
4. 在 "Source" 下，应该已经自动选择了 `gh-pages` 分支
5. 点击 **Save**

### 步骤6: 访问你的网站！

等待1-2分钟后，访问：

```
https://YOUR_GITHUB_USERNAME.github.io/react-native-web-app
```

恭喜！你的宝可梦GBA对战应用已经在线了！🎮⚡

## 🔄 后续更新

当你修改代码后，更新部署很简单：

```bash
# 1. 提交更改
git add .
git commit -m "描述你的更改"
git push

# 2. 重新部署
npm run deploy
```

## 📝 常见问题

### Q: 部署后页面是空白的
A: 检查浏览器控制台错误，可能是路径问题。确保 `homepage` 配置正确。

### Q: 部署失败
A: 确保：
- Git remote 已正确设置
- 已推送代码到 GitHub
- 有权限推送到仓库

### Q: 404 错误
A:
1. 确认 GitHub Pages 已启用
2. 等待几分钟让GitHub处理部署
3. 检查仓库设置中的 Pages 配置

## 🎨 自定义域名（可选）

如果你有自己的域名：

1. 在仓库根目录创建 `public/CNAME` 文件
2. 写入你的域名，如：`mybattle.com`
3. 在域名提供商处设置DNS：
   - CNAME记录指向：`YOUR_GITHUB_USERNAME.github.io`
4. 重新部署

## 📊 部署命令说明

```bash
npm run build      # 只构建，不部署
npm run deploy     # 构建并部署到GitHub Pages
npm start          # 本地开发服务器
```

## 🌟 进阶配置

### 添加自定义404页面

在 `public` 文件夹创建 `404.html`

### 启用HTTPS

GitHub Pages 自动支持HTTPS，在仓库设置的 Pages 页面勾选 "Enforce HTTPS"

### 添加Google Analytics

在 `index.html` 中添加 Google Analytics 代码

---

需要帮助？查看：
- GitHub Pages 文档：https://docs.github.com/pages
- gh-pages 工具：https://github.com/tschaub/gh-pages

祝部署顺利！🚀
