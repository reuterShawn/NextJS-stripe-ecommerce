
import React from 'react'
import Image from "next/image";
import { getCategorizedArticles } from "./(blog)/articles";
import ArticleItemList from "./components/ArticleListItem";

const page = () => {

    const articles = getCategorizedArticles()

  return (
    <><html></html><section className="mx-auto w-11/12 md:2-1/2 mt-20 flex flex-col gap-16">
      <header className="font-cormorantGaramond font-light text-6xl text-neutral-900 text-center">
        <h1>Board Game Blog</h1>
      </header>
      <section className="md:grid md:grid-col-2 flex flex-col gap-10">
        {articles !== null &&
          Object.keys(articles).map((article) => (
            <ArticleItemList
              category={article}
              articles={articles[article]}
              key={article} />
          ))}
      </section>
    </section></>
  )
}

export default page