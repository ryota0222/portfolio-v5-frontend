import requests
import json

filename = "releases.json"

endpoint = "https://api.github.com/repos/ryota0222/portfolio-v5/releases"

# call request
print("🌟 Curl Github API")

res = requests.get(endpoint)

print("✅ Fetched Release Repos Data")

jsonData = res.json()

# Create and write json file
f = open(filename, "w+")
json.dump(jsonData, f, ensure_ascii=False, indent=4)
f.close()

print("✨ Finished!")
