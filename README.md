<h1 align="center">Server chatbot bói toán</h1> <br>
<p align="center">Server API cung cấp thông tin bói toán từ ngày sinh</p>
<p align="center">
Dữ liệu lấy từ <b><a href="https://lichngaytot.com/can-xuong-tinh-so.html">Lịch Ngày tốt </a></b> cung cấp cho chatbot <b><a href="https://ahachat.com/">Achachat</a></b>
</p>

## Deploys

Dự án được deploy tại [**Glitch**](https://thirsty-grizzly-socks.glitch.me/api/canxuongtinhso)

## Samples

#### cURL

```bash
curl -X POST https://thirsty-grizzly-socks.glitch.me/api/canxuongtinhso -H "Content-Type: application/x-www-form-urlencoded" -d "date=19-12-2002&hour=M%C3%A3o"
```

#### JavaScript

```js
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  date: "19-12-2002",
  hour: "Mão",
});

var requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow",
};

fetch(
  "https://thirsty-grizzly-socks.glitch.me/api/canxuongtinhso",
  requestOptions
)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));
```

#### Python

```python
import http.client
import json

conn = http.client.HTTPSConnection("thirsty-grizzly-socks.glitch.me")
payload = json.dumps({
  "date": "19-12-2002",
  "hour": "Mão"
})
headers = {
  'Content-Type': 'application/json'
}
conn.request("POST", "/api/canxuongtinhso", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```
