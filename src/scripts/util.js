/**
 * 按博客发布日期排序
 * @returns 
 */
export function sortPosts(posts) {
  let map = new Map();
  for (let post of posts) {
    let pubTime = new Date(post.data.pubDate).getTime();
    if (map.has(pubTime)) {
      map.get(pubTime).push(post)
    } else {
      map.set(pubTime, [post])
    }
  }
  let sortedTimes = [...map.keys()]
    .sort((x, y) => x - y)
    .reverse();
  let sortedPosts = [];
  for (let time of sortedTimes) {
    sortedPosts = sortedPosts.concat(map.get(time));
  }
  return sortedPosts;
}

/*
 * 生成随机颜色
 * @returns {string} 颜色值，如：#ffffff
 */
export function generateColor() {
  // 随机生成色相
  const hue = Math.floor(Math.random() * 360);
  // 随机生成饱和度在50%~100%之间
  const saturation = Math.floor(Math.random() * 50) + 50;
  // 随机生成亮度在40%~90%之间
  const lightness = Math.floor(Math.random() * 40) + 50;

  // 将 HSL 转为 RGB
  const h = hue / 60;
  const s = saturation / 100;
  const l = lightness / 100;
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs((h % 2) - 1));
  const m = l - c / 2;
  let r, g, b;
  if (0 <= h && h < 1) {
    [r, g, b] = [c, x, 0];
  } else if (1 <= h && h < 2) {
    [r, g, b] = [x, c, 0];
  } else if (2 <= h && h < 3) {
    [r, g, b] = [0, c, x];
  } else if (3 <= h && h < 4) {
    [r, g, b] = [0, x, c];
  } else if (4 <= h && h < 5) {
    [r, g, b] = [x, 0, c];
  } else {
    [r, g, b] = [c, 0, x];
  }
  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

  // 将 RGB 转为十六进制
  const red = r.toString(16).padStart(2, "0");
  const green = g.toString(16).padStart(2, "0");
  const blue = b.toString(16).padStart(2, "0");

  return `#${red}${green}${blue}`;
}