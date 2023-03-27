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
    favicon: 'https://zenn.dev/images/logo-transparent.png',
  },
  qiita: {
    label: 'Qiita',
    url: 'https://qiita.com/ryotanny/feed',
    favicon: 'https://cdn.qiita.com/assets/favicons/public/production-c620d3e403342b1022967ba5e3db1aaa.ico',
  },
  note: {
    label: 'Note',
    url: 'https://note.com/ryotanny/rss',
    favicon: 'https://assets.st-note.com/poc-image/manual/note-common-images/production/svg/production.ico',
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
        date: i.isoDate,
        thumbnail: i.enclosure?.url ?? i.image,
        favicon: info.favicon,
        site,
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
