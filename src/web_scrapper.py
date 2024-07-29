"""
- scrap price for metal, plastic, glass from the same website but different end points
- set up auto scrap once a day
- parse the scrapped price to each tab
"""
import requests
from bs4 import BeautifulSoup

def scrape_prices(url):
    # Send a GET request to the website
    response = requests.get(url)
    html_text = response.text
    
    print(html_text)

    # Check if the request was successful
    if response.status_code != 200:
        print(f"Failed to retrieve the web page. Status code: {response.status_code}")
        return

scrape_prices('https://www.scrapmonster.com/scrap-metal-prices/united-states')
#     # Parse the HTML content using BeautifulSoup
#     soup = BeautifulSoup(response.content, 'html.parser')

#     # Find the elements containing the prices
#     prices = []
#     for price_container in soup.find_all(class_='price-value'):  # You may need to adjust this selector
#         price = price_container.text.strip()
#         prices.append(price)
    
#     return prices

# if __name__ == "__main__":
#     url = 'https://iscrapapp.com/prices/'
#     prices = scrape_prices(url)
    
#     if prices:
#         print("Scraped Prices:")
#         for price in prices:
#             print(price)
#     else:
#         print("No prices found.")
