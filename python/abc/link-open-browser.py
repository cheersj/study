# Open several Google search results
import requests
import webbrowser
import bs4

keyword = "computer programming"

num = 5

# res = requests.get('http://google.com/search?q=' + keyword)
# res = requests.get('https://www.sogou.com/web?query=' + keyword)
# res = requests.get('http://zhihu.sogou.com/zhihu?query=' + keyword)
res = requests.get('https://www.baidu.com/s?&wd=' + keyword)

res.raise_for_status()

# Retrieve top search result links.
soup = bs4.BeautifulSoup(res.text, "lxml")

# Open a browser tab for each result.
linkElems = soup.select('.r a')

numOpen = min(num, len(linkElems))
browser = webbrowser.get()
for i in range(numOpen):
    browser.open('http://baidu.com' + linkElems[i].get('href'))