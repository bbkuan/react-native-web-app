import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

// 导入音频文件
import buttonSfx from './sounds/button-click.mp3';
import bgMusic from './sounds/background-music.mp3';

// 导入样式配置（设计师可以修改 styles.config.js 来调整UI）
import { colors, spacing, sizes, effects, fonts } from './styles.config';

export default function App() {
  const [battleMessage, setBattleMessage] = useState('What will PIKACHU do?');
  const [playerHP, setPlayerHP] = useState(85); // 玩家HP百分比
  const [enemyHP, setEnemyHP] = useState(100); // 敌方HP百分比
  const bgMusicRef = useRef(null);
  const buttonSfxRef = useRef(null);

  // 页面加载时初始化音频
  useEffect(() => {
    // 创建背景音乐音频对象
    bgMusicRef.current = new Audio(bgMusic);
    bgMusicRef.current.loop = true; // 循环播放
    bgMusicRef.current.volume = 0.3; // 音量30%

    // 创建按钮音效音频对象
    buttonSfxRef.current = new Audio(buttonSfx);
    buttonSfxRef.current.volume = 0.5; // 音量50%

    // 尝试自动播放背景音乐（某些浏览器可能需要用户交互）
    const playBgMusic = async () => {
      try {
        await bgMusicRef.current.play();
        console.log('背景音乐开始播放');
      } catch (error) {
        console.log('自动播放被阻止，点击按钮将启动背景音乐');
      }
    };
    playBgMusic();

    // 清理函数
    return () => {
      if (bgMusicRef.current) {
        bgMusicRef.current.pause();
        bgMusicRef.current = null;
      }
      if (buttonSfxRef.current) {
        buttonSfxRef.current.pause();
        buttonSfxRef.current = null;
      }
    };
  }, []);

  // 战斗按钮点击处理
  const handleAttack = (attackName) => {
    // 播放按钮音效
    if (buttonSfxRef.current) {
      buttonSfxRef.current.currentTime = 0;
      buttonSfxRef.current.play().catch(error => {
        console.log('音效播放失败:', error);
      });
    }

    // 如果背景音乐还没播放，点击按钮时启动
    if (bgMusicRef.current && bgMusicRef.current.paused) {
      bgMusicRef.current.play().catch(error => {
        console.log('背景音乐播放失败:', error);
      });
    }

    // 模拟攻击效果
    setBattleMessage(`PIKACHU used ${attackName}!`);

    // 减少敌方HP
    setTimeout(() => {
      const damage = Math.floor(Math.random() * 30) + 20;
      setEnemyHP(prev => Math.max(0, prev - damage));
      setBattleMessage('It\'s super effective!');
    }, 800);

    // 恢复消息
    setTimeout(() => {
      setBattleMessage('What will PIKACHU do?');
    }, 2500);
  };

  // 获取HP条颜色
  const getHPColor = (hp) => {
    if (hp > 50) return colors.hpGreen;
    if (hp > 20) return colors.hpYellow;
    return colors.hpRed;
  };

  return (
    <View style={styles.battleScreen}>
      {/* 顶部：敌方宝可梦区域 */}
      <View style={styles.topSection}>
        {/* 敌方信息框（左上） */}
        <View style={styles.enemyInfoBox}>
          <Text style={styles.pokemonName}>CHARIZARD</Text>
          <Text style={styles.levelText}>Lv52</Text>
          <View style={styles.hpBarContainer}>
            <View style={styles.hpBarBg}>
              <View style={[styles.hpBarFill, { width: `${enemyHP}%`, backgroundColor: getHPColor(enemyHP) }]} />
            </View>
          </View>
        </View>

        {/* 敌方宝可梦图片（右上） */}
        <View style={styles.enemyPokemonArea}>
          <View style={styles.enemyPlatform} />
          <Image
            source={{ uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png' }}
            style={styles.enemyPokemon}
          />
        </View>
      </View>

      {/* 底部：玩家宝可梦区域 */}
      <View style={styles.bottomSection}>
        {/* 玩家宝可梦图片（左下） */}
        <View style={styles.playerPokemonArea}>
          <View style={styles.playerPlatform} />
          <Image
            source={{ uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png' }}
            style={styles.playerPokemon}
          />
        </View>

        {/* 玩家信息框（右下） */}
        <View style={styles.playerInfoBox}>
          <Text style={styles.pokemonName}>PIKACHU</Text>
          <Text style={styles.levelText}>Lv45</Text>
          <View style={styles.hpBarContainer}>
            <Text style={styles.hpText}>HP:</Text>
            <View style={styles.hpBarBg}>
              <View style={[styles.hpBarFill, { width: `${playerHP}%`, backgroundColor: getHPColor(playerHP) }]} />
            </View>
          </View>
          <Text style={styles.hpNumbers}>{Math.floor(playerHP * 1.5)}/150</Text>
        </View>
      </View>

      {/* 底部对话框和菜单 */}
      <View style={styles.bottomUI}>
        {/* 对话框 */}
        <View style={styles.dialogBox}>
          <Text style={styles.dialogText}>{battleMessage}</Text>
        </View>

        {/* 战斗菜单 */}
        <View style={styles.battleMenu}>
          <TouchableOpacity style={styles.menuButton} onPress={() => handleAttack('THUNDERBOLT')}>
            <Text style={styles.menuButtonText}>THUNDERBOLT</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButton} onPress={() => handleAttack('QUICK ATTACK')}>
            <Text style={styles.menuButtonText}>QUICK ATTACK</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButton} onPress={() => handleAttack('IRON TAIL')}>
            <Text style={styles.menuButtonText}>IRON TAIL</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButton} onPress={() => handleAttack('ELECTRO BALL')}>
            <Text style={styles.menuButtonText}>ELECTRO BALL</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

// 宝可梦GBA对战画面样式
const styles = StyleSheet.create({
  // 主战斗屏幕
  battleScreen: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.screenPadding,
  },

  // === 顶部区域（敌方） ===
  topSection: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingTop: 20,
  },
  enemyInfoBox: {
    backgroundColor: colors.infoBoxBg,
    borderWidth: sizes.borderWidth,
    borderColor: colors.infoBoxBorder,
    padding: spacing.infoBoxPadding,
    width: sizes.infoBoxWidth,
    minHeight: sizes.infoBoxHeight,
  },
  enemyPokemonArea: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginRight: 40,
  },
  enemyPlatform: {
    width: 100,
    height: 15,
    backgroundColor: colors.platformEnemy,
    borderRadius: 50,
    marginBottom: -10,
  },
  enemyPokemon: {
    width: sizes.enemyPokemonSize,
    height: sizes.enemyPokemonSize,
    imageRendering: 'pixelated',
  },

  // === 底部区域（玩家） ===
  bottomSection: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingBottom: 20,
  },
  playerPokemonArea: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginLeft: 20,
  },
  playerPlatform: {
    width: 120,
    height: 18,
    backgroundColor: colors.platformPlayer,
    borderRadius: 60,
    marginBottom: -15,
  },
  playerPokemon: {
    width: sizes.playerPokemonSize,
    height: sizes.playerPokemonSize,
    imageRendering: 'pixelated',
  },
  playerInfoBox: {
    backgroundColor: colors.infoBoxBg,
    borderWidth: sizes.borderWidth,
    borderColor: colors.infoBoxBorder,
    padding: spacing.infoBoxPadding,
    width: sizes.infoBoxWidth,
    minHeight: sizes.infoBoxHeight + 20,
  },

  // === 宝可梦信息样式 ===
  pokemonName: {
    fontSize: sizes.pokemonNameSize,
    fontWeight: fonts.boldWeight,
    color: colors.textDark,
    marginBottom: 4,
  },
  levelText: {
    fontSize: sizes.levelTextSize,
    fontWeight: fonts.normalWeight,
    color: colors.textDark,
    marginBottom: 8,
  },

  // === HP条样式 ===
  hpBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  hpText: {
    fontSize: sizes.hpTextSize,
    fontWeight: fonts.boldWeight,
    color: colors.textDark,
  },
  hpBarBg: {
    flex: 1,
    height: sizes.hpBarHeight,
    backgroundColor: colors.hpBarBg,
    borderWidth: 1,
    borderColor: colors.textDark,
    overflow: 'hidden',
  },
  hpBarFill: {
    height: '100%',
    transition: 'width 0.5s ease',
  },
  hpNumbers: {
    fontSize: sizes.hpTextSize,
    fontWeight: fonts.normalWeight,
    color: colors.textDark,
    marginTop: 4,
    textAlign: 'right',
  },

  // === 底部UI（对话框和菜单） ===
  bottomUI: {
    flex: 2,
    justifyContent: 'flex-end',
  },
  dialogBox: {
    backgroundColor: colors.infoBoxBg,
    borderWidth: sizes.borderWidth,
    borderColor: colors.infoBoxBorder,
    padding: spacing.infoBoxPadding + 4,
    marginBottom: spacing.elementGap,
    minHeight: 70,
  },
  dialogText: {
    fontSize: sizes.dialogTextSize,
    fontWeight: fonts.normalWeight,
    color: colors.textDark,
    lineHeight: 24,
  },

  // === 战斗菜单 ===
  battleMenu: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.elementGap,
  },
  menuButton: {
    backgroundColor: colors.menuBg,
    borderWidth: sizes.borderWidth,
    borderColor: colors.menuBorder,
    padding: 12,
    width: '48%',
    alignItems: 'center',
  },
  menuButtonText: {
    fontSize: sizes.menuTextSize,
    fontWeight: fonts.boldWeight,
    color: colors.textDark,
  },
});
