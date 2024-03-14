import tabula 
from tabula import read_pdf


#reads table from pdf file
file = "https://www.irs.gov/pub/irs-prior/i1040tt--2023.pdf"
file_path = "i1040tt--2023.pdf"
tabula.io(file, file_path)

df = read_pdf(file,pages="3-14") #address of pdf file
tabula.convert_into(file_path, "iris_first_table.csv", pages = "3-14")