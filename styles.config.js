/**
 * 🎮 宝可梦GBA对战画面样式配置
 *
 * 复古像素风格的宝可梦对战界面
 */

export const colors = {
  // 宝可梦GBA经典配色
  background: '#88C070',        // 草地绿色背景
  skyBlue: '#98D8E8',           // 天空蓝

  // 信息框颜色
  infoBoxBg: '#F8F8F8',         // 信息框背景（米白色）
  infoBoxBorder: '#000000',     // 信息框边框
  textDark: '#000000',          // 黑色文字（像素风格）
  textWhite: '#FFFFFF',         // 白色文字

  // HP血条颜色
  hpGreen: '#00D000',           // 健康（绿色）
  hpYellow: '#F8D030',          // 警告（黄色）
  hpRed: '#F83038',             // 危险（红色）
  hpBarBg: '#5A5A5A',           // HP条背景

  // 按钮/菜单颜色
  menuBg: '#E8E8E8',            // 菜单背景
  menuBorder: '#000000',        // 菜单边框
  menuSelected: '#F83038',      // 选中项（红色）

  // 宝可梦平台颜色
  platformEnemy: '#7A8080',     // 敌方平台
  platformPlayer: '#6B8A68',    // 玩家平台
};

export const spacing = {
  // 布局间距
  screenPadding: 16,            // 屏幕边距
  elementGap: 12,               // 元素间隙
  infoBoxPadding: 12,           // 信息框内边距
};

export const sizes = {
  // 文字大小（像素风格，较小）
  pokemonNameSize: 16,          // 宝可梦名称
  levelTextSize: 14,            // 等级文字
  hpTextSize: 12,               // HP文字
  menuTextSize: 18,             // 菜单文字
  dialogTextSize: 16,           // 对话文字

  // 宝可梦图片尺寸
  enemyPokemonSize: 120,        // 敌方宝可梦
  playerPokemonSize: 140,       // 玩家宝可梦

  // UI元素尺寸
  infoBoxWidth: 200,            // 信息框宽度
  infoBoxHeight: 80,            // 信息框高度
  hpBarHeight: 8,               // HP条高度
  borderWidth: 3,               // 边框宽度（像素风格）
  borderRadius: 0,              // 直角（像素风格无圆角）
};

export const effects = {
  // 像素风格无阴影
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0,
  shadowRadius: 0,
  elevation: 0,
};

export const fonts = {
  // 字体粗细（像素风格）
  normalWeight: '600',          // 正常粗细
  boldWeight: 'bold',           // 粗体
};

/**
 * 📝 快速修改指南：
 *
 * 1. 修改颜色：
 *    - 使用十六进制颜色代码，如 '#FF0000'（红色）
 *    - 可以用取色器工具获取颜色代码
 *
 * 2. 修改大小：
 *    - 数字单位是像素(px)
 *    - 数字越大，元素越大
 *
 * 3. 修改间距：
 *    - 增加数字 = 元素之间距离变大
 *    - 减少数字 = 元素之间距离变小
 *
 * 4. 保存文件后：
 *    - 浏览器会自动刷新
 *    - 如果没有自动刷新，按 Ctrl+R 手动刷新
 */
