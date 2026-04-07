"use client";

import Link from "next/link";
import { useState, FormEvent, useEffect } from "react";
import 侧栏栏 from "./components/侧栏";

export default function Home() {
  const [最新新闻, set最新新闻] = useState([
    {
      身份证: 1,
      标题: "红色沙漠启动日期公布",
      日期: "2026-03-19",
      类别: "公告",
      节选: "珍珠深渊正式宣布红色沙漠将于2026年3月19日（2026年3月20日中部标准时间）全球发售。【来源：珍珠深渊】"
    },
    {
      身份证: 2,
      标题: "红色沙漠预告视频发布",
      日期: "2024-12-13",
      类别: "游戏更新",
      节选: "珍珠深渊在TGA 2024发布了一段新的预览视频，展示了游戏的主角、开放世界以及核心玩法。【来源：珍珠深渊】"
    },
    {
      身份证: 3,
      标题: "红色沙漠蒸汽商店页面现已开放",
      日期: "2024-12-13",
      类别: "公告",
      节选: "红色沙漠Steam商店页面现已上线，玩家可以添加至愿望单，获取最新游戏资讯。【来源：珍珠深渊】"
    }
  ]);

  return (
    <div className="flex min-h-screen">
      <侧栏栏 />
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">红色沙漠维基</h1>
        <p className="text-lg mb-8">欢迎访问红色沙漠游戏综合维基网站</p>
        
        <h2 className="text-2xl font-semibold mb-4">最新新闻</h2>
        <div className="grid gap-4">
          {最新新闻.map((新闻) => (
            <div key={新闻.身份证} className="border p-4 rounded-lg">
              <h3 className="text-xl font-medium">{新闻.标题}</h3>
              <p className="text-sm text-gray-500">{新闻.日期} · {新闻.类别}</p>
              <p className="mt-2">{新闻.节选}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
