import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  BlogsIntro,
  BlogContainer,
  BlogDesc,
  BlogTitle,
} from "../styles/Blog.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Blogs: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      blogs.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      {/* <BlogsIntro>
        //COMMENT HERE.// <br></br>
      </BlogsIntro> */}
      {blogs.map(({ id, title, desc }) => (
        <BlogContainer key={id}>
          <BlogTitle>{`${id}. ${title}`}</BlogTitle>
          <BlogDesc>{desc}</BlogDesc>
        </BlogContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const blogs = [
  {
    id: 1,
    title: "Example Entry",
    desc: "My personal blog where I can write down my thoughts and experiences.",
    url: "https://andrewelawrence.com/blog/",
  }
//   {
//     id: 1,
//     title: "Example Entry",
//     desc: "My personal blog where I can write down my thoughts and experiences.",
//     url: "https://andrewelawrence.com/blog/",
//   },
];

export default Blogs;
