---
title: 'ทำ Custom Unmarshal ใน Go กันเถอะ!'
description: 'พาทำ Custom Unmarshal ใน Go'
pubDate: 'Aug 4 2021'
heroImage: '/20210804-lets-create-a-custom-unmarshal-in-go/placeholder.png'
tags: Go
---

## Custom Unmarshal คืออะไร? ทำไปเพื่ออะไร?

Custom Unmarshal คือ การที่เรา Implement ตัว JSON Unmarshal ของ Field นั้น ๆ เอง โดยจุดประสงค์โดยทั่วไป คือ เราอยากจะ Unmarshal แหละ แต่ว่าอยากจะเปลี่ยน Type ของบาง Field ไปเป็นอีก Type นึง

ยกตัวอย่างง่าย ๆ เช่น เรามี struct ของ Blog ที่มี Field ชื่อว่า Tags โดยเก็บ string เช่น "Golang, Custom Unmarshal, JSON" ไว้ แต่เราอยากได้มันเป็น []string{"Golang", "Custom Unmarshal", "JSON"} อะไรทำนองนี้

สมมุติว่าเรามี json ที่หน้าตาประมาณนี้

```json
{
  "thumbnailUrl": "https://assets.sujames.com/blogs/511a21c4-c923-42fd-996a-10c7ca114f77",
  "title": "ทำ Custom Unmarshal ใน Go กันเถอะ!",
  "tags": "Golang, Custom Unmarshal, JSON"
}
```

เขียน struct ได้ราว ๆ นี้

```go
type Blog struct {
	ThumbnailURL string `json:"thumnailURL"`
	Title        string `json:"title"`
	Tags         string `json:"tags"`
}
```

สมมุติเราอยากให้ Tags เป็น []string ไม่ใช่ string เราก็ต้องสร้างอีก struct มา (สมมุติชื่อ Blog2) แล้วทำการ unmarshal JSON to Blog -> marshal Blog -> Unmarshal Blog to Blog2

ซึ่ง Solutions แบบนึกไว ๆ บ้าน ๆ ก็คงมี

1. map struct ธรรมดา ๆ ไปเลย
2. Implement Custom Unmarshal ซึ่งก็มี 2 แบบอีกแหละ

ซึ่งหัวข้อก็บอกอยู่แล้วว่าเราจะมาทำ Custom Unmarshal กัน ก็ไปลุยกันเล้ยย

### แบบที่ 1: สร้าง type ใหม่ แล้วก็ Implement UnmarshalJSON เข้าไป

ก่อนอื่นสร้าง type ใหม่ที่เราต้องการ เพื่อที่จะทำการ Implement UnmarshalJSON ได้

```go
type Tags []string
```

แล้วก็ประกาศใน Struct ของ Blog ได้เลย

```go
type Blog1 struct {
	ThumbnailURL string `json:"thumbnailUrl"`
	Title        string `json:"title"`
	Tags         Tags   `json:"tags"`
}

type Tags []string
```

จากนั้นทำการ Implement UnmarshalJSON ให้ type Tag ของเรา

```go
func (t *Tags) UnmarshalJSON(data []byte) error {
	var tags string

	err := json.Unmarshal(data, &tags)
	if err != nil {
		return err
	}

	*t = strings.Split(tags, ", ")

	return nil
}
```

### แบบที่ 2: Implement UnmarshalJSON เข้าไปบน struct ที่เราต้องการเลย

สร้าง struct ใหม่ที่เราต้องการ

```go
type Blog2 struct {
	ThumbnailURL string   `json:"thumbnailUrl"`
	Title        string   `json:"title"`
	Tags         []string `json:"tags"`
}
```

แล้วก็ Implement เล้ย

```go
func (b *Blog2) UnmarshalJSON(data []byte) error {
	type blog struct {
		ThumbnailURL string `json:"thumbnailUrl"`
		Title        string `json:"title"`
		Tags         string `json:"tags"`
	}

	var blg blog

	err := json.Unmarshal(data, &blg)
	if err != nil {
		return err
	}

	b.ThumbnailURL = blg.ThumbnailURL
	b.Title = blg.Title
	b.Tags = strings.Split(blg.Tags, ", ")

	return nil
}
```

ทีนี้พอเรา Unmarshal ตัว Blog Request ก็จะได้ Field Tags เป็น []string แล้ว!

```go
func main() {
	blogJSON := `{
        "thumbnailUrl": "https://assets.sujames.com/blogs/511a21c4-c923-42fd-996a-10c7ca114f77",
        "title": "ทำ Custom Unmarshal ใน Go กันเถอะ!",
        "tags": "Golang, Custom Unmarshal, JSON",
    }`

	err := unmarshalBlog1([]byte(blogJSON))
	if err != nil {
		// handle error
	}

	err = unmarshalBlog2([]byte(blogJSON))
	if err != nil {
		// handle error
	}
}

func unmarshalBlog1(blogJSON []byte) error {
	var b Blog1

	err := json.Unmarshal(blogJSON, &b)
	if err != nil {
		return err
	}

	for i, t := range b.Tags {
		fmt.Printf("[blog1] at index %d: %s\n", i, t)
	}

	return nil
}

func unmarshalBlog2(blogJSON []byte) error {
	var b Blog2

	err := json.Unmarshal(blogJSON, &b)
	if err != nil {
		return err
	}

	for i, t := range b.Tags {
		fmt.Printf("[blog2] at index %d: %s\n", i, t)
	}

	return nil
}
```

ผลลัพธ์

```
[blog1]: at index 0: Golang
[blog1]: at index 1: Custom Unmarshal
[blog1]: at index 2: JSON
[blog2]: at index 0: Golang
[blog2]: at index 1: Custom Unmarshal
[blog2]: at index 2: JSON
```
