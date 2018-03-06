# 网易云音乐批量下载
# By Saijun
# Python3.6.3 

import requests
import urllib3
# from urllib3.request import urlretrieve
# import requests

# 榜单歌曲批量下载
r = requests.get('http://music.163.com/api/playlist/detail?id=3778678')

arr = r.json()['result']['tracks']  

for i in range(10):             # 输入要下载的数量
    name = str(i+1) + ' ' + arr[i]['name'] + '.mp3'
    link = arr[i]['mp3Url']
    urllib3.request.RequestMethods(link, 'E\\' + name)  # 提前创建文件夹
    print(name + ' 下载完成')
   
  
# r = requests.get(url='http://www.baidu.com')    # 最基本的GET请求  
# print(r.status_code)    # 获取返回状态  
# #带参数的GET请求，http://dict.baidu.com/s?wd=python  
# r = requests.get(url='http://dict.baidu.com/s', params={'wd':'python'})     
# print(r.url)  
# print(r.text)   #打印解码后的返回数据  
