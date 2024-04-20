
# 确保脚本抛出遇到的错误
set -e
# 编译
# yarn install
yarn build

# google adsense
cp utils/ads.txt docs/.vuepress/dist
# 必应认证
cp utils/BingSiteAuth.xml docs/.vuepress/dist
cp utils/436d5778d83e4fdb99facd48b571b90d.txt docs/.vuepress/dist

# 同步
rsync -az -e 'ssh -p 2023' --exclude='learning-weekly.xml' --delete docs/.vuepress/dist/  \
    root@prod2.eryajf.net:/data/www/eryajf.github.io/

sleep 5

# 刷新
doge flush path -p "https://wiki.eryajf.net/"

# 更新检索的索引数据
ssh -p 2023 root@prod2.eryajf.net 'bash /data/project/meilisearch/scraper/wiki-do.sh'

# 生成周刊的 rss
ssh -p 2023 root@prod2.eryajf.net 'bash /data/scripts/genreate-rss.sh'