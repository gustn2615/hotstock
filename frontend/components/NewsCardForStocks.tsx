import { StockNews } from "@/types";

interface StockNewsProps {
  news: StockNews;
}

const NewsCardForStocks = ({ news }: StockNewsProps) => {
  const { title, link, description, pubDate } = news;

  // const newtitle = title
  //   .replace(/(<([^>]+)>)/gi, "")
  //   .replace(/&amp;/g, "&")
  //   .replace(/&lt;/g, "<")
  //   .replace(/&gt;/g, ">")
  //   .replace(/&quot;/g, '"');

  // const newdescription = description
  //   .replace(/(<([^>]+)>)/gi, "")
  //   .replace(/&amp;/g, "&")
  //   .replace(/&lt;/g, "<")
  //   .replace(/&gt;/g, ">")
  //   .replace(/&quot;/g, '"');

  // console.log(newtitle);

  return (
    <div>
      <div className="rounded-md my-3 border-2 border-gray-300 p-4">
        <a target="_blank" href={link} className="font-bold pr-2 truncate">
          {title}
        </a>
        {/* <div className="text-xs">{companyName}</div> */}
        <div>{description}</div>
      </div>
    </div>
  );
};

export default NewsCardForStocks;
