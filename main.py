import requests
import pandas as pd
from bs4 import BeautifulSoup

res = requests.get('https://42tokyo.jp/sponsors/')
soup = BeautifulSoup(res.content, 'html.parser')

df = pd.DataFrame()
name_list = []
summary_list = []
url_list = []

for name in soup.select('li._1Edd5qXuKSBNX7mwgRvEET'):
    try:
        name_list.append(name.find('img')['alt'])
        summary_list.append(name.find('p').get_text())
        url_list.append(name.find('a')['href'])
        # print(name.find('a')['href'])
    except TypeError as e:
        url_list.append("")

df["name"] = name_list
df["summary"] = summary_list
df["url"] = url_list

print(df.head())