# to get the pdf files or url
import requests 

# for tree traversal scraping in a webpage 
from bs4 import BeautifulSoup

# input and output operations 
import io 

# getting info from the PDFs
from pyPDF2 import PdfFileReader 

# website we want to scrap 
url = "https://www.irs.gov/pub/irs-pdf/i1040tt.pdf"

read = requests.get(url)
html_content = read.content 
soup = BeautifulSoup(html_content, "html.parser")
print(soup)