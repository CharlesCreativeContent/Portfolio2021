"""
Google Indexing API submission script.
Reads sitemap.xml and submits blog post URLs to Google for indexing.

Requires env var: GOOGLE_INDEXING_SA_KEY (service account JSON as a string)
"""

import json
import os
import sys
import xml.etree.ElementTree as ET

import google.auth.transport.requests
from google.oauth2 import service_account

SCOPES = ["https://www.googleapis.com/auth/indexing"]
INDEXING_API_URL = "https://indexing.googleapis.com/v3/urlNotifications:publish"
SITEMAP_PATH = "sitemap.xml"

# Only submit URLs that look like blog posts (not homepage, about, etc.)
BLOG_PATH_PREFIX = "https://shawncharles.com/blog/"


def get_credentials():
    raw = os.environ.get("GOOGLE_INDEXING_SA_KEY")
    if not raw:
        print("ERROR: GOOGLE_INDEXING_SA_KEY environment variable is not set.")
        sys.exit(1)
    sa_info = json.loads(raw)
    return service_account.Credentials.from_service_account_info(sa_info, scopes=SCOPES)


def get_blog_urls(sitemap_path):
    tree = ET.parse(sitemap_path)
    root = tree.getroot()
    ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    all_urls = [loc.text.strip() for loc in root.findall(".//sm:loc", ns)]
    blog_urls = [u for u in all_urls if u.startswith(BLOG_PATH_PREFIX)]
    return blog_urls


def submit_url(session, url):
    body = {"url": url, "type": "URL_UPDATED"}
    response = session.post(INDEXING_API_URL, json=body)
    return response


def main():
    credentials = get_credentials()
    authed_session = google.auth.transport.requests.AuthorizedSession(credentials)

    urls = get_blog_urls(SITEMAP_PATH)
    if not urls:
        print("No blog URLs found in sitemap.xml — nothing to submit.")
        sys.exit(0)

    print(f"Submitting {len(urls)} URL(s) to Google Indexing API...\n")

    success = 0
    failed = 0

    for url in urls:
        response = submit_url(authed_session, url)
        if response.status_code == 200:
            print(f"  ✓  {url}")
            success += 1
        else:
            print(f"  ✗  {url}")
            print(f"     Status {response.status_code}: {response.text}")
            failed += 1

    print(f"\nDone. {success} submitted, {failed} failed.")

    if failed > 0:
        sys.exit(1)


if __name__ == "__main__":
    main()
