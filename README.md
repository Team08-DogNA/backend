# ๐ถ ๋ฐ๋ ค๊ฒฌ ์ฌ์ง ๊ณต์  ์ปค๋ฎค๋ํฐ, Dogunity
<img width="1417" alt="Dogunity แแขแแฎแซ" src="https://user-images.githubusercontent.com/85475577/209555392-856b3c40-2acc-4ff7-bcdb-8a13a472d5b8.png">

<br/>

## ๐ ๊ฐ์
- ์๋น์ค๋ช: Dogunity
- ๊ฐ๋ฐ ๊ธฐ๊ฐ: 2022. 12. 05 ~ 2022. 12. 15
- API ๋ฌธ์: [๋ฐ๋ก ๊ฐ๊ธฐ](https://docs.google.com/spreadsheets/d/1XdrjOtKVlDG0ygvYMTHH1godDH44bpZUhKWLTbYaKog/edit?usp=sharing)
- ERD: [๋ฐ๋ก ๊ฐ๊ธฐ](https://www.erdcloud.com/d/i9wvFZpTQMp2rWBPh)

<br/>

## ๐ซ ํ ๊ตฌ์ฑ
- **Frontend** [๊น์คํธ](https://github.com/FoxMon)    
- **Backend** [์ฐ๋ค์๋ด](https://github.com/robinyeon)  

<br/>

## ๐ ์ฃผ์ ๊ธฐ๋ฅ
### 1๏ธโฃ ๋ฐ๋ ค๊ฒฌ ์ปค๋ฎค๋ํฐ  
๋ฐ๋ ค๊ฒฌ๊ณผ ๊ด๋ จ๋ ๋ค์ํ ์ปค๋ฎค๋ํฐ๋ฅผ ์์ฑํ๊ณ  ๊ด๋ จ ๊ฒ์๋ฌผ์ ๊ณต์ ํ  ์ ์๋ ์๋น์ค  
```
- ์ปค๋ฎค๋ํฐ 
    - ์ปค๋ฎค๋ํฐ ๋ชฉ๋ก ๋ถ๋ฌ์ค๊ธฐ (pagination)
    - ์ปค๋ฎค๋ํฐ ๋ง๋ค๊ธฐ
    - ์ปค๋ฎค๋ํฐ ์์ ํ๊ธฐ
    - ์ปค๋ฎค๋ํฐ ์ญ์ ํ๊ธฐ
    - ์ปค๋ฎค๋ํฐ ์ข์์, ์ข์์ ์ทจ์

- ์ปค๋ฎค๋ํฐ ๊ฒ์๋ฌผ
    - ์ปค๋ฎค๋ํฐ ํผ๋(๊ฒ์๋ฌผ ๋ชฉ๋ก) ๋ถ๋ฌ์ค๊ธฐ (pagination)
    - ๊ฒ์๋ฌผ ํ ๊ฐ ์ ๋ณด ๋ถ๋ฌ์ค๊ธฐ
    - ๊ฒ์๋ฌผ ์์ฑํ๊ธฐ
    - ๊ฒ์๋ฌผ ์์ ํ๊ธฐ
    - ๊ฒ์๋ฌผ ์ญ์ ํ๊ธฐ
    - ๊ฒ์๋ฌผ ์ข์์, ์ข์์ ์ทจ์

- ์ปค๋ฎค๋ํฐ ๊ฒ์๋ฌผ ๋๊ธ
    - ๋๊ธ ๋ถ๋ฌ์ค๊ธฐ
    - ๋๊ธ ์์ฑ
    - ๋๊ธ ์ญ์ 

- ์ด๋ฏธ์ง ์ฒ๋ฆฌ ๊ธฐ๋ฅ ๊ตฌํ
    - ์ปค๋ฎค๋ํฐ ๋๋ฌธ ์ฌ์ง ์๋ก๋ ๋ฐ ์์ 
    - ๊ฒ์๋ฌผ ์ด๋ฏธ์ง ์๋ก๋ ๋ฐ ์์ 
```

### 2๏ธโฃ ์ ์  ์๋น์ค
```
- ๋ก๊ทธ์ธ, ํ์๊ฐ์: Access token, Refresh token
```

### 3๏ธโฃ ๋ง์ดํ์ด์ง
```
- ๋ด๊ฐ ๋ง๋  ์ปค๋ฎค๋ํฐ ๋ชจ์๋ณด๊ธฐ
- ๋ด๊ฐ ์์ฑํ ๊ฒ์๋ฌผ ๋ชจ์๋ณด๊ธฐ
- ์ข์์ํ ์ปค๋ฎค๋ํฐ ๋ชจ์๋ณด๊ธฐ
- ์ข์์ํ ๊ฒ์๋ฌผ ๋ชจ์๋ณด๊ธฐ
- ์ ์  ์ ๋ณด ์์ 
```

<br/>

## ๐งฉ BackEnd

```
Version
    node v16.13.2

Library
    express
    jsonwebtoken
    multer-s3
    aws-sdk
    mysql2
    sequelize
    
    
Github
https://github.com/orgs/Team08-DogNA/repositories
```

<br/>

## ๐๏ธ ๋ฐฑ์๋ ํด๋ ๊ตฌ์กฐ

- config

  - sequelize

- models

  - community.model
  - communityComment.model
  - communityPost.model
  - communityPostLike.model
  - user.model
  - userCommunity.model
  - refreshToken.model
  
- services

  - auth.service
  - community.service
  - post.service
  - user.service
  
- controllers

  - auth.ctrl
  - community.ctrl
  - post.ctrl
  - user.ctrl
  
- routes

  - auth.route
  - community.route
  - post.route
  - user.route

- middlewares
  
  - error
  - tokenVerification
  - uploadImage

- utils

  - ApiError
  - constants

<br/>


## ๐ ํ์คํธ ๋ฐฉ๋ฒ

1. ํด๋น ํ๋ก์ ํธ๋ฅผ clone ํฉ๋๋ค.

   ```
   git clone https://github.com/Dogunity/frontend.git
   git clone https://github.com/Dogunity/backend.git
   ```

2. ํ๋ก์ ํธ ์คํ์ ํ์ํ ํจํค์ง๋ฅผ ์ค์นํฉ๋๋ค.

   ```
   cd front
   npm install

   cd back
   npm install
   ```

3. ํ๋ก ํธ์๋์ ๋ฐฑ์๋๋ฅผ ์คํํฉ๋๋ค.

   ```
   cd front
   npm run dev

   cd back
   npm start
   ```

<br/>

