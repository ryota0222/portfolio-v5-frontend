import { writeFileSync } from 'fs';

import Parser from 'rss-parser';

interface CustomItem {
  'media:thumbnail': string;
  image: string;
}

const parser = new Parser<unknown, CustomItem>({
  customFields: {
    item: [['media:thumbnail', 'image']],
  },
});

interface AssetItem {
  title?: string;
  content?: string;
  url?: string;
  date?: string;
  thumbnail?: string;
}
const rssFeed = {
  zenn: {
    label: 'Zenn',
    url: 'https://zenn.dev/ryota0222/feed',
  },
  qiita: {
    label: 'Qiita',
    url: 'https://qiita.com/ryotanny/feed',
  },
  note: {
    label: 'Note',
    url: 'https://note.com/ryotanny/rss',
  },
};

try {
  console.log('🌟 Fetch RSS');
  const jsonFeed: Record<string, AssetItem[]> = {};
  for (const [site, info] of Object.entries(rssFeed)) {
    // RSSのデータ取得
    const feed = await parser.parseURL(info.url);
    const items = feed.items.map((i) => {
      return {
        title: i.title,
        content: i.content,
        url: i.link,
        date: i.pubDate,
        thumbnail: i.enclosure?.url ?? i.image,
      };
    });
    // jsonFeedに格納
    jsonFeed[site] = items;
    console.log(`✅ Fetched ${info.label}`);
  }

  // static/rss.jsonに出力
  writeFileSync('./src/data/rss.json', JSON.stringify(jsonFeed));
} catch (err) {
  console.error(err);
}

console.log('✨ Finished!');
