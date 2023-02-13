import datetime
import requests
import json

# filename
DIFF_JST_FROM_UTC = 9
date = datetime.datetime.now() + datetime.timedelta(hours=DIFF_JST_FROM_UTC)
today = "{:%Y-%m-%d}".format(date)
filename = today + '.json'

# endpoint
url = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://portfolio.ryotanny.com&locale=ja&category=performance&category=seo&category=accessibility"

# call request
print('🌟 Curl PageSpeed Insights API')

res = requests.get(url)

print('✅ Fetched PageSpeed Insights Data')

# convert response to JSON
jsonData = res.json()

# shape
jsonfile = {}

jsonfile["kind"] = jsonData["kind"]
jsonfile["id"] = jsonData["id"]
jsonfile["lighthouseResult"] = {}
jsonfile["lighthouseResult"]["lighthouseVersion"] = jsonData["lighthouseResult"]["lighthouseVersion"]
jsonfile["lighthouseResult"]["userAgent"] = jsonData["lighthouseResult"]["userAgent"]
jsonfile["lighthouseResult"]["fetchTime"] = jsonData["lighthouseResult"]["fetchTime"]
jsonfile["lighthouseResult"]["environment"] = jsonData["lighthouseResult"]["environment"]
performance = jsonData["lighthouseResult"]["categories"]["performance"]
accessibility = jsonData["lighthouseResult"]["categories"]["accessibility"]
seo = jsonData["lighthouseResult"]["categories"]["seo"]

performanceAuditRefs = list(filter(lambda obj: obj["weight"] != 0, performance["auditRefs"]))
accessibilityAuditRefs = list(filter(lambda obj: obj["weight"] != 0, accessibility["auditRefs"]))
seoAuditRefs = list(filter(lambda obj: obj["weight"] != 0, seo["auditRefs"]))

jsonfile["lighthouseResult"]["performance"] = {
    "id":performance["id"],
    "title": performance["title"],
    "score": performance["score"],
    "auditRefs": performanceAuditRefs
}

jsonfile["lighthouseResult"]["accessibility"] = {
    "id":accessibility["id"],
    "title": accessibility["title"],
    "description": accessibility["description"],
    "manualDescription":accessibility["manualDescription"],
    "score": accessibility["score"],
    "auditRefs": accessibilityAuditRefs
}

jsonfile["lighthouseResult"]["seo"] = {
    "id":seo["id"],
    "title": seo["title"],
    "description": seo["description"],
    "manualDescription":seo["manualDescription"],
    "score": seo["score"],
    "auditRefs": seoAuditRefs
}

# Create and write json file
f = open(filename, "w+")
json.dump(jsonfile, f, ensure_ascii=False, indent=4)
f.close()

print('✨ Finished!')