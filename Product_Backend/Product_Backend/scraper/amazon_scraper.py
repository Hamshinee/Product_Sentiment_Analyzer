from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from bs4 import BeautifulSoup
import time

def amazon_reviews(product_name):

    options = webdriver.ChromeOptions()
    options.add_argument("--start-maximized")

    driver = webdriver.Chrome(
        service=Service(ChromeDriverManager().install()),
        options=options
    )

    url = "https://books.toscrape.com/"
    driver.get(url)

    time.sleep(3)

    soup = BeautifulSoup(driver.page_source, "html.parser")

    reviews = []

    books = soup.find_all("article", class_="product_pod")

    for book in books:
        title = book.h3.a["title"]
        price = book.find("p", class_="price_color").text

        reviews.append({
            "review": title,
            "rating": price
        })

    driver.quit()

    return reviews