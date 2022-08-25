
# PinterestFE

항해99 8기 7주차 5조 프론트엔트 레포지토리입니다.

## 팀원

| 성함 | GitHub | 
| :-- | :-- |
| 이민영 |  |
| 문창용 | [@cmun2](https://github.com/cmun2) |  
| 조영은 | [@yeun38](https://github.com/yeun38) |  

## 프로젝트 시연사진

### 진입페이지
- full-page-scroll
![index-1png](https://user-images.githubusercontent.com/86697114/186668791-a90ec299-0b87-40e3-83b1-17e332ffa026.png)
![index-2](https://user-images.githubusercontent.com/86697114/186668925-ecee634a-2b8e-4fbc-b2b7-c1573ffb1a8d.png)

### 메인페이지
- 전체조회
![main pn](https://user-images.githubusercontent.com/86697114/186670703-dc79d1fd-e7ee-4bca-90c7-df8b13eecebd.png)
- 게시글 작성
![upload](https://user-images.githubusercontent.com/86697114/186676715-e39de097-0954-4008-9336-4548d856f758.png)


### 디테일 페이지
- 게시글 상세 페이지
![detail](https://user-images.githubusercontent.com/86697114/186676249-2fed4c64-2615-42e9-9fa5-d92c8b588553.png)
- 댓글 상세 페이지
![detail-comment](https://user-images.githubusercontent.com/86697114/186676200-0b5e742b-c899-46c6-9e4d-59f3d80a5bcc.png)
- 게시글 수정 페이지
![detail-update](https://user-images.githubusercontent.com/86697114/186668986-3806db89-105e-4f78-ad02-8f2f315d3698.png)

### comment

```jsx
commentId  : number
userId     : number
pinId      : number
content    : string
createdAt  : Date

`localhost:3000/api/pin?page=${1}&pageCount=${10}`
```

### Response Form

```jsx
isSuccess : boolean
message   : string
result    : object
```

```jsx
{
  isSuccess: true,
  message: '',
  result: {
  }
}
```

### JWT Error `JWT 에러 존재`

```jsx
//  JWT 토큰이 필요한 도메인에서는 다음의 에러가 발생할 수 있습니다.
{
  isSuccess: false,
  message: “토큰이 필요합니다.” || “만료된 토큰입니다.” || “유효하지 않은 토큰입니다.” || err.message,
  result: {}
}
```
![api1](https://user-images.githubusercontent.com/109029407/186673278-dbdc7f9d-6ead-43e9-9806-214d23aab847.png)
![api2](https://user-images.githubusercontent.com/109029407/186673294-15ff396f-5fda-4c1e-bd1a-470202c62450.png)
![api3](https://user-images.githubusercontent.com/109029407/186673307-bf4459be-2991-458e-b7b4-1b0c9a4021d1.png)
![api4](https://user-images.githubusercontent.com/109029407/186673316-bede57f3-a31a-4fd2-9e2c-d5eb0631a175.png)
![api5](https://user-images.githubusercontent.com/109029407/186673330-8596d943-6e45-43ab-bdf6-baf0053db1aa.png)

## 트러블 슈팅(Trouble Shooting)
