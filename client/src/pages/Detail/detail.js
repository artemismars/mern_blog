import { Avatar, Button, Input, List } from "antd";
import React from "react";
import Nav from "../../components/Nav/nav";
import styles from "./detail.module.css";
const Detail = () => {
  const data = [
    {
      title: "Ant Design Title 1",
    },
    {
      title: "Ant Design Title 2",
    },
    {
      title: "Ant Design Title 3",
    },
    {
      title: "Ant Design Title 4",
    },
  ];
  return (
    <div className={styles.container}>
      <Nav />
      <div>
        <div>
          <h1>포스트 제목</h1>
          <span>수정</span>
          <span>제목</span>
          <img src="/image/avatar/default.png" alt="postImage" />
          <p>원장은 국회의 동의를 얻어 대통령이 임명하고...</p>
          <h3>댓글</h3>
          <div>
            <List
              itemLayout="horizontal"
              dataSource={data}
              renderItem={(item) => (
                <List.Item>
                  <img
                    style={{ width: "5em" }}
                    src="/image/avatar/default.png"
                    alt="othersavatar"
                  />
                  <List.Item.Meta
                    title={<a>{item.title}</a>}
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                  />
                </List.Item>
              )}
            />

            <Input type="text" />
            <Button>작성</Button>
          </div>
        </div>
        <div>
          <h3>댓글</h3>
          <div
            style={{
              width: "10em;",
              backgroundColor: "red",
            }}
          >
            <p>카테고리</p>
            <h1>포스팅</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
