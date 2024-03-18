import requests 
from bs4 import BeautifulSoup

url = "https://www.irs.gov/publications/p17#d0e50213"
page = requests.get(url).text

soup = BeautifulSoup(page, 'html.parser')
results = soup.find('tbody')

data = [] 

for row in results.find_all('tr'): 
    cols = row.find_all('td')
    if len(cols) == 0: 
        cols = row.find_all('th')

    cols = [ele.text.strip() for ele in cols]
    data.append([ele for ele in cols if ele]) #gets rid of empty values

print(data)

