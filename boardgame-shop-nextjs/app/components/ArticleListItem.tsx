import Link from "next/link"
import type  {ArticleItem} from "@/types"



interface Props {
    category: string
    articles: ArticleItem[]
}

const ArticleItemList = ({category, articles}: Props) => {
    return (
        <div>
            <h2 className="font-cormorantGaramond text-4xl">{category}</h2>
            <div className="flex flex-col gap-2.5 font-poppins text-lg">
                {articles.map((article, id) => (
                    <Link href={`/${article.id}`} key={id} className="text-neutral-800 hover:text-amber-700">
                        {article.title}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default ArticleItemList;